const clickSign = document.getElementById('clickSign');
const clickLog = document.getElementById('clickLog');
const signBg = document.getElementById('signup');
const loginBg = document.getElementById('absolute');
const form  = document.querySelector('.form'); 
const form2  = document.querySelector('.form2'); 

clickSign.addEventListener('click', () => {
    form.classList.remove('anim');
    form2.classList.remove('anim2');
    loginBg.classList.remove('fade');
    loginBg.classList.add('show');
    signBg.classList.remove('show');
    signBg.classList.add('fade');
});

clickLog.addEventListener('click', () => {
    form.classList.add('anim');
    form2.classList.add('anim2');
    signBg.classList.remove('fade');
    signBg.classList.add('show');
    loginBg.classList.add('fade');
});


