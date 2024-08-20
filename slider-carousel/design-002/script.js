const items = document.querySelectorAll('.item');
let currentIndex = 0;

function showItem(index) {
    items.forEach(item => item.classList.remove('active'));
    items[index].classList.add('active');
}

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
});

// Mostrar el primer item al cargar la página
showItem(currentIndex);
