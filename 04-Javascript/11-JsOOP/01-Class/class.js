class User {
    constructor(name, mail) {
        this.username = name;
        this.email = mail;
    }

    login(){
        return `${this.username} giriş yaptı.`
    }
    logout(){
        return `${this.username} çıkış yaptı.`
    }
}

const userOne = new  User("can", "ccc@gmail.com");
const userTwo = new  User("burak", "bbb@gmail.com");
console.log(userOne, userTwo);
console.log(userOne.login(), userTwo.logout());