const changeThemeHTML = document.querySelector("#changeTheme");
changeThemeHTML.addEventListener("click", function () {
    document.body.classList.toggle("darkmode");
});

const changeIconHTML = document.getElementById('changeTheme');
const rectangulo = document.querySelector('.muestraropa');
const headerSection = document.querySelector('.segundaMitad');
const btnShowMore = document.querySelector('.show__more');
// const btnFiltros = document.querySelectorAll('.btn__filtros');


changeIconHTML.addEventListener('click', function () {
    const icon = changeIconHTML.querySelector('i');
    if (icon.classList.contains('bxs-moon')) {
        icon.classList.remove('bxs-moon');
        icon.classList.add('bxs-sun');
        console.log((rectangulo.style.backgroundColor = "aqua"));
        console.log((headerSection.style.backgroundColor = "aqua"));
        console.log((btnShowMore.style.color = "#FFFFFF"));
        console.log((btnShowMore.style.backgroundColor = "#161616"));
        // console.log((btnFiltros.style.color = "aqua"));
    } else {
        icon.classList.remove('bxs-sun');
        icon.classList.add('bxs-moon');
        console.log((rectangulo.style.backgroundColor = "#fd135a"));
        console.log((headerSection.style.backgroundColor = "#fd135a"));
        console.log((btnShowMore.style.color = "#FFFFFF"));
        console.log((btnShowMore.style.backgroundColor = "#000000"));
        // console.log((btnFiltros.style.color = "#000"));
    }
});


const btnFiltros = document.querySelectorAll('.btn__filtros button');
for (const btn of btnFiltros) {
    GamepadButton.addEventListener("click", fun)
}
console.log(btnFiltros.style.backgroundColor = rgb(255, 255, 255));

var navbar = document.getElementById('navbar');
var lastScrollTop = 0;

window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.classList.remove('scrolled');
    } else {
        navbar.classList.add('scrolled');
    }

    lastScrollTop = scrollTop;
});

