function showPopup() {
    document.querySelector('.popup-img').style.display = 'block';
}

document.querySelector('.popup-img span').onclick = function() {
    document.querySelector('.popup-img').style.display = 'none';
}
