function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const data = {
        email: username,
        confirmPassword: password
    };

    const loginMessage = document.getElementById('loginMessage');

    fetch('https://apc-web-works-api.onrender.com/api/v1/loginUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                console.log('Login successful');
                loginMessage.textContent = 'Login successful';
                loginMessage.classList.remove('text-danger');
                loginMessage.classList.add('text-success');
            } else {
                console.error('Login failed');
                loginMessage.textContent = 'Login failed';
                loginMessage.classList.remove('text-success');
                loginMessage.classList.add('text-danger');
            }
        })
        .catch(error => {
            console.error('Network error', error);
            loginMessage.textContent = 'Network error';
            loginMessage.classList.remove('text-success');
            loginMessage.classList.add('text-danger');
        });
}


function checkPasswordMatch() {
    const password = document.getElementById('password2').value;
    const confirmPassword = document.getElementById('confirmPassword2').value;
    const registerBtn = document.getElementById('registerBtn');

    if (password.trim() === confirmPassword.trim() && password.trim() !== '') {
        registerBtn.removeAttribute('disabled');
    } else {
        registerBtn.setAttribute('disabled', 'disabled');
    }
}

function register() {
    const email = document.getElementById('email2').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const password = document.getElementById('password2').value;
    const confirmPassword = document.getElementById('confirmPassword2').value;

    const userData = {
        username: email,
        email: email,
        contactNumber: contactNumber,
        confirmPassword: password,
    };

    const registrationMessage = document.getElementById('registrationMessage');

    console.log('User Data:', userData);

    fetch('https://apc-web-works-api.onrender.com/api/v1/createUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => {
            if (response.ok) {
                console.log('Registration successful');
                registrationMessage.textContent = 'Registration successful';
                registrationMessage.classList.remove('text-danger');
                registrationMessage.classList.add('text-success');
            } else {
                console.error('Registration failed');
                registrationMessage.textContent = 'Registration failed';
                registrationMessage.classList.remove('text-success');
                registrationMessage.classList.add('text-danger');
            }
        })
        .catch(error => {
            console.error('Network error', error);
            registrationMessage.textContent = 'Network error';
            registrationMessage.classList.remove('text-success');
            registrationMessage.classList.add('text-danger');
        });
}

function checkPasswordMatch() {
    const password = document.getElementById('password2').value;
    const confirmPassword = document.getElementById('confirmPassword2').value;
    const registerBtn = document.getElementById('registerBtn');

    if (password.trim() === confirmPassword.trim() && password.trim() !== '') {
        registerBtn.removeAttribute('disabled');
    } else {
        registerBtn.setAttribute('disabled', 'disabled');
    }
}




function contactHandler() {
    const contactname = document.getElementById('contactname').value;
    const contactemail = document.getElementById('contactemail').value;
    const contactmsg = document.getElementById('contactmsg').value;

    const data = {
        name: contactname,
        email: contactemail,
        message: contactmsg
    };
  

    const loginMessage = document.getElementById('loginMessage');

    fetch('https://apc-web-works-api.onrender.com/api/v1/sendMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                console.log('Message sent successfully');
                alert("Message sent successfully")

            } else {
                console.error('Message sent failed');
                alert("Message sent failed")


            }
        })
        .catch(error => {
            console.error('Network error', error);
            loginMessage.textContent = 'Network error';
            loginMessage.classList.remove('text-success');
            loginMessage.classList.add('text-danger');
        });
}
