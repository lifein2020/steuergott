import './index.css'

const popupVideo = document.querySelector('.popup_type_video');
const buttonOpenVideo = document.querySelector('.left__button-watch');

function openPopup (popup){
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', handleKeydownPopup);
}

function openPopupVideo() {
  openPopup(popupVideo);
}

function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleKeydownPopup);
}

function handleKeydownPopup(event) {
  const key = event.key;
  if(key === 'Escape') {
    const popupOpened = document.querySelector('.popup_is-opened');
    closePopup(popupOpened);
  }
}

function closePopupOverlay(evt) {
  if (evt.target.classList.contains('popup')) {
      closePopup(evt.target);
    };
}

buttonOpenVideo.addEventListener('click', (evt) => openPopupVideo());
popupVideo.addEventListener('mousedown', closePopupOverlay);


const prev = document.querySelector('.slide__btn_prev'),
      next = document.querySelector('.slide__btn_next'),
      slides = document.querySelectorAll('.slide');

let index = 0;

const activeSlide = n => {
  let slide;
  for (slide of slides) {
    slide.classList.remove('slide_active');
  }
  slides[n].classList.add('slide_active');
}

const nextSlide = () => {
  if(index == slides.length - 1) {
    index = 0;
    activeSlide(index);
  } else {
      index++;
      activeSlide(index);
  }
}

const prevSlide = () => {
  if(index == 0) {
    index = slides.length - 1;
    activeSlide(index);
  } else {
    index--;
    activeSlide(index);
  }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);


// Burger menu

const hamburger = document.querySelector('.hamburger'),
      navMenu = document.querySelector('.header__container-menu-items'),
      links = document.querySelectorAll('.header__container-menu-link');

const toggleMenu = () => {
  hamburger.classList.toggle('hamburger_active');
  navMenu.classList.toggle('header__container-menu-items_active');
}

hamburger.addEventListener('click', toggleMenu);

links.forEach(n => {
  n.addEventListener('click', (evt) => {
    hamburger.classList.remove('hamburger_active');
    navMenu.classList.remove('header__container-menu-items_active');
  })
});


