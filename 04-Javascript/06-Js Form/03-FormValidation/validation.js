const form = document.querySelector(".singupForm");
const messageContent = document.querySelector(".message-content");
const message = document.querySelector(".message");
const messageClose = document.querySelector(".message-close");
const pattern = /^[a-z]{6,10}$/;


form.addEventListener("submit", e =>{
    e.preventDefault();
    
    const username = form.UserName.value;
    let result = pattern.test(username);

    if(result) {
        messageContent.innerHTML = `Kayıt Başarılı... Kullanıcı Adınız:${username}`;
        messageContent.style.color = "green";
        message.style.display ="block";
    }
    else{
        messageContent.innerHTML = `Lütfen hepsini küçük harf ve 6 ile 12 karakter arasında giriniz.`;
        messageContent.style.color = "red";
        message.style.display ="block";
    }
});

messageClose.addEventListener("click", e =>{
    message.style.display ="none";
});

form.UserName.addEventListener("click", () =>{
    message.style.display ="none";
})
form.UserName.addEventListener("keyup", e =>{
    if(pattern.test(e.target.value)){
        form.UserName.setAttribute("class", "success");
        //form.UserName.style.color = "green"
    }
    else{
       form.UserName.setAttribute("class", "error");
       //form.UserName.style.color = "red"
    }
});