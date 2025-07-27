const startDate = new Date("04/14/2025 10:25:00");
const now = new Date();
console.log(startDate);

const diff = now.getTime()-startDate.getTime();
console.log(diff);

const mins = Math.round(diff/1000/60);
const hours = Math.round(mins/60);
const days = Math.round(hours/24);
const month = Math.round(days/30);
const years = Math.round(month/12);
console.log(`${mins} dakika önce başladım.`);
console.log(`${hours} saat önce başladım.`);
console.log(`${days} gün önce başladım.`);
console.log(`${month} ay önce başladım.`);
console.log(`${years} yil önce başladım.`);

const timeStamp = now.getTime();
console.log(new Date(timeStamp));

