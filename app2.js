const fs = require('fs');

fs.readFile('myfile.txt', { encoding: 'utf8' }, function(err, data) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
