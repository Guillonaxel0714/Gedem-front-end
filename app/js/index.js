// NAVBAR RESPONSIVE

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  if(undefined != nav){ 
  
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
}

navSlide();


// COMPTEUR

var node =  document.getElementById("compteur"); // On récupère notre noeud où sera rafraîchi la valeur du compteur

if(undefined != node){
  var n = node.innerHTML; // Nombre final du compteur
  var cpt = 0; // Initialisation du compteur
  var duree = 1; // Durée en seconde pendant laquel le compteur ira de 0 à 15
  var delta = Math.ceil((duree * 0.1) / n); // On calcule l'intervalle de temps entre chaque rafraîchissement du compteur (durée mise en milliseconde)

  function countdown() {
    node.innerHTML = ++cpt;
    if( cpt < n ) { // Si on est pas arrivé à la valeur finale, on relance notre compteur une nouvelle fois
      setTimeout(countdown, delta);
    }
  }
  
  setTimeout(countdown, delta);

}




// ANNIMATION TEXT WRITE/DELETE

const txtAnim = document.getElementById('writter_txt');

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

if(undefined != hiddenButton){ 

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
}


  // VARIABLES
const timeline = document.querySelector(".timeline ol"),
elH = document.querySelectorAll(".timeline li > div"),
arrows = document.querySelectorAll(".timeline .arrows .arrow"),
arrowPrev = document.querySelector(".timeline .arrows .arrow__prev"),
arrowNext = document.querySelector(".timeline .arrows .arrow__next"),
firstItem = document.querySelector(".timeline li:first-child"),
lastItem = document.querySelector(".timeline li:last-child"),
xScrolling = 280,
disabledClass = "disabled";

if(undefined != timeline){
  // START
  window.addEventListener("load", init);

  function init() {
    setEqualHeights(elH);
    animateTl(xScrolling, arrows, timeline);
    setSwipeFn(timeline, arrowPrev, arrowNext);
  }

  // SET EQUAL HEIGHTS
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

  // CHECK IF AN ELEMENT IS IN VIEWPORT
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // SET STATE OF PREV/NEXT ARROWS
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

  // ANIMATE TIMELINE
  function animateTl(scrolling, el, tl) {
    let counter = 0;
    for (let i = 0; i < el.length; i++) {
      el[i].addEventListener("click", function() {
        if (!arrowPrev.disabled) {
          arrowPrev.disabled = true;
        }
        if (!arrowNext.disabled) {
          arrowNext.disabled = true;
        }
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

        setTimeout(() => {
          isElementInViewport(firstItem) ? setBtnState(arrowPrev) : setBtnState(arrowPrev, false);
          isElementInViewport(lastItem) ? setBtnState(arrowNext) : setBtnState(arrowNext, false);
        }, 1100);

        counter++;
      });
    }
  }
  

  // ADD SWIPE SUPPORT FOR TOUCH DEVICES
  function setSwipeFn(tl, prev, next) {
    const hammer = new Hammer(tl);
    hammer.on("swipeleft", () => next.click());
    hammer.on("swiperight", () => prev.click());
  }
}


// MAP 

let mymap;
var mapid = document.getElementById('mapid')

function initmap(){

  if(mapid){

  const mapBoxToken = 'pk.eyJ1IjoiYXhlbGdsbiIsImEiOiJja3Azc2h6YWEwNWF6Mm9zMTc3Z2tnYjFwIn0.eEATJq-JytA15vszl5420w';

  var mymap = L.map('mapid', {scrollWheelZoom:false}).setView([48.64369, 	2.6554], 9);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/outdoors-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: mapBoxToken,
    }
  ).addTo(mymap);

  var smitomNord = L.marker([49.01720930856356, 2.823984430691334]).bindPopup('<h4><a href="https://www.smitom-nord77.fr">SMITOM Nord 77</a></h4>14 rue de la Croix Gillet <br>77 122 Monthyon <br>01 60 44 40 03'),
    sietom = L.marker([48.732494115679664, 2.794000701993996]).bindPopup('<h4><a href="https://www.sietom77.com/">SIETOM</a></h4>45 route de Fontenay<br>77 220 Tourman-en-Brie<br>01 64 07 99 75'),
    smitomLombric = L.marker([48.541697150154796, 2.6893844304584813]).bindPopup('<h4><a href="http://www.lombric.com">SMITOM LOMBRIC</a></h4>14 rue du Tertre de Cherisy <br> 77 000 Vaux-le-Pénil <br>  01 64 83 58 60'),
    sietrem = L.marker([48.87526005033607, 2.6741277271256756]).bindPopup('<h4><a href="https://www.sietrem.fr/">SIETREM</a></h4>3 Rue du Grand Pommeraye<br>77400 Saint-Thibault-des-Vignes<br>0 800 770 061'),
    sirmotom  = L.marker([48.38417620762194, 2.9726241750001448]).bindPopup('<h4><a href="https://www.sirmotom.fr/">SIRMOTOM</a></h4>22 rue de la Grande Haie<br>77130 Montereau-Fault-Yonne<br>01 64 32 67 23'),
    begeval  = L.marker([48.18433460548265, 2.2428465847739836]).bindPopup('<h4><a href="https://www.begeval.fr/">BEGEVAL</a></h4>Route de Bouzonville-en-Beauce<br>45300 Pithiviers<br>02 38 06 02 88'),
    smetomGeeode  = L.marker([48.56252298998192, 3.03508625595096]).bindPopup('<h4><a href="https://www.smetom-geeode.fr/">SMETOM GEEODE</a></h4>Route Nationale 19<br>77370 Nangis<br>01 64 00 26 45'),
    sivom  = L.marker([48.68733574714206, 2.5798378774585786]).bindPopup('<h4><a href="https://www.sivom.com/">SIVOM</a></h4>Route du Tremblay<br>91480 Varennes-Jarcy<br>01 69 00 96 90'),
    smetom  = L.marker([48.2900376746293, 2.6894619591314113]).bindPopup('<h4><a href="http://www.smetomvalleeduloing.fr/">SMETOM</a></h4>13 Rue des Étangs<br>77140 Saint-Pierre-lès-Nemours<br>01 64 29 35 63');

    L.layerGroup([smitomNord, sietom, smitomLombric, sietom, sietrem,sirmotom, begeval, smetomGeeode, sivom, smetom]).addTo(mymap);
  }
}

initmap();

const cards = document.getElementById("cards");
const card = document.getElementsByClassName("card");
const link=document.querySelectorAll(".card>.flap1>.flap2>.card-actions>a")
let zIndex = 10;

for (let index = 0; index < card.length; index++) {
  card[index].addEventListener("click", (e) => {
    makeCardUp(e,index)
  });
}

function makeCardUp(e,index){
  console.log(link)
  e.preventDefault();
  let isShowing = false;
  if (card[index].classList.contains("show")) {
    isShowing = true;
  }
  if (cards.classList.contains("showing")) {
    document.getElementsByClassName("show")[0].classList.remove("show");
    // pour emepcher le memmory leak
    link[index].removeEventListener("click",()=>{
      document.location.href=link[index].href;
    })
    if (isShowing) {
      cards.classList.remove("showing");
      for(let i=0;i<card.length;i++){
        if(i!=index){
          card[i].style=""
        }
      }
    } else {
      card[index].style = `z-index : ${zIndex}`;
      card[index].classList.add("show");
      link[index].addEventListener("click",()=>{
        document.location.href=link[index].href;
      })
    }
    zIndex++;
  } else {
    cards.classList.add("showing");
    for(let i=0;i<card.length;i++){
      if(i!=index){
        card[i].style="cursor:pointer;opacity:0.6;transform:scale(0.88)";
      }
    }
    card[index].style = `z-index : ${zIndex}`;
    card[index].classList.add("show");
    link[index].addEventListener("click",()=>{
      document.location.href=link[index].href;
    })
    zIndex++;
  }
}

// ANIMATE ON SCROLL INITIALISATION

AOS.init();

