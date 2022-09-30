// IMPORTAR MÓDULOS
import hello from "./module.js"; // En algunas herramientas es posible omitir la extensión del archivo

hello();

// Dara el siguiente error: SyntaxError: Cannot use import statement outside a module
// Para solucionarlo, se debe especificar en el archivo package.json que el código es modular. Para ello, se debe agregar la siguiente línea:
// "type": "module",

// También se puede solucionar usando la extensión .mjs en lugar de .js cuando no se use NPM para crear el proyecto y por tanto no se tenga el archivo package.json