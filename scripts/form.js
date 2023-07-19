const message =  document.querySelector('#recordMessage');
const password = document.querySelector('#password');
const confirmPass = document.querySelector('#password2');
const range_value = document.querySelector('#rangeValue');
const range = document.querySelector('#rating');


confirmPass.addEventListener("focusout", ()=>{
    if(password.value !== confirmPass.value){
        message.textContent = "PASSWORDS DO NOT MATCH!";
        message.style.display = "block";
        password.style.backgroundColor = "#d4d4d4"
        password.value = "";
        confirmPass.value= "";
        password.focus();
    }else{
        message.style.display= "none";
        password.style.background = "#fff"
    }
});

range.addEventListener('input', displayRatingValue);

function displayRatingValue(){
    rangeValue.innerHTML = range.value;
}

