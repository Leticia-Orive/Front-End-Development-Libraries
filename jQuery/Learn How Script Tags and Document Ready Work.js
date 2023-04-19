//Aprenda cómo funcionan las etiquetas de secuencias de comandos y Document Ready
/* Ahora estamos listos para aprender jQuery, la herramienta de JavaScript más popular de todos los tiempos.

Antes de que podamos comenzar a usar jQuery, debemos agregar algunas cosas a nuestro HTML.

Primero, agregue un scriptelemento en la parte superior de su página. Asegúrese de cerrarlo en la siguiente línea.

Su navegador ejecutará cualquier JavaScript dentro de un scriptelemento, incluido jQuery.

Dentro de su scriptelemento, agregue este código: $(document).ready(function() {a su archivo script. Luego ciérrelo en la siguiente línea (todavía dentro de su scriptelemento) con:});

Aprenderemos más sobre functionsmás adelante. Lo importante que debe saber es que el código que coloque dentro functionse ejecutará tan pronto como su navegador haya cargado su página.

Esto es importante porque sin su document ready function, su código puede ejecutarse antes de que se represente su HTML, lo que provocaría errores.*/
//Ejercicio
/* Debe crear un scriptelemento asegurándose de que sea válido y tenga una etiqueta de cierre.
Debe agregar $(document).ready(function() {al comienzo de su scriptelemento.
Debes cerrar tu $(document).ready(function() {función con});*/

// Only change code above this line -->
<script>
  $(document).ready(function(){

  });
</script>
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