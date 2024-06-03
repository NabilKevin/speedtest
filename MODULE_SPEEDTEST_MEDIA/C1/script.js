const mouse = document.querySelector('.mouse');
window.addEventListener('click', e => {
    mouse.style.left = `${e.x - 25}px`;
    mouse.style.top = `${e.y - 25}px`;
    mouse.style.display = 'block';
    setTimeout(() => {
        mouse.style.transform = 'scale(1.75)';
        mouse.style.opacity = '1';
    }, 1);
    setTimeout(() => {
        mouse.style.opacity = '0';
    }, 100);
    setTimeout(() => {
        mouse.style.transform = 'scale(0)';
        mouse.style.display = 'none';
    }, 200);
})