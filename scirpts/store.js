let deviceHrefs = document.querySelectorAll('.deviceHref');
let cardsContainer = document.querySelector('.cards-container');
deviceHrefs.forEach(href => href.addEventListener('click', (e) => {
    e.preventDefault();
    deviceHrefs.forEach(el => el.classList.remove('active'));
    href.classList.add('active');
    filterProducts(href.id);
}));
function page404() {
    let fileName = window.location.pathname.split('/').pop();
    if(fileName=="index.html" || fileName == "regpage.html"){
        window.open('page404.html', '_self');
    }
    else if (fileName == "devices.html" || fileName == "setup.html"){
        window.open('../../page404.html', '_self');
    }
    else{
        window.open('../page404.html', '_self');
    }
}
const mouseid = 'mouseid';
const keyboardid = 'keyboardid';
const microphoneid = 'microphoneid';
const earphoneid = 'earphoneid';
const gamepadid = 'gamepadid';

const products = [
    { id: 1, name: 'Мышь', model: 'Level Up L Pro407', price: '87.99$', type: 'mouse' },
    { id: 2, name: 'Клавиатура', model: 'Level Up L K-100', price: '149.99$', type: 'keyboard' },
    { id: 3, name: 'Гарнитура', model: 'Level Up L H-7 Pro', price: '79.99$', type: 'earphone' },
    { id: 4, name: 'Микрофон', model: 'Level Up L M-200', price: '59.99$', type: 'microphone' },
    { id: 5, name: 'Геймпад', model: 'Level Up L G-55', price: '69.99$', type: 'gamepad' },
    { id: 6, name: 'Мышь', model: 'Level Up L Pro X', price: '129.99$', type: 'mouse' },
    { id: 7, name: 'Клавиатура', model: 'Level Up L K-200 RGB', price: '199.99$', type: 'keyboard' },
    { id: 8, name: 'Гарнитура', model: 'Level Up L H-10', price: '99.99$', type: 'earphone' },
    { id: 9, name: 'Микрофон', model: 'Level Up L M-300', price: '89.99$', type: 'microphone' }
];

function renderProducts(filterType = 'all') {
    const cardsContainer = document.querySelector('.cards-container');
    if (!cardsContainer) return;
    
    let filteredProducts = products;
    if (filterType !== 'all') {
        filteredProducts = products.filter(p => p.type === filterType);
    }
    
    let html = '<div class="cards-box">';
    filteredProducts.forEach(product => {
        html += `
            <article class="card ${product.type}">
                <span class="card-text">
                    <h3>${product.name}</h3>
                    <small>${product.model}</small>
                </span>
                <div class="test-img5"></div>
                <span class="card-text">
                    <h4>${product.price}</h4>
                    <button class="classic-btn buy-btn" data-product-id="${product.id}">
                        <p>Купить</p>
                    </button>
                </span>
            </article>
        `;
    });
    html += '</div>';
    
    cardsContainer.innerHTML = html;
    const buyBtns = cardsContainer.querySelectorAll('.buy-btn');
    buyBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = this.dataset.productId;
            const product = products.find(p => p.id === parseInt(productId));
            if (product) {
                console.log(`🛒 Товар: ${product.name} ${product.model} - ${product.price}`);
            }
            page404();
        });
    });
}

function filterProducts(name) {
    if (name === 'allid') {
        renderProducts('all');
    } else if (name === mouseid) {
        renderProducts('mouse');
    } else if (name === keyboardid) {
        renderProducts('keyboard');
    } else if (name === microphoneid) {
        renderProducts('microphone');
    } else if (name === earphoneid) {
        renderProducts('earphone');
    } else if (name === gamepadid) {
        renderProducts('gamepad');
    }
}

renderProducts('all');