//Obteniendo el Slider en Movimiento
const slideTrack = document.querySelector('.slide-track');
//Obteniedo los slides
const slides = document.querySelectorAll('.slide');


slides.forEach(slide=>{
    slide.addEventListener('click',()=>{
        console.log('Hola Mundo');
        slideTrack.style.animationPlayState = 'paused';
    })
    slide.addEventListener('mouseleave',()=>{
        slideTrack.style.animationPlayState = 'running';
    })
})

