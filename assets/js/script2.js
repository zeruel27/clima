const data2= [

{
    id: 1,
    title:"Mar",
    icon:"☀️",
    text:"29",
    text2:"10",
    text3:"Despejado"

},{
    id: 2,
    title:"Mié",
    icon:"☀️",
    text:"27",
    text2:"10",
    text3:"Soleado"
    
},
{
    id: 3,
    title:"Jue",
    icon:"☀️",
    text:"27",
    text2:"9",
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
    text:"23",
    text2:"10",
    text3:"Nublado",
    
    
}
]


const container2 = document.getElementById("container2")

for (let i = 0; i < data2.length; i++){


container2.innerHTML += `
   
   <div class="col-6 col-md-4 col-lg-2">
        <div class="card weather-card text-center h-100 shadow-sm">
          <div class="card-body btn-primary">
            <h5 class="card-title">${data2[i].title}</h5>
            <p class="card-text icon-lg">${data2[i].icon}</p>
            <p class="card-text fs-4 fw-bold">${data2[i].text}°<span class="fs-6">/${data2[i].text2}°</span></p>
            <p class="card-text small">${data2[i].text3}</p>
          </div>
        </div>
      </div>

`

}






