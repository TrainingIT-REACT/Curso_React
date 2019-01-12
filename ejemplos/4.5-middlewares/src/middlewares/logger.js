const logger = (store) => (next) => (action) => {
  // Imprimimos la acción actual
  console.log("Acción sobre el store: ", action);
  // Continuamos el procesamiento y guardamos el resultado de next
  const result = next(action);
  // Imprimimos el siguiente estado. Al sesr un proceso síncrono
  // puedes utilizar getState ya que en este punto se ha procesado
  // la acción en los reducers
  console.log("Nuevo estado: ", store.getState());
  // Devolvemos el valor de next(action) para los siguientes
  // middlewares. Si no retornamos next(action), los siguientes
  // middlewares no tendrán las referencias a este, por lo que
  // no se llegará a ejecutar.
  return result;
};

export default logger;
