const menuSect = document.getElementById('menu-sect');
const closeIcon = document.getElementById('close-icon');
const menuOpen = (navID, toggleID) =>{
    const toggle = document.getElementById(toggleID),
    nav = document.getElementById(navID)

    if(nav && toggle){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('opened')
        })
    }
    
}
closeIcon.addEventListener('click', function(){
    const removeMenu = document.getElementById('nav-menu')
    removeMenu.classList.remove('opened')
})
menuOpen('nav-menu', 'menu-icon')

const navLink = document.querySelectorAll('.nav_link')

function selectActive(){
    navLink.forEach(e => e.classList.remove('selected'))
    this.classList.add('selected')

    const removeMenu = document.getElementById('nav-menu')
    removeMenu.classList.remove('opened')
}

navLink.forEach(e => e.addEventListener('click', selectActive))