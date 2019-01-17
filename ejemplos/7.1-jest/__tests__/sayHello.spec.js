// Importamos la función que queremos testar
const sayHello = require("../sayHello");

// Definimos un bloque describe para dar contexto a los tests
describe("#sayHello", () => {
  // Definimos un test para comprobar que devuelve "Hola!"
  it("should reply 'Hola!' if no parameter is passed", () => {
    expect(sayHello()).toBe("Hola!");
  });
});
