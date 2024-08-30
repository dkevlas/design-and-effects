const imagen = document.querySelector('.img') as HTMLImageElement;
const todo = document.querySelector('.bg-blur') as HTMLBodyElement;
const h1Title = document.querySelector('.h1-title') as HTMLHeadingElement;
const rutaImagen = imagen.src;
todo.style.backgroundImage = `url(${rutaImagen})`;

const body = document.body;
//Crear un elemento
const elementoDiv = document.createElement('div');
elementoDiv.classList.add('rojo');

//Obtener las opciones
const optionNO = document.querySelector('.nooo') as HTMLDivElement;
const optionSI = document.querySelector('.siii') as HTMLDivElement;

//Para crear número aleatorio
function crearNumRandom(): number{
    let nRamdom = (Math.random() * 60 + 10);
    console.log(Math.round(nRamdom))
    return Math.round(nRamdom)
}
function moverElemento(){
    optionNO.style.top = `${crearNumRandom()}%`;
    optionNO.style.left = `${crearNumRandom()}%`;
};

if(optionNO){
    optionNO.addEventListener('mouseenter', moverElemento);
}

if(optionSI){
    optionSI.addEventListener('click',()=>{
        optionNO.removeEventListener('mouseenter', moverElemento);
        optionNO.style.opacity = '.5';
        h1Title.style.color = 'red';
        h1Title.style.zIndex = '10';
        h1Title.textContent = 'Entonces muere...';
        body.appendChild(elementoDiv);
    })
}

