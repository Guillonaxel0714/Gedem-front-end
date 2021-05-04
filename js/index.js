// NAVBAR RESPONSIVE

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// ANNIMATION TEXT WRITE/DELETE

const txtAnim = document.querySelector('h4');

new Typewriter(txtAnim, {

    loop: true,
    deleteSpeed: 30

})
.changeDelay(80)
.typeString('SIVOM')
.pauseFor(1000)
.deleteAll()
.typeString('SIETOM')
.pauseFor(1000)
.deleteAll()
.typeString('SIRMOTOM')
.pauseFor(1000)
.deleteAll()
.typeString('SMETOM GEEODE')
.pauseFor(1000)
.deleteAll()
.typeString('SMITOM LOMBRIC')
.pauseFor(1000)
.deleteAll()
.typeString('SYTRADEM')
.pauseFor(1000)
.deleteAll()
.typeString('BEGEVAL')
.pauseFor(1000)
.deleteAll()
.typeString('SMITOM NORD')
.pauseFor(1000)
.deleteAll()
.typeString('SIETREM')
.pauseFor(1000)
.deleteAll()

.start()

// go up

