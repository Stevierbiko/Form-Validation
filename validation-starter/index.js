var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emialError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name cannot be blank';
    }
}