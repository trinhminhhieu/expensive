/*eslint-disable*/
const mydrop = document.getElementById("myDropdown");

function myFunction() {
    mydrop.classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) { //contains = true //('show')
          openDropdown.classList.remove('show');  //remove showdrop if click outside
        }
      }
    }
  }

  


  function dataPopup() {
    document.getElementById("overlay").style.display = "block";
 
  }
  function dataregisterPopup(){
    document.getElementById("overlayregister").style.display = "block";
 }
  function dataClose() {
    
      document.getElementById("overlay").style.display = "none";
  }
  function dataCloser() {
    
    document.getElementById("overlayregister").style.display = "none";
}

window.onclick = function(event) {
  if(event.target == document.getElementById("overlay")) {
    document.getElementById("overlay").style.display = "none";
  }
}

window.onclick = function(event) {
  if(event.target == document.getElementById("overlayregister")) {
    document.getElementById("overlayregister").style.display = "none";
  }
}