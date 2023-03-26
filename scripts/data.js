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

        const queryStr = location.search;

        const params = new URLSearchParams(queryStr);
      
        console.log(params);
        const idValue = params.get("id");
      
        console.log(idValue);
        const eventItem = eventsAmazing.find(element => element._id == idValue);
        
        function insertDataCards(){
          let body = ``;
         let contData = document.getElementById("main-cont")
                  body += `
                  <div class="card container-card">
                  <div class="card-data"">
                  <div class="cont-img">
                    <img src="${eventItem.image}"  class="img-data" alt="${eventItem.category}" height="190">
                  </div>
                    <div class="card-body">
                      <h5 class="card-title">${eventItem.name}</h5>
                      <p class="card-text">${eventItem.description}</p>
                      <p class="card-text"><span class="negrita">Date:</span> ${eventItem.date}</p>
                      <p class="card-text"><span class="negrita">Place:</span> ${eventItem.place}</p>
                      <p class="card-text"><span class="negrita">Estimated Attendance:</span> ${eventItem.assistance}</p>
                      <div class="card-btn">
                      <p class="card-text"><span class="negrita">Price: $</span>${eventItem.price}usd</p>
                      </div>
                    </div>
                  </div>
                </div> `;
              contData.innerHTML = body;
          }
          insertDataCards();

}catch{
        console.log("Ocurrio un Error");
    }
};
fetchData();


  