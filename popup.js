const button = document.querySelector(".button")
const close = document.querySelector(".close-icon")
const popup = document.querySelector(".popup-container")
const overlay = document.querySelector(".overlay")

button.addEventListener('click', () => {
    popup.classList.add('popup-open')
} )

close.addEventListener('click', () => {
    popup.classList.remove('popup-open')
} )

overlay.addEventListener('click', () => {
    popup.classList.remove('popup-open')
})


// --------------About Section---------------

const tablinks = document.getElementsByClassName('tab-links')
const tabcontents = document.getElementsByClassName('tab-contents')
function opentab(tabname){
    for (tablink  of tablinks) {
        tablink.classList.remove('active-link')
    }
    for (tabcontent  of tabcontents) {
        tabcontent.classList.remove('active-tab')
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

