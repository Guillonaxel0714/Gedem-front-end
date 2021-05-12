// NAVBAR RESPONSIVE

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', ()=>{
    nav.classList.toggle('nav-active');


    //animation des links

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

    // animation burger
    burger.classList.toggle('toggle');
  });
}

navSlide();


// COMPTEUR

var n = 381; // Nombre final du compteur
var cpt = 0; // Initialisation du compteur
var duree = 1; // Durée en seconde pendant laquel le compteur ira de 0 à 15
var delta = Math.ceil((duree * 0.1) / n); // On calcule l'intervalle de temps entre chaque rafraîchissement du compteur (durée mise en milliseconde)
var node =  document.getElementById("compteur"); // On récupère notre noeud où sera rafraîchi la valeur du compteur
 
function countdown() {
  node.innerHTML = ++cpt;
  if( cpt < n ) { // Si on est pas arrivé à la valeur finale, on relance notre compteur une nouvelle fois
     setTimeout(countdown, delta);
  }
}
 
setTimeout(countdown, delta);




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


// GO TO TOP

const hiddenButton = document.querySelector('.return-to-top');

window.addEventListener('scroll', () => {
  if(window.pageYOffset > 200){
    hiddenButton.classList.add('active');
  } else {
    hiddenButton.classList.remove('active');
  }
});


const goToTop = document.querySelector('.return-to-top');

goToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth" 
  });     
});

const timeline = document.querySelector(".timeline ol"),
  elH = document.querySelectorAll(".timeline li > div"),
  arrows = document.querySelectorAll(".timeline .arrows .arrow"),
  arrowPrev = document.querySelector(".timeline .arrows .arrow__prev"),
  arrowNext = document.querySelector(".timeline .arrows .arrow__next"),
  firstItem = document.querySelector(".timeline li:first-child"),
  lastItem = document.querySelector(".timeline li:last-child"),
  xScrolling = 280,
  disabledClass = "disabled";

  window.addEventListener("load", init);

  function init() {
    setEqualHeights(elH);
    animateTl(xScrolling, arrows, timeline);
    setSwipeFn(timeline, arrowPrev, arrowNext);
    setKeyboardFn(arrowPrev, arrowNext);
  }

  function setEqualHeights(el) {
    let counter = 0;
    for (let i = 0; i < el.length; i++) {
      const singleHeight = el[i].offsetHeight;
       
      if (counter < singleHeight) {
        counter = singleHeight;
      }
    }
     
    for (let i = 0; i < el.length; i++) {
      el[i].style.height = `${counter}px`;
    }
  }

  function animateTl(scrolling, el, tl) {
    for (let i = 0; i < el.length; i++) {
      el[i].addEventListener("click", function() {
        if (!arrowPrev.disabled) {
          arrowPrev.disabled = true;
        }
         
        if (!arrowNext.disabled) {
          arrowNext.disabled = true;
        }
      });
    }
  }

  let counter = 0; 
  for (let i = 0; i < el.length; i++) {
    el[i].addEventListener("click", function() {
      // other code here
    
      const sign = (this.classList.contains("arrow__prev")) ? "" : "-";
      if (counter === 0) {
        tl.style.transform = `translateX(-${scrolling}px)`;
      } else {
        const tlStyle = getComputedStyle(tl);
        // add more browser prefixes if needed here
        const tlTransform = tlStyle.getPropertyValue("-webkit-transform") || tlStyle.getPropertyValue("transform");
        const values = parseInt(tlTransform.split(",")[4]) + parseInt(`${sign}${scrolling}`);
        tl.style.transform = `translateX(${values}px)`;
      }
      counter++;
    });
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function setBtnState(el, flag = true) {
    if (flag) {
      el.classList.add(disabledClass);
    } else {
      if (el.classList.contains(disabledClass)) {
        el.classList.remove(disabledClass);
      }
      el.disabled = false;
    }
  }

  for (let i = 0; i < el.length; i++) {
    el[i].addEventListener("click", function() {
      // other code here
       
      // code for stopping the animation
      setTimeout(() => {
        isElementInViewport(firstItem) ? setBtnState(arrowPrev) : setBtnState(arrowPrev, false);
        isElementInViewport(lastItem) ? setBtnState(arrowNext) : setBtnState(arrowNext, false);
      }, 1100);
     
      // other code here
    });
  }


