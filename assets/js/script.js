// handle show navbar
let iconMenu = document.getElementsByClassName('nav-menu-mobile')
let iconMenuClose = document.getElementsByClassName("nav-menu-mobile-close")
let navMenu = document.getElementsByClassName("nav-menu")
console.log(iconMenuClose[0])
iconMenu[0].addEventListener("click",function (){
    navMenu[0].classList.add("show")
})
iconMenuClose[0].addEventListener("click",function (){
    navMenu[0].classList.remove("show")
})

