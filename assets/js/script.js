const data= [

{
    id: 1,
    title:"Santiago",
    text:"19",
    text2:"2",
    url:"detalles.html",

    
  

},{
    id: 2,
    title:"Madrid",
    text:"12",
    text2:"3",
    url:"detalles 2.html",
    
    
},
{
    id: 3,
    title:"Londres",
    text:"2",
    text2:"8",
    url:"detalles 3.html",
    
    
},
{
    id: 4,
    title:"Moscu",
    text:"2",
    text2:"6",
    
    
},
{
    id: 5,
    title:"Buenos aires",
    text:"18",
    text2:"9",
    
    
},
]
const data2= [
{
    id: 6,
    title:"Berlin",
    text:"3",
    text2:"3",
    url:"detalles 6.html",
    
    
},

{
    id: 7,
    title:"Beijing",
    text:"11",
    text2:"3",
    url:"detalles 7.html",
    
    
},

{
    id: 8,
    title:"Nueva york",
    text:"3",
    text2:"7",
    
    
    
},

{
    id: 9,
    title:"Tokyo",
    text:"14",
    text2:"4",
    
    
},

{
    id: 10,
    title:"Paris",
    text:"11",
    text2:"5",
    
    
},
]


const container = document.getElementById("container")

for (let i = 0; i < data.length; i++){


container.innerHTML += `
<div class="col-12 col-md-2">
        <div class="container--card h-100 text-white bg-primary mb-3" style="max-width: 18rem">
          <a href="${data[i].url}">
        <img src="./assets/img/screenxubo-sun-23076.gif" class="card-img-top" alt="Ir a pagina" id="miboton">
          </a>
          <div class="card-body">
            <h5 class="card-title">${data[i].title}</h5>
            <p class="card-text">
            <h1 class="bi bi-thermometer-half">${data[i].text}&deg;C</h1>
            <h2 class="bi bi-wind">${data[i].text2}km/h</h2>
            </p>
          </div>
        </div>
      </div>

`

}

const container2 = document.getElementById("container2")

for (let i = 0; i < data2.length; i++){


container2.innerHTML += `
       <div class="col-12 col-md-2">
        <div class="container--card h-100 text-white bg-primary mb-3" style="max-width: 18rem">
        <a href="${data2[i].url}">
         <img src="./assets/img/screenxubo-sun-23076.gif" class="card-img-top" alt="Ir a pagina" id="miboton">
        </a>
         <div class="card-body">
            <h5 class="card-title">${data2[i].title}</h5>
            <p class="card-text">
            <h1 class="bi bi-thermometer-half">${data2[i].text}&deg;C</h1>
            <h2 class="bi bi-wind">${data2[i].text2}km/h</h2>
            </p>
          </div>
        </div>
    </div>

`

}





























document.getElementById("miboton").addEventListener("click", function() {
    window.location.href = "detalles.html";
});



