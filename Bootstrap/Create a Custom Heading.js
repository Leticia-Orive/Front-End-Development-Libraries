//Crear un encabezado personalizado
/*Haremos un encabezado simple para nuestra aplicación Cat Photo colocando el título y la imagen relajante del gato en la misma fila.

Recuerde, Bootstrap utiliza un sistema de cuadrícula sensible, lo que facilita colocar  elementos en filas y especificar el ancho relativo de cada  elemento. La mayoría de las clases de Bootstrap se pueden aplicar a un div elemento.

Anide su primera imagen y su h2 elemento dentro de un solo <div class="row"> elemento. Anide su h2 elemento dentro de a <div class="col-xs-8">y su imagen en a <div class="col-xs-4">para que estén en la misma línea.

¿Observa cómo la imagen ahora tiene el tamaño justo para caber a lo largo del texto? */
//Ejercicio
/*Su h2 elemento y imgel  elemento superior deben anidarse juntos dentro de un div elemento con la clase row.
Su img elemento superior debe estar anidado dentro de divcon la clase col-xs-4.
Su h2 elemento debe estar anidado dentro de divcon la clase col-xs-8.
Todos sus div elementos deben tener etiquetas de cierre.*/
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
  <div class="row">
    <div class="col-xs-8">
      <h2 class="text-primary text-center">CatPhotoApp</h2>
    </div>
    <div class="col-xs-4">
      <a href="#"><img class="img-responsive thick-green-border" src="https://cdn.  freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute   orange cat lying on its back."></a>
    </div>
  </div>

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
  <p>Things cats <span class="text-danger">love:</span></p>
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
