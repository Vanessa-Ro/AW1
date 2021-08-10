// abre e fecha o menu quando clicar no ícone
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

//quando clicar em um item do menu, esconder 
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
link.addEventListener('click', function(){
    nav.classList.remove('show')
})
}

// Carousel slider swiper 
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        900: {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }
        }
    }
  })

 