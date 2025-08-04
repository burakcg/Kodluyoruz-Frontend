const getTodos = (resource ,callback) => {

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', ()=>{
    
    if(request.readyState === 4 && request.status ===200){
        const data = JSON.parse(request.responseText)
        callback(undefined, data);
    }
    else if(request.readyState === 4){
        
        callback("Başarılı cevap alamadık!", undefined);
    }
})

request.open("GET", resource);
request.send();

}

getTodos("json/ahmet.json" ,(err, data)=>{
    console.log(data);
    getTodos("json/ali.json" ,(err, data)=>{
        console.log(data); 
});
    getTodos("json/veli.json" ,(err, data)=>{
        console.log(data); 
});
});