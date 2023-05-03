//Definir una acción Redux
/*Dado que Redux es un marco de gestión de estado, actualizar el estado es una de sus tareas principales. En Redux, todas las actualizaciones de estado se activan mediante el envío de acciones. Una acción es simplemente un objeto de JavaScript que contiene información sobre un evento de acción que ha ocurrido. La tienda Redux recibe estos objetos de acción y luego actualiza su estado en consecuencia. A veces, una acción Redux también lleva algunos datos. Por ejemplo, la acción lleva un nombre de usuario después de que un usuario inicia sesión. Si bien los datos son opcionales, las acciones deben llevar una typepropiedad que especifique el 'tipo' de acción que ocurrió.

Piense en las acciones de Redux como mensajeros que envían información sobre los eventos que suceden en su aplicación a la tienda de Redux. Luego, la tienda realiza el negocio de actualizar el estado en función de la acción que ocurrió.

Escribir una acción de Redux es tan simple como declarar un objeto con una propiedad de tipo. Declare un objeto actiony asígnele una propiedad typeestablecida en la cadena 'LOGIN'.

 */
//Ejercicio
/* Un action objeto debe existir.
El action objeto debe tener una propiedad clave typecon valor LOGIN.*/
// Define an action here:
let action = {
  type: "LOGIN",
};
