var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error')
var subjectError = document.getElementById('subject-error');
var submitError = document.getElementById('submit-error');
var messageError = document.getElementById('message-error');


 function validateName(){
   
    var name = document.getElementById('contact-name').value;
     
    if(name.length==0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]+ [A-Za-z]+$/)){
        nameError.innerHTML ='Write Full Name';
        return false;
    }
    else{
        nameError.innerHTML ='<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}
function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length==0){
        emailError.innerHTML ='Email is required';
        return false;

    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML='Email Invalid';
        return false;
    }
    else{
        emailError.innerHTML ='<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}
function validatePhone(){

    var phone=document.getElementById('contact-phone').value;
    if(phone.length == 0)
    {
        phoneError.innerHTML="Phone required";
        return false;
    }else
    if(phone.length<10||phone.length>10 )
    {
        phoneError.innerHTML="10 digits required";
        return false;   
    }else
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML="not valid";
        return false; 
    }else
    phoneError.innerHTML='<i class="fa-solid fa-square-check"></i>';
    return true;


}
function validateSubject(){

    var subject=document.getElementById('contact-subject').value;

    if(subject.length==0){
        subjectError.innerHTML='Enter the subject';
        return false;
    }
    else{
        subjectError.innerHTML='<i class="fa-solid fa-square-check"></i>';
        return true;
    }
}
function validateMessage(){

    var message=document.getElementById('contact-message').value;
    var required =30;
    var left = required-message.length;

    if(message.length==0){
        messageError.innerHTML='message is required';
        return false;
    }
    if(left>0){
        messageError.innerHTML= left +'more characters required';
        return false;
    }
    else{
        messageError.innerHTML='<i class="fa-solid fa-square-check"></i>';
        return true;
    }
}
function validateForm(){
    var submit=document.getElementById('contact-submit').value;
    if(! validateName() || ! validateEmail() || ! validatePhone() || ! validateSubject() || ! validateMessage()){
        submitError.style.display ='block';
        submitError.innerHTML='please fill the form';
        setTimeout(function(){submitError.style.display ='none';},3000);
        return false;
    }
    else{
        return true;
    }
      

}