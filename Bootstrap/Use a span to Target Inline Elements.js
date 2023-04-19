//Use un tramo para apuntar a  elementos en línea
/* Puede usar tramos para crear  elementos en línea. ¿Recuerdas cuando usamos la btn-blockclase para hacer que el botón llenara toda la fila?



Eso ilustra la diferencia entre un  elemento "en línea" y un  elemento de "bloque".

Al usar el span elemento en línea, puede colocar varios  elementos en la misma línea e incluso diseñar diferentes partes de la misma línea de manera diferente.

Usando un span elemento, anide la palabra lovedentro del p elemento que actualmente tiene el texto Things cats love. Luego dale a spanla clase text-dangerque ponga el texto en rojo.

Así es como haría esto para el p elemento que tiene el texto Top 3 things cats hate:

<p>Top 3 things cats <span class="text-danger">hate:</span></p>*/
//Ejercicio
/*Su span elemento debe estar dentro de su p  elemento.
Su span elemento debe tener solo el texto love.
Su span elemento debe tener clase text-danger.
Su span elemento debe tener una etiqueta de cierre. */

<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>

  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

</style>

<div class="container-fluid">
  <h2 class="text-primary text-center">CatPhotoApp</h2>

  <a href="#"><img class="img-responsive thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">Delete</button>
    </div>
  </div>
  <p>Things cats <span class="text-danger">love</span>:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Crazy</label>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</div>
