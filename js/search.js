const toggleSearch = (search, button) => {
    const searchBar = document.getElementById(search),
        searchButton = document.getElementById(button),
        searchInput = document.getElementById('searchStuff');

    searchButton.addEventListener('click', () => {
        searchBar.classList.toggle('show-search');
        if (searchBar.classList.contains('show-search')) {
            searchInput.focus();
        } else {
            searchInput.value = '';
            resetProducts();
        }
    });
}

toggleSearch('search-bar', 'search-button')

function search() {
    let filter = document.getElementById('searchStuff').value.toUpperCase();
    let items = document.querySelectorAll('.products');
    let noMatch = true;

    for (let i = 0; i < items.length; i++) {
        let heading = items[i].getElementsByTagName('h3')[0];
        let value = heading.innerHTML || heading.innerText || heading.textContent;

        if (value.toUpperCase().indexOf(filter) > -1) {
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
    let input = document.getElementById('searchStuff');
    if (input.value === '') {
        resetProducts();
    } else {
        search();
    }
}

document.getElementById('searchStuff').addEventListener('input', handleSearchInput);
