

function hoverdnone(){
    document.getElementById("icondiv").style.display = "flex";
  }

  function hoverdblock(){
    document.getElementById("icondiv").style.display = "none";
  }

  function hoverdnonetwo(){
    document.getElementById("icondivtwo").style.display = "flex";
  }

  function hoverdblocktwo(){
    document.getElementById("icondivtwo").style.display = "none";
  }

  function hoverdnonethree(){
    document.getElementById("icondivthree").style.display = "flex";
  }

  function hoverdblockthree(){
    document.getElementById("icondivthree").style.display = "none";
  }

  function hoverdnonefour(){
    document.getElementById("icondivfour").style.display = "flex";
  }

  function hoverdblockfour(){
    document.getElementById("icondivfour").style.display = "none";
  }


  var navbar = document.getElementById("navbar");




 
  window.addEventListener("scroll", function() {

    if(document.documentElement.scrollTop > 10){
        navbar.style.backgroundColor="rgb(5, 112, 193)";
        navbar.style.opacity =".8";
    }
    else {
        navbar.style.backgroundColor="transparent"
    }

  })


  var navbarbtn = document.getElementById("navbarbtn");

  var navbarnavitems = document.getElementById("navbarnavitems")


  navbarbtn.addEventListener("click", function() {

    document.getElementById("sectionone").style.height="120vh";

    document.getElementById("navbar").style.height="150px"

    document.getElementById("navbar").style.position="absolute"

    document.getElementById("navbar").style.top="-55px"

   navbarnavitems.style.display="block";

   navbarnavitems.style.position="relative";

   navbarnavitems.style.top="136px";

   navbarnavitems.style.left="-430px";


  

        navbarbtn.addEventListener("click", function() {

          document.getElementById("navbar").style.height="15px"
      
          document.getElementById("navbarnavitems").style.display="block";
      
          navbarnavitems.style.display="block";
      
        })


  })




  var pagetotop = document.getElementById("pagetotop");


  window.addEventListener("scroll", function(){

    if(document.documentElement.scrollTop>10){
      pagetotop.style.display="flex";
    }

    else{
      pagetotop.style.display="none";
    }

  })