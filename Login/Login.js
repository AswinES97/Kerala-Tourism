let email = document.getElementById("exampleInputEmail1");
let error =document.getElementById("emailHelp");
let password = document.getElementById("exampleInputPassword1")
let errorpass= document.getElementById("pass1")
function validate(){
    // let regexemail=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let regexemail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regexpasswrd=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    let e,p;
    if(regexemail.test(email.value)){
        e=true;
    }else{
        error.innerHTML= "Invalid";
        error.style.color="red";
        }
    if(regexpasswrd.test(password.value)){
        p = true;
    }else{
        errorpass.innerHTML= "Invalid";
        errorpass.style.color="red";
       
    }
    if(e===true&&p===true){
        return true;
    }else{
        return false;
    }
}