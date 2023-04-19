//Agregue iconos Font Awesome a todos nuestros botones
/* Font Awesome es una cómoda biblioteca de iconos. Estos iconos pueden ser fuentes web o gráficos vectoriales. Estos iconos se tratan como fuentes. Puede especificar su tamaño usando píxeles, y asumirán el tamaño de fuente de sus elementos HTML principales.

Use Font Awesome para agregar un info-circleícono a su botón de información y un trashícono a su botón de eliminar.

Nota: El spanelemento es una alternativa aceptable al ielemento para las instrucciones a continuación.*/
//Ejercicio
/* Debe agregar un <i class="fas fa-info-circle"></i>dentro de su infoelemento de botón.
Debe agregar un <i class="fas fa-trash"></i>dentro de su deleteelemento de botón.
Cada uno de sus ielementos debe tener una etiqueta de cierre y <i class="fas fa-thumbs-up"></i>está en su likeelemento de botón.*/

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
      <a href="#"><img class="img-responsive thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
    </div>
  </div>
  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary"><i class="fas fa-thumbs-up"></i> Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">
        <i class="fas fa-info-circle"></i>
        Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">
        <i class="fas fa-trash"></i>
        Delete</button>
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
