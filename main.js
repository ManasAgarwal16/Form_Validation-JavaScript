const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');


form.addEventListener('submit',(event)=>{
    event.preventDefault();
    validate();
})

const sendData = (usernameval,sRate, count) =>
{
    if(sRate === count)
    {
        // alert('registration successfull');
        swal("Welcome!"+ usernameval, "Registration  Successful", "success");
    }
}

const successMsg = (usernameval)=>
{
    let formCon = document.getElementsByClassName('form-control');
    var count = formCon.length-1;
    for(var i=0 ; i<formCon.length ; i++)
    {
        if(formCon[i].className === "form-control success")
        {
            var sRate = 0 + i;
            sendData(usernameval,sRate,count);
        }
        else
        {
            return false;
        }
    }
}
const isEmail = (emailval)=>
{
    var atSymbol = emailval.indexOf("@");
    if(atSymbol <1) return false;
    var dot = emailval.lastIndexOf('.');
    if(dot <= atSymbol  + 3) return false;
    if(dot === emailval.length-1) return false;
    return true;



}

// define validate function

const validate = ()=>
{
    const usernameval = username.value.trim();
    const emailval = email.value.trim();
    const phoneval = phone.value.trim();
    const passwordval = password.value.trim();
    const cpasswordval = cpassword.value.trim();

    // validate username
    if(usernameval === "")
    {
        setErrorMsg(username,'Username cannot be blank');
    }
    else if(usernameval.length <= 2)
    {
        setErrorMsg(username,'Username min 3 ch')
    }
    else
    {
        setSuccessMsg(username);
    }


    // validate Email
    if(emailval === "")
    {
        setErrorMsg(email,'Email cannot be blank');
    }
    else if(!isEmail(emailval))
    {
        setErrorMsg(email,'Not valid Email');
    }
    else
    {
        setSuccessMsg(email);
    }

    // validate Phone
    if(phoneval === "")
    {
        setErrorMsg(phone,'Phone number cannot be blank');
    }
    else if(phoneval.length !=10)
    {
        setErrorMsg(phone,'Not a valid Phone number');
    }
    else
    {
        setSuccessMsg(phone);
    }
    //validate password
    
    if(passwordval === "")
    {
        setErrorMsg(password,'password cannot be blank');
    }
    else if(passwordval.length <=5)
    {
        setErrorMsg(password,'Minimum 6 char');
    }
    else
    {
        setSuccessMsg(password);
    }
    // validaye cpassword
    if(cpasswordval === "")
    {
        setErrorMsg(password,'confirm password cannot be blank');
    }
    else if(cpasswordval != passwordval)
    {
        setErrorMsg(cpassword,'Password does not match');
    }
    else
    {
        setSuccessMsg(cpassword);
    }

    successMsg(usernameval);


}
function setErrorMsg(input , errormsgs)
{
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error" 
    small.innerText = errormsgs;
}
function setSuccessMsg(input)
{
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}