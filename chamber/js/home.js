const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById("currentdate").innerHTML = new Date().toLocaleDateString('en-US', options);
document.getElementById("headerdate").innerHTML = new Date().toLocaleDateString('en-US', options);

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById("navBtn");
x.onclick = toggleMenu;

// // Code for greetings banner
// const d = new Date();
// let day = d.getDay();
// greeting = document.getElementById("meetingBanner");
// if (day == 1 || day == 2) {
//     greeting.classList.add("True")
//     greeting.innerHTML =  "Join us for the chamber meeting!";
// }

