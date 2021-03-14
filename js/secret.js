const sideSecret = document.querySelector('.side .secret')
const resultSecret = document.querySelector('.result .secret')
const secretToggle = document.querySelector('#secret')
const secretList = document.querySelector('.secret__list')
const secretSaveBtn = document.querySelector('.secret__save')
const secretCheckboxes = document.querySelectorAll('.secret__item .secret__checkbox')
const secretFields = document.querySelectorAll('.secret__field')
const sercretTextareas = document.querySelectorAll('.secret__textarea')

secretToggle.addEventListener('change', () => {
  const elems = [secretList, resultSecret, secretSaveBtn]
  secretToggle.checked
    ? elems.forEach(el => el.style.display = 'block')
    : elems.forEach(el => el.style.display = 'none')
})

secretCheckboxes.forEach((checkbox, index) => {
  checkbox.addEventListener('change', () => {
    checkbox.checked
      ? secretFields[index].style.display = 'block'
      : secretFields[index].style.display = 'none'
  })
})

sercretTextareas.forEach((textarea, index) => {
  const title = secretFields[index].querySelector('.question__title')
  title.textContent = textarea.value
})

sercretTextareas.forEach((textarea, index) => {
  textarea.addEventListener('input', () => {
    const title = secretFields[index].querySelector('.question__title')
    title.textContent = textarea.value
  })
})