let pass1=document.getElementById('inputPassword4')
let space=document.getElementById('checkspace')

 let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
    let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')



function strength(){
   
    if(strongPassword.test(pass1.value)) {
            space.style.backgroundColor = 'green'
            // space.innerHTML= 'Strong'
            space.style.width = '80%'
            pass1.style.border="1px solid green"

            
        } else if(mediumPassword.test(pass1.value)){
            space.style.backgroundColor = 'orange'
            // space.innerHTML = 'Medium'
            space.style.width = "52%"
            pass1.style.border="1px solid orange"

        } else{
            space.style.backgroundColor = 'red'
            // space.innerHTML = 'Weak'
            space.style.width = "26%"
            pass1.style.border="1px solid red"
        }

}