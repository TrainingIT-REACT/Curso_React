const cp = require("child_process");
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const glob = require("glob");

// Buscamos todos los ejemplos disponibles
glob("ejemplos/**/package.json", {}, (err, files) => {
  if (err) {
    console.log("No hemos encontrado ningún ejemplo que ejecutar :/");
  }

  const examples = [];
  files.forEach(f => {
    if (!f.includes('node_modules')) {
      examples.push(path.dirname(f).split('/').slice(-1).pop());
    }
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
        /^win/.test(process.platform) ? "npx.cmd" : "npx",
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
