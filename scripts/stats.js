
//Llamo a la APi
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
        categorias = getCategory(eventsAmazing);
        printTable(categorias);
        printPastTable(categorias);
        console.log(eventsAmazing);
        printAllTable()
}catch{
        console.log("Ocurrio un Error");
    }
};
fetchData();

function getHigherPorcentage(array) {
    return array.reduce((valorInicial, valorActual) => {
        if ((valorActual.assistance / valorActual.capacity)*100 > (valorInicial.assistance / valorInicial.capacity)*100) {
            return valorActual;
        } else {
            return valorInicial;
        }
    });
}
function getLowPorcentage(array) {
    return array.reduce((valorInicial, valorActual) => {
        if ((valorActual.assistance / valorActual.capacity)*100 < (valorInicial.assistance / valorInicial.capacity)*100) {
            return valorActual;
        } else {
            return valorInicial;
        }
    });
}

function highCapacity(array){
return array.reduce((valorInicial, valorActual) =>{
    if (valorInicial.capacity > valorActual.capacity){
        return valorInicial;
    }else{
        return valorActual;
    }
})
}



function getCategory(eventsAmazing){
    let category = eventsAmazing.map(elemento => elemento.category);
    let categorySet = new Set(category);
    let arrayCategory = Array.from(categorySet);
    return arrayCategory;
}

function getEventsByCategory(category, eventsAmazing) {
    return eventsAmazing.filter(element => element.category.includes(category));
}

function getRevenues(eventsAmazing){
    let acumulate = 0;
    for(let item of eventsAmazing){
        if(item.assistance){
            acumulate += (item.price * item.assistance);
        }
    }
    return acumulate;
}
function getUpcomingRevenues(eventsAmazing){
    let acumulate = 0;
    for(let item of eventsAmazing){
        if(!item.assistance){
            acumulate += (item.price * item.estimate);
        }
    }
    return acumulate;
}

function getPorcentageAssistance(eventsAmazing){
    let porcentage = 0;
    let acu = 0;
    let acu2 = 0;
  for(let item of eventsAmazing){
    if(item.assistance){
        acu += item.assistance;
        acu2 += item.capacity;
    }
    
  }
  porcentage = (acu / acu2)*100;
  return Math.round(porcentage);
}
function getPorcentageUpcomingAssistance( eventsAmazing){
    let porcentage = 0;
    let acu = 0;
    let acu2 = 0;
  for(let item of eventsAmazing){
        if(!item.assistance){
        acu += item.estimate;
        acu2 += item.capacity;
    }
  }
  porcentage = (acu / acu2)*100;
  return Math.round(porcentage);
}


function printTable(categorias){
    let containerUp = document.getElementById("upcoming-body");
    let body = ``;
    categorias.forEach(category => {
        let filterEvents = getEventsByCategory(category, eventsAmazing);
        let revenuesUpEvents = getUpcomingRevenues(filterEvents); 
        let assist = getPorcentageUpcomingAssistance(filterEvents);
        body += ` <tr>
        <td>${category}</td>
        <td> $ ${revenuesUpEvents} Usd</td>
        <td>${assist}%</td> 
        </tr>
        `
        containerUp.innerHTML = body;
    })
}
function printPastTable(categorias){
    let containerPast = document.getElementById("past-body");
    let body = ``;
    categorias.forEach(category => {
        let filterEvents = getEventsByCategory(category, eventsAmazing);
        let revenuesEvents = getRevenues(filterEvents); 
        let assist = getPorcentageAssistance(filterEvents);
        body += ` <tr>
        <td>${category}</td>
        <td>$ ${revenuesEvents} Usd</td>
        <td>${assist}%</td> 
        </tr>
        `
        containerPast.innerHTML = body;
    })
}

 function printAllTable(){
    let containerAll = document.getElementById("table-all");
    let body = ``;
          let a = getHigherPorcentage(eventsAmazing);
          let b = getLowPorcentage(eventsAmazing);
          let c = highCapacity(eventsAmazing);
             body += ` <tr>
            <td>${a.name}</td>
            <td>${b.name}</td>
            <td>${c.name}</td> 
            </tr>
            `   
       containerAll.innerHTML = body;    
       console.log(a.name,b.name,c.name);
}
 