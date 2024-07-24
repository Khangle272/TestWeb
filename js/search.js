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
    let headings = document.getElementsByTagName('h3');

    for(let i = 0; i < headings.length; i++){
        let heading = items[i].getElementsByTagName('h3')[0];
        let value = heading.innerHTML || heading.innerText || heading.textContent;

        if(value.toUpperCase().indexOf(filter) > -1){
            items[i].style.display = '';
        } else {
            items[i].style.display = 'none';
        }
    }
}

function resetProducts() {
    let items = document.querySelectorAll('.products');
    items.forEach(item => item.style.display = '');
}

function handleSearchInput() {
    let input = document.getElementById('search-products');
    if (input.value === '') {
        resetProducts();
    } else {
        search();
    }
}
