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
  

var today = new Date();
var date = (today.getMonth()+1)+'-'+ today.getDate()+'-'+ today.getFullYear();
document.getElementById("currentDate").value = date;


var addtask = document.getElementById("addtask");


addtask.addEventListener("click", function(){

    document.getElementById("notaskdiv").style.display="none";
    document.getElementById("tasksec").style.display="block";
    document.getElementById("plusiconaddtask").style.display="none";
    document.getElementById("planeiconaddtask").style.display="block";
    document.getElementById("tasks").style.display="block";

})

var planeiconaddtask = document.getElementById("planeiconaddtask");

var tasks = document.getElementById("tasks");

var taskarea = document.getElementById("taskarea");

var editbutton = document.getElementById("editbutton");



planeiconaddtask.addEventListener("click", function(){
    

    var p = document.createElement("p");

    tasks.appendChild(p);

    p.innerText="->" + taskarea.value;

    taskarea.value=""

    p.classList.add("p-style")

    planeiconaddtask.style.WebkitAnimationPlayState = "running";

    p.addEventListener("dblclick", function(){
        p.style.display="none";
    })

    p.setAttribute("contenteditable", true);

    document.getElementById("pendingbox").style.display="block";

    var pendingtasksp = document.createElement("p");

    document.getElementById("pendingbox").appendChild(pendingtasksp);

    var taskvalue = document.getElementById("tasks").length;

    var listarr = []

    listarr.push(taskvalue)

    var pendingnumb = document.querySelector(".pendingnumb")

    pendingnumb.textContent = listarr.length



    trashpendingsbutton.addEventListener("click", function(){

        tasks.removeChild(p)

    })

})


var loginbutton = document.getElementById("loginbutton");


loginbutton.addEventListener("click", function(){

    var username = document.getElementById("username").value;  

    var password = document.getElementById("password").value;


    if(username == "123"){

        alert("yes")

    }

    else{
        alert("Nope")
    }
})



const caldate = new Date();

console.log(caldate)