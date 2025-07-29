const students = [
    {name: "ali", point: 40, update: false},
    {name: "veli", point: 60, update: false},
    {name: "mehmet", point: 30, update: false},
    {name: "ahmet", point: 90, update: false},
];

console.log(students);

localStorage.setItem("todos",JSON.stringify(students));

const storedDate = localStorage.getItem("todos");

console.log(storedDate);

const parse = JSON.parse(storedDate);
console.log(parse);
