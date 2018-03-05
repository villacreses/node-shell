var fs = require('fs');

module.exports = {
  'pwd': function () {
    process.stdout.write(process.cwd());
  }, 
  
  'date': function () {
    process.stdout.write("" + new Date);
  },

  'ls': function () {
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write("\n" + file.toString());
      })
      process.stdout.write("\nprompt > ");
    });
  },

  'echo': function (input) {
    process.stdout.write(input);
  },

  'cat': function(input) {
    fs.readFile(input, 'utf8', (err, data) => {
      if(err) throw err;

      process.stdout.write(data);
      process.stdout.write("\nprompt > ");
    });
  },

  'head': function (input, limit=10) {
    fs.readFile(input, 'utf8', (err, data) => {
      if(err) throw err;

      data = data.split("\n", limit).slice(0,limit).join("\n");
      process.stdout.write(data);
      process.stdout.write("\nprompt > ");
    });
  },

  'tail': function (input, limit=10) {
    fs.readFile(input, 'utf8', (err, data) => {
      if(err) throw err;

      data = data.split("\n");
      data = data.slice(data.length - limit - 1).join("\n");
      process.stdout.write(data);
      process.stdout.write("\nprompt > ");
    });
  }
}
