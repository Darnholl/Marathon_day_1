const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()

        slide.classList.add('active')
        changeBackgroundImage()
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}

function changeBackgroundImage() {
    const bgActive = document.querySelector('.active')
    let test = bgActive.getAttribute('style')
    test = test.slice(21, test.length)
    console.log(`url${test}`)
    document.body.style= `background-image: url${test}`
}

