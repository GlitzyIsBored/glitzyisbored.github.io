console.log('omg\nWeb first developed in 8/01/25, last updated 12/01/25');

//NAVBAR
const collapse = document.getElementById("expand");

collapse.addEventListener('click', action);
function action() {
	document.getElementById("nav").classList.toggle('active');
	collapse.classList.toggle('click');
}

//AGE
const birthDate = new Date("2006-07-25");
let toYear = birthDate.getFullYear();

document.getElementById("omgAge").innerHTML = new Date().getFullYear() - toYear;
