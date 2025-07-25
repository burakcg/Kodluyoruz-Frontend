const points = [66, 77, 44, 56, 33, 80];

const arrayIndex = points.findIndex(point => point == 44);
points[arrayIndex] = 11;
console.log(points);

const students = [
    {name: "ali", point: 40, update: false},
    {name: "veli", point: 60, update: false},
    {name: "veli", point: 60, update: false},
    {name: "mehmet", point: 30, update: false},
    {name: "ahmet", point: 90, update: false},
];

const objexIndex = students.findIndex(student => student.name == "veli");
students[objexIndex].point = 100;
console.log(students);
