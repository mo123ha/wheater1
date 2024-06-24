
 let searchval =document.getElementById("Search")

 let info={}
    searchval.addEventListener("keyup", (e)=> {
        search(e.target.value)
    })
 async function search(e) {
     let data= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=10988f2a45cc4c83b1c143538241506&q=${e}&days=3`)
     if(data.readystate===4,data.status===200){
    let wheaterData= await data.json()
    console.log("heloo")
    console.log(searchval.value)
info=wheaterData
console.log(wheaterData);
console.log(info);
    today()
  
  }
  
}
   
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
 
const today1 = new Date();
const currentDay = today1.getDay();
const nextDay = (currentDay + 1) % daysOfWeek.length;
const nextTomorrowDay= (currentDay+ 2) % daysOfWeek.length;

const month1=today1.getMonth()


    function today(e) {

            temp=` <div class="col-md-4 ">  
            <div class="layer1  pb-2">
             <div class="layer11 p-1 d-flex justify-content-between par">
                 <p>${daysOfWeek[currentDay]}</p>
                 <p>${ today1.getDate()+month[month1]}</p>
                </div>
             <div class="ms-2 py-2 par">
            <h6 >${info.location.name}</h6>
             <p class="font text-white">${info.current.temp_c}<sup>o</sup>C</p>
               <img  src="https:${info.current.condition.icon}" class="icon9" alt="">
                     <p class="text-info">${info.current.condition.text}</p>
             </div>
             <span class="par">
                       <img src="images/icon-umberella.png" class="icon"alt="">
                20%
                 </span>
                
        
                 <span class="par">
                     <img src="images/icon-wind@2x.png" class="icon"alt="">
                     18 Km/h
                 </span>
                 <span class="par">
                 
                     <img src="images/icon-compass@2x.png" class="icon"alt="">
                     East
                 </span>
            
        </div>
        </div>
       <div class="col-md-4"  >
       <div class="layer2  text-center">
       <div class="layer22 p-1">
         <p class="par">${daysOfWeek[nextDay]}</p>
        </div>
       <div class="ms-2 bom mt-5">
       <img src="https:${info.forecast.forecastday[1].day.condition.icon}" " alt="">
       <p class="fs-5 fw-bolder">${info.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</p>


       <p class="par ">${info.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C</p>
       <p class="text-info">${info.forecast.forecastday[1].day.condition.text}</p>
       </div>
       
       
       </div>
       </div>
       
       
       <div class="col-md-4 ">
           
       <div class="layer1 text-center  ">
             <div class="layer11 p-1">
                <p class="par">${daysOfWeek[nextTomorrowDay]}</p>
          </div>
           <div class="ms-2 py-5 bom">
           
                <img src="https:${info.forecast.forecastday[1].day.condition.icon}"  alt="">
            <p class="text-white fs-5 fw-bolder">${info.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</p>
                <p class="par">${info.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C</p>
                <p class="text-info">${info.forecast.forecastday[2].day.condition.text}</p>
           </div>
       
         
            </div>
           </div>
       
       ` 
        document.getElementById("MyData").innerHTML=temp;
    }

     search("ismailia")


     






















