const getTodos = async () => {
    let response = await fetch("../05-CallbackProblem/json/ahmet.json")

    if(response.status !== 200){
        throw new Error("Doğru endpointe istek atmadınız");
    }

    const data = await response.json();
    return data;
}

getTodos()
    .then((response) =>{
        console.log(response);
    })
    .catch(err =>{
        console.log(err.message);
    })