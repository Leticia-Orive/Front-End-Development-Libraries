//Agregue iconos de Font Awesome a nuestros botones
/* Font Awesome es una cómoda biblioteca de iconos. Estos iconos pueden ser fuentes web o gráficos vectoriales. Estos iconos se tratan como fuentes. Puede especificar su tamaño usando píxeles, y asumirán el tamaño de fuente de sus elementos HTML principales.

Puede incluir Font Awesome en cualquier aplicación agregando el siguiente código en la parte superior de su HTML:

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
En este caso, ya lo hemos agregado para usted a esta página entre bastidores.

El ielemento se usó originalmente para poner en cursiva otros elementos, pero ahora se usa comúnmente para íconos. Puede agregar las clases de Font Awesome al ielemento para convertirlo en un ícono, por ejemplo:

<i class="fas fa-info-circle"></i>
Tenga en cuenta que el spanelemento también es aceptable para su uso con iconos.

Use Font Awesome para agregar un thumbs-upícono a su botón Me gusta dándole un ielemento con las clases fasy fa-thumbs-up. Asegúrese de mantener el texto Likejunto al icono.*/
//Ejercicio
/* Debe agregar un i elemento con las clases fasy fa-thumbs-up.
Su fa-thumbs-upicono debe estar ubicado dentro del botón Me gusta.
Su ielemento debe estar anidado dentro de su button elemento.
Su elemento de icono debe tener una etiqueta de cierre.*/

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
      <button class="btn btn-block btn-primary">
        <i class="fas fa-thumbs-up"><i>
        Like</button>
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
