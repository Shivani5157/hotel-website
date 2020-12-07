burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightNav')
navlist = document.querySelector('.navlist')



burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class')
    navlist.classList.toggle('v-class')
    navbar.classList.toggle('h-nav')

})