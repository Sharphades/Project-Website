const clickSign = document.getElementById('clickSign');
const clickLog = document.getElementById('clickLog');
const signBg = document.getElementById('signup');
const loginBg = document.getElementById('absolute');
const form  = document.querySelector('.form'); 
const form2  = document.querySelector('.form2');
const submit = document.querySelectorAll('.submit');

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

// for sign up oke
submit[0].addEventListener('click', (event) => {
    // event.preventDefault();

    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const signupEmail = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirmemail').value;
    const passwordup = document.getElementById('passwordup').value;
    
    if (!firstName || !lastName || !signupEmail || !confirmEmail || !passwordup) {
        alert('Please input all fields');
    } else {
        let users = getUsers();

        const user = {
            firstname: firstName,
            lastname: lastName,
            email: signupEmail,
            password: passwordup,
            type: 'user'
        };

        users.push(user);


        localStorage.setItem('Users', JSON.stringify(users));
        window.location.reload();
    }
});


// para login
 const email = document.getElementById('email3');
 const password = document.getElementById('password');
submit[1].addEventListener('click', (e) => {
    e.preventDefault();
    loginUser();
});

function loginUser() {
    let emailFound = false;
    let oke = 0;
    for (let i in getUsers()) { 
        
    
        if (email.value === getUsers()[i].email && password.value === getUsers()[i].password && getUsers()[i].type === 'user') {
            const userData = {
                firstname: getUsers()[i].firstname,
                lastname: getUsers()[i].lastname,
                email: getUsers()[i].email,
                password: getUsers()[i].password
            };
            
            localStorage.setItem('loggedUser', JSON.stringify(userData));
            localStorage.setItem('islog', 'true');
            emailFound = true;
            oke = i;
            window.location.href = 'index.html';
            break;
        } else if (email.value === getUsers()[i].email && password.value === getUsers()[i].password && getUsers()[i].type === 'admin') {

            window.location.href = 'admin.html';
            localStorage.setItem('islog', 'true');
            localStorage.setItem('isAdmin', 'true');
            emailFound = true;
            oke = i;
            break;
        }
    }

    if (email.value === '' && password.value === '' ) {
        alert('Enter details')
    }else if (email.value !== getUsers()[oke].email || password.value !== getUsers()[oke].password) {
        alert('You email or password is wrong')
    } else if (password.value === '') {
        alert('pls input password');        
    } else if (email.value === '') {
        alert('pls input email');
    }
    else if (emailFound == false) {
        alert('Wala mana na register bai');
        location.reload();
    }
}


function getUsers() {
    return JSON.parse(localStorage.getItem('Users')) || [];
}

