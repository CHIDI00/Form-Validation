// const error_Message = document.getElementById('error');
// const title = document.getElementById('title');
// const full_Name = document.getElementById('full_Name');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const passwordConfirmation = document.getElementById('confirm_Password');

// const sign_Up = document.getElementById('signUp');
// const sign_In = document.getElementById('signIn');

// const fName = document.getElementById('fullName');
// const cPassword = document.getElementById('confirmPassword');

// const fullName = document.querySelector('.fullName');
// const confirmPassword = document.querySelector('.confirmPassword');

const title = document.getElementById('title');
const name_field = document.getElementById('nameField');

const user_name = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

const sign_in = document.getElementById('signIn');
const sign_up = document.getElementById('signUp');

sign_in.addEventListener('mouseover', () => {
    name_field.style.maxHeight = '0'
    title.innerText = 'Sign in';
    sign_in.style.backgroundColor = 'orangered';
    sign_in.style.color = '#FFF'
    sign_up.style.backgroundColor = '#f0cdbb'
    sign_up.style.color = 'orangered'
    console.log('clicked');

})

sign_up.addEventListener('mouseover', ()=> {
    name_field.style.maxHeight = '65px'
    title.innerText = 'Sign up'
    sign_up.style.backgroundColor = 'orangered'
    sign_up.style.color = '#fff'
    sign_in.style.backgroundColor = '#f0cdbb'
    sign_in.style.color = 'orangered'
})


