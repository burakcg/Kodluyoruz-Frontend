class User {
    constructor(name, mail) {
        this.username = name;
        this.email = mail;
    }

    login(){
        console.log(`${this.username} giriş yaptı.`);
        return this; 
    }
    logout(){
        console.log(`${this.username} çıkış yaptı.`);
        return this;
    }
}

class Admin extends User {
    constructor(name, mail, title){
        super(name , mail);
        this.title = title;
    }


    deleteUser(userArrived){
        users = users.filter(user => user.username != userArrived.username);
    }
}

const userOne = new  User("can", "ccc@gmail.com");
const userTwo = new  User("burak", "bbb@gmail.com");
const userThree = new Admin("osman", "osman@gmail.com", "Danışman" );

console.log(userThree);
