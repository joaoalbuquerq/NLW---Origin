//Funcionalidade de abrir e fechar o menu
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for(const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle('show');
    })
}


//Esconde o menu quando clicar em um link do menu
const links = document.querySelectorAll('nav ul li a')

for(const l of links){
    l.addEventListener('click', function(){
        nav.classList.remove('show');
    })
}

// MUDAR O HEADER DA PÁGINA QUANDO DE SCROLL

const header = document.querySelector('#header')
const navHeight = header.offsetHeight;

window.addEventListener('scroll', function(){
    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
    }
})


// CARROSSEL DE TESTEMUNHOS

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
  })

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(`
#home .image,#home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testmonials .testimonials,
#contact .text, #contact .links    
`,
{interval: 100}
)