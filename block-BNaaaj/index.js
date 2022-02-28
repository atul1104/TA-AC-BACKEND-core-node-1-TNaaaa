console.log('Welcome to NodeJs.');
var os = require('os');
console.log(os.cpus().length);
console.log(os.freemem());
console.log(os.uptime());
console.log(os.version());

var { readFile, readFileSync, unlink } = require('fs');
var sync = readFileSync('./app.js');
console.log(sync);
var async = readFile('./area.js', (error, content) => {
  console.log(error, content.toString());
});
console.log(async);

var buff1 = Buffer.alloc(12);
var buff2 = Buffer.allocUnsafe(12);
buff1.write('Welcome to AltCampus');
console.log(buff1.toString());
