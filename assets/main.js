const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    direction: 'horizontal',
    loop: true,


    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});

// AOS.init();



