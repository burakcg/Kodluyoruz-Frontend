const mainPopup = document.querySelector(".main-popup");
const button = document.querySelector(".btn");
const popupClose = document.querySelector(".popup-close");

button.addEventListener("click", e =>{
    mainPopup.style.display = "block";
});

popupClose.addEventListener("click", e =>{
    mainPopup.style.display = "none";
})

mainPopup.addEventListener("click", e =>{
        mainPopup.style.display = "none";
})

