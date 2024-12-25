console.log('omg');
console.log("Web first developed in 14/05/23. Last updated 24/08/24");

//VARIABLES
const collapse = document.getElementById("option");

const birthDate = new Date("July 25, 2006");
let toYear = birthDate.getFullYear();

//NAVBAR
collapse.addEventListener("click", action);
function action() {
    document.getElementById("nav").classList.toggle('active');
    collapse.classList.toggle('click');
}

//AGE
document.getElementById("omgAge").innerHTML = new Date().getFullYear() - toYear;
