import { refs } from './refs';
import imageCard from '../template/imageCard.hbs';

export const updateMarkup = (images) => {
    const markup = imageCard(images);
    refs.galleryList.insertAdjacentHTML('beforeend', markup);
}

