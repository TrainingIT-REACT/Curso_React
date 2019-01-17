const sayHello = (name = "") => {
  return name != null && name.length > 0 ? `Hola ${name}!` : "Hola!";
}

module.exports = sayHello;
