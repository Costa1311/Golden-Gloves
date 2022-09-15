// Burger
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
    e.preventDefault();
    // Переключаем стили элементов при клике
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
    popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
};

// Change color of burger
// window.onscroll = function (ev) {
//     if (window.scrollY == 0) {
//         document.getElementById("bar").style.backgroundColor = "white";
//     }
//     else {
//         document.getElementById("bar").style.backgroundColor = "#FF0066";
//     }
//     if (window.scrollY == 0) {
//         document.getElementById("bar2").style.backgroundColor = "white";
//     }
//     else {
//         document.getElementById("bar2").style.backgroundColor = "#FF0066";
//     }
//     if (window.scrollY == 0) {
//         document.getElementById("bar3").style.backgroundColor = "white";
//     }
//     else {
//         document.getElementById("bar3").style.backgroundColor = "#FF0066";
//     }
// };



$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 700,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            991: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
});

