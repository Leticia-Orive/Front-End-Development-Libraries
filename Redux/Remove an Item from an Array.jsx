//Eliminar un elemento de una matriz
/* Es hora de practicar la eliminación de elementos de una matriz. El operador de propagación también se puede utilizar aquí. Otros métodos JavaScript útiles incluyen slice()y concat().

El reductor y el creador de acciones se modificaron para eliminar un elemento de una matriz según el índice del elemento. Termine de escribir el reductor para que se devuelva una nueva matriz de estado con el elemento en el índice específico eliminado.*/
//Ejercicio
/* La tienda Redux debería existir e inicializarse con un estado igual a[0,1,2,3,4,5]
removeItemy immutableReducer ambos deben ser funciones.
El envío del removeItemcreador de la acción debería eliminar elementos del estado y NO debería cambiar el estado.*/

const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      // Don't mutate state here or the tests will fail
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length),
      ];
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: "REMOVE_ITEM",
    index,
  };
};

const store = Redux.createStore(immutableReducer);
