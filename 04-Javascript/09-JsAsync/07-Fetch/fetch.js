//JSON dosyadan veri çekmek
fetch("settings.json")
    .then(response => response.json()) //settings.json dosyasının içeriğini görmek istiyorsanız, response.json() kullanmalısınız.
    .then(responseJson =>{
        console.log(responseJson);
        console.log(responseJson.userName);
})

let userListDOM = document.querySelector("#userList");
//API üzerinden veri çekmek
fetch("https://jsonplaceholder.typicode.com/postss")
  .then(response =>{
    if(response.status !== 200){
        throw new Error(`Doğru endpointe istek atmadınız ${response.status}`);
    }
  })
  .then(response => response.json())
  .then(json => json.forEach(element => {
      let liDOM = document.createElement("li");
      liDOM.innerHTML = element.title;
      userListDOM.append(liDOM);
}))
  .catch(err =>{
    let errMessage = document.querySelector("h1");
    errMessage.innerHTML = err.message;
  });