//Asignar estado a accesorios
/* El Providercomponente le permite proporcionar statea dispatchsus componentes React, pero debe especificar exactamente qué estado y qué acciones desea. De esta manera, se asegura de que cada componente solo tenga acceso al estado que necesita. Esto se logra creando dos funciones: mapStateToProps()y mapDispatchToProps().

En estas funciones, declara a qué partes del estado desea tener acceso y qué creadores de acciones necesita poder enviar. Una vez que estas funciones estén en su lugar, verá cómo usar el connectmétodo React Redux para conectarlas a sus componentes en otro desafío.

Nota: Detrás de escena, React Redux usa el store.subscribe()método para implementar mapStateToProps().

Crear una función mapStateToProps(). Esta función debe tomar statecomo argumento y luego devolver un objeto que asigna ese estado a nombres de propiedad específicos. Estas propiedades serán accesibles para su componente a través de props. Dado que este ejemplo mantiene el estado completo de la aplicación en una sola matriz, puede pasar ese estado completo a su componente. Cree una propiedad messagesen el objeto que se devuelve y establézcala en state.*/
//Ejercicio
/* La const state debe ser una matriz vacía.
mapStateToProps debe ser una función.
mapStateToProps debe devolver un objeto.
Pasar una matriz como estado a mapStateToPropsdebería devolver esta matriz asignada a una clave de messages.*/

const state = [];

// Change code below this line

const mapStateToProps = (state) => {
  return {
    messages: state,
  };
};
