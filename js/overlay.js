document.getElementById('check').addEventListener('change', function () {
    document.querySelector('.overlay').style.display = this.checked ? 'block' : 'none';
});
document.querySelector('.overlay').addEventListener('click', function () {
    document.getElementById('check').checked = false;
    this.style.display = 'none';
});