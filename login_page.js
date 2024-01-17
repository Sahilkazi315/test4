const submitBtn = document.getElementById('submitBtn');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    if(validateEmail() && validatePassword()){
        alert("Login Successful");
    }
});

