localStorage.setItem("name", "ali");
localStorage.setItem("age", 23);

let ad = localStorage.getItem("name");
let yas = localStorage.getItem("age");
console.log(ad);
console.log(yas);

//Update
localStorage.setItem("name", "ali can");
localStorage.age = 30;

ad = localStorage.getItem("name");
yas = localStorage.getItem("age");

console.log(ad);
console.log(yas);
