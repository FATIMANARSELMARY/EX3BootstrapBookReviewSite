const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const phoneno = document.querySelector('#phoneno')
const password = document.querySelector('#password')
const cpassword = document.querySelector('#cpassword')

form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
        e.preventDefault()
    }
    else {
        alert('The data is valid');
    }
    
})

function validateInputs(){
    const usernameVal=username.value.trim()
    const emailVal = email.value.trim();
    const phonenoVal=phoneno.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal=cpassword.value.trim();
    let success = true;
    if(usernameVal===''){
        success= false;
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }

    if(emailVal==='')
    {
        success= false;
        setError(email,'Email is required')
    } 
    else if(!validateEmail(emailVal))
    {
        success= false;
        setError(email,'Please enter a valid email')
    }
    else{
        setSuccess(email)
    }  
    if(phonenoVal==='')
    {
        success= false;
        setError(phoneno,'PhoneNo is required')
    } 
    else if(phonenoVal.length!==10)
    {
        success= false;
        setError(phoneno,'Enter a valid PhoneNo')
    }
    else{
        setSuccess(phoneno)
    } 

    if(passwordVal==='')
    {
        success= false;
        setError(password,'Password is required')
    } 
    else if(passwordVal.length<8)
    {
        success= false;
        setError(password,'Must contain atleast 8 charachters')
    }
    else{
        setSuccess(password)
    } 
    if(cpasswordVal==='')
    {
        success= false;
        setError(cpassword,'Confirm Password is required')
    } 
    else if(cpasswordVal!==passwordVal)
    {
        success= false;
        setError(cpassword,'Password does not match')
    }
    else{
        setSuccess(cpassword)
    }        

    return success;
}

function setError(element,message)
{
    const inputgroup = element.parentElement;
    const errorElement = inputgroup.querySelector('.error');
    errorElement.innerText = message;
    inputgroup.classList.add('error')
    inputgroup.classList.remove('success')
}

function setSuccess(element)
{
    const inputgroup = element.parentElement;
    const errorElement = inputgroup.querySelector('.error');
    
    errorElement.innerText = '';
    inputgroup.classList.add('success')
    inputgroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        );
};