const students = [
    {name: "ali", point: 40, update: false},
    {name: "veli", point: 60, update: false},
    {name: "veli", point: 60, update: false},
    {name: "mehmet", point: 30, update: false},
    {name: "mehmet", point: 30, update: false},
    {name: "ahmet", point: 90, update: false},
];

const filterPoints = students.filter(student => student.point < 50);

const updatePoints = filterPoints.map(student => {
    return `${student.name} adlı öğrencinin yeni notu ${student.point + 15}`;
});

console.log(updatePoints);


// Nested Methods
const newNotes = students.filter(student => student.point > 50)
.map(student => `${student.name} adlı öğrencinin yeni notu ${student.point +10}`);
console.log(newNotes);