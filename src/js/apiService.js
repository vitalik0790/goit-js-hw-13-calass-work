const BASE_URL = 'https://pixabay.com/api/';

const fetchImgafes = (query, page, API_KEY) => {
    const URL = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`;
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            return data.hits;
        })
    // .catch(err => console.log(err))
}

export default fetchImgafes;
