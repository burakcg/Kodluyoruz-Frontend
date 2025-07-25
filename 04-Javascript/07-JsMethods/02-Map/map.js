//Güncelleme yapmak için map: Her eleman üzerinde işlem yapar ve yeni bir array döndürür. Ör: [1, 2, 3].map(x => x * 2) → [2, 4, 6]

const points = [20, 30, 40, 50,80];

const newPoints = points.map(point =>{
    return point +10;
});

console.log(newPoints);

const students = [
    {name: "ali", point: 40, update: false},
    {name: "veli", point: 60, update: false},
    {name: "mehmet", point: 30, update: false},
    {name: "ahmet", point: 90, update: false},
];
const updateStudents = students.map(student =>{
    if(student.point < 50){
        student.point = 50;
        student.update = true;
        return student;
    }
    else{
        return student;
    }
})

updateStudents.forEach(student =>{
    console.log(`adı:${student.name} puanı:${student.point} update: ${student.update}`);
});

