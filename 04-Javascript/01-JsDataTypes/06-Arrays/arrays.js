let names = [ "burak", "ali" , "ahmet"];
console.log(names[1]);
console.log("original array:",names);
// add new elements to array
names.push("veli"); //  original array changed.
console.log("original array changed: " , names);
newNames = names.concat(["can", "mahmut"]); // original array not changed. created new array
console.log("new array:" , newNames );

//pop last element
newNames.pop();
console.log("last element removed from new array:" ,newNames);

let ages = [11, 21, 22];
console.log(ages[0]);

let rnd = ["ali" , "veli", 11, 22];
console.log(rnd);
console.log(rnd.length);
let rndElemnt =Math.floor(Math.random() * 3);
console.log(rnd[rndElemnt]);

// between the array
let between = names.join(' - ');
console.log(between);

let queNo = names.indexOf("ahmet");
console.log(queNo);