//BOTÓN TOGGLE
const btnToggle = document.querySelector('.menu-toggle') as HTMLButtonElement;
//CONTENEDOR MÓVIL
const navMobile = document.querySelector('.nav-container-mobile') as HTMLDivElement;
if(btnToggle){
    btnToggle.addEventListener('click',()=>{
        if(navMobile){
            navMobile.classList.toggle('active');
        }
    })
}