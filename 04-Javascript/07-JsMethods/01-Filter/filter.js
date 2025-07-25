//filter: Belirli bir şartı sağlayan elemanları yeni bir array'de toplar. Ör: [1, 2, 3].filter(x => x > 1) → [2, 3]

const points = [10, 20, 30, 40, 88, 55];

const studentsPassed = points.filter(point =>{
   
    return point > 50;
});

console.log(studentsPassed);

const students = [
    {name: "ali", passed: true},
    {name: "veli", passed: false},
    {name: "mehmet", passed: false},
    {name: "ahmet", passed: true},
];

const passedStudents = students.filter(student =>{
    return !student.passed  // geçemeyenler
});

//console.log(passedStudents);