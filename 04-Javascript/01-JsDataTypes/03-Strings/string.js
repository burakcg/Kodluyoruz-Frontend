let name1 = "Burak";
let name2 = "CG";
let fullName = name1 + " " + name2;
console.log(fullName);
counter = 0;
while (counter < fullName.length) {
console.log(fullName[counter]);
counter++;
}


//String Methods

console.log(fullName.toUpperCase());
console.log("G'nin bulunduğu index:" + fullName.indexOf('G'));

let randomString = name1 + "BCG" + name2;
console.log(randomString , "B'nin bulunduğu son index:" + randomString.lastIndexOf('B'));

let nameSlice = randomString.slice(0,5);
console.log("name slice:" , nameSlice);

let replaceName = fullName.replace('C', "Can ");
console.log(replaceName);