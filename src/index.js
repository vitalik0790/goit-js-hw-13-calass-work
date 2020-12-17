import './styles.scss';
import fetchImages from './js/apiService';
import { updateMarkup } from './js/addToMarkup';
import { refs } from './js/refs';



const API_KEY = '19535506-9e76d01e5d644620db638e0a4';
// fetchImgafes('cat', 2, API_KEY);
let inputValue = '';
let page = 1;

const getFormSubmit = (event) => {
    event.preventDefault();
    refs.galleryList.innerHTML = '';
    inputValue = event.target.elements.query.value;

    if (inputValue.length > 1) {
        fetchImages(inputValue, page, API_KEY).then(images => {
            // console.log(images)
            updateMarkup(images)
        }).catch(err => console.log(err))
    }
};

const loadMoreImages = () => {
    page += 1;
    fetchImages(inputValue, page, API_KEY)
        .then(images => {
            console.log(images)
            updateMarkup(images)
        }).catch(err => console.log(err))
}

refs.form.addEventListener('submit', getFormSubmit);
refs.btnLoad.addEventListener('click', loadMoreImages)