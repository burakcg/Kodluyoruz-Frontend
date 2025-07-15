const form = document.querySelector(".singupForm");
const pattern = /^[a-z]{6,10}$/;  // başlangıç ve bitiş küçük harf "^" "$" 

form.addEventListener("submit", e =>{
 e.preventDefault();   
 let result = pattern.test(form.UserName.value);
 console.log(result);
});

form.addEventListener("submit", e =>{
 e.preventDefault();   
 let result = form.UserName.value.search(pattern);
 console.log(result);
});

