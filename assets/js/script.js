document.getElementById("alertButton").addEventListener("click", function() {
    
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var motivo = document.getElementById("motivo").value;

    if(!nombre){
        
        const alertDiv = document.createElement("div");
        alertDiv.className = "alert alert-danger alert-dismissible fade show";
        alertDiv.role = "alert";
        alertDiv.innerHTML = `
        <strong>¡ERROR!</strong> Debes Ingresar Tu Nombre Para Continuar.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;

        document.getElementById("validaNombre").appendChild(alertDiv);
    }

    if(!apellidos){

        const alertDiv = document.createElement("div");
        alertDiv.className = "alert alert-danger alert-dismissible fade show";
        alertDiv.role = "alert";
        alertDiv.innerHTML = `
        <strong>¡ERROR!</strong> Debes Ingresar Tus Apellidos Para Continuar.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;

        document.getElementById("validApellidos").appendChild(alertDiv);
    }

    if(!telefono){

        const alertDiv = document.createElement("div");
        alertDiv.className = "alert alert-warning alert-dismissible fade show";
        alertDiv.role = "alert";
        alertDiv.innerHTML = `
        <strong>¡AYUDA!</strong> Para la Próxima Vez Mejor Ingresa tu Teléfono para Comunicarme Contigo..
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;

        document.getElementById("validaTelefono").appendChild(alertDiv);
    }

    if(!email){
        
        const alertDiv = document.createElement("div");
        alertDiv.className = "alert alert-danger alert-dismissible fade show";
        alertDiv.role = "alert";
        alertDiv.innerHTML = `
        <strong>¡ERROR!</strong> Debes Ingresar Tu Email Para Continuar.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;

        document.getElementById("validaEmail").appendChild(alertDiv);
    }

    if(!motivo){
        
        const alertDiv = document.createElement("div");
        alertDiv.className = "alert alert-danger alert-dismissible fade show";
        alertDiv.role = "alert";
        alertDiv.innerHTML = `
        <strong>¡ERROR!</strong> Debes Ingresar Tu Motivo Para Continuar.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;

        document.getElementById("validaMotivo").appendChild(alertDiv);
    }

    if(nombre && apellidos && telefono &&email && motivo){

        const alertDiv = document.createElement("div");
        alertDiv.className = "alert alert-success alert-dismissible fade show";
        alertDiv.role = "alert";
        alertDiv.innerHTML = `
            <strong>¡Éxito!</strong> Tus Datos fueron enviados, pronto recibirás la respuesta.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;
    
        // Agregar la alerta al contenedor
        document.getElementById("alertContainer").appendChild(alertDiv);

    }

   
});
