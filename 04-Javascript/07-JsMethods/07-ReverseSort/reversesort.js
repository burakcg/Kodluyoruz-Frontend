const points = [66, 77, 44, 56, 33, 80, 30, 3, 27];
points.sort((a,b) => a - b );
console.log(points);

const names = [ "Ayşe", "Veli", "Can", "Hasan","Ali"];
names.sort();
console.log(names);
names.reverse();
console.log(names);


const students = [
    {name: "ali", point: 40, update: false},
    {name: "veli", point: 60, update: false},
    {name: "veli", point: 60, update: false},
    {name: "mehmet", point: 30, update: false},
    {name: "ahmet", point: 90, update: false},
];

students.sort((a,b) => b.point - a.point); //büyükten küçüğe
console.log(students);
