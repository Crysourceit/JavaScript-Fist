// reference
const menu = document.getElementById('menu');
const display = document.getElementById('display');
const btn = document.getElementById('btn');


// event
menu.addEventListener('change', getMenu);
btn.addEventListener('click', showWelcome)


function getMenu() {
   console.log(menu.value);
   display.innerText = menu.value;
}

function showWelcome() {
   alert("Welcome To Page");
}