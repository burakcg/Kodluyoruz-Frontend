const request = new XMLHttpRequest();

request.addEventListener('readystatechange', ()=>{
    //console.log(request, request.readyState);
    if(request.readyState === 4 && request.status === 200){
        console.log(request.status,"Başarılı");
        console.log(request.responseText);
    }
    else if(request.readyState === 4){
        console.log(request.status,"Başarılı cevap alamadık.");
    }
})

request.open("GET", "https://jsonplaceholder.typicode.com/todos"); //todos 200 başarılı
// request.open("GET", "https://jsonplaceholder.typicode.com/todoss");  // todoss 404 başarısız.
request.send();
