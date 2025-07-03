const password = "albkAjbfwuıqbqawdfe!enfj"
let control;

if(password.length >= 8 && password.length <= 24){
    control = true;
    if(password.length > 20 && password.includes('!',',','.',12) && /[A-Z]/.test(password)){
        
        console.log("güçlü şifre");
        // includes('!',',','.',12) 12 aramanın başlayacağı index.
        //  /[A-Z]/.test(password) ile büyük harf kontrolü yapıldı.
        
        // counter = 0;
        // while(counter < password.length){
        //     if(password[counter] === password[counter].toUpperCase()){
        //         console.log("güçlü şifre");
        //         break;
        //     }
        //     else{
        //         counter++;
        //     }
        // }
    }
    else if(password.length > 16 && password.length < 20){
        console.log("normal şifre");
    }
    else{
        console.log("zayıf şifre");
    }
}
else{
    control = false;
    
}
if(!control){
    console.log("şifre uzunluğu belirtilen aralıkta değil.");
}
else{
    console.log(`şifre onaylandı. uzunluk:${password.length}`);
}