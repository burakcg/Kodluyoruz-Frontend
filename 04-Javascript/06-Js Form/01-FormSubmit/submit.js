const form = document.querySelector(".singupForm");
const username = document.querySelector("#username");

form.addEventListener("submit", e =>{  // Submit eventi forma verilir. (inputa değil) enter'a basıldığında aksiyon alması için
    e.preventDefault();
    // console.log("form gönderildi.");
    // console.log(username.value);
    console.log(form.UserName.value);
});
