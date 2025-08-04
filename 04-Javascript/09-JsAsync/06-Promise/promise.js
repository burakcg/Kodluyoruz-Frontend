const getTodos = (resource) => {

return new Promise((resolve,reject) =>{

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', ()=>{
    
    if(request.readyState === 4 && request.status ===200){
        const data = JSON.parse(request.responseText)
        // callback(undefined, data);
        resolve(data);
    }
    else if(request.readyState === 4){
        //callback("Başarılı cevap alamadık!", undefined);
        reject("Başarılı cevap alamadık!");
    }
})

request.open("GET", resource);
request.send();
    
})

}

getTodos("../05-CallbackProblem/json/ahmet.json")
.then(data =>{
    console.log("promise 1" ,data);
    return getTodos("../05-CallbackProblem/json/ali.json")
})
.then(data =>{
    console.log("promise 2" ,data);
    return getTodos("../05-CallbackProblem/json/veli.json")
})
.then(data =>{
    console.log("promise 3" ,data);
})
.catch(err =>{
    console.log(err);
});

// const getIt = () =>{
//     return new Promise((resolve, reject) =>{
//        // resolve("Başarılı Data");
//         reject("Başarısız Data");
//     })
// }

// getIt().then(
//     data => {
//         console.log("Başarılı",data);
// },
//     err => {
//         console.log("Başarısız",err);
// })


// getIt()
// .then(data => {
//     console.log("Başarılı",data);
// })
// .catch(err =>{
//     console.log("Başarısız", err);
// })