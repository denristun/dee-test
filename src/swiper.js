const menuItems = ['Будущее уже рядом', 'Высокое качество', 'Непросто дома']


var deeSwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'custom',
        renderCustom: function(swiper, current, total) {
            const menu = document.getElementsByClassName('future__swiper-menu')[0]
            const aList = [...menu.getElementsByTagName('a')]
            aList.forEach(element => element.classList.remove('active'))
            menu.getElementsByTagName('a')[current - 1].classList.add('active')
            return current + ' of ' + total;
        },
    },



    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
})