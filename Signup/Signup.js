//Input data
let email= document.getElementById("inputEmail4")
let password= document.getElementById("inputPassword4")
let confirm= document.getElementById("confirmPassword")
let phoneno= document.getElementById("phoneno")

//error
let Eerr=document.getElementsByClassName("Eerr")
let vis= document.getElementsByClassName("vis")

function validate(){
    let regexemail=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let regexpasswrd=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let phnno=/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    let e,p,c,no;
    if(regexemail.test(email.value)){
        e=true;
        vis[0].style.visibility="visible";
        Eerr[0].style.visibility='hidden';
        Eerr[1].style.visibility='hidden';

      }else{
        Eerr[0].style.visibility='visible';
        Eerr[1].style.visibility='visible';
        vis[0].style.visibility="hidden";
     
        }
    if(regexpasswrd.test(password.value)){
        p = true;
        vis[1].style.visibility="visible";
        Eerr[2].style.visibility='hidden';
        Eerr[3].style.visibility='hidden';
       
    }else{
        Eerr[3].style.visibility='visible';
        Eerr[2].style.visibility='visible';
        vis[1].style.visibility="hidden";
       
    }
    if(password.value===''){
        Eerr[4].style.visibility='visible';
        Eerr[5].style.visibility='visible';
        vis[2].style.visibility="hidden";
       

    }else if(password.value===confirm.value){
        c = true;
        vis[2].style.visibility="visible";
        Eerr[4].style.visibility='hidden';
        Eerr[5].style.visibility='hidden';

    }else{
        Eerr[4].style.visibility='visible';
        Eerr[5].style.visibility='visible';
        vis[2].style.visibility="hidden";
       
    
    }
    if(phnno.test(phoneno.value)){
        no = true;
        vis[3].style.visibility="visible";
        Eerr[6].style.visibility='hidden';
        Eerr[7].style.visibility='hidden';

    }else{
        vis[3].style.visibility="hidden";
        Eerr[6].style.visibility='visible';
        Eerr[7].style.visibility='visible';
    }

    if(e===true && p===true && c===true && no===true){
        return true;
    }else{
        return false;
    }
        
}
