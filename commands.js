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

  'cat': function(input, callback=null) {
    fs.readFile(input, 'utf8', (err, data) => {
      if(err) throw err;

      if(callback)
        data = callback(data);

      process.stdout.write(data);
      process.stdout.write("\nprompt > ");
    });
  },

  'head': function (input, limit=10) {
    let callback = function (data) {
      return data.split("\n", limit).slice(0,limit).join("\n");
    }

    this.cat(input, callback);
  },

  'tail': function (input, limit=10) {
    let callback = function (data) {
      data = data.split("\n");
      return data.slice(data.length - limit - 1).join("\n");
    }

    this.cat(input, callback);
  }
}
