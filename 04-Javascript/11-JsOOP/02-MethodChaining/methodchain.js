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

const userOne = new  User("can", "ccc@gmail.com");
const userTwo = new  User("burak", "bbb@gmail.com");

userOne.login().logout().login();