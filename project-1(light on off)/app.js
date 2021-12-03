const lightoff = document.querySelector('.close');
const lighton = document.querySelector('.open');

const btn1 = document.querySelector('.on');
const btn2 = document.querySelector('.off');

// add event listener

btn1.addEventListener('click', ()=>{
    if(lighton.classList.contains('open')){
        lighton.classList.add('active');
        lightoff.classList.remove('active');
    }
})



btn2.addEventListener('click', ()=>{
    if(lightoff.classList.contains('close')){
        lightoff.classList.add('active');
        lighton.classList.remove('active');
    }
})