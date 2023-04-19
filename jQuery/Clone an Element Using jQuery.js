//Clonar un elemento usando jQuery
/* Además de mover elementos, también puedes copiarlos de un lugar a otro.

jQuery tiene una función llamada clone()que hace una copia de un elemento.

Por ejemplo, si quisiéramos copiar target2de nuestro left-wella nuestro right-well, usaríamos:

$("#target2").clone().appendTo("#right-well");
¿Notaste que esto implica unir dos funciones jQuery? Esto se llama encadenamiento de funciones y es una forma conveniente de hacer las cosas con jQuery.

Clone su target5 elemento y agréguelo a su archivo left-well.*/
//Ejercicios
/* Su target5 elemento debe estar dentro de su archivo right-well.
Una copia de su target5 elemento también debe estar dentro de su archivo left-well.
Solo debe usar jQuery para mover estos elementos.*/

<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");

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
