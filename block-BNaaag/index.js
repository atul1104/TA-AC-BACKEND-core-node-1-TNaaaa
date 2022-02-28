var fs = require('fs');

//async version
fs.readFile('./content.md', (err, file) => {
  console.log(file.toString());
});

//sync version
var result = fs.readFileSync('./content.md', 'utf-8');
console.log(result);

var buff1 = Buffer.alloc(10);
buff1.write('Welcome to Buffer');
console.log(buff1.toString());
