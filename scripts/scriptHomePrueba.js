//constantes
const check = document.querySelectorAll("form-check-input");
const collapseContainer = document.getElementById("formSupportedContent");
const expandContainer = document.getElementById("form-expand");


//Array de los eventos
/* const events= [
    {
      _id: 1,
      "image":"https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
      "name":"Collectivities Party",
      "date":"2021-12-12",
      "description":"Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
      "category":"Food Fair",
      "place":"Room A",
      "capacity":45000,
      "assistance":42756,
      "price":5
    },
    {
      _id: 2,
      "image":"https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
      "name":"Korean style",
      "date":"2022-08-12",
      "description":"Enjoy the best Korean dishes, with international chefs and awesome events.",
      "category":"Food Fair",
      "place":"Room A",
      "capacity":45000,
      "assistance":42756,
      "price":10
    },
    {
      _id: 3,
      "image":"https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
      "name":"Jurassic Park",
      "date":"2021-11-02",
      "description":"Let's go meet the biggest dinosaurs in the paleontology museum.",
      "category":"Museum",
      "place":"Field",
      "capacity":82000,
      "assistance":65892,
      "price":15
    },
    {
      _id: 4,
      "image":"https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
      "name":"Parisian Museum",
      "date":"2022-11-02",
      "description":"A unique tour in the city of lights, get to know one of the most iconic places.",
      "category":"Museum",
      "place":"Paris",
      "capacity":8200,
      "estimate":8200,
      "price":3500
    },
    {
      _id: 5,
      "image":"https://i.postimg.cc/KYD0jMf2/comicon.jpg",
      "name":"Comicon",
      "date":"2021-02-12",
      "description":"For comic lovers, all your favourite characters gathered in one place.",
      "category":"Costume Party",
      "place":"Room C",
      "capacity":120000,
      "assistance":110000,
      "price":54
    },
    {
      _id: 6,
      "image":"https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
      "name":"Halloween Night",
      "date":"2022-02-12",
      "description":"Come with your scariest costume and win incredible prizes.",
      "category":"Costume Party",
      "place":"Room C",
      "capacity":12000,
      "estimate":9000,
      "price":12
    },
    {
      _id: 7,
      "image":"https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
      "name":"Metallica in concert",
      "date":"2022-01-22",
      "description":"The only concert of the most emblematic band in the world.",
      "category":"Music Concert",
      "place":"Room A"
      ,"capacity":138000,
      "estimate":138000,
      "price":150
    },
    {
      _id: 8,
      "image":"https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
      "name":"Electronic Fest",
      "date":"2021-01-22",
      "description":"The best national and international DJs gathered in one place.",
      "category":"Music Concert",
      "place":"Room A",
      "capacity":138000,
      "assistance":110300,
      "price":250
      },
    {
      _id: 9,
      "image":"https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
      "name":"10K for life",
      "date":"2021-03-01",
      "description":"Come and exercise, improve your health and lifestyle.",
      "category":"Race",
      "place":"Soccer field",
      "capacity":30000,
      "assistance":25698,
      "price":3
    },
    {
      _id: 10,
      "image":"https://i.postimg.cc/zv67r65z/15kny.jpg",
      "name":"15K NY",
      "date":"2022-03-01",
      "description":"We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
      "category":"Race",
      "place":"New York",
      "capacity":3000000,
      "assistance":2569800,
      "price":3
      },
    {
      _id: 11,
      "image":"https://i.postimg.cc/Sst763n6/book1.jpg",
      "name":"School's book fair",
      "date":"2022-10-15",
      "description":"Bring your unused school book and take the one you need.",
      "category":"Book Exchange",
      "place":"Room D1",
      "capacity":150000,
      "estimate":123286,
      "price":1
    },
    {
      _id: 12,
      "image":"https://i.postimg.cc/05FhxHVK/book4.jpg",
      "name":"Just for your kitchen",
      "date":"2021-11-09",
      "description":"If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
      "category":"Book Exchange",
      "place":"Room D6",
      "capacity":130000,
      "assistance":90000,
      "price":100
    },
    {
      _id: 13,
      "image":"https://i.postimg.cc/vH52y81C/cinema4.jpg",
      "name":"Batman",
      "date":"2021-03-11",
      "description":"Come see Batman fight crime in Gotham City.",
      "category":"Cinema",
      "place":"Room D1",
      "capacity":11000,
      "assistance":9300,
      "price":225
    },
    {
      _id: 14,
      "image":"https://i.postimg.cc/T3C92KTN/scale.jpg",
      "name":"Avengers",
      "date":"2022-10-15",
      "description":"Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
      "category":"Cinema",
      "place":"Room D1",
      "capacity":9000,
      "estimate":9000,
      "price":250
    }
  ] */


//Asincronismo  
let currentDate;
let eventsAmazing = [];
const urlApi = "https://mindhub-xj03.onrender.com/api/amazing";

const fetchData = async () => {
  try{
      const data = await fetch(urlApi)
      const amazing = await data.json();
      currentDate = amazing.currentDate;
      for(let item of amazing.events){
          eventsAmazing.push(item);
      }
      console.log(eventsAmazing);
    return {currentDate, eventsAmazing}
  }
  catch{
      console.log("Ocurrio un Error");
  }
};


const eventNull = [{
      _id: 1,
      "image":"https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1",
      "name":"Null",
      "date":"Null",
      "description":"Not Found",
      "category":"Null",
    }]

// Funciones para imprimir las cards
 async function insertHomeCards(){
    let array = (await fetchData()).eventsAmazing;
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
   insertHomeCards()

async function insertCarouselHomeCards(){
        let array = (await fetchData()).eventsAmazing;
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
insertCarouselHomeCards();


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
  let eventsFiltred = [];

  async function filterCategory(){
    let array = (await fetchData()).eventsAmazing;
    let eventsCategory = array.map(element => element.category);
    let eventsCategoryFiltred = new Set(eventsCategory);
    let eventsCategoryArray = Array.from(eventsCategoryFiltred);
    
      for(e of eventsCategoryArray){
      eventsFiltred.push(e);
      }
  };
  filterCategory();
  console.log(eventsFiltred);

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
  printCollapseChecks(eventsFiltred);


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
  printExpandsChecks(eventsFiltred);
      
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




//Eventos
let search = document.getElementById("inputSearch");
let searchDos = document.getElementById("inputSearchDos");



search.addEventListener("keyup", ()=> {
  let arrayFiltrado = filterText(events, search.value);
  let arrayFiltradoDos = filterCheck(arrayFiltrado);
  if(arrayFiltradoDos != 0){
    insertCarouselHomeCards(arrayFiltradoDos);
  insertHomeCards(arrayFiltradoDos);
  }else{
    insertNull(eventNull);
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
    insertNull(eventNull);
  }
});

collapseContainer.addEventListener("change", ()=>{
  let arrayFiltrado = filterText(events, search.value);
  let arrayFiltradoDos = filterCheck(arrayFiltrado);
  if(arrayFiltradoDos != 0){
    insertCarouselHomeCards(arrayFiltradoDos);
  insertHomeCards(arrayFiltradoDos);
  }else{
    insertNull(eventNull);
    insertNull(eventNull);
  }
})
expandContainer.addEventListener("change", ()=>{
  let arrayFiltrado = filterText(events, searchDos.value);
  let arrayFiltradoDos = filterCheck(arrayFiltrado);
  if(arrayFiltradoDos != 0){
    insertCarouselHomeCards(arrayFiltradoDos);
  insertHomeCards(arrayFiltradoDos);
  }else{
    insertNull(eventNull);
    insertNull(eventNull);
  }
})


