const image = document.querySelector('.div-img');
const minos = document.getElementById('minos');
const aiacos = document.getElementById('aiacos');
const rhadamanthys = document.getElementById('rhadamanthys');
const hades = document.getElementById('hades');

//MINOS
const styles1 = `
    background-image: url('https://global-media-repository.s3.us-east-2.amazonaws.com/knights-of-the-zodiac/Judges/Minos/FemaleVersion/Minos_Female_001.jpg');
`;
//AIACOS
const styles2 = `
    background-image: url('https://global-media-repository.s3.us-east-2.amazonaws.com/knights-of-the-zodiac/Judges/Aiacos/FemaleVersion/Aiacos_Female_001.jpg');
`;
//RHADAMANTHYS
const styles3 = `
    background-image: url('https://global-media-repository.s3.us-east-2.amazonaws.com/knights-of-the-zodiac/Judges/Rhadamanthys/FemaleVersion/Rhadamanthys_Female_001.jpg');
`;
//HADES
const styles4 = `
    background-image: url('https://i0.wp.com/pbs.twimg.com/media/FdvL9ybX0AAFWud.jpg?ssl=1');
`;

//FONDO BLUR PARA EL "image-blur"
const imageBlur = document.querySelector('.image-blur');

minos.addEventListener('click',()=>{
    image.setAttribute('style',styles1);
    imageBlur.style.backgroundImage = `url(${'https://global-media-repository.s3.us-east-2.amazonaws.com/knights-of-the-zodiac/Judges/Minos/FemaleVersion/Minos_Female_001.jpg'})`;
});
aiacos.addEventListener('click',()=>{
    image.setAttribute('style',styles2);
    imageBlur.style.backgroundImage = `url(${'https://global-media-repository.s3.us-east-2.amazonaws.com/knights-of-the-zodiac/Judges/Aiacos/FemaleVersion/Aiacos_Female_001.jpg'})`;

});
rhadamanthys.addEventListener('click',()=>{
    image.setAttribute('style',styles3);
    imageBlur.style.backgroundImage = `url(${'https://global-media-repository.s3.us-east-2.amazonaws.com/knights-of-the-zodiac/Judges/Rhadamanthys/FemaleVersion/Rhadamanthys_Female_001.jpg'})`
});
hades.addEventListener('click',()=>image.setAttribute('style',styles4));