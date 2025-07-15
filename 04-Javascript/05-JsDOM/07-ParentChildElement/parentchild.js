const section = document.querySelector("section");
console.log(section.children);
console.log(Array.from(section.children));

Array.from(section.children).forEach(child =>{
    child.classList.add("section-element")   // add class
})

const head = document.querySelector("h2");
console.log(head.parentElement);
console.log(head.parentElement.parentElement);
console.log(head.nextElementSibling);
console.log(head.previousElementSibling);