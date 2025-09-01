$('.main-slider-row').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    infinity: true,
    speed: 3000,
    responsive: [
        {
            breakpoint: 1920,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                Infinity: true,

            }
        },
        {
            breakpoint: 375,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinity: true
            }
        }
    ]
});