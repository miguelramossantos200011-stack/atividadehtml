
const v1 = Math.random() * (1.3 - 0.7) + 0.7;
const v2 = Math.random() * (1.3 - 0.7) + 0.7;
const v3 = Math.random() * (1.3 - 0.7) + 0.7;

window.addEventListener('scroll', () => {
    
    const maxScrollX = document.documentElement.scrollWidth - window.innerWidth;
    
    const scrollPercent = window.scrollX / maxScrollX;

    const carro1 = document.getElementById('c1');
    const carro2 = document.getElementById('c2');
    const carro3 = document.getElementById('c3');

    const pistaVisivel = window.innerWidth - 110; 

    let pos1 = Math.min(scrollPercent * v1, 1) * pistaVisivel;
    let pos2 = Math.min(scrollPercent * v2, 1) * pistaVisivel;
    let pos3 = Math.min(scrollPercent * v3, 1) * pistaVisivel;

    if (scrollPercent >= 1) {
        pos1 = pistaVisivel;
        pos2 = pistaVisivel;
        pos3 = pistaVisivel;
    }

    carro1.style.transform = `translateX(${pos1}px)`;
    carro2.style.transform = `translateX(${pos2}px)`;
    carro3.style.transform = `translateX(${pos3}px)`;
});
