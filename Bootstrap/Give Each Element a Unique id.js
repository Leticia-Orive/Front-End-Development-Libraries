//Dale a cada  elemento una identificación única
/* También querremos poder usar jQuery para orientar cada botón por su identificación única.

Asigne a cada uno de sus botones una identificación única, comenzando target1y terminando con target6.

Asegúrate de que target1to target3are in #left-welly target4to target6are in #right-well.*/
//Ejercicio
/* Un button elemento debe tener el id target1.
Un button elemento debe tener el id target2.
Un button elemento debe tener el id target3.
Un button elemento debe tener el id target4.
Un button elemento debe tener el id target5.
Un button elemento debe tener el id target6.*/

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1"></button>
        <button class="btn btn-default target" id="target2"></button>
        <button class="btn btn-default target" id="target3"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4"></button>
        <button class="btn btn-default target" id="target5"></button>
        <button class="btn btn-default target" id="target6"></button>
      </div>
    </div>
  </div>
</div>;
