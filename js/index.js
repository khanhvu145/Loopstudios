const btn_menu = document.querySelector('.header__menu');
const btn_close = document.querySelector('.header__close');
const nav_mobile = document.querySelector('.nav__mobile');

btn_menu.onclick = function() {
    btn_menu.style.display = 'none';
    btn_close.style.display = 'block';
    nav_mobile.style.opacity = '1';
    nav_mobile.style.transform = 'translateX(0)';
}
btn_close.onclick = function() {
    btn_menu.style.display = 'block';
    btn_close.style.display = 'none';
    nav_mobile.style.opacity = '0';
    nav_mobile.style.transform = 'translateX(100%)';
}

// Defining event listener function
function displayWindowSize(){
    var width = document.documentElement.clientWidth;
    if(width > 740){
        btn_menu.style.display = 'none';
        btn_close.style.display = 'none';
    }
    else{
    btn_menu.style.display = 'block';
    }
}
    
// Attaching the event listener function to window's resize event
window.addEventListener("resize", displayWindowSize);

// Calling the function for the first time
displayWindowSize();