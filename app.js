function getpin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin +'';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getpin();
    }
    
}

function generatePin(){
    const pin = getpin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number  = event.target.innerText;
    const calc = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if (number == 'C') {
            calc.value = '';
        }
    }
    else {
        const previousNumber =  calc.value;
        const newNumber = previousNumber + number;
        calc.value = newNumber;
    }
    
  
})
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const calc = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if (pin == calc) {
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else {
        successMessage.style.display = "none";
        failError.style.display = 'block';
    }
}