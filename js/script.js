const header = document.querySelector('header');
const headerMenu = header.querySelector('.menu');
const btnMenu = header.querySelector('button.show-for-small-only');

// toggle menu on/off
btnMenu.addEventListener('click',function(){
  // show menu by removing 'show-for-medium' class
  headerMenu.classList.toggle('show-for-medium');
  // add toggle state indicator
  this.classList.toggle('btnToggle');
  // change button text for toggled state
  changeBtnText();
})

// change button text for toggled state
// if your buttons are image-based, this will be different (get in touch)
function changeBtnText(){
  if(btnMenu.classList.contains('btnToggle')){
    btnMenu.textContent = 'X';
  } else {
    btnMenu.textContent = 'Menu'
  }
}