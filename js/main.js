const waitListModal = document.getElementById('waiting-list-modal')
const listingItem = document.getElementsByClassName('listing-item')
const submitEmailBtn = document.getElementById('submit-email')
const emailInput = document.getElementById('email')
const contentLoadedBx = document.getElementById('content-loaded-bx')
const successBx = document.getElementById('success-bx')
const loadingBx = document.getElementById('loading-bx')
const hamburgerBx = document.getElementById('hamburger-bx')
const navCollapse = document.getElementById('nav-item-bx')
const hamMain = document.getElementById('ham')
const hamBefore = document.getElementById('ham-before')
const hamAfter = document.getElementById('ham-after')




// page loaded

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{contentLoadedBx.style.opacity = 0}, 6000)
    setTimeout(() => {
        contentLoadedBx.style.display = 'none'
    }, 7000);   
})

// hamburger

hamburgerBx.addEventListener('click', ()=>{
    if (navCollapse.classList.contains('nav-out')) {
        navCollapse.classList.remove('nav-out')
        navCollapse.classList.add('nav-in')
        hamMain.style.transform = 'rotate(220deg)'
        hamBefore.style.transform = 'translateY(6px) rotate(120deg)'
        hamAfter.style.transform = 'translateY(-6px) rotate(120deg)'

    }

    else if (navCollapse.classList.contains('nav-in')) {
        navCollapse.classList.remove('nav-in')
        navCollapse.classList.add('nav-out')
        hamMain.style.transform = 'rotate(0)'
        hamBefore.style.transform = 'translateY(0) rotate(0)'
        hamAfter.style.transform = 'translateY(0) rotate(0)'

    }
})


// animation for text

let textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

// initialize animation  library

AOS.init()

// modal functionality

waitListModal.addEventListener('click', (e)=>{
    if (e.target.classList.contains('modal')) {
        waitListModal.style.display = 'none'
        emailInput.value = '';
    }
})

for (const item of listingItem) {
    item.addEventListener('click', (e)=>{
        if (e.target.classList.contains('btn')) {
            waitListModal.style.display = 'flex'
        }
    })
}

submitEmailBtn.addEventListener('click', ()=>{

    if (emailInput.value) {
        loadingBx.style.display = 'flex'
        setTimeout(()=>{
            loadingBx.style.display = 'none'
            successBx.style.display= 'flex'
        }, 1000)
        
        setTimeout(()=>{
            waitListModal.style.display = 'none'
            successBx.style.display = 'none'
        }, 3500)
        emailInput.value = ''
    }
    else{
        waitListModal.style.display = 'none'
    }
})


// jumbotron image

fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=houses')
.then(res => res.json())
.then(data => {
    document.getElementById('jumbotron-container').style.background = `linear-gradient(rgba(0, 0, 0, 0.726), rgba(0,0,0,0.8)), url("${data.urls.regular}")no-repeat center center/cover`
})
.catch(err => {
    console.log(err)
    document.getElementById('jumbotron-container').style.background = `linear-gradient(rgba(0, 0, 0, 0.726), rgba(0,0,0,0.8)), url("../images/jumbo.jpg")no-repeat center center/cover`
})


