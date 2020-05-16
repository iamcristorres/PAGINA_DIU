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