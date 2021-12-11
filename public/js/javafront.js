window.addEventListener("load", function() { 
    let formularioCrearProducto = document.querySelector("#formularioCrearProducto")
    let nombreProducto = document.querySelector("#name")
    let descripcionProducto = document.querySelector("#description")
    let botonNuevaCuenta = document.querySelector("#botonNuevaCuenta")


    /*botonNuevaCuenta.addEventListener("click", function(e){
        e.preventDefault();
        let errores = {}
        if (nombreProducto.value.length <1 {errores.push} )
    })*/

    const formSubmitHandler = function (e) {
    
        let errores = [];
        
        if(nombreProducto.value < 1){
            errores.push("Debe completar el nombre del producto")
            nombreProducto.classList.add("Text-Danger")
        } 
        
       /* if(premios.value < 0 && premios.value > 10){
            errores.push('Los premios tienen que ser entre 0 y 10')
            premios.classList.add('is-invalid')
        } else {
            premios.classList.add('is-valid')
        } 
    
        if(duracion.value < 60 && duracion.value > 360){
            errores.push('La duracion tiene que ser mayor a 60 y menor a 360')
            duracion.classList.add('is-invalid')
        } else {
            duracion.classList.add('is-valid')
        } 
       
        if(errores.length > 0){
            e.preventDefault()
        } 
        // hacemos validaciones campo por campo
    
        // cada vez que el campo NO satisface
        // elemento.classList.add('is-invalid')
    
        // cada vez que el campo SÍ satisface
        // elemento.classList.add('is-valid')
    
        // cada vez que el campo no satisface la condición
        // errores.push('Mi Error');
    
        // luego de todas las validaciones qué hacemos Maida?
        // si el arreglo NO está vacío, 
    
        / e.preventDefault();*/

        if(errores.length > 0){
            e.preventDefault()
        }
    }
    
    formularioCrearProducto.addEventListener('submit', formSubmitHandler);


 })