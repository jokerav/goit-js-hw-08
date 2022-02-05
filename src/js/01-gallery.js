import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
createGalleryMarkup();

function createGalleryMarkup() {
  galleryItems.map(img => {
    gallery.insertAdjacentHTML(
      'beforeend',
      `<a class="gallery__item" href=${img.original}>
  <img class="gallery__image" src=${img.preview} alt=${img.description} />
</a>`,
    );
  });
}
let lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionDelay: '--animation-duration',
});
