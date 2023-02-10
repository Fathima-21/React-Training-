const form=document.getElementById("form");
const password=document.getElementById("password");
const confirm=document.getElementById("confirmpass");

form.addEventListener('submit',e=>{
    e.preventDefault();

    validateInputs();
});
const setError=(element,message)=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText=message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}
const setSuccess=element=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const validateInputs=()=>{
    const password=password.value.trim();
    const confirmpassword=confirm.value.trim();
    if(confirm !== password){
        setError(confirm,"Passwords doesn't match");
        
    }
    else{
        setSuccess(confirm);
    }

}