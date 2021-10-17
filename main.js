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