let itemName = document.querySelector("#itemName");
let itemHref = document.querySelector("#itemHref");
let itemImage = document.querySelector(".test-img6");
let Hrefs = document.querySelectorAll('.hrefs');

Hrefs.forEach(href => href.addEventListener('click', (e) => {
    e.preventDefault();
    Hrefs.forEach(el => el.classList.remove('active'));
    newLink(href, href.textContent);
}));

function newLink(href, name) {
    href.classList.add('active');
    
    let link = '';
    
    if (name == "Журнал") {
        itemName.textContent = `Зин "История игровых девайсов"`;
        itemHref.setAttribute('target', '_blank');
        itemHref.href = "https://portfolio.hse.ru/Project/291692";
    } else if (name == "Интерактивный веб-плакат") {
        itemName.textContent = `Веб-плакат "Игровые девайсы"`;
        itemHref.setAttribute('target', '_blank');
        itemHref.href = "https://sayok57.github.io/Devices-web-poster/";
    } else if (name == "Постеры") {
        itemName.textContent = `Постеры "Level Up"`;
        itemHref.setAttribute('target', '_blank');
        itemHref.href = "https://portfolio.hse.ru/Project/300399";
    } else if (name == "Веб-плакат") {
        itemName.textContent = `Веб-плакат "FanZine"`;
        itemHref.setAttribute('target', '_blank');
        itemHref.href = "https://sayok57.github.io/FanZine1/";
    } else if (name == "Плакаты") {
        itemName.textContent = `Плакаты "FanZine"`;
        itemHref.setAttribute('target', '_blank');
        itemHref.href = "https://portfolio.hse.ru/Project/284638";
    }
}