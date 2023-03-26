/* 1ER TABLA EVENTOS PASADOS: Evento con el mayor porcentaje de asistencia | Evento con el menor porcentaje de asistencia | evento con mayor capacidad.

2DA TABLA EVENTOS FUTUROS: Categorías | Ganancias de todos los eventos de una categoría | Porcentaje de asistencia.

3ER TABLA EVENTOS PASADOS: Categorías | Ganancias de todos los eventos de una categoría | Porcentaje de asistencia.

                                              asistencia dividido capacidad por cien.
📌Porcentaje de asistencia: (asistencia / capacidad) x 100. (asistencia = assistance o estimate).

📌Porcentaje de asistencia de la segunda y tercer tabla: los resultados de la tabla resuelta que pasé son promedios, no porcentajes, ustedes lo pueden hacer de las dos formas:
porcentaje: suman toda la asistencia de los eventos de esa categoría, después suman toda la capacidad de los eventos de esa categoría y ahí hacen el porcentaje total.
promedio: de cada porcentaje de asistencia lo dividen por la cantidad de eventos, es decir, si tengo 4 eventos voy a tener 4 porcentajes y eso lo divido por 4
ej museum: los porcentajes de los cuatro eventos a esa categoría son 100%, 100%, 84,375%, 81,666% / 4 = 91,50%  (resultado de la tabla).

📌Conclusión: si eligen sacar el porcentaje, va a haber una pequeña diferencia con los resultados de la tabla (es mínima, está bien de igual forma, haganló como se les haga más fácil y cómodo). 
📌 Ganancias: sumar todos los precios de los eventos (precio del evento multiplicado por asistencia) de una categoría. 
📌 Evento con mayor porcentaje de asistencia: Sacan el porcentaje de todos los eventos pasados, ordenenlos de mayor a menor, impriman el primero.
📌 Evento con menor porcentaje de asistencia: Sacan el porcentaje de todos los eventos pasados, ordenenlos de menor a mayor, impriman el primero. */

//Array de eventos por categoria
/* let museum = [];
let cinema = [];
let food = [];
let concert = [];
let race = [];
let books = [];
let party = [];  */

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
 