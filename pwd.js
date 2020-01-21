// process.stdin.on("data", data => {

// });

function pwd(cmd) {
  if (cmd === "pwd") {
    process.stdout.write(process.env.PWD + "\n");
  }
  process.stdout.write("\nprompt > ");
}

module.exports = pwd;
