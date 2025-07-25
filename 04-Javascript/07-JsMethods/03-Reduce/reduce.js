//  reduce: Array'i tek bir değere indirger. Ör: [1, 2, 3].reduce((acc, curr) => acc + curr, 0) → 6

const points = [66, 77, 44, 56, 33, 80];

const result = points.reduce( (value, point) =>{

    if(point > value){
        value = point;
    }
    return value;
},0);  //value ataması 

console.log(result);

const students = [
    {name: "ali", point: 40, update: false},
    {name: "ali", point: 40, update: false},
    {name: "veli", point: 60, update: false},
    {name: "mehmet", point: 30, update: false},
    {name: "ahmet", point: 90, update: false},
    {name: "ahmet", point: 90, update: false},
];

const pointTotal = students.reduce((acc, student) => {
    // Öğrencinin ismiyle accumulator'da bir anahtar varsa puanı ekle, yoksa yeni bir anahtar oluştur
    acc[student.name] = (acc[student.name] || 0) + student.point;   // a = (a || 0) + 5
    return acc;
}, {});

console.log(pointTotal);
// Çıktı: { ali: 80, veli: 60, mehmet: 30, ahmet: 180 }
//Güncelle
pointTotal["ayşe"] = pointTotal["ali"];
delete pointTotal["ali"];

console.log(pointTotal);

