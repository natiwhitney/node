// console.log('hi');

// console.log(process);

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  // console.log(data);
  const cmd = data.toString().trim();
  // console.log(cmd);
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
})