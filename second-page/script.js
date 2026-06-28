let catalog = document.getElementById('catalogOverlay');
let catalog_butt = document.getElementById('catalogBtn');
let butt_down = document.getElementById('prev-btn')
let butt_up = document.getElementById('next-btn')
let rounds = document.querySelectorAll('.promo__dot')
let catalog_stat = false;

let mal = [
    {mal_active : "",
    title: "Малина свежемороженая",
    text: 'Малина – очень вкусная и ароматная ягода. Она обладает жаропонижающим и противовоспалительным эффектом, богата железом, медью и витаминами А, Е, РР, В2. На производстве используется технология шоковой заморозки, что позволяет сохранить вкус, аромат и пользу свежих ягод. В свежем виде эта ягода – настоящее лакомство. Кроме того с ней можно готовить различные десерты и пироги.',
    price_now: "250 ₽/кг",
    price_old: "350 ₽/кг",
    img_src: "css/img/malinka (2).png"
    },

    {mal_active : " promo__slide--hidden",
    title: "Малина свежемороженая",
    text: 'Малина – очень вкусная и ароматная ягода. Она обладает жаропонижающим и противовоспалительным эффектом, богата железом, медью и витаминами А, Е, РР, В2. На производстве используется технология шоковой заморозки, что позволяет сохранить вкус, аромат и пользу свежих ягод. В свежем виде эта ягода – настоящее лакомство. Кроме того с ней можно готовить различные десерты и пироги.',
    price_now: "250 ₽/кг",
    price_old: "350 ₽/кг",
    img_src: "css\img\malinka (2).png"
    }   
]

let artForSlider = [
    {
        img_slider: "1",
        title:"Молочная продукция"
    },

    {
        img_slider: "2",
        title:"Мясная продукция"
    },

    {
        img_slider: "3",
        title:"Овощи"
    },

    {
        img_slider: "4",
        title:"Ягоды"
    },

    {
        img_slider: "1",
        title:"Молочная продукция"
    },

    {
        img_slider: "2",
        title:"Мясная продукция"
    },

    {
        img_slider: "3",
        title:"Овощи"
    },

    {
        img_slider: "4",
        title:"Ягоды"
    },
]

let aricle_firstSlider = [
    {
        img_num:'1',
        item_name:'Кетчуп «Томатный „Кубаночка"» 310 г, дойпак 1/20',
        old_price: '55,00 ₽',
        new_price: '42,30 ₽'
    },

    {
        img_num:'2',
        item_name:'Кетчуп «Томатный „Кубаночка"» 310 г, дойпак 1/20',
        old_price: '55,00 ₽',
        new_price: '42,30 ₽'
    },

    {
        img_num:'3',
        item_name:'Кетчуп «Томатный „Кубаночка"» 310 г, дойпак 1/20',
        old_price: '55,00 ₽',
        new_price: '42,30 ₽'
    },

    {
        img_num:'4',
        item_name:'Кетчуп «Томатный „Кубаночка"» 310 г, дойпак 1/20',
        old_price: '55,00 ₽',
        new_price: '42,30 ₽'
    },

    {
        img_num:'5',
        item_name:'Кетчуп «Томатный „Кубаночка"» 310 г, дойпак 1/20',
        old_price: '55,00 ₽',
        new_price: '42,30 ₽'
    },

    {
        img_num:'6',
        item_name:'Кетчуп «Томатный „Кубаночка"» 310 г, дойпак 1/20',
        old_price: '55,00 ₽',
        new_price: '42,30 ₽'
    },

    {
        img_num:'7',
        item_name:'Кетчуп «Томатный „Кубаночка"» 310 г, дойпак 1/20',
        old_price: '55,00 ₽',
        new_price: '42,30 ₽'
    },

    {
        img_num:'8',
        item_name:'Кетчуп «Томатный „Кубаночка"» 310 г, дойпак 1/20',
        old_price: '55,00 ₽',
        new_price: '42,30 ₽'
    },
]

const arti_napol = [
    {
       img: '1', 
       date: '15.12.2021',
       title: '«Самое ценное в нашем мире — овощи»'
    },

    {
       img: '2', 
       date: '15.12.2021',
       title: 'Чувсто вкуса'
    },

    {
       img: '3', 
       date: '15.12.2021',
       title: '"TDA" установила новый мировой рекорд Гиннесса'
    },

    {
       img: '2', 
       date: '15.12.2021',
       title: 'Чувсто вкуса'
    },

    {
       img: '3', 
       date: '15.12.2021',
       title: '"TDA" установила новый мировой рекорд Гиннесса'
    },

    {
       img: '1', 
       date: '15.12.2021',
       title: '«Самое ценное в нашем мире — овощи»'
    },

    {
       img: '3', 
       date: '15.12.2021',
       title: '"TDA" установила новый мировой рекорд Гиннесса'
    },

    {
       img: '2', 
       date: '15.12.2021',
       title: 'Чувсто вкуса'
    },

    {
       img: '1', 
       date: '15.12.2021',
       title: '«Самое ценное в нашем мире — овощи»'
    },

    {
       img: '1', 
       date: '15.12.2021',
       title: '«Самое ценное в нашем мире — овощи»'
    },

    {
       img: '2', 
       date: '15.12.2021',
       title: 'Чувсто вкуса'
    },

    {
       img: '3', 
       date: '15.12.2021',
       title: '"TDA" установила новый мировой рекорд Гиннесса'
    }
]

const sliderNews = document.getElementById('news-track')

sliderNews.innerHTML = arti_napol.map(
    item => `<article>
                    <img src="css/img/news_posts (${item.img}).png" alt="">
                    <div class="news__item-body">
                        <div>
                            <p>${item.date}</p>
                            <h2>${item.title}</h2>
                        </div>
                    </div>
                </article>
               
            </div>`,
).join('');

const carousel = document.getElementById('carousel-track')

carousel.innerHTML = aricle_firstSlider.map(
    item => `<article>
                        <img src="css/img/(${item.img_num}).png" alt="">
                        <div class="product__card-info">
                            <p>${item.item_name}</p>
                            <div class="product__card-bottom">
                                <div>
                                    <h2>${item.old_price}</h2>
                                    <span>${item.new_price}</span>
                                </div>
                                <button>
                                    <img src="css/img/cart.svg" alt="">
                                </button>
                            </div>
                            
                        </div>
                    </article>`,
).join('');

const leftButton = document.querySelector('.product__carousel-btn--prev')
const rightButton = document.querySelector('.product__carousel-btn--next')

let move = 0

leftButton.addEventListener('click', () => {
    if (move < 21){
        move += 7
        console.log(`Left Button press: ${move}`)
        carousel.style.transform = `translateX(${move}vw)`
        leftButton.style.opacity = '1'
        rightButton.style.opacity = '1'
    } else{
        leftButton.style.opacity = '0.5'
    }

    
})

rightButton.addEventListener('click', () => {

    if (move > -21){
        move -= 7
        console.log(`Right Button press: ${move}`)
        carousel.style.transform = `translateX(${move}vw)`
        rightButton.style.opacity = '1'
        leftButton.style.opacity = '1'
    } else{
        rightButton.style.opacity = '0.5'
    }
    
})

const miniItems = document.querySelectorAll('.product__circle-item');
const mainImg = document.querySelector('.product__main-view div img');
const btnLeft = document.getElementById('product-prev');
const btnRight = document.getElementById('product-next');

let currentIndex = 0;
const totalItems = miniItems.length;

const imagesSrc = Array.from(miniItems).map(item => item.querySelector('img').src);


function updataPrikola() {
    mainImg.src = imagesSrc[currentIndex];
    
    miniItems.forEach(item => item.classList.remove('product__circle-item--active'));
    miniItems[currentIndex].classList.add('product__circle-item--active');
}

updataPrikola();

btnRight.addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updataPrikola();
});

btnLeft.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1; 
    }
    updataPrikola();
});

const sliderCart = document.getElementById('categories-list')

sliderCart.innerHTML = artForSlider.map(
    item => `<article class="categories__item">
                <img src="css/img/slider-img (${item.img_slider}).png" alt="">
                <div>
                    <h3>${item.title}</h3>
                </div>
            </article>`,
).join('');

const scrollBarr = document.querySelector('.categories__scrollbar')
const scrollTap = document.querySelector('.categories__scrollbar-thumb')

let articleMoves = document.querySelectorAll(".categories__item")

let isDragging = false
let offsetX, offsetY

scrollTap.addEventListener('mousedown', (e) =>{
    isDragging = true;
    offsetX = e.clientX - scrollTap.getBoundingClientRect().left;
    document.body.style.userSelect = 'none'; 
})

document.addEventListener('mousemove', (e) =>{
    if (!isDragging) return

    const barrRect = scrollBarr.getBoundingClientRect()
    
    let x = e.clientX - barrRect.left - offsetX

    const minX = 0;
    const maxX = scrollBarr.clientWidth - scrollTap.clientWidth

    x = Math.max(minX, Math.min(x, maxX))
    scrollTap.style.left = `${x}px`

    const progress = x / maxX   
    const maxScroll = sliderCart.scrollWidth - sliderCart.clientWidth
    
    sliderCart.scrollLeft = progress * maxScroll
})

document.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.userSelect = ''
})

let main_them = document.getElementById('promo-slides')

main_them.innerHTML = mal.map(
    item => `<article class="promo__slide${item.mal_active}">
                    <div class="promo__slide-left">
                        <h2>${item.title}</h2>
                        <p>${item.text}</p>
                        <div class="promo__prices">
                            <h3>${item.price_now}</h3>
                            <h4>${item.price_old}</h4>
                        </div>
                        <div class="promo__slide-btns">
                            <button class="promo__btn-cart">В корзину</button>
                            <button class="promo__btn-detail">Подробнее</button>
                        </div>
                    </div>
                    <div class="promo__slide-right">
                        <img src="${item.img_src}" alt="" class="promo__slide-img">
                    </div>
                </article>`,
).join('');

let articles = document.querySelectorAll('.promo__slide')
let round = document.querySelectorAll('.promo__dot')

let numberRound = 0

function updateRound(){
    round.forEach((num, index) => {
        if (index === numberRound){
            num.classList.add('promo__dot--active')
        } else{
            num.classList.remove('promo__dot--active')
        }
    })
}

butt_down.addEventListener('click', () => {
    console.log('Кнопка вниз нажата')
    articles.forEach(art => {
        art.classList.toggle('promo__slide--hidden') 
        console.log('Переключил')
    })

    if (numberRound > 0) {
        numberRound--;
    } else {
        numberRound = round.length - 1; 
    }

    updateRound();
    console.log('Поменял кружочек')
})

butt_up.addEventListener('click', () => {
    console.log('Кнопка вверх нажата')
    articles.forEach(art => {
        art.classList.toggle('promo__slide--hidden')
        console.log('Переключил')
    })

    if (numberRound < round.length - 1) {
        numberRound++;
    } else {
        numberRound = 0; 
    }

    updateRound();
    console.log('Поменял кружочек')
})

const newsTrack = document.getElementById('news-track');
const newsLine = document.getElementById('news-scrollbar');
const newsPipka = document.querySelector('.news__scrollbar-thumb');

let isDraggingNews = false;
let startXNews, scrollLeftNews;

function updateNewsSlider() {
    if (!newsTrack || !newsLine || !newsPipka) return;
    
    const maxScroll = newsTrack.scrollWidth - newsTrack.clientWidth;
    const currentScroll = newsTrack.scrollLeft;
    
    let progress = 0;
    if (maxScroll > 0) {
        progress = currentScroll / maxScroll;
    }
    
    const maxPipkaPos = newsLine.clientWidth - newsPipka.clientWidth;
    newsPipka.style.left = `${progress * maxPipkaPos}px`;
}

window.addEventListener('load', updateNewsSlider);
window.addEventListener('resize', updateNewsSlider);

if (newsTrack) {
    newsTrack.addEventListener('scroll', updateNewsSlider);
}

if (newsPipka && newsLine) {
    newsPipka.addEventListener('mousedown', (e) => {
        isDraggingNews = true;
        startXNews = e.clientX - newsPipka.getBoundingClientRect().left;
        document.body.style.userSelect = 'none'; 
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDraggingNews) return;
        
        const lineRect = newsLine.getBoundingClientRect();
        let x = e.clientX - lineRect.left - startXNews;
        
        const minX = 0;
        const maxX = newsLine.clientWidth - newsPipka.clientWidth;
        x = Math.max(minX, Math.min(x, maxX));
        
        newsPipka.style.left = `${x}px`;
        
        const maxScroll = newsTrack.scrollWidth - newsTrack.clientWidth;
        const progress = x / (newsLine.clientWidth - newsPipka.clientWidth);
        newsTrack.scrollLeft = progress * maxScroll;
    });

    document.addEventListener('mouseup', () => {
        isDraggingNews = false;
        document.body.style.userSelect = '';
    });
}
