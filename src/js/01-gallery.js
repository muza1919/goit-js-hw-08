// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описаний в документації
// import SimpleLightbox from "simplelightbox";
// // Додатковий імпорт стилів
// import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

const gallery = document.querySelector('.gallery');
gallery.style.listStyle = "none";

const markupLightbox = galleryItems
.map(({ preview, original, description }) => 
`<li><a href="${original}" class="gallery__item">
    <img src="${preview}" data-source = "${original}" alt="${description}" class="gallery__image">
</a></li>`)
.join('');
gallery.insertAdjacentHTML('beforeend', markupLightbox);

new SimpleLightbox(".gallery a", {
    captionsData: `alt`,
    captionDelay: `250`,
  captionPosition: `bottom`
});