const data3= [

{
    id: 1,
    title:"Mar",
    icon:"☁️",
    text:"17",
    text2:"9",
    text3:"nublado"

},{
    id: 2,
    title:"Mié",
    icon:"☀️",
    text:"20",
    text2:"12",
    text3:"Soleado"
    
},
{
    id: 3,
    title:"Jue",
    icon:"☀️",
    text:"22",
    text2:"12",
    text3:"Soleado"
    
},
{
    id: 4,
    title:"Vie",
    icon:"☀️",
    text:"26",
    text2:"12",
    text3:"Soleado"
    
},
{
    id: 5,
    title:"Sab",
    icon:"⛅",
    text:"22",
    text2:"14",
    text3:"Nublado",
    
    
}
]

const container3 = document.getElementById("container3")

for (let i = 0; i < data3.length; i++){


container3.innerHTML += `
   
   <div class="col-6 col-md-4 col-lg-2">
        <div class="card weather-card text-center h-100 shadow-sm">
          <div class="card-body btn-primary">
            <h5 class="card-title">${data3[i].title}</h5>
            <p class="card-text icon-lg">${data3[i].icon}</p>
            <p class="card-text fs-4 fw-bold">${data3[i].text}°<span class="fs-6">/${data3[i].text2}°</span></p>
            <p class="card-text small">${data3[i].text3}</p>
          </div>
        </div>
      </div>

`
}