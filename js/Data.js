const product = document.querySelector('.productList');
fetch('product.html')
    .then(res => res.text())
    .then(data => {
        product.innerHTML = data;
    });

const navbar = document.querySelector('.navbar');
fetch('navbar.html')
    .then(res => res.text())
    .then(data => {
        navbar.innerHTML = data;
    });
