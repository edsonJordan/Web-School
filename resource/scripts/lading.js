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