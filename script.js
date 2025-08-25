document.getElementById('login-button').addEventListener('click', function(){
    const mobile_number = 01856846615;
    const pin_number = 1234;

    const mobile = document.getElementById('mobile-number').value;
    const Mobile = parseInt(mobile);

    const pin = document.getElementById('pin-number').value;
    const Pin = parseInt(pin);

    if(mobile_number === Mobile && pin_number === Pin){
        window.location.href='./home.html'
    }
    else{
        alert('Password Not match')
    }


})