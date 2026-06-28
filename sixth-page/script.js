const sec0_main_right_inside_bottom1 = document.getElementById('catalog-col-1');
const sec0_main_right_inside_bottom2 = document.getElementById('catalog-col-2');
const sec0_main_right_inside_bottom3 = document.getElementById('catalog-col-3');
const sec0_main_left_top = document.getElementById('catalog-top-list');
const sec0_main_left_bot1_inside = document.getElementById('catalog-about-list');
const sec0_main_left_bot2_inside = document.getElementById('catalog-buyers-list');
const catalogToggles = document.querySelectorAll('[data-target="catalog"], #catalogBtn');
const catalogImgDesktop = document.getElementById('catalogBtnIcon');
const catalogImgMobile = document.getElementById('catalog-btn-mobile-img');
const sec0 = document.querySelector('.catalog-overlay');
const sec1_main_mid_right_karta_inside5_desc = document.getElementById('product-specs-list');
const sec2_main_mid = document.getElementById('offers-track');
const leftbutton = document.getElementById('offers-prev');
const rightbutton = document.getElementById('offers-next');
const dots = document.querySelectorAll('.offers__dot');
let currentIndex = 0;


const menu_left_top = [
    {
        img: "css/img/arrow_r.png",
        title: "Новинки",
    },
    {
        img: "css/img/arrow_r.png",
        title: "Овощи, фрукты, ягоды, зелень, грибы",
    },
    {
        img: "css/img/arrow_r.png",
        title: "Кулинария",
    },
    {
        img: "css/img/arrow_r.png",
        title: "Молоко, сыр, яйцо",
    },
    {
        img: "css/img/arrow_r.png",
        title: "Мясо, птица, колбасы",
    },
    {
        img: "css/img/arrow_r.png",
        title: "Рыба, икра, морепродукты",
    },
    {
        img: "css/img/arrow_r.png",
        title: "Крупы, масло, консервы, соусы, орехи",
    },
    {
        img: "css/img/arrow_r.png",
        title: "Вода, соки, напитки",
    },
    {
        img: "css/img/arrow_r.png",
        title: "Хлеб, хлебцы, выпечка",
    },
    {
        img: "css/img/arrow_r.png",
        title: "Сладости, торты, пирожные",
    },
    {
        img: "css/img/arrow_r.png",
        title: "Чай, кофе, какао",
    },
    {
        img: "css/img/arrow_r.png",
        title: "Детские товары",
    },
    {
        img: "css/img/arrow_r.png",
        title: "Замороженные продукты",
    },
    {
        img: "css/img/arrow_r.png",
        title: "Здоровое питание",
    },
];

const menu_left_bot1_inside = [
    {
        pun: "Новости",
    },
    {
        pun: "Контакты",
    },
    {
        pun: "Пользовательское соглашение",
    },
    {
        pun: "Политика обработки персональных данных",
    },
];

const menu_left_bot2_inside = [
    {
        pun: "Доставка и оплата",
    },
    {
        pun: "Как вернуть",
    },
    {
        pun: "Как заказать",
    },
    {
        pun: "Программа лояльности",
    },
    {
        pun: "Вопросы и ответы",
    },
    {
        pun: "Юридическим лицам",
    },
];

const descpr = [
    {
        name: "В упаковке",
        adds: "210x210x100 мм (ДxШxВ)"
    },
    {
        name: "Тип продукта",
        adds: "Морковь"
    },
    {
        name: "Тип обработки",
        adds: "Свежие"
    },
    {
        name: "Вес товара",
        adds: "1 кг"
    },
    {
        name: "Страна",
        adds: "Египет"
    },
]

const tovari = [
    {
        sale1: "-40%",
        sale2: "Новинка",
        sale3: "Хит",
        img: "css/img/morkovka.png",
        title: "Морковь мытая 0.7-1.0 кг",
        skidka1: "99,90 ₽/кг",
        skidka2: "59,90 ₽/кг",
        minus: "-",
        equals: "1",
        plus: "+"
    },
    {
        sale1: "-40%",
        sale2: "Новинка",
        sale3: "Хит",
        img: "css/img/morkovka.png",
        title: "Морковь мытая 0.7-1.0 кг",
        skidka1: "99,90 ₽/кг",
        skidka2: "59,90 ₽/кг",
        minus: "-",
        equals: "1",
        plus: "+"
    },
    {
        sale1: "-40%",
        sale2: "Новинка",
        sale3: "Хит",
        img: "css/img/morkovka.png",
        title: "Морковь мытая 0.7-1.0 кг",
        skidka1: "99,90 ₽/кг",
        skidka2: "59,90 ₽/кг",
        minus: "-",
        equals: "1",
        plus: "+"
    },
    {
        sale1: "-40%",
        sale2: "Новинка",
        sale3: "Хит",
        img: "css/img/morkovka.png",
        title: "Морковь мытая 0.7-1.0 кг",
        skidka1: "99,90 ₽/кг",
        skidka2: "59,90 ₽/кг",
        minus: "-",
        equals: "1",
        plus: "+"
    },
    {
        sale1: "-40%",
        sale2: "Новинка",
        sale3: "Хит",
        img: "css/img/morkovka.png",
        title: "Морковь мытая 0.7-1.0 кг",
        skidka1: "99,90 ₽/кг",
        skidka2: "59,90 ₽/кг",
        minus: "-",
        equals: "1",
        plus: "+"
    },
    {
        sale1: "-40%",
        sale2: "Новинка",
        sale3: "Хит",
        img: "css/img/morkovka.png",
        title: "Морковь мытая 0.7-1.0 кг",
        skidka1: "99,90 ₽/кг",
        skidka2: "59,90 ₽/кг",
        minus: "-",
        equals: "1",
        plus: "+"
    },
    {
        sale1: "-40%",
        sale2: "Новинка",
        sale3: "Хит",
        img: "css/img/morkovka.png",
        title: "Морковь мытая 0.7-1.0 кг",
        skidka1: "99,90 ₽/кг",
        skidka2: "59,90 ₽/кг",
        minus: "-",
        equals: "1",
        plus: "+"
    },
    {
        sale1: "-40%",
        sale2: "Новинка",
        sale3: "Хит",
        img: "css/img/morkovka.png",
        title: "Морковь мытая 0.7-1.0 кг",
        skidka1: "99,90 ₽/кг",
        skidka2: "59,90 ₽/кг",
        minus: "-",
        equals: "1",
        plus: "+"
    },
    {
        sale1: "-40%",
        sale2: "Новинка",
        sale3: "Хит",
        img: "css/img/morkovka.png",
        title: "Морковь мытая 0.7-1.0 кг",
        skidka1: "99,90 ₽/кг",
        skidka2: "59,90 ₽/кг",
        minus: "-",
        equals: "1",
        plus: "+"
    },
    {
        sale1: "-40%",
        sale2: "Новинка",
        sale3: "Хит",
        img: "css/img/morkovka.png",
        title: "Морковь мытая 0.7-1.0 кг",
        skidka1: "99,90 ₽/кг",
        skidka2: "59,90 ₽/кг",
        minus: "-",
        equals: "1",
        plus: "+"
    },
    {
        sale1: "-40%",
        sale2: "Новинка",
        sale3: "Хит",
        img: "css/img/morkovka.png",
        title: "Морковь мытая 0.7-1.0 кг",
        skidka1: "99,90 ₽/кг",
        skidka2: "59,90 ₽/кг",
        minus: "-",
        equals: "1",
        plus: "+"
    },
    {
        sale1: "-40%",
        sale2: "Новинка",
        sale3: "Хит",
        img: "css/img/morkovka.png",
        title: "Морковь мытая 0.7-1.0 кг",
        skidka1: "99,90 ₽/кг",
        skidka2: "59,90 ₽/кг",
        minus: "-",
        equals: "1",
        plus: "+"
    },
    {
        sale1: "-40%",
        sale2: "Новинка",
        sale3: "Хит",
        img: "css/img/morkovka.png",
        title: "Морковь мытая 0.7-1.0 кг",
        skidka1: "99,90 ₽/кг",
        skidka2: "59,90 ₽/кг",
        minus: "-",
        equals: "1",
        plus: "+"
    },
    {
        sale1: "-40%",
        sale2: "Новинка",
        sale3: "Хит",
        img: "css/img/morkovka.png",
        title: "Морковь мытая 0.7-1.0 кг",
        skidka1: "99,90 ₽/кг",
        skidka2: "59,90 ₽/кг",
        minus: "-",
        equals: "1",
        plus: "+"
    },
    {
        sale1: "-40%",
        sale2: "Новинка",
        sale3: "Хит",
        img: "css/img/morkovka.png",
        title: "Морковь мытая 0.7-1.0 кг",
        skidka1: "99,90 ₽/кг",
        skidka2: "59,90 ₽/кг",
        minus: "-",
        equals: "1",
        plus: "+"
    },
    {
        sale1: "-40%",
        sale2: "Новинка",
        sale3: "Хит",
        img: "css/img/morkovka.png",
        title: "Морковь мытая 0.7-1.0 кг",
        skidka1: "99,90 ₽/кг",
        skidka2: "59,90 ₽/кг",
        minus: "-",
        equals: "1",
        plus: "+"
    }
]

const right_col1 = [
    {
        title: "Орехи, сухофрукты, семечки",
        links: []
    },
    {
        title: "Макаронные изделия",
        links: []
    },
    {
        title: "Мука, всё для выпечки",
        links: ["Смеси для выпечки", "Мука", "Всё для выпечки"]
    },
    {
        title: "Соусы, майонез",
        links: ["Майонез", "Кетчуп, томатная паста", "Соусы", "Заправки для салата", "Горчица, хрен", "Уксус"]
    }
];
const right_col2 = [
    {
        title: "Растительное масло",
        links: ["Подсолнечное", "Оливковое", "Льняное", "Кукурузное", "Тыквенное", "Другие масла"]
    },
    {
        title: "Сухие завтраки, каши, хлопья",
        links: ["Сухие завтраки", "Геркулес, хлопья, отруби", "Гранола, мюсли", "Каши быстрого приготовления", "Без сахара"]
    }
];
const right_col3 = [
    {
        title: "Крупы, бобовые",
        links: ["Крупы", "Бобовые"]
    },
    {
        title: "Консервы, варенье, мёд",
        links: ["Овощные, грибные", "Оливки, маслины", "Мясные", "Рыбные, морепродукты", "Готовые блюда", "Мёд", "Фрукты в сиропе", "Варенье, джем", "Сиропы", "Сгущёнка"]
    }
];

sec0_main_left_top.innerHTML = menu_left_top.map(
    item => `<div class="catalog__item">
                <span class="catalog__item-link">${item.title}</span>
                <img class="catalog__item-arrow" src="${item.img}">
            </div>`
).join('');

sec0_main_left_bot1_inside.innerHTML = menu_left_bot1_inside.map(
    item => `<a href="">${item.pun}</a>`
).join('');

sec0_main_left_bot2_inside.innerHTML = menu_left_bot2_inside.map(
    item => `<a href="">${item.pun}</a>`
).join('');

sec1_main_mid_right_karta_inside5_desc.innerHTML = descpr.map(
    item => `<div class="product__spec-item">
                <div class="product__spec-value">
                    <p>${item.name}</p>
                    <div></div>
                </div>
                <p>${item.adds}</p>
            </div>`
).join('');

sec2_main_mid.innerHTML = tovari.map(
    item => `<article>
                <div class="offers__card-top">
                    <div class="offers__card-top-inner" style="background-image: url('${item.img}')">
                        <div class="offers__card-badges">
                            <div class="offers__badge--sale"><p>${item.sale1}</p></div>
                            <div class="offers__badge--new"><p>${item.sale2}</p></div>
                            <div class="offers__badge--hit"><p>${item.sale3}</p></div>
                        </div>
                    </div>
                </div>
                <div class="offers__card-bottom">
                    <div class="offers__card-body">
                        <h2>${item.title}</h2>
                        <p>${item.skidka1}</p>
                        <h4>${item.skidka2}</h4>
                        <div class="offers__card-actions">
                            <div class="counter">
                                <button class="counter__btn--minus">${item.minus}</button>
                                <div class="counter__num">${item.equals}</div>
                                <button class="counter__btn--plus">${item.plus}</button>
                            </div>
                            <button class="offers__card-buy">В корзину</button>
                        </div>
                    </div>
                </div>
            </article>`
).join('');

sec0_main_right_inside_bottom1.innerHTML = right_col1.map(
    item => `<div class="catalog__group">
                <h3 class="catalog__group-name">${item.title}</h3>
                <div class="catalog__sublist">
                    ${item.links.map(link => `<a href="">${link}</a>`).join('')}
                </div>
            </div>`
).join('');

sec0_main_right_inside_bottom2.innerHTML = right_col2.map(
    item => `<div class="catalog__group">
                <h3 class="catalog__group-name">${item.title}</h3>
                <div class="catalog__sublist">
                    ${item.links.map(link => `<a href="">${link}</a>`).join('')}
                </div>
            </div>`
).join('');

sec0_main_right_inside_bottom3.innerHTML = right_col3.map(
    item => `<div class="catalog__group">
                <h3 class="catalog__group-name">${item.title}</h3>
                <div class="catalog__sublist">
                    ${item.links.map(link => `<a href="">${link}</a>`).join('')}
                </div>
            </div>`
).join('');

function updateSlider(){
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

rightbutton.addEventListener('click', () => {
  if (currentIndex < 3){ 
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlider();
});

leftbutton.addEventListener('click', () => {
  if (currentIndex > 0){
    currentIndex--;
  } else {
    currentIndex = 3;
  }
  updateSlider();
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateSlider();
  });
});

document.addEventListener('click', (event) => {
  const target = event.target;
  if (target && target.classList.contains('counter__btn--plus')){
    const parent = target.parentElement;
    const numberDiv = parent.querySelector('.counter__num');
    if (numberDiv){
        let count = parseInt(numberDiv.textContent) || 1;
        numberDiv.textContent = count + 1;
    }
  }
  if (target && target.classList.contains('counter__btn--minus')){
    const parent = target.parentElement;
    const numberDiv = parent.querySelector('.counter__num');
    if (numberDiv){
        let count = parseInt(numberDiv.textContent) || 1;
        if (count > 1){
            numberDiv.textContent = count - 1;
        }
    }
  }
});

catalogToggles.forEach(function(btn){
    btn.addEventListener('click', function(){
        sec0.classList.toggle('active');
        const isActive = sec0.classList.contains('active');
        if (catalogImgDesktop){
            catalogImgDesktop.src = isActive ? "css/img/list1.png" : "css/img/list.png";
        }
        if (catalogImgMobile){
            catalogImgMobile.src = isActive ? "css/img/list1.png" : "css/img/list.png";
        }
    });
});

function toggleColor(element){
  element.classList.toggle('active');
}