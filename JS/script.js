$(document).ready(function () {
    //меню бургера для веганов
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu,.header__logo a').toggleClass('active');
        $('body').toggleClass('lock');
    });
    //закрытие меню, при выборе номера страницы
    $('.header__link').click(function (event) {
        $('.header__burger,.header__menu,.header__logo a').removeClass('active');
    });
    //отдельные кнопки, активирующие скрипт кнопок слайдера
    $('.slick_prev').click(function (event) {
        $('.slick-prev').click();
    });
    $('.slick_next').click(function (event) {
        $('.slick-next').click();
    });
    //открытие каждой строки
    $('.faqblock1').click(function (event) {
        $('.faqsvg1, .faq1p').toggleClass('open');
    });
    $('.faqblock2').click(function (event) {
        $('.faqsvg2, .faq2p').toggleClass('open');
    });
    $('.faqblock3').click(function (event) {
        $('.faqsvg3, .faq3p').toggleClass('open');
    });
    $('.faqblock4').click(function (event) {
        $('.faqsvg4, .faq4p').toggleClass('open');
    });
    $('.faqblock5').click(function (event) {
        $('.faqsvg5, .faq5p').toggleClass('open');
    });
    $('.faqblock6').click(function (event) {
        $('.faqsvg6, .faq6p').toggleClass('open');
    });
    $('.faqblock7').click(function (event) {
        $('.faqsvg7, .faq7p').toggleClass('open');
    });
    //настройки слайдера
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 1090,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }
    );
    //Немного декора инпутам
    $('.frame6__namebox').click(function (event) {
        $('.frame6__namebox-label').addClass('activated');
    });
    $('.frame6__namebox').contextmenu(function (event) {
        $('.frame6__namebox-label').addClass('activated');
    });
    $('.frame6__phonebox').click(function (event) {
        $('.frame6__phonebox-label').addClass('activated');
    });
    $('.frame6__phonebox').contextmenu(function (event) {
        $('.frame6__phonebox-label').addClass('activated');
    });
    $('.frame6__input').blur(function (event) {
        $('.frame6__namebox-label, .frame6__phonebox-label').removeClass('activated');
    });
    //Отправка формы
    $('.frame6__bluebutton').click(function() {
        let request = {
            'name': $('input[name="name"]').val(),
            'tel': $('input[name="tel"]').val()
        };

        $.post('../api.php', request, function(response){ //удалить лишнее
        });
        
    });
});