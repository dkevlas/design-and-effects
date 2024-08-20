document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const items = document.querySelectorAll('.item');
    const itemWidth = parseInt(getComputedStyle(items[0]).width + parseInt(getComputedStyle(container).gap)/2);
    /*
    const estilosDeLosItems = getComputedStyle(items[0]);
    console.log(itemWidth)
    console.log()
    console.log(estilosDeLosItems.width)
    console.log(estilosDeLosItems.marginLeft)
    console.log(estilosDeLosItems.marginRight)
*/

    function moveNext() {
        container.style.transition = 'transform 1s linear';
        container.style.transform = `translateX(-${itemWidth}px)`;

        container.addEventListener('transitionend', () => {
        // Mover el primer elemento al final
        container.appendChild(container.firstElementChild);

        // Resetea la transición y el transform para mantener la continuidad
        container.style.transition = 'none';
        container.style.transform = 'translateX(0)';
        
        // Forzar reflujo para que el navegador reconozca el cambio antes de reactivar la transición
        container.offsetHeight; // Esto es intencional

        console.log(container.offsetHeight)

        
        container.style.transition = 'transform 1s linear';
        }, { once: true });
    }

    // Mueve el carrusel cada 2 segundos
    setInterval(moveNext, 1500);
});


//Obtenemos al SLIDER
/*
const slider = document.querySelector('.container');
//Obtenemos a los ITEMS
const items = document.querySelectorAll('.item');

function item(){
    slider.removeChild(items[0]);
    slider.appendChild(items[0]);
}

setInterval(item,5000);
*/