"use strict";

class Validator {
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    checkUserName () {
        return this.name ? true : false
    }

    checkEmail () {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(this.email) ? true : false
    }

    checkPassword () {
        if (!this.password){
            return false
        } else if (this.password.length < 6){
            return false
        } else {
            return true
        }
    }
    
    errorCreator (message, location) {
        let div = document.createElement("div")
        div.setAttribute("class", "error")
        div.innerHTML = message
        form.insertBefore(div, location)
    }

    deleteErrors (){
        let errors = [...document.getElementsByClassName("error")]
        errors ? errors.forEach(error => error.remove()) : null;
    }
}

class SignUpValidator extends Validator {
    constructor (name, email, password, repeatpassword){
        super(name, email, password);
        this.repeatpassword = repeatpassword
    }
//Esto chekea si el mail existe en la DB
    checkEmailInDB (usersDB){
        let userExists = false;

        if (!usersDB){
            return true;
        }
        else{
            usersDB.forEach(user => {
                if (user.email === this.email){
                    userExists=false
                }
            })
        }
        return userExists;
    }
//Comprobacion de repeat password
    checkRepeatPassword () {
        if(this.password === this.repeatpassword) {
            return true;
        } else {
            return false;
        } 
    }
}

class LogInValidator extends Validator {
    constructor (name, password){
        super(name,password);
    }
  
    checkEmailInDB (string){
        if (!userDB){
            return false
        }
        else{
            userDB.forEach(user => {
                if (user.email === string){return true}
            })
        }
        return false
    }

}