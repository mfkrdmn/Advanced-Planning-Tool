var navbarbtn = document.getElementById("navbarbtn");

var sidebar   = document.getElementById("sidebar");


navbarbtn.addEventListener("click",function(){

    sidebar.style.display="block";
    // bu olayın calısması icin button olmalı

    navbarbtn.style.display="none";


    navbarbtnclose.style.display="block";
  
})
  
navbarbtnclose.addEventListener("click",function(){

    sidebar.style.display="none";
    // bu olayın calısması icin button olmalı

    navbarbtn.style.display="block";

    navbarbtnclose.style.display="none";
  
})
  


const date = new Date();

const renderCalendar = function(){
    date.setDate(1);

    const monthDays = document.querySelector(".days");
    
    const lastDay = new Date(date.getFullYear(), date.getMonth()+1,0).getDate();
    
    const firDayIndex = date.getDay
    
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth()+1,0).getDay();
    
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(),0).getDate();
    
    const nextDays = 7 - lastDayIndex-1;
    
    const months =[
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    
    document.querySelector(".date h1").innerHTML= months[date.getMonth()];
    
    
    document.querySelector(".date p").innerHTML= date.toDateString();
    
    
    let days = "";
    
    for(let x=firDayIndex; x>0; x--){
    
        days+=`<div class="prev-date">${prevLastDay-x+1}</div>`;
    
    }
    
    for(let i=1 ; i<=lastDay ; i++){
    
        if(i===new Date().getDate()&&date.getMonth()===new Date().getMonth()){
            days += `<div class="today">${i}</div>`;
        }
        else{
            days += `<div>${i}</div>`;
        }
    }
    
    for(let j=1 ; j<= nextDays ; j++){
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML=days;
    }
}



document.querySelector(".prev").addEventListener("click", function(){

    date.setMonth(date.getMonth()-1); 
    renderCalendar()

})

document.querySelector(".next").addEventListener("click", function(){
    
    date.setMonth(date.getMonth()+1);
    renderCalendar()

})

