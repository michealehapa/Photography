// change nav style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
});



//Contact buttons (circular text buttons)
const textButtons = document.querySelectorAll('.contact-btn');

textButtons.forEach(textButton => {
    let text = textButton.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join('')
});



// SWIPER JS (gallery section)
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
    }
});



//NAVBAR TOGGLE BTN

let nav = document.querySelector('.nav-links');
let openNavBtn = document.querySelector('#nav-toggle-open');
let closeNavBtn = document.querySelector('#nav-toggle-close');

let openNav = () => {
  nav.style.display = 'flex';
  openNavBtn.style.display = 'none';
  closeNavBtn.style.display = 'inline-block';
};

openNavBtn.addEventListener('click', openNav);

let closeNav = () => {
  nav.style.display = 'none';
  openNavBtn.style.display = 'inline-block';
  closeNavBtn.style.display = 'none';
};

closeNavBtn.addEventListener('click', closeNav);

// Close nav menu on click
if (document.body.clientWidth < 1025) {
  nav.querySelectorAll('li a').forEach(navLink => {
    navLink.addEventListener('click', closeNav);
  });
}

// Show nav links and nav social on screens above 1024px
function handleWindowResize() {
  if (window.innerWidth >= 1025) {
    nav.style.display = 'flex';
    document.querySelector('.nav-socials').style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'none';
  } else {
    nav.style.display = 'none';
    document.querySelector('.nav-socials').style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
  }
}

// Handle window resize event
window.addEventListener('resize', handleWindowResize);

// Initial call to handle the current window size
handleWindowResize();


















