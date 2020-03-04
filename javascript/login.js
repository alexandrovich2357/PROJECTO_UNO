const namelog = document.getElementById('name_login');
const passlog = document.getElementById('password_login');
const botonlog = document.getElementById('button_login');
//usuarios base de datos
const accesdb = JSON.parse(localStorage.getItem('users'));

botonlog.addEventListener('click', function(event){
    event.preventDefault();
    for(let i = 0; i < accesdb.length;i++){
        if(accesdb[i].name === namelog.value && accesdb[i].password === passlog.value){
            createUser(accesdb[i]);
            window.location.href = 'index.html';
        }
    }
})

function createUser(currentuser){
    localStorage.setItem('currentuser', JSON.stringify(currentuser));
    console.log(currentuser)
}

