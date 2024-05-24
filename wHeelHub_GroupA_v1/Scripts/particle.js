const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

const mouse = { x: 0, y: 0 };

window.addEventListener('mousemove',
    function(event){
        mouse.x = event.x;
        mouse.y = event.y;
    }
);

class Particle {
    constructor(x, y, directionX, directionY, size, color){
        this.x = x; 
        this.y = y; 
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = '#f88603';
        ctx.fill();
    }
    update() {
        if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }

        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let speed = 0.05;

        this.x += this.directionX * speed;
        this.y += this.directionY * speed;
        this.draw();
    }
}

function innit(){
    particlesArray = [];
    let numberOfParticles = (1920* 1080) * 0.00005;
    for(let i = 0; i < numberOfParticles; i++){
        let size = (Math.random() * 1) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);

        let directionX = (Math.random() * 5) - 2.5;
        let directionY = (Math.random() * 5) - 2.5;
        let color = '#bdbdbd';
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

function connect() {
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let dx = particlesArray[a].x - particlesArray[b].x;
            let dy = particlesArray[a].y - particlesArray[b].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            let maxDistance = 75; 

            if (distance < maxDistance) {
                let opacity = Math.min(1, 1 - distance / maxDistance);
                ctx.strokeStyle = `rgb(248, 134, 3, ${opacity})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}


function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    connect();
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
}

innit();
animate();