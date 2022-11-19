import { galleryItems } from "./gallery-items.js";
// Change code below this line
const refs = {
  gallery: document.querySelector(".gallery"),
};

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`;
    })
    .join("");
}
refs.gallery.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));

const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  overlayOpacity: 0.8,
});
preventDefault();
