//Definir un creador de acciones
/* Después de crear una acción, el siguiente paso es enviar la acción a la tienda Redux para que pueda actualizar su estado. En Redux, define creadores de acciones para lograr esto. Un creador de acciones es simplemente una función de JavaScript que devuelve una acción. En otras palabras, los creadores de acciones crean objetos que representan eventos de acción.

Defina una función llamada actionCreator()que devuelva el actionobjeto cuando se le llame.*/
//Ejercicio
/* La función actionCreator debería existir.
Ejecutar la actionCreator función debería devolver el actionobjeto.
El devuelto action debe tener una propiedad clave typecon valor LOGIN.*/
const action = {
  type: "LOGIN",
};
// Define an action creator here:
function actionCreator() {
  return action;
}
