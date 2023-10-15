$(document).ready(function() {
    //меню бургера для веганов
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu,.header__logo a').toggleClass('active');
        $('body').toggleClass('lock');
    });
    //закрытие меню, при выборе номера страницы
    $('.header__link').click(function(event) {
        $('.header__burger,.header__menu,.header__logo a').removeClass('active');
    });
    $('.slider').slick({
        arrows:true,
        dots: true,
        }
    );
});