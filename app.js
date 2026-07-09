let menu = document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menu.onclick =() =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

VANTA.NET({
    el: "#home",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,

    minHeight: 200,
    minWidth: 200,

    scale: 1,
    scaleMobile: 1,

    color: 0x8b5cf6,
    backgroundColor: 0x0b0f1a,

    points: 12,
    maxDistance: 22,
    spacing: 18,

    showDots: true
});