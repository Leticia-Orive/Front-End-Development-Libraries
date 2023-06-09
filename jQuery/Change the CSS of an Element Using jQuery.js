//Cambiar el CSS de un elemento usando jQuery
/* También podemos cambiar el CSS de un elemento HTML directamente con jQuery.

jQuery tiene una función llamada .css()que te permite cambiar el CSS de un elemento.

Así es como cambiaríamos su color a azul:

$("#target1").css("color", "blue");
Esto es ligeramente diferente de una declaración CSS normal, porque la propiedad CSS y su valor están entre comillas y separados por una coma en lugar de dos puntos.

Elimine sus selectores de jQuery, dejando un archivo document ready function.

Seleccione target1y cambie su color a rojo.*/
//Ejercicio
/* Su target1 elemento debe tener texto rojo.
Solo debe usar jQuery para agregar estas clases al elemento.*/

<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
   
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
