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
        console.log(eventsAmazing)
   //Llamo funciones para el Upevents
        

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