let catalog = document.getElementById('catalog-dropdown');
let catalog_butt = document.getElementById('catalogBtn');
let offers_track = document.getElementById('offers-track');
const leftbutton = document.getElementById('offers-prev');
const rightbutton = document.getElementById('offers-next');
const dots = document.querySelectorAll('.offers__dot');
let catalog_stat = false;

if (catalog_butt) {
    let catalogImages = catalog_butt.querySelectorAll('img.header__catalog-list-icon');

    catalog_butt.addEventListener('click', () => {
        catalog_stat = !catalog_stat;
        if (catalog) catalog.style.display = catalog_stat ? "flex" : "none";
        catalogImages.forEach(img => {
            img.classList.toggle('header__catalog-list-icon--active');
        });
    });
}

const arti_napol = [
    { img: '1', title: 'Молочная продукция' },
    { img: '2', title: 'Мясная продукция' },
    { img: '3', title: 'Ягоды' },
    { img: '4', title: 'Овощи' },
    { img: '2', title: 'Мясная продукция' },
    { img: '3', title: 'Ягоды' },
    { img: '4', title: 'Овощи' },
    { img: '1', title: 'Молочная продукция' },
    { img: '3', title: 'Ягоды' },
    { img: '2', title: 'Мясная продукция' },
    { img: '1', title: 'Молочная продукция' },
    { img: '4', title: 'Овощи' }
];

const articles_suda = document.getElementById('news-articles');
if (articles_suda) articles_suda.innerHTML = arti_napol.map(item => `
    <article>
        <img src="css/img/news_posts (${item.img}).png" alt="${item.title}">
        <div class="news__card-info">
            <div class="news__card-info-inner">
                <p></p>
                <h2>${item.title}</h2>
            </div>
        </div>
    </article>
`).join('');

const sec2_main_slider = [
    {
        img: 'carrot.png',
        sale: '-40%',
        tag1: 'Новинка',
        tag2: 'Хит',
        title: 'Морковь мытая 0.7–1.0 кг',
        oldPrice: '99,90 ₽/кг',
        newPrice: '59,90 ₽/кг',
        count: '2'
    },
    {
        img: 'carrot.png',
        sale: '-40%',
        tag1: 'Новинка',
        tag2: 'Хит',
        title: 'Морковь мытая 0.7–1.0 кг',
        oldPrice: '99,90 ₽/кг',
        newPrice: '59,90 ₽/кг',
        count: '1'
    },
    {
        img: 'carrot.png',
        sale: '-40%',
        tag1: 'Новинка',
        tag2: 'Хит',
        title: 'Морковь мытая 0.7–1.0 кг',
        oldPrice: '99,90 ₽/кг',
        newPrice: '59,90 ₽/кг',
        count: '1'
    },
    {
        img: 'carrot.png',
        sale: '-40%',
        tag1: 'Новинка',
        tag2: 'Хит',
        title: 'Морковь мытая 0.7–1.0 кг',
        oldPrice: '99,90 ₽/кг',
        newPrice: '59,90 ₽/кг',
        count: '1'
    }
];

offers_track.innerHTML = sec2_main_slider.map(item => `
    <article>
        <div class="offers__card-top">
            <div class="offers__card-top-inner" style="background-image: url('css/img/${item.img}')">
                <div class="offers__card-badges">
                    <div class="offers__badge--sale">
                        <p>${item.sale}</p>
                    </div>
                    <div class="offers__badge--new">
                        <p>${item.tag1}</p>
                    </div>
                    <div class="offers__badge--hit">
                        <p>${item.tag2}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="offers__card-bottom">
            <div class="offers__card-body">
                <h2>${item.title}</h2>
                <p>${item.oldPrice}</p>
                <h4>${item.newPrice}</h4>
                <div class="offers__card-actions">
                    <div class="counter">
                        <button class="counter__btn--minus">-</button>
                        <span class="counter__num">${item.count}</span>
                        <button class="counter__btn--plus">+</button>
                    </div>
                    <button class="offers__card-buy">В корзину</button>
                </div>
            </div>
        </div>
    </article>
`).join('');
