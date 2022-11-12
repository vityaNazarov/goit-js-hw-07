import { galleryItems } from "./gallery-items.js";
// Change code below this line
const instance = basicLightbox.create(
  `
<div class="modal">
      <img src="" alt="">
    </div>
`
);

const refs = {
  gallery: document.querySelector(".gallery"),
  source: instance.element().querySelector("img"),
};

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}
refs.gallery.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));

function closeModal(evt) {
  if (evt.code === "Escape") {
    instance.close();
    return window.removeEventListener("keydown", closeModal);
  }
}

function galleryView(evt) {
  evt.preventDefault();
  if (evt.target.nodeName === "IMG") {
    evt.target.src = evt.target.dataset.source;
    refs.source.src = evt.target.dataset.source;
    refs.source.alt = evt.target.alt;
    window.addEventListener("keydown", closeModal);
    return instance.show();
  }
}

refs.gallery.addEventListener("click", galleryView);
