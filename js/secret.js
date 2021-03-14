const sideSecret = document.querySelector('.side .secret')
const resultSecret = document.querySelector('.result .secret')
const secretToggle = document.querySelector('#secret')
const secretCheckboxes = document.querySelectorAll('.secret__item .secret__checkbox')
const secretFields = document.querySelectorAll('.secret__field')

secretToggle.addEventListener('change', () => {
  secretToggle.checked
    ? resultSecret.style.display = 'block'
    : resultSecret.style.display = 'none'
})

secretCheckboxes.forEach((checkbox, index) => {
  checkbox.addEventListener('change', () => {
    checkbox.checked
      ? secretFields[index].style.display = 'block'
      : secretFields[index].style.display = 'none'
  })
})