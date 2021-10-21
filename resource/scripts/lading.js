/* Events clicks points  */
const points = document.querySelectorAll('.point__card');
points?.forEach(point => {point.addEventListener('click', (e)=> {
  if(e.target.nodeName == "LABEL"){      
      let parentCard = document.getElementById('boxSlider');
      e.target.parentNode.getElementsByClassName('active')[0].classList.remove('active');
      e.target.classList.add('active');
      let pointSele= e.target.getAttribute('attr-order');
      let focusSelet = parentCard.getElementsByClassName('slider__card')[pointSele];
      parentCard.scroll({
        left:focusSelet.offsetLeft,
        behavior: 'smooth'
      });
    }  
  })
})
/* Scroll horizontal Box Card */
var timeCard = null;
document.getElementById('boxSlider')?.addEventListener('scroll', (e) => {
  clearTimeout(timeCard);
  //Renew timer
  timeCard = setTimeout(function () {
    const listPoint = document.getElementById('pointCard');
    let posiScroll = document.getElementById('boxSlider').scrollLeft;
    let widthDiv = document.getElementById('boxSlider').getElementsByClassName('slider__card')[0].clientWidth;
    let focusDiv = posiScroll / widthDiv;
    let selectPoint = listPoint.getElementsByTagName('label')[Math.round(focusDiv)];
    listPoint.getElementsByClassName('active')[0].classList.remove('active');
    selectPoint.classList.add('active')
  }, 250);
}, true);
/* Events clicks points  */
const pointsResult = document.querySelectorAll('.point__cardResult');
pointsResult?.forEach(point => {point.addEventListener('click', (e)=> {
  if(e.target.nodeName == "LABEL"){      
      let parentCard = document.getElementById('boxSliderResult');
      e.target.parentNode.getElementsByClassName('active')[0].classList.remove('active');
      e.target.classList.add('active');
      let pointSele= e.target.getAttribute('attr-order');
      let focusSelet = parentCard.getElementsByClassName('slider__card')[pointSele];
      parentCard.scroll({
        left:focusSelet.offsetLeft,
        behavior: 'smooth'
      });
    }  
  })
})
/* Scroll horizontal Box Card */
var timeCard = null;
document.getElementById('boxSliderResult')?.addEventListener('scroll', (e) => {
  clearTimeout(timeCard);
  //Renew timer
  timeCard = setTimeout(function () {
    const listPoint = document.getElementById('pointCardResult');
    let posiScroll = document.getElementById('boxSliderResult').scrollLeft;
    let widthDiv = document.getElementById('boxSliderResult').getElementsByClassName('slider__card')[0].clientWidth;
    let focusDiv = posiScroll / widthDiv;
    let selectPoint = listPoint.getElementsByTagName('label')[Math.round(focusDiv)];
    listPoint.getElementsByClassName('active')[0].classList.remove('active');
    selectPoint.classList.add('active')
  }, 250);
}, true);
/* Event Active navigation */
/* document.getElementById('navigation')?.addEventListener('click', (e)=> {
  if(e.target.nodeName == 'A'){
    let list = document.getElementById('navigation');
    list.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
  }
}); */
/* Event  */
var timer = null;
document.getElementById('container')?.addEventListener('scroll', (e) => {
  clearTimeout(timer);  
  //Renew timer
  timer = setTimeout(function () {
    /* let listNav = document.getElementById('navigation'); */
    let container = document.getElementById('container');
    let posiScroll = Math.round(container.scrollTop);
    let heighChild = container.children[1].clientHeight;
    let focusDiv =  posiScroll / heighChild;
    document.getElementById('navigation').getElementsByClassName('active')[0].classList.remove('active');
    document.getElementById('navigation').children[Math.round(focusDiv)].children[0].classList.add('active');
  }, 300);
}, true);


var r = document.querySelector(':root');
document.getElementById('pipette')?.addEventListener('change', (e)=>{
    r.style.setProperty('--color-primary', e.target.value);
})