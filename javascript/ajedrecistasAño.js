let cogerSelect = document.getElementById('selector');

api.forEach(year => {
    let crearOption = document.createElement('option')
    crearOption.innerHTML = year.Año;
    cogerSelect.appendChild(crearOption);

} )


function information(){
    let cogerSelected = document.getElementById('selector').value
        console.log(cogerSelected);
        let newArr = []
        api.forEach((item)=> {
             if(item.Año === cogerSelected){
                newArr.push(item)
             }
        });
        console.log(newArr)
        let divContainer = document.getElementById('ficha')
        divContainer.innerHTML = `
        <div>
            <div>
                <h3>${newArr[0].Campeón.nombre}</h3>
                <h2>${newArr[0].Campeón.pais}</h2>
            </div>
            <img src="${newArr[0].Campeón.imagen}" alt="">
        </div>
        <div>
            <div>
                <h3>${newArr[0].Contrincante.nombre}</h3>
                 <h2>${newArr[0].Contrincante.pais}</h2>
            </div>
            <img src="${newArr[0].Contrincante.imagen}" alt="">
        
        </div>
        `
        
        console.log(divContainer)
        //en vez de
        //cojo el div y le meto un punto innerHTML = entre backtiks el formato html y dentro de ese
        //formato todo lo que yo quiero.
        //return api.find(element => element.año === cogerSelected);
}

    cogerSelect.onchange = information


