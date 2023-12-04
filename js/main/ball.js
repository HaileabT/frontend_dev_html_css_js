let ball = document.getElementById("ball");

let randomStyles = ["ease-in", "ease-out", "ease-in-out", "linear", "cubic-bezier(0.87, 0.06, 0.12, 0.99)"];
const randomColors = () => {
    let randX = Math.floor(Math.random() * 255) + 1;
    let randX1 = Math.floor(Math.random() * 255) + 1;
    let randX2 = Math.floor(Math.random() * 255) + 1;
    let randY = Math.floor(Math.random() * 255) + 1;
    let randY1 = Math.floor(Math.random() * 255) + 1;
    let randY2 = Math.floor(Math.random() * 255) + 1;
    ball.style.background = `linear-gradient(to right, rgb(${randX}, ${randX1}, ${randX2}), rgb(${randY}, ${randY1}, ${randY2}))`
}

const randomPlaces = () => {
    let randX = 1;
    let randY = 2;
    randX = Math.floor(Math.random() * 100) + 1;
    randY = Math.floor(Math.random() * 100) + 1;
    let scale = Math.floor(Math.random() * 100) + 50;
    let randS = Math.floor(Math.random() * 4);

    ball.style.top = `${randX}%`;
    ball.style.left = `${randY}%`;
    ball.style.width = `${scale}px`;
    ball.style.height = `${scale}px`;
    ball.style.filter = `blur(${20-(scale/10)}px)`
    ball.style.transition = `1s ${randomStyles[randS]}`;
}


setInterval(randomColors, 1000);
setInterval(randomPlaces, 1000);