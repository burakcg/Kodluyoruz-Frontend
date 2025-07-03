const names = ["ali", "veli", "can"];
let counter = 0;
while(counter < names.length){
    console.log(names[counter]);
    counter++;
}

do{
    counter--;
    console.log(names[counter]);
}while(0 < counter && counter < names.length)
