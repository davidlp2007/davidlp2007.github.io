<<<<<<< HEAD
window.onload = () => {
    const track = document.querySelector('.carrusel-centros'); 
    const slides = document.querySelectorAll('.diapositiva');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const dots = document.querySelectorAll('.punto'); // Seleccionamos los puntos

    let currentIndex = 0;

    function updateCarousel() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

        // --- LÓGICA DE LOS PUNTOS ---
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('activo');
            } else {
                dot.classList.remove('activo');
            }
        });
    }

    nextButton.addEventListener('click', (e) => {
        e.preventDefault();
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    prevButton.addEventListener('click', (e) => {
        e.preventDefault();
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateCarousel();
    });

    // Opcional: Que al clicar el punto también cambie la imagen
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });
=======
window.onload = () => {
    const track = document.querySelector('.carrusel-centros'); 
    const slides = document.querySelectorAll('.diapositiva');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const dots = document.querySelectorAll('.punto'); // Seleccionamos los puntos

    let currentIndex = 0;

    function updateCarousel() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

        // --- LÓGICA DE LOS PUNTOS ---
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('activo');
            } else {
                dot.classList.remove('activo');
            }
        });
    }

    nextButton.addEventListener('click', (e) => {
        e.preventDefault();
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    prevButton.addEventListener('click', (e) => {
        e.preventDefault();
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateCarousel();
    });

    // Opcional: Que al clicar el punto también cambie la imagen
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });
>>>>>>> 70e1da3b75dc8c608c414a3baa885d5d2138d473
};