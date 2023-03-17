let query = location.search;
let params = new URLSearchParams(query);
let idParams = params.get("_id");

let info = events.find(info => info.id == idParams);

const container = document.getElementById("main-cont");
let body = "";

body += `
<div class="col col-card">
<div class="card" style="width: 18rem;">
  <img src="${array[i].image}" class="card-img-top" alt="${array[i].category}" height="190">
  <div class="card-body">
    <h5 class="card-title">${array[i].name}</h5>
    <p class="card-text">${array[i].description}</p>
    <div class="card-btn">
      <span>$ ${array[i].price}usd</span>
      <a href="./data.html?id="${array[i]._id}" class="btn btn-secondary">See More</a>
    </div>
  </div>
</div>

</div>
    `
container.innerHTML = body;