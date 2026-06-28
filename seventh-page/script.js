
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
];

const articles_suda = document.getElementById('news-articles');

articles_suda.innerHTML = arti_napol.map(item => {
    const onclick = item.title === '«Самое ценное в нашем мире — овощи»'
        ? `onclick="window.location.href='/third-page/news.html'"`
        : '';
    return `<article ${onclick}>
                <img src="css/img/news_posts (${item.img}).png" alt="">
                <div class="news__card-info">
                    <div class="news__card-info-inner">
                        <p>${item.date}</p>
                        <h2>${item.title}</h2>
                    </div>
                </div>
            </article>`;
}).join('');
