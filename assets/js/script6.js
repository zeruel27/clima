const data6= [

{
    id: 1,
    title:"Mar",
    icon:"☀️",
    text:"20",
    text2:"8",
    text3:"Muy soleado"


},{
    id: 2,
    title:"Mié",
    icon:"☀️",
    text:"19",
    text2:"9",
    text3:"Soleado"
    
},
{
    id: 3,
    title:"Jue",
    icon:"☀️",
    text:"21",
    text2:"14",
    text3:"Soleado"
    
},
{
    id: 4,
    title:"Vie",
    icon:"☀️",
    text:"23",
    text2:"12",
    text3:"Soleado"
    
},
{
    id: 5,
    title:"Sab",
    icon:"⛅",
    text:"28",
    text2:"15",
    text3:"Nublado",
    
    
}
]


const container6 = document.getElementById("container6")

for (let i = 0; i < data6.length; i++){


container6.innerHTML += `
   
   <div class="col-6 col-md-4 col-lg-2">
        <div class="card weather-card text-center h-100 shadow-sm">
          <div class="card-body btn-primary">
            <h5 class="card-title">${data6[i].title}</h5>
            <p class="card-text icon-lg">${data6[i].icon}</p>
            <p class="card-text fs-4 fw-bold">${data6[i].text}°<span class="fs-6">/${data6[i].text2}°</span></p>
            <p class="card-text small">${data6[i].text3}</p>
          </div>
        </div>
      </div>

`

}







