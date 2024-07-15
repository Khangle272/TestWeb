
function showPopup() {
    document.querySelector('.popup-img').style.display = 'block';
}

document.querySelector('.popup-img span').onclick = function () {
    document.querySelector('.popup-img').style.display = 'none';
    resetZoom();
}

let scale = 1;
let panning = false;
let pointX = 0;
let pointY = 0;
let start = { x: 0, y: 0 };
let zoom = document.getElementById("zoom");
let initialDistance = null;

function setTransform() {
    zoom.style.transform = "translate(" + pointX + "px," + pointY + "px) scale(" + scale + ")";
}

function resetZoom() {
    scale = 1;
    pointX = 0;
    pointY = 0;
    setTransform();
}
//For Computer
function onMouseDown(e) {
    e.preventDefault();
    start = { x: e.clientX - pointX, y: e.clientY - pointY };
    panning = true;
}

function onMouseUp() {
    panning = false;
}

function onMouseMove(e) {
    e.preventDefault();
    if (!panning) return;
    pointX = (e.clientX - start.x);
    pointY = (e.clientY - start.y);
    setTransform();
}

function onWheel(e) {
    e.preventDefault();
    let xs = (e.clientX - pointX) / scale;
    let ys = (e.clientY - pointY) / scale;
    let delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);
    let previousScale = scale;
    scale *= (delta > 0) ? 1.07 : 1 / 1.07; // Adjust for sensivity
    pointX -= xs * (scale - previousScale);
    pointY -= ys * (scale - previousScale);
    setTransform();
}

//For Mobile
function onTouchStart(e) {
    if (e.touches.length === 1) {
        start = { x: e.touches[0].clientX - pointX, y: e.touches[0].clientY - pointY };
        panning = true;
    } else if (e.touches.length === 2) {
        panning = false;
        initialDistance = getDistance(e.touches[0], e.touches[1]);
    }
}

function onTouchMove(e) {
    e.preventDefault();
    if (e.touches.length === 1 && panning) {
        pointX = (e.touches[0].clientX - start.x);
        pointY = (e.touches[0].clientY - start.y);
        setTransform();
    } else if (e.touches.length === 2 && initialDistance) {
        let currentDistance = getDistance(e.touches[0], e.touches[1]);
        let deltaScale = currentDistance / initialDistance;
        initialDistance = currentDistance;
        scale *= deltaScale;
        setTransform();
    }
}

function onTouchEnd(e) {
    if (e.touches.length < 2) {
        initialDistance = null;
    }
    panning = false;
}

function getDistance(touch1, touch2) {
    let dx = touch1.clientX - touch2.clientX;
    let dy = touch1.clientY - touch2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
}

zoom.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);
document.addEventListener('mousemove', onMouseMove);
zoom.addEventListener('wheel', onWheel);
zoom.addEventListener('touchstart', onTouchStart);
document.addEventListener('touchend', onTouchEnd);
document.addEventListener('touchmove', onTouchMove);
document.addEventListener('mouseleave', onMouseUp);
