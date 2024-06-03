const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 400;
canvas.style.border = '3px solid black';
canvas.style.cursor = 'pointer';


class Circle
{
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        c.strokeStyle = 'rgb(255, 22, 193)';
        c.lineWidth = 5;
        c.fillStyle = this.color;
        c.stroke();
        c.fill();
        c.closePath();
    }
    update() {
        this.draw();
    }
}

const circle = new Circle(0, 0, 50, 'blue');

function animate() {
    window.requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    circle.update();
}

animate();

canvas.addEventListener('mousemove', e => {
    circle.x = e.offsetX;
    circle.y = e.offsetY;
});

let circleScale = 'small';

canvas.addEventListener('click', () => {
    if(circleScale === 'small') {
        let max = circle.radius * 2;
        const inter = setInterval(() => {
            if( circle.radius >= max) {
                return clearInterval(inter)
            }
            circle.radius++;
        }, 1);
        circleScale = 'big';
    } else {
        let max = circle.radius / 2;
        const inter = setInterval(() => {
            if( circle.radius <= max) {
                return clearInterval(inter)
            }
            circle.radius--;
        }, 1);
        circleScale = 'small';
    }
});