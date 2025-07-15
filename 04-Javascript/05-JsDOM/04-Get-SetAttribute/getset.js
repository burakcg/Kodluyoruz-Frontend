// change link and link-text
const link = document.querySelector(".fontLink");
console.log(link.getAttribute("href"));
link.setAttribute("href","https://www.w3schools.com/icons/icons_reference.asp");
link.textContent = "w3 fonts";

const pTag = document.querySelector('p');
console.log(pTag.getAttribute("class"));

pTag.setAttribute("class", "error");
console.log(pTag.getAttribute("class"));

pTag.setAttribute("style", "color:blue");
console.log(pTag.getAttribute("style"));




