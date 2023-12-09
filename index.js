const menu = document.querySelector('.menu');
const navbar = document.querySelector('#navbar');
const closed = document.querySelector('.close');

menu.addEventListener('click',()=>{
   navbar.classList.add('active')
});

closed.addEventListener('click',()=>{
   navbar.classList.remove('active')
});

function validateForm() {
   let x = document.forms["myForm"]["fname"].value;
   if (x == "") {
     alert("Name must be filled out");
     return false;
   }
 }