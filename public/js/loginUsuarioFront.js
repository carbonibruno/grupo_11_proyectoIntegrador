window.addEventListener('load', function() {
   
    let form = document.querySelector("form")
       
    form.addEventListener("submit", function (e) {

      let errores = [];

      let email = document.querySelector("#email")
      let password = document.querySelector("#password")

      if(email.value == ""){
         errores.push("Complete el mail"); 
      }

      if(password.value == ""){
        errores.push("Complete el password")  
      }

      /*falta is mail*/

      if(errores.length > 0){

        e.preventDefault()

        let erroresClass = document.querySelector(".errores")

        for (let i = 0; i < errores.length; i++) {
             
           erroresClass.innerHTML += "<p>" + errores[i] + "<p>"

        }

      }
    

    })



})    


