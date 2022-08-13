window.addEventListener('load', () => {
    window.setTimeout(() => {
        spinner.style.opacity = '0'
        spinner.style.display = 'none'
    }, 2000)
})

btnClose.addEventListener('click', () => {
    document.querySelector('.upmodal').removeAttribute('show')
})

function ShowDetails(id) {

    // Send Api 

    // Render Data 

    document.querySelector('.upmodal').setAttribute('show', '')
}