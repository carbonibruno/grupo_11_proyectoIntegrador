window.addEventListener('load', function() {
    
    let form = document.querySelector("form");
        
   form.addEventListener("submit", function (e) {

      let errores = []
      
      let description = document.querySelector("#description")
      let name = document.querySelector("#name")

      if(name.value == ""){
         errores.push("Debe completar el nombre del producto")
      }

      if (name.value < 8){
      errores.push("El nombre debe tener ocho caracteres como minimo")
      }

      if(description.value < 20){
         errores.push("La descripcion del productos debe ser de minimo 20 caracteres")
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

        