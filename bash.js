var commands = require('./commands');

process.stdout.write('prompt > ');

process.stdin.on('data', function(data) {
  var cmd = data.toString().trim();
  var args = null;

  if(cmd.indexOf(' ') > -1) {
    args = cmd.slice(cmd.indexOf(' ') + 1);
    cmd = cmd.slice(0, cmd.indexOf(' '));
  }

  if(commands[cmd]) {
    commands[cmd](args);
  } else {
    process.stdout.write('You typed: ' + cmd);
  }

  process.stdout.write('\nprompt > ');
});
