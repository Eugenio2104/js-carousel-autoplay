// facciamo funzionare il carousel, oltre che con i bottoni anche in autoplay al caricamento della pagina.
// **BONUS:**
// Passando con il mouse sopra le immagini l’autoplay si ferma per poi ripartire quando il mouse esce dallo slider
// Buon lavoro!


const slider = document.querySelector('.slider');
const thumbs = document.querySelector('.thumbs');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const startBtn = document.querySelector(`#start`);
const stopBtn = document.querySelector(`#stop`);

const numImages = 5;
let counterImages = 0;
let sliderHtml = '';
let thumbsHtml = '';
let clickStart;
let clickStop;

for(let i = 1; i <= numImages; i++){
  sliderHtml += `
      <img  class="item" src="img/0${i}.jpg" alt="">
  `;
  thumbsHtml += `
      <img  class="item-thumb" src="img/0${i}.jpg" alt="">
  `;
}

slider.innerHTML = sliderHtml;
thumbs.innerHTML = thumbsHtml;

const listImages = document.getElementsByClassName('item');
const listthumbs = document.getElementsByClassName('item-thumb');

listImages[counterImages].classList.add('active');
listthumbs[counterImages].classList.add('active');


prev.addEventListener('click',function(){
  nextPrev(false);
})
next.addEventListener('click',function(){
  nextPrev(true);
})




function nextPrev(isNext){
  listImages[counterImages].classList.remove('active');
  listthumbs[counterImages].classList.remove('active');
  if(isNext){
    counterImages--;
    if(counterImages < 0) counterImages = numImages - 1;
  }else{
    counterImages++;
    if(counterImages === numImages) counterImages = 0;
  }
  listImages[counterImages].classList.add('active');
  listthumbs[counterImages].classList.add('active');
  
}


//far scorrere in automatico il carousel

let autoPlay = setInterval(nextPrev, 3000) 

slider.addEventListener(`mouseover`, function(){
  clearInterval(autoPlay);
});

slider.addEventListener(`mouseout`, refresh);

function refresh(){
  autoPlay = setInterval(nextPrev, 3000)
}

thumbs.addEventListener(`mouseover`, function(){
  clearInterval(autoPlay);
});

thumbs.addEventListener(`mouseout`, refresh);

function refresh(){
  autoPlay = setInterval(nextPrev, 3000)
}



//quando pigio START il bottone le immagini iniziano a scorrere



