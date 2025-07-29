localStorage.setItem("name", "ali");
localStorage.setItem("age", 23);

let ad = localStorage.getItem("name");
let yas = localStorage.getItem("age");
console.log(ad);
console.log(yas);

// ad = localStorage.removeItem("name");
localStorage.clear();

ad = localStorage.getItem("name");
yas = localStorage.getItem("age");
console.log(ad,yas);
