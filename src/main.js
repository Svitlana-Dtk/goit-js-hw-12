import iziToast from 'izitoast';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

let page = 1;
let currentQuery = '';
let totalPages = 0;


async function loadImages() {
  try {
    showLoader();

    const data = await getImagesByQuery(currentQuery, page);
    const images = data.hits;

    if (page === 1 && images.length === 0) {
      hideLoadMoreButton();
      iziToast.error({
        message: 'Sorry, there are no images matching your search query.',
        position: 'topRight',
      });
      return;
    }

    createGallery(images);

    totalPages = Math.ceil(data.totalHits / 15);

    if (page >= totalPages) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      showLoadMoreButton();
    }

    page += 1;

    smoothScroll();
  
  } catch (error) {
    console.error(error);
  } finally {
    hideLoader();
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();

  currentQuery = event.target.elements['search-text'].value.trim();
  if (!currentQuery) return;

  page = 1;               
  clearGallery();
  hideLoadMoreButton();

  loadImages();
  form.reset();
});

loadMoreBtn.addEventListener('click', loadImages);

function smoothScroll() {
  const card = document.querySelector('.gallery-item');
  if (!card) return;

  const { height } = card.getBoundingClientRect();

  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}
