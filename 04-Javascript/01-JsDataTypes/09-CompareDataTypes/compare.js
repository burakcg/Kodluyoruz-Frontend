let age = 29;
console.log(typeof age);

console.log(age == 29);
console.log(age == "29");
// tipi ile birlikte kontrol için ===
console.log(age === 29);
console.log(age === "29");
console.log(age !== 29);
console.log(age !== "29");

//Type Conversion
age = String(age);
console.log(typeof age);
age = Number(age);
console.log(typeof age);

let sonuc = Boolean('0');  //  strings true. (" ") null false
console.log(sonuc, typeof sonuc);
let sonuc1 = Boolean(Number('0')); //0 false other numbers true
console.log(sonuc1, typeof sonuc1);
let sonuc2 = Boolean(Number('-1')); //0 false other numbers true
console.log(sonuc2, typeof sonuc2);