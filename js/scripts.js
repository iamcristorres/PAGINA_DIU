$(".item-manual").on( "click", function (){
    $("#espacio-item").empty();
    titulo= $(this).data("dato");
    $("#espacio-item").html(`
        <h3>`+titulo+`</h3>
        <p>__construct([string orientation [, string unit [, mixed size]]])</p>
        <h4>Descripción</h4>
        <p>Esta es la clase constructor. Permite establecer el formato de página, la orientación y la unidad de medida usada en todos los métodos (excepto para tamaños de fuentes).</p>
        <h4>Parámetros</h4>
        <p>orientation</p>
        <p>Orientación de página por defecto. Los posibles valores son (indiferente a mayúsculas):
        P o Portrait (normal)
        L o Landscape (apaisado)
        Valor por defecto es P.</p>
    `);

})

function guardarTopic(){
    var titulo=$("#title").val();
    var name=$("#name").val();
    var strDate =  moment().format('DD-MM-YY HH:mm');
    $( "#body_topic" ).prepend( `
        <tr>
            <th scope="row"><a href ="#">`+titulo+`</a></th>
            <td><center>`+name+`</center></td>
            <td><center>0</center></td>
            <td><center>`+strDate+`</center></td>
        </tr>
    ` );

    $('#exampleModal').modal('toggle');
    $("#title").val("");
    $("#name").val("");
}

function validarFormulario(){
    var nombres=$("#nombres");
    var nombres_e=$("#nombres_e");
    var apellidos=$("#apellidos");
    var apellidos_e=$("#apellidos_e");
    var correo1=$("#correo1");
    var correo1_e=$("#correo1_e");
    var correo2=$("#correo2");
    var correo2_e=$("#correo2_e");
    var password1=$("#password1");
    var password1_e=$("#password1_e");
    var password2=$("#password2");
    var password2_e=$("#password2_e");
    var direccion=$("#direccion");
    var direccion_e=$("#direccion_e");
    var ocupacion=$("#ocupacion");
    var ocupacion_e=$("#ocupacion_e");
    var genero_e=$("#genero_e");
    var termCond_e=$("#termCond_e");
    $val=true;
    if(nombres.val()==""){
        nombres.addClass( "input-error" );
        nombres_e.empty();
        nombres_e.append( "Hace Falta los nombres" );
        nombres_e.removeClass( "div-oculto" );
        $val=false;
    }
    if(apellidos.val()==""){
        apellidos.addClass( "input-error" );
        apellidos_e.empty();
        apellidos_e.append( "Hace Falta los apellidos" );
        apellidos_e.removeClass( "div-oculto" );
        $val=false;
    }

    if(correo1.val()==""){
        correo1.addClass( "input-error" );
        correo1_e.empty();
        correo1_e.append( "Hace Falta el correo" );
        correo1_e.removeClass( "div-oculto" );
        $val=false;
    }

    if(correo2.val()==""){
        correo2.addClass( "input-error" );
        correo2_e.empty();
        correo2_e.append( "Hace Falta el correo" );
        correo2_e.removeClass( "div-oculto" );
        $val=false;
    }

    if(password1.val()==""){
        password1.addClass( "input-error" );
        password1_e.empty();
        password1_e.append( "Hace Falta la contraseña" );
        password1_e.removeClass( "div-oculto" );
        $val=false;
    }

    if(password2.val()==""){
        password2.addClass( "input-error" );
        password2_e.empty();
        password2_e.append( "Hace Falta la contraseña" );
        password2_e.removeClass( "div-oculto" );
        $val=false;
    }

    if(direccion.val()==""){
        direccion.addClass( "input-error" );
        direccion_e.empty();
        direccion_e.append( "Hace Falta la direccion" );
        direccion_e.removeClass( "div-oculto" );
        $val=false;
    }

    if(ocupacion.val()==""){
        ocupacion.addClass( "input-error" );
        ocupacion_e.empty();
        ocupacion_e.append( "Hace Falta la ocupacion" );
        ocupacion_e.removeClass( "div-oculto" );
        $val=false;
    }

    if(password1.val()!=password2.val()){
        password2.addClass( "input-error" );
        password2_e.empty();
        password2_e.append( "Las contraseñas no coinciden" );
        password2_e.removeClass( "div-oculto" );
        $val=false;
    }

    if(correo1.val()!=correo2.val()){
        correo2.addClass( "input-error" );
        correo2_e.empty();
        correo2_e.append( "Los correos no coinciden" );
        correo2_e.removeClass( "div-oculto" );
        $val=false;
    }

    if($("[name='inlineRadioOptions']:checked").val()==undefined){
        genero_e.empty();
        genero_e.append( "Debe Seleccionar un genero" );
        genero_e.removeClass( "div-oculto" );
        $val=false;
    }

    if($("#termCondID").is(':checked')){
        termCond_e.empty();
        termCond_e.append( "Debe Aceptar terminos y condiciones" );
        termCond_e.removeClass( "div-oculto" );
        $val=false;
    }else{
        
    }

    if($val){
        $( "#formulario" ).submit();
    }
}

function datos(){
    var parametros=location.search.substr(1).split("&");
    campos1 = parametros[0].split("=");
    campos2 = parametros[1].split("=");
    campos3 = parametros[2].split("=");
    campos4 = parametros[3].split("=");
    campos5 = parametros[4].split("=");

    var correo=campos3[1].replace('%40','@');
    encodeURIComponent('@');
    document.getElementById("cargaDatos").innerHTML+=`
    <p><span class="textnegrita">Nombres: </span>`+campos1[1]+`</p>
    <p><span class="textnegrita">Apellidos: </span>`+campos2[1]+`</p>
    <p><span class="textnegrita">Correo Electronico: </span>`+correo+`</p>
    <p><span class="textnegrita">Dirección Residencia: </span>`+campos4[1]+`</p>
    <p><span class="textnegrita">Ocupacion: </span>`+campos5[1]+`</p>
    `;
}
