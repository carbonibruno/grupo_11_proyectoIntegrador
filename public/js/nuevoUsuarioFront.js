window.addEventListener('load', function(){

    let form = document.querySelector("form")

    form.addEventListener("submit", function (e) {

        let errores = [];
  
        let nombre = document.querySelector("#first_name")
        let apellido = document.querySelector("#last_name")
        let email = document.querySelector("#email")
        let password = document.querySelector("#password")
  
        if(email.value == ""){
           errores.push("Complete el mail"); 
        }
  
        if(password.value == ""){
          errores.push("Complete el password")  
        }

        if(password.value < 8 ) {
            errores.push("Complete el password")  
          }

        if(nombre.value == ""){
            errores.push("Ingrese su nombre"); 
         }else if(nombre.value < 2) {
             errores.push("El nombre debe superar 2 caracteres")
         }

        if(apellido.value == ""){
            errores.push("Ingrese su apellido"); 
         }else if(apellido.value < 2) {
             errores.push("El apellido debe superar 2 caracteres")
         }


        if(errores.length > 0){

            e.preventDefault()
    
            let erroresClass = document.querySelector(".errores")
    
            for (let i = 0; i < errores.length; i++) {
                 
               erroresClass.innerHTML += "<p>" + errores[i] + "<p>"
    
            }
    
          }
        
    
        })
    
    
    
       
})