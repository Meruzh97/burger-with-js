const body = document.body
const burger = document.getElementById('burger')

burger.addEventListener('click', function () {
    burger.classList.toggle('bg_active')
})