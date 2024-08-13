const image = document.querySelector('.div-img');
const minos = document.getElementById('minos');
const aiacos = document.getElementById('aiacos');
const rhadamanthys = document.getElementById('rhadamanthys');
const hades = document.getElementById('hades');

//MINOS
const styles1 = `
    background-image: url('https://s1.zerochan.net/Griffon.Minos.600.598097.jpg');
`;
//AIACOS
const styles2 = `
    background-image: url('https://i.pinimg.com/474x/31/64/2b/31642bc9f59d85778c8b1d114dfa1241.jpg');
`;
//RHADAMANTHYS
const styles3 = `
    background-image: url('https://i.servimg.com/u/f58/12/54/76/82/tm/75faa910.jpg');
`;
//HADES
const styles4 = `
    background-image: url('https://i0.wp.com/pbs.twimg.com/media/FdvL9ybX0AAFWud.jpg?ssl=1');
`;


minos.addEventListener('click',()=>image.setAttribute('style',styles1));
aiacos.addEventListener('click',()=>image.setAttribute('style',styles2));
rhadamanthys.addEventListener('click',()=>image.setAttribute('style',styles3));
hades.addEventListener('click',()=>image.setAttribute('style',styles4));