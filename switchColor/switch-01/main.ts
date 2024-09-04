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

//OPTION THEME
const btnTheme = document.querySelectorAll('.theme-option') as NodeListOf<HTMLButtonElement>;
if(btnTheme){
    btnTheme.forEach(btn=>{
        btn.addEventListener('click',(event)=>{
            const target = event.target as HTMLButtonElement;
            const dataTheme = target.dataset.theme;
            //ROOT CSS
            const root = document.documentElement;
            if(dataTheme === 'theme-dark'){
                root.style.setProperty('--primary-color', '#000')
                root.style.setProperty('--primary-color-hover', '#333')
                root.style.setProperty('--primary-color-active', '#444')
                root.style.setProperty('--secondary-color', '#fff')
                root.style.setProperty('--secondary-color-hover', '#ccc')
                root.style.setProperty('--secondary-color-active', '#aaa')
            } else if(dataTheme == 'theme-light'){
                root.style.setProperty('--primary-color', '#fff')
                root.style.setProperty('--primary-color-hover', '#ccc')
                root.style.setProperty('--primary-color-active', '#aaa')
                root.style.setProperty('--secondary-color', '#000')
                root.style.setProperty('--secondary-color-hover', '#333')
                root.style.setProperty('--secondary-color-active', '#444')
            }
        })
    })
}
