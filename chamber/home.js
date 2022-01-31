function toggleMenu(){
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive")
}


function getDate(){
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
console.log(today.toLocaleDateString("en-US", options)); // Sunday, January 30, 2022
}