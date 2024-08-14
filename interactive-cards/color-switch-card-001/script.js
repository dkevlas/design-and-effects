const image = document.querySelector('.div-img');
const minos = document.getElementById('minos');
const aiacos = document.getElementById('aiacos');
const rhadamanthys = document.getElementById('rhadamanthys');
const reset = document.getElementById('reset');

//PANDORA
const imgPandora = `https://global-media-repository.s3.us-east-2.amazonaws.com/knights-of-the-zodiac/Pandora/Pandora_001.jpg`;
//MINOS
const imgMinos = 'https://global-media-repository.s3.us-east-2.amazonaws.com/knights-of-the-zodiac/Judges/Minos/FemaleVersion/Minos_Female_001.jpg';
//AIACOS
const imgAiacos = 'https://global-media-repository.s3.us-east-2.amazonaws.com/knights-of-the-zodiac/Judges/Aiacos/FemaleVersion/Aiacos_Female_001.jpg';
//RHADAMANTHYS
const imgRhadamanthys = 'https://global-media-repository.s3.us-east-2.amazonaws.com/knights-of-the-zodiac/Judges/Rhadamanthys/FemaleVersion/Rhadamanthys_Female_001.jpg';

//FONDO BLUR PARA EL "image-blur"
const imageBlur = document.querySelector('.image-blur');

minos.addEventListener('click',()=>{
    image.style.backgroundImage = `url(${imgMinos})`;
    imageBlur.style.backgroundImage = `url(${imgMinos})`;
});
aiacos.addEventListener('click',()=>{
    image.style.backgroundImage = `url(${imgAiacos})`;
    imageBlur.style.backgroundImage = `url(${imgAiacos})`;
});
rhadamanthys.addEventListener('click',()=>{
    image.style.backgroundImage = `url(${imgRhadamanthys})`;
    imageBlur.style.backgroundImage = `url(${imgRhadamanthys})`;
});
reset.addEventListener('click',()=>{
    image.style.backgroundImage = 'none';
    image.style.backgroundColor = '#000000'; //`url(${imgPandora})`
    imageBlur.style.backgroundImage = 'none';
    imageBlur.style.backgroundColor = '#000000'; //`url(${imgPandora})`;
});