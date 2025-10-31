console.log('omg\nWeb first made in 14/05/23, last updated 31/10/25');

//NAVBAR
const collapse = document.getElementById("expand");

collapse.addEventListener('click', action);
function action() {
	document.getElementById("nav").classList.toggle('active');
	collapse.classList.toggle('click');
}

//AGE
const currentDate = new Date();
const birthdate = new Date('7/25/2006'); // screw this date format.

let timeDifference = Math.abs(currentDate - birthdate);
let dateToYear = Math.floor(timeDifference / (1000*60*60*24) / 365);

document.getElementById("omgAge").innerHTML = dateToYear;
