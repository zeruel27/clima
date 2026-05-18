const data7= [

{
    id: 1,
    title:"Mar",
    icon:"☀️",
    text:"26",
    text2:"17",
    text3:"soleado"

},{
    id: 2,
    title:"Mié",
    icon:"☀️",
    text:"24",
    text2:"17",
    text3:"Soleado"
    
},
{
    id: 3,
    title:"Jue",
    icon:"☀️",
    text:"25",
    text2:"16",
    text3:"Soleado"
    
},
{
    id: 4,
    title:"Vie",
    icon:"☀️",
    text:"27",
    text2:"18",
    text3:"Soleado"
    
},
{
    id: 5,
    title:"Sab",
    icon:"☀️",
    text:"29",
    text2:"20",
    text3:"Despejado",
    
    
}
]


const container7 = document.getElementById("container7")

for (let i = 0; i < data7.length; i++){


container7.innerHTML += `
   
   <div class="col-6 col-md-4 col-lg-2">
        <div class="card weather-card text-center h-100 shadow-sm">
          <div class="card-body btn-primary">
            <h5 class="card-title">${data7[i].title}</h5>
            <p class="card-text icon-lg">${data7[i].icon}</p>
            <p class="card-text fs-4 fw-bold">${data7[i].text}°<span class="fs-6">/${data7[i].text2}°</span></p>
            <p class="card-text small">${data7[i].text3}</p>
          </div>
        </div>
      </div>

`

}
