const trocadecorsol = document.querySelector('.botaodecorsol');
const trocadecorlua = document.querySelector('.botaodecorlua');
const backgroundglobal = document.querySelector('.background-global-enemy');
const backgroundimage = document.querySelector('.background-global-enemyimage');
const profiles = document.querySelector('.section-global-enemy');


trocadecorsol.addEventListener('click', ()=> {
    backgroundglobal.classList.add('active');
});

trocadecorsol.addEventListener('click', ()=> {
    backgroundimage.classList.add('active');
});

trocadecorsol.addEventListener('click', ()=> {
    profiles.classList.add('active');
});

trocadecorlua.addEventListener('click', ()=> {
    backgroundglobal.classList.remove('active');
});

trocadecorlua.addEventListener('click', ()=> {
    backgroundimage.classList.remove('active');
});

trocadecorlua.addEventListener('click', ()=> {
    profiles.classList.remove('active');
});



const irparayran = document.querySelector('.front-to-yran');
const voltarparanic = document.querySelector('.back-to-nic');
const irparamiguel = document.querySelector('.front-to-miguel');
const voltarparayran = document.querySelector('.back-to-yran');
const geral = document.querySelector('.general');
const geraldenovo = document.querySelector('.profile-yran');
const geraldenovodois = document.querySelector('.profile-miguel');
const testemobal = document.querySelector('.background-global-enemyimage');




irparayran.addEventListener('click', ()=> {
    profiles.classList.add('activ');
});

voltarparanic.addEventListener('click', ()=> {
    profiles.classList.remove('activ');
});

irparamiguel.addEventListener('click', ()=> {
    profiles.classList.remove('activ');
    profiles.classList.add('acti');
});

voltarparayran.addEventListener('click', ()=> {
    profiles.classList.remove('acti');
    profiles.classList.add('activ');
});




geral.addEventListener('click', ()=> {
    profiles.classList.add('mobiletest');
});

geraldenovo.addEventListener('click', ()=> {
    profiles.classList.add('mobiletest');
});

geraldenovodois.addEventListener('click', ()=> {
    profiles.classList.add('mobiletest');
});

irparayran.addEventListener('click', ()=> {
    profiles.classList.remove('mobiletest');
});

irparamiguel.addEventListener('click', ()=> {
    profiles.classList.remove('mobiletest');
});

voltarparanic.addEventListener('click', ()=> {
    profiles.classList.remove('mobiletest');
});

voltarparayran.addEventListener('click', ()=> {
    profiles.classList.remove('mobiletest');
});


testemobal.addEventListener('click', ()=> {
    profiles.classList.remove('mobiletest');
});








