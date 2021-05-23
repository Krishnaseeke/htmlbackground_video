const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})
/*const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
let menuOpen = true;
menuToggle.addEventListener('click', () => {
  if(!menuOpen){
    showcase.classList.toggle('active');
    
    menuOpen = false;
  }else{
    menuToggle.classList.toggle('active');
   
  
    menuOpen = true;
  }
})
*/