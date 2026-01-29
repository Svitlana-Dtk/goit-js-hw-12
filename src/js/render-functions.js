// //Ця функція повинна приймати масив images, створювати HTML-розмітку для галереї,
// // додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh().
// // Нічого не повертає.
// createGallery(images)

// //Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.
// clearGallery()

// //Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.
// showLoader()

// //Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.
// hideLoader()

// showLoadMoreButton().
//  Ця функція нічого не приймає, повинна додавати клас для відображення кнопки Load more.
//  Нічого не повертає.
// hideLoadMoreButton(). 
// Ця функція нічого не приймає, повинна прибирати клас для відображення кнопки Load more. 
// Нічого не повертає.


import SimpleLightbox from 'simplelightbox';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" />
        </a>
        <ul class="image-info">
          <li class="info-point">
            <p class="info-descr"> Likes </p>
            <p class="info-value">${likes}</p>
          </li>
           <li class="info-point">
            <p class="info-descr"> Views </p>
            <p class="info-value">${views}</p>
           </li>
           <li class="info-point">
            <p class="info-descr"> Comments </p>
            <p class="info-value">${comments}</p>
           </li>
           <li class="info-point">
           <p class="info-descr"> Downloads </p>
           <p class="info-value">${downloads}</p>
           </li>
        </ul>
      </li>
    `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('is-hidden');
}

export function hideLoader() {
  loader.classList.add('is-hidden');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('is-hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('is-hidden');
}
