var positScroll = 0;
const arrows = document.querySelectorAll('.arrow');
arrows?.forEach(arrow => {arrow.addEventListener('click', (e)=> {
    let arrowSelect = e.target.getAttribute('data-slide');
    let contSlider= document.getElementById('slideSect');
    let unidSlider = document.querySelectorAll('.slider__content')[0].clientWidth;
    let maxCont = contSlider.scrollWidth;
    const minCont = 0;
    switch (arrowSelect) {
        case "prev":
            let Res = this.positScroll - unidSlider ;      
            let ultimate = maxCont - unidSlider ;
            contSlider.scroll({      
                left: Res < minCont ?  this.positScroll = ultimate : this.positScroll -= unidSlider,
                behavior: 'smooth'
            });
          break;
        case "next":
            let Sum = this.positScroll + unidSlider ;      
            contSlider.scroll({      
                left: Sum >= maxCont ?  this.positScroll = 0  : this.positScroll += unidSlider,
                behavior: 'smooth'
            });
          break;        
      }
    })
})
var unidSlider = document.querySelectorAll('.slider__content')[0].clientWidth;
var contSlider= document.getElementById('slideSect').scrollWidth;
var contSlider= document.getElementById('slideSect');

var clear;
document.getElementById('sectSlider').addEventListener('mouseout', (e)=>{   
    clearInterval(clear);
});
document.getElementById('sectSlider').addEventListener('mouseleave', (e)=>{   
    clear= setInterval(autoPlay, 5000);
});
clear= setInterval(autoPlay, 5000);

function autoPlay(params) {
    let maxCont = contSlider.scrollWidth;
    let Sum = this.positScroll + unidSlider ; 
        contSlider.scroll({      
            left: Sum >= maxCont ?  this.positScroll = 0  : this.positScroll += unidSlider,
            behavior: 'smooth'
        });
}


var r = document.querySelector(':root');
document.getElementById('pipette')?.addEventListener('change', (e)=>{
    r.style.setProperty('--color-primary', e.target.value);
})