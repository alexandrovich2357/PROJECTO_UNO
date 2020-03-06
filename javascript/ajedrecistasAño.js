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
 <div class="card-group">
  <div class="card campeon_car ">
    <img src="${newArr[0].Campeón.imagen}" class="campeon card-img-top" alt="...">
    <div class="cuerpo card-body">
      <h5 class="card-title text-center">${newArr[0].Campeón.nombre}</h5>
      <h6>GANADOR</h6>
    </div>
    <div class="card-footer text-center bg-primary">
      <small class="texto_bajo text-white">${newArr[0].Campeón.pais}</small>
    </div>
  </div>
  <div class="card contra border-left">
    <img src="${newArr[0].Contrincante.imagen}" class="contrincante card-img-top" alt="...">
    <div class="card-body bg-black">
      <h5 class="card-title text-center">${newArr[0].Contrincante.nombre}</h5>
      <h6>PERDEDOR</h6>
    </div>
    <div class="card-footer text-center bg-danger">
      <small class="texto_bajo text-white text-center ">${newArr[0].Contrincante.pais}</small>
    </div>
  </div>
  
        `
        
        console.log(divContainer)
        //en vez de
        //cojo el div y le meto un punto innerHTML = entre backtiks el formato html y dentro de ese
        //formato todo lo que yo quiero.
        //return api.find(element => element.año === cogerSelected);
}

    cogerSelect.onchange = information


