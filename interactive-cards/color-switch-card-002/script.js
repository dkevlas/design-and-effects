//Obtener los botones

const btnThanatos = document.querySelector('.btn-thanatos');
const btnHypnos = document.querySelector('.btn-hypnos');

//Seleccionamos al elemnto padre (en ese caso BODY) para la INFO

const dad = document.body;

//Crear elemento contenedor para leer INFO
const newElementDiv = document.createElement('div');
//Le agregamos una clase al elemento contenedor
newElementDiv.classList.add('info');

//Creamos elementos H1 y P para el elemnto contenedor

const newElementH1 = document.createElement('h1');
const newElementP = document.createElement('p');

//Creamos elemento para BLUR al activar el evento (CLICK)

const blur = document.createElement('div');
blur.classList.add('blur');

// Creamos elemento para Cerrar

const close = document.createElement('span');
close.classList.add('close');

//Clase para el ICONS
close.classList.add('material-symbols-outlined');
close.innerText = 'close';

//******************************/
//Crear función para mostrar la Información

function showInfo(title, description){
    // Limpiamos el contenedor antes de agregar contenido
    newElementDiv.innerHTML = '';
    //Creamo el elemento H1 y P
    const newH1 = document.createElement('h1');
    const newP = document.createElement('p');

    //Añadimos información
    newH1.textContent = title;
    newP.textContent = description;

    //Agregamos el BLUR
    dad.appendChild(blur);

    //Agregamos el contenedor al body "dad"
    dad.appendChild(newElementDiv);

    //Agregamos el  H1 y P al contenedor
    newElementDiv.appendChild(newH1);
    newElementDiv.appendChild(newP);

    //Agregamos CLOSE al contenedor
    newElementDiv.appendChild(close);
}

//Creamos evento para los botones de los Dioses Gemelos

btnThanatos.addEventListener('click',()=>showInfo(
    'Thanatos, el Amo de la Muerte Cruel',
    'Thanatos es el dios de la muerte. A diferencia de su hermano Hypnos, Thanatos es más cruel y despiadado, disfrutando del sufrimiento de sus víctimas. En la serie, tiene cabello plateado y una personalidad arrogante.'
));
btnHypnos.addEventListener('click',()=>showInfo(
    'Hypnos, el Guardián del Sueño Eterno',
    'Hypnos es el dios del sueño. En The Lost Canvas, es un personaje calculador y sereno que utiliza sus poderes para inducir el sueño eterno en sus enemigos. Su apariencia es elegante, con cabello dorado y una actitud calmada.'
));


//Creamos evento para el botón CLOSE y así removemos la informacion
close.addEventListener('click',()=>{
    //Removemos el contenedor y el BLUR
    dad.removeChild(newElementDiv)
    dad.removeChild(blur);
})

