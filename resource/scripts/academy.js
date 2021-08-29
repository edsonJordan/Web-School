var positScroll = 0;
const arrows = document.querySelectorAll('.arrow');
arrows?.forEach(arrow => {arrow.addEventListener('click', (e)=> {
    let arrowSelect = e.target.getAttribute('data-slide');
    let contSlider= document.getElementById('slideSect');
    let unidSlider = document.querySelectorAll('.slider__content')[0].clientWidth;
    let maxCont = contSlider.scrollWidth;
    const minCont = 0;
    console.log(unidSlider);
    switch (arrowSelect) {
        case "prev":
            let Res = this.positScroll - unidSlider ;      
            contSlider.scroll({      
                left: Res >= maxCont ?  this.positScroll = 0  : this.positScroll -= unidSlider,
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