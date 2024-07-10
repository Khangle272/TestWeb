function showPopup() {
    document.querySelector('.popup-img').style.display = 'block';
}

document.querySelector('.popup-img span').onclick = function() {
    document.querySelector('.popup-img').style.display = 'none';
}

var scale = 1;
var panning = false;
var pointX = 0;
var pointY = 0;
var start = {x: 0, y: 0};
var zoom = document.getElementById("zoom");
// Cho người dùng máy tính
function setTransform() {
    zoom.style.transform = "translate(" + pointX + "px," + pointY + "px) scale(" + scale + ")";
}

function onMouseDown(e) {
    e.preventDefault();
    start = {x: e.clientX - pointX, y: e.clientY - pointY};
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
    var xs = (e.clientX - pointX) / scale;
    var ys = (e.clientY - pointY) / scale;
    var delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);
    var previousScale = scale;
    scale *= (delta > 0) ? 1.05 : 1 / 1.05; // Chỉnh Độ Nhạy Tại Đây
    pointX -= xs * (scale - previousScale);
    pointY -= ys * (scale - previousScale);
    setTransform();
}
// Cho người dùng điện thoại
function onTouchStart(e) {
    if (e.touches.length == 1) {
        start = {x: e.touches[0].clientX - pointX, y: e.touches[0].clientY - pointY};
        panning = true;
    }
}

function onTouchMove(e) {
    e.preventDefault();
    if (!panning || e.touches.length != 1) return;
    pointX = (e.touches[0].clientX - start.x);
    pointY = (e.touches[0].clientY - start.y);
    setTransform();
}

function onTouchEnd() {
    panning = false;
}

zoom.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);
document.addEventListener('mousemove', onMouseMove);
zoom.addEventListener('wheel', onWheel);
zoom.addEventListener('touchstart', onTouchStart);
document.addEventListener('touchend', onTouchEnd);
document.addEventListener('touchmove', onTouchMove);
document.addEventListener('mouseleave', onMouseUp);
