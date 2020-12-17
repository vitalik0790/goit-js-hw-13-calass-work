const BASE_URL = 'https://pixabay.com/api/';

const fetchImages = (query, page, API_KEY) => {
    const URL = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`;
    return fetch(URL)
        .then(response => response.json())
        .then(data => {
            return data.hits;
        })

}
export default fetchImages;
