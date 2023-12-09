const menu = document.querySelector('.menu');
const navbar = document.querySelector('#navbar');
const closed = document.querySelector('.close');

menu.addEventListener('click',()=>{
   navbar.classList.add('active')
});

closed.addEventListener('click',()=>{
   navbar.classList.remove('active')
});

