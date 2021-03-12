const openPopupBtn = document.querySelector('.open-popup')
const popup = document.querySelector('.popup')
const closePopupBtn = document.querySelector('.popup__close')
const overlay = document.querySelector('.overlay')
const cardsItems = document.querySelectorAll('.cards__item')

const openPopup = () => popup.classList.add('popup--visible')
const closePopup = () => popup.classList.remove('popup--visible')

openPopupBtn.addEventListener('click', openPopup)

closePopupBtn.addEventListener('click', closePopup)

overlay.addEventListener('click', e => e.target.classList.contains('overlay') && closePopup())

cardsItems.forEach(el => {
  el.addEventListener('click', () => {
    cardsItems.forEach(innerEl => innerEl.classList.remove('cards__item--active'))
    el.classList.add('cards__item--active')
  })
})