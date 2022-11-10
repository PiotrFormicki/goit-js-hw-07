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
gallery.addEventListener("click", (lightboxEvent) => {
  if (lightboxEvent.target.tagName.toLowerCase() !== "img") {
    alert`Click on image to enter full-screen mode`;
    return;
  }
  let targetElement = lightboxEvent.target.getAttribute(`data-source`);
  let instance = basicLightbox.create(`<img src="${targetElement}">`);
  instance.show();

  document.addEventListener("keydown", (lightboxEvent) => {
    // if (lightboxEvent.code !== "Escape" && instance.visible()) {
    //   alert`Press ESC to leave full-screen mode`;
    // } else if (lightboxEvent.code == "Escape" && instance.visible())      //Można łatwiej - świetna jest ta metoda :D
    //   instance.close();
    lightboxEvent.code == "Escape" && instance.visible()
      ? instance.close()
      : alert`Press ESC to leave full-screen mode`;
  });
});
