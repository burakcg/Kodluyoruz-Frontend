const content = document.querySelector(".error");
//console.log(content.classList);
content.classList.add("rnd");
content.classList.remove("error");

const pTags = document.querySelectorAll('p');
console.log(pTags);
const changeClass = (pTags) => {
    pTags.forEach(p =>{
    //console.log(p);
    if (p.innerText.toLowerCase().includes("error")) {
        p.classList.add("error");
    }
    else if(p.innerText.toLowerCase().includes("success")) {
        p.classList.add("success");
    }
})
}
changeClass(pTags);