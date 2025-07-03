let student = {
    name1:"ali",
    age:16, 
    email:"ali@hotmail.com",
    class:12,
    lectures:[
        {lectureName:"maths", score:80},
        {lectureName:"chemistry", score:60},
        {lectureName:"physics", score:45},

    ],
    
    login(){
        console.log("student login");
    },
    logout(){
        console.log("student exit");
    },
    printLessons(){
        console.log(this.lectures);
        this.lectures.forEach(lecture =>{
            console.log(`lecture name:${lecture.lectureName}  score:${lecture.score}`);
        })
    },
    Scores(){
        let avgScore = 0;
        this.lectures.forEach(lecture =>{
            avgScore += lecture.score / this.lectures.length;
        })
        return avgScore;
    }
};

console.log(student);
console.log(student.email);
student["name1"] = "Veli";
console.log(student["name1"]);
console.log(typeof student);

//Methods
student.login();
student.logout();
student.printLessons();

//Math
console.log(`ortalama puan: ${student.Scores()}`);
console.log(`Math.round ile ortalama puan en yakın sayıya yuvarlandı: ${Math.round(student.Scores())}`);
console.log(`Math.floor ile ortalama puan bir alt sayıya yuvarlandı: ${Math.floor(student.Scores())}`);
console.log(`Math.ceil ile ortalama puan bir üst sayıya yuvarlandı: ${Math.ceil(student.Scores())}`);
console.log(`Math.trunc ile ortalama puanın kesirli kısmı kaldırıldı: ${Math.trunc(student.Scores())}`);

// Rastgele sayı

const rastgele = Math.random();
console.log(rastgele);
console.log(Math.trunc(rastgele*100));