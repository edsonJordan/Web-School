var r = document.querySelector(':root');
document.getElementById('pipette').addEventListener('change', (e)=>{
    r.style.setProperty('--color-primary', e.target.value);
})