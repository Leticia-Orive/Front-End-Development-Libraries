//Cambiar texto dentro de un elemento usando jQuery
/* Usando jQuery, puede cambiar el texto entre las etiquetas de inicio y final de un elemento. Incluso puede cambiar el marcado HTML.

jQuery tiene una función llamada .html()que le permite agregar etiquetas HTML y texto dentro de un elemento. Cualquier contenido previamente dentro del elemento se reemplazará por completo con el contenido que proporcione mediante esta función.

Así es como reescribiría y enfatizaría el texto de nuestro encabezado:

$("h3").html("<em>jQuery Playground</em>");
jQuery también tiene una función similar llamada .text()que solo modifica el texto sin agregar etiquetas. En otras palabras, esta función no evaluará ninguna etiqueta HTML que se le haya pasado, sino que la tratará como el texto con el que desea reemplazar el contenido existente.

Cambie el botón con id target4enfatizando su texto.

Vea nuestro artículo de noticias para <em> para conocer la diferencia entre <i>y <em>y sus usos.

Tenga en cuenta que, si bien la <i>etiqueta se ha utilizado tradicionalmente para enfatizar texto, desde entonces se ha adoptado como etiqueta para iconos. La <em>etiqueta ahora es ampliamente aceptada como la etiqueta para enfatizar. Cualquiera de los dos funcionará para este desafío.*/
//Ejercicio
/* Debe enfatizar el texto en su target4botón agregando etiquetas HTML.
De lo contrario, el texto debería permanecer sin cambios.
No debe alterar ningún otro texto.
Deberías estar usando .html()y no .text().
Debe seleccionar button id="target4"con jQuery.*/

<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target4").html('<em>#target4</em>');

  });
</script>

<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
