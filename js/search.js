function closeSearch(){
    document.querySelector('.search-nav').style.display = 'none';
    document.getElementById('search-products').value = ''; 
    resetProducts();
}

function openSearch(){
    document.querySelector('.search-nav').style.display = 'block';
}

function search(){
    let filter = document.getElementById('search-products').value.toUpperCase();
    let items = document.querySelectorAll('.products');
    let noMatch = true;

    for(let i = 0; i < items.length; i++){
        let heading = items[i].getElementsByTagName('h3')[0];
        let value = heading.innerHTML || heading.innerText || heading.textContent;

        if(value.toUpperCase().indexOf(filter) > -1){
            items[i].style.display = '';
            noMatch = false;
        } else {
            items[i].style.display = 'none';
        }
    }

    let noProductsMessage = document.getElementById('no-products-message');
    if (noMatch) {
        noProductsMessage.style.display = 'block';
    } else {
        noProductsMessage.style.display = 'none';
    }
}

function resetProducts() {
    let items = document.querySelectorAll('.products');
    items.forEach(item => item.style.display = '');
    document.getElementById('no-products-message').style.display = 'none';
}

function handleSearchInput() {
    let input = document.getElementById('search-products');
    if (input.value === '') {
        resetProducts();
    } else {
        search();
    }
}
