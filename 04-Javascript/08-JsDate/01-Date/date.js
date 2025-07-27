const now = new Date();
console.log(now);
console.log(typeof now);
console.log(`Year: ${now.getFullYear()}`);
console.log(`Month: ${now.getMonth()+1}   Ocak index 0`);
console.log(`Date: ${now.getDate()}`);
console.log(`Day: ${now.getDay()+1}`);
console.log(`Hours: ${now.getHours()}`);
console.log(`Minutes: ${now.getMinutes()}`);
console.log(`Seconds: ${now.getSeconds()}`);

console.log("timesstamp:", now.getTime());

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());
console.log(now.toLocaleTimeString());