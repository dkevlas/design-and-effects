//Obtener los botones

const btnThanatos = document.querySelector('.btn-thanatos');
const btnHypnos = document.querySelector('.btn-hypnos');

//Seleccionamos al elemnto padre (en ese caso BODY) para la INFO

const dad = document.body;

//Crear elemento contenedor para leer INFO

const newElementDiv = document.createElement('div');

//Creamos elementos H1 y P para el elemnto contenedor

const newElementH1 = document.createElement('h1');
const newElementP = document.createElement('p');

//Le agregamos una clase al elemento contenedor

newElementDiv.classList.add('info');

//Creamos información (2 info) //NODO
//H1 - Título
const infoThanatosH1 = document.createTextNode(`Thanatos, el Amo de la Muerte Cruel`);
const infoHypnosH1 = document.createTextNode(`Hypnos, el Guardián del Sueño Eterno`);


//P - Párrafo
const infoThanatosP = document.createTextNode(`
    Thanatos es el dios de la muerte. A diferencia de su hermano Hypnos, Thanatos es más cruel y despiadado, disfrutando del sufrimiento de sus víctimas. En la serie, tiene cabello plateado y una personalidad arrogante.
    `);

const infoHypnosP = document.createTextNode(`
    Hypnos es el dios del sueño. En The Lost Canvas, es un personaje calculador y sereno que utiliza sus poderes para inducir el sueño eterno en sus enemigos. Su apariencia es elegante, con cabello dorado y una actitud calmada.
    `);

//

//Creamos elemento para BLUR al activar el evento (CLICK)

const blur = document.createElement('div');
blur.classList.add('blur');

// Creamos elemento para Cerrar

const close = document.createElement('div');
close.classList.add('close');

//Crear evento

btnThanatos.addEventListener('click',()=>{
    //Agregamos el BLUR
    dad.appendChild(blur);
    //Agregamos el contenedor al body "dad"
    dad.appendChild(newElementDiv);
    //Agregamos CLOSE al contenedor
    newElementDiv.appendChild(close);
    //Agregamos el H1 y P al contenerdor DIV
    newElementDiv.appendChild(newElementH1);
    newElementDiv.appendChild(newElementP);
    //Añadimos la info al elemento H1 y P
    newElementH1.appendChild(infoThanatosH1);
    newElementP.appendChild(infoThanatosP);
});
btnHypnos.addEventListener('click',()=>{
    //Agregamos el BLUR
    dad.appendChild(blur);
    //Agregamos el contenedor al body "dad"
    dad.appendChild(newElementDiv);
    //Agregamos el H1 y P al contenerdor DIV
    newElementDiv.appendChild(newElementH1);
    newElementDiv.appendChild(newElementP);
    //Añadimos la info al elemento H1 y P
    newElementH1.appendChild(infoHypnosH1);
    newElementP.appendChild(infoHypnosP);
});