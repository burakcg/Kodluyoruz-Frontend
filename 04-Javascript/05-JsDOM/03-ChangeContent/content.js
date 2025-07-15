const pTag = document.querySelector('p');
console.log(pTag.innerText);

pTag.innerText = "Gri";
console.log(pTag.innerText);

const pTags = document.querySelectorAll('p');
pTags.forEach(p =>{
    console.log(p.innerText);
})

const content = document.querySelector(".content");
console.log(content.innerHTML);

content.innerHTML += "<h2>Vue JS, React JS, Angular JS</h2>"

const students = ["burak", "ali", "veli"];

students.forEach(student =>{
    content.innerHTML += `<p>${student}</p>`
})