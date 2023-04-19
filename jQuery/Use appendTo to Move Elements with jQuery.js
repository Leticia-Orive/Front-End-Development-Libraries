//Use appendTo para mover elementos con jQuery
/*Ahora intentemos mover elementos de uno diva otro.

jQuery tiene una función llamada appendTo()que le permite seleccionar elementos HTML y agregarlos a otro elemento.

Por ejemplo, si quisiéramos movernos target4 de nuestro pozo derecho a nuestro pozo izquierdo, usaríamos:

$("#target4").appendTo("#left-well");
Mueve tu target2elemento de tu left-wella tu right-well. */
//Ejercicio
/* Su target2 elemento no debe estar dentro de su archivo left-well.
Su target2 elemento debe estar dentro de su archivo right-well.
Solo debe usar jQuery para mover estos elementos.*/

<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well")

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
