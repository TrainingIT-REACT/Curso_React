const cp = require("child_process");
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const glob = require("glob");

// Comprobamos si la carpeta node_modules existe, si no ejecutamos bootstrap
if (!fs.existsSync('./node_modules')) {
  console.log("Instalando liberías");
  // Utilizamos NPX porque lerna puede no estar instalado
  cp.execFileSync("npx", ["lerna", "bootstrap"], { stdio: "inherit" });
  console.log("Instalación finalizada!");
}

// Buscamos todos los ejemplos disponibles
glob("ejemplos/**/package.json", {}, (err, files) => {
  if (err) {
    console.log("No hemos encontrado ningún ejemplo que ejecutar :/");
  }

  const examples = [];
  files.forEach(f => {
    examples.push(path.dirname(f).split('/').slice(-1).pop());
  });

  inquirer.prompt([
    {
      type: 'list',
      name: 'example',
      message: 'Selecciona el ejemplo que quieres lanzar',
      choices: examples,
    }
  ]).then(answers => {
    const package = answers.example;

    try {
      console.log("----------------------------------------------------");
      console.log(`Ejecutando el ejemplo ${package}`);
      console.log("----------------------------------------------------");
      cp.execFileSync(
        "npx",
        [
          "lerna",
          "run",
          "--scope",
          package,
          "--stream",
          "start"
        ],
        { stdio: "inherit" }
      );
    } catch (err) {
      // Ignora el error por ahora
      // console.log(err);
    }
  });
});
