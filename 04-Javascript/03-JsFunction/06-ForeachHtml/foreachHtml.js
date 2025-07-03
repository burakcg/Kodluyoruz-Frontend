const ul1 = document.querySelector(".main");

let students = ["ali", "veli", "hakan"];

let html =``;

students.forEach((student, id) =>{
    html += `<li>${id}-${student}</li>`;
})

ul1.innerHTML = html;