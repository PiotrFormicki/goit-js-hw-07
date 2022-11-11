import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

//forEach dla każdego elemenetu tablicy gallery items
//Tworzę "pseudo-liste", moim zdaniem powinno być to zebrane w ul a nie jako kilka divow
function galleryCreation() {
  galleryItems.forEach((image) => {
    // for (const image in galleryItems) {
    let galleryItem = document.createElement("div");
    let itemSrc = document.createElement("a");
    let galleryImg = document.createElement("img");
    //dodanie klas i atrybutów do każdego child'a
    galleryItem.classList.add("gallery__item");
    galleryImg.classList.add("gallery__image");
    itemSrc.classList.add("gallery__link");
    galleryImg.setAttribute(`src`, `${image.preview}`);
    galleryImg.setAttribute(`alt`, `${image.description}`);
    galleryImg.setAttribute(`data-source`, `${image.original}`);
    galleryImg.style.borderRadius = 3 + `px`;
    //utworzenie "drzewa"
    gallery.appendChild(galleryItem);
    galleryItem.appendChild(itemSrc);
    itemSrc.appendChild(galleryImg);
    // dodanie atrybutów do img
  });
}
galleryCreation();
//lightbox
let instance;
gallery.addEventListener("click", (lightboxEvent) => {
  if (lightboxEvent.target.tagName.toLowerCase() !== "img") {
    alert`Click on image to enter full-screen mode`;
    return;
  }
  let targetElement = lightboxEvent.target.getAttribute(`data-source`);
  instance = basicLightbox.create(`<img src="${targetElement}">`);
  instance.show();
});
document.addEventListener("keydown", (lightboxEvent) => {
  // console.log(`casual check`);
  if (lightboxEvent.code == "Escape" && instance.visible()) instance.close();
});
