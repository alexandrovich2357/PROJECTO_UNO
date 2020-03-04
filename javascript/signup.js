const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repeatpassword = document.getElementById('repeatpassword');
const boton = document.getElementById('boton');

const form = document.getElementsByClassName('formulario')[0];

let usersDB = JSON.parse(localStorage.getItem('users')) //Nos traemos la base de datos

boton.addEventListener("click", function(event){
    event.preventDefault();
    deleteErrors();
    
    if (checkValidUser()){
        console.log("user registered")
        createUser(name.value, email.value, password.value)
        window.location.href = "index.html";
    };
})
//puente entre el validator y esto.
function checkValidUser() {
    let signUpValidator = new SignUpValidator (name.value, email.value, password.value, repeatpassword.value);
    
    let usersDB = JSON.parse(localStorage.getItem("users"));
    let validUser = true;

    if(!signUpValidator.checkUserName()){
        signUpValidator.errorCreator("Por favor, introduce un nombre válido", name)
        validUser=false
    }
    if(!signUpValidator.checkEmail()){
        signUpValidator.errorCreator("Por favor, introduce una dirección de mail válida", email)
        validUser=false
    }
    if(!signUpValidator.checkPassword()){
        signUpValidator.errorCreator("Por favor, introduce una contraseña válida", password)
        validUser=false
    }
    if(!signUpValidator.checkRepeatPassword()){
        signUpValidator.errorCreator("Las contraseñas no coinciden", repeatpassword)
        validUser=false
    }
    if (!signUpValidator.checkEmailInDB(usersDB)){
        signUpValidator.errorCreator("Este mail ya existe", email)
        validUser=false
    }

    return validUser
}

function deleteErrors (){
    let errors = [...document.getElementsByClassName("error")]
    errors ? errors.forEach(error => error.remove()) : null;
}

function createUser (name, email, password) {
    const newUser = new User (name, email, password)

    if (usersDB){
        usersDB.push(newUser);
    } else {
        usersDB = [newUser]
    }
    localStorage.setItem('users', JSON.stringify(usersDB));
} 