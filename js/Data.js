const product = document.querySelector('.productList')
fetch('product.html')
.then(res => res.text())
.then(data => {
    product.innerHTML = data;
});
