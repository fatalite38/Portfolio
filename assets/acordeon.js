const acordeonButton = document.querySelectorAll('.acordeon .btn')

acordeonButton.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const acordeon = btn.parentElement
        const isOpen = acordeon.classList.contains('open')

        if(isOpen) {
            acordeon.classList.remove('open')
        }else {
            acordeon.classList.add('open')
        }
    })
})
    