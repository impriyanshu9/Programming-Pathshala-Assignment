"use strict";

const nav_toggle_btn = document.getElementById('nav-toggle-btn');
const mob_nav = document.getElementById('mob-nav');
const footerYear = document.getElementById('footer_current_year');

const elemClassToggler = function(elem, classToToggle){
    elem.classList.toggle(classToToggle)
}
const getCurrentYear = function(){
    const date = new Date
    return date.getFullYear()
}

nav_toggle_btn.addEventListener("click",()=>{
    elemClassToggler(mob_nav, "hidden");
})
window.addEventListener("DOMContentLoaded",()=>{
    footerYear.innerHTML= getCurrentYear()
})