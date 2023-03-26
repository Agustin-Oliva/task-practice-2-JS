//constantes
const check = document.querySelectorAll("form-check-input");
const collapseContainer = document.getElementById("formSupportedContent");
const expandContainer = document.getElementById("form-expand");
let eventsFiltred = [];
const eventNull = [{
  _id: 1,
  "image":"https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1",
  "name":"Null",
  "date":"Null",
  "description":"Not Found",
  "category":"Null",
}]

// Funcion FecthData --> Respuesta de la API

const urlApi = "https://mindhub-xj03.onrender.com/api/amazing";

let currentDate;
let eventsAmazing = [];


let fetchData = async () => {
    try{
        const data = await fetch(urlApi)
        console.log(data);
        const amazing = await data.json();
        currentDate = amazing.currentDate;
        for(let item of amazing.events){
            eventsAmazing.push(item);
        }
   
   //Llamo funciones para el Home
        insertHomeCards(eventsAmazing);
        insertCarouselHomeCards(eventsAmazing);
        filterCategory(eventsAmazing);
        printCollapseChecks(eventsFiltred);
        printExpandsChecks(eventsFiltred);
        console.log(eventsAmazing);
   //Eventos
        let search = document.getElementById("inputSearch");
        let searchDos = document.getElementById("inputSearchDos");

        search.addEventListener("keyup", ()=> {
  let arrayFiltrado = filterText(eventsAmazing, search.value);
  let arrayFiltradoDos = filterCheck(arrayFiltrado);
  if(arrayFiltradoDos != 0){
    insertCarouselHomeCards(arrayFiltradoDos);
  insertHomeCards(arrayFiltradoDos);
  }else{
    insertNull(eventNull);
   
  }
        });
        searchDos.addEventListener("keyup", ()=> {
  let arrayFiltrado = filterText(eventsAmazing, searchDos.value);
  let arrayFiltradoDos = filterCheck(arrayFiltrado);
  if(arrayFiltradoDos != 0){
    insertCarouselHomeCards(arrayFiltradoDos);
  insertHomeCards(arrayFiltradoDos);
  }else{
    insertNull(eventNull);
   
  }
        });
        collapseContainer.addEventListener("change", ()=>{
  let arrayFiltrado = filterText(eventsAmazing, search.value);
  let arrayFiltradoDos = filterCheck(arrayFiltrado);
  if(arrayFiltradoDos != 0){
    insertCarouselHomeCards(arrayFiltradoDos);
  insertHomeCards(arrayFiltradoDos);
  }else{
    insertNull(eventNull);
    
  }
        })
        expandContainer.addEventListener("change", ()=>{
  let arrayFiltrado = filterText(eventsAmazing, searchDos.value);
  let arrayFiltradoDos = filterCheck(arrayFiltrado);
  if(arrayFiltradoDos != 0){
    insertCarouselHomeCards(arrayFiltradoDos);
  insertHomeCards(arrayFiltradoDos);
  }else{
    insertNull(eventNull);
    
  }
        }) 
}catch{
        console.log("Ocurrio un Error");
    }
};
fetchData();


// Funciones para imprimir las cards
    function insertHomeCards(array){
    let body = ``;
    let containHomeUpdate = document.getElementById("row-home");
        for(let i=0; i < array.length; i++){
            body += `
            <div class="col col-card">
            <div class="card" style="width: 18rem;">
              <img src="${array[i].image}" class="card-img-top" alt="${array[i].category}" height="190">
              <div class="card-body">
                <h5 class="card-title">${array[i].name}</h5>
                <p class="card-text">${array[i].description}</p>
                <div class="card-btn">
                  <span>$ ${array[i].price}usd</span>
                  <a href="./data.html?id=${array[i]._id}" class="btn btn-secondary">See More</a>
                </div>
              </div>
            </div>

          </div> `;
        }
        containHomeUpdate.innerHTML = body;
    }
   
    function insertCarouselHomeCards(array){
        let carouselHomeUpdate = document.getElementById("carousel-inner");
        let carousel = ``;
  for(let x = 0; x < 1; x++){
    carousel += `<div class="carousel-item active">
    <div class="card" style="width: 18rem;">
    <img src="${array[x].image}" class="card-img-top" alt="${array[x].category}" height="190">
    <div class="card-body">
      <h5 class="card-title">${array[x].name}</h5>
      <p class="card-text">${array[x].description}</p>
      <div class="card-btn">
        <span>$ ${array[x].price}usd</span>
        <a href="./data.html?id=${array[x]._id}" class="btn btn-secondary">See More</a>
      </div>
    </div>
  </div>
  
  </div>`
  };
      for(let i=1; i < array.length; i++){
                carousel += `  
                <div class="carousel-item">          
                <div class="card" style="width: 18rem;">
                <img src="${array[i].image}" class="card-img-top" alt="${array[i].category}" height="190">
                <div class="card-body">
                  <h5 class="card-title">${array[i].name}</h5>
                  <p class="card-text">${array[i].description}</p>
                  <div class="card-btn">
                    <span>$ ${array[i].price}</span>
                    <a href="./data.html?id=${array[i]._id}" class="btn btn-secondary">See More</a>
                  </div>
                </div>
              </div>
              </div>            
                `;
            }
            carouselHomeUpdate.innerHTML = carousel;
    }

    function insertNull(array){
  let body = ``;
  let containHomeUpdate = document.getElementById("row-home");
  let carouselHomeUpdate = document.getElementById("carousel-inner");
      for(let i=0; i < array.length; i++){
          body += `
          <div class="col col-card">
          <div class="card" style="width: 18rem;">
            <img src="${array[i].image}" class="card-img-top" alt="${array[i].category}" height="190">
            <div class="card-body">
              <h5 class="card-title">${array[i].name}</h5>
              <p class="card-text">${array[i].description}</p>
              <div class="card-btn">
                <span>$ ${array[i].price}</span>
              </div>
            </div>
          </div>

        </div> `;
      }
      containHomeUpdate.innerHTML = body;
      carouselHomeUpdate.innerHTML = body
    }
  
//Funcion que devuelve un array de las categorias filtradas
  
    function filterCategory(array){
    let eventsCategory = array.map(element => element.category);
    let eventsCategoryFiltred = new Set(eventsCategory);
    let eventsCategoryArray = Array.from(eventsCategoryFiltred);
    
      for(e of eventsCategoryArray){
      eventsFiltred.push(e);
      }
    };

// Funciones para imprimir los checks
    function printCollapseChecks(array){
    let printBody = ``;
    let contChecks = document.getElementById("formSupportedContent");
    for(let i = 0; i < array.length; i++){
      printBody += `
      <div class="form-check">
              <input  class="form-check-input" type="checkbox" value="${array[i]}" name="${array[i]}" id="${array[i]}">
              <label class="form-check-label" for="${array[i]}">
                ${array[i]}
              </label>
            </div>    
      `
    }
    printBody+=`
    <div class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="inputSearch">
    </div> `
    contChecks.innerHTML = printBody;
    }
  
    function printExpandsChecks(array){
    let printBody = ``;
    let contExpands = document.getElementById("form-expand");
    for(let i = 0; i < array.length; i++){
      printBody += `
      <div class="col">
        <input class="form-check-input" type="checkbox" value="${array[i]}" name="${array[i]}" id="${array[i]}">
        <label class="form-check-label" >
          ${array[i]}
        </label>
      </div>  
      `
    }
    printBody+=`
    <div class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="inputSearchDos">
    </div> `
    contExpands.innerHTML = printBody;
    }
  
      
// Funciones para filtrar las cards que busque el usuario
    function filterText(array, text){
  let arrayFiltrado = array.filter(element => 
    element.name.toLowerCase().includes(text.toLowerCase()));
  if(arrayFiltrado != 0){
    return arrayFiltrado;
    }else{
      insertNull(eventNull);
    }
    }

    function filterCheck(array){
let checks = document.querySelectorAll(".form-check-input");
let arrayCheck = Array.from(checks);
let arrayChecked = arrayCheck.filter(check => check.checked);
if(arrayChecked == 0){
  return array;
}
let checksValues = arrayChecked.map(check => check.value);
let arrayFilter = array.filter(element => checksValues.includes(element.category));
return arrayFilter;
    }







