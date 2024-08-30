const imagen = document.querySelector('.img') as HTMLImageElement;
const todo = document.querySelector('.body') as HTMLBodyElement;

const rutaImagen = imagen.src;
todo.style.backgroundImage = `url(${rutaImagen})`;