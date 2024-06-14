
document.addEventListener('DOMContentLoaded', function() {

    const buttons = document.querySelectorAll('[data-tab-button]');
    
    

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodasAbas();
            aba.classList.add('carousel__content--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('carousel__tabs__button--is-active');
            
        })
    }

// fix header
window.addEventListener('scroll', fixHeader)

const header = document.querySelector('.header');
const sticky = header.offsetTop;

function fixHeader() {
    if(window.scrollY >= sticky) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed')
    }
}
})

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('carousel__tabs__button--is-active');
    }
    
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('carousel__content--is-active')
    }
}

// carousel
const moviesContainer = document.querySelectorAll('.carousel__content');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.previous');

moviesContainer.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

nextBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
})
prevBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
})

})
