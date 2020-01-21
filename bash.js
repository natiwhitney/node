const pwdFnc = require("./pwd");
const lsFnc = require("./ls");

process.stdout.write("\nprompt > ");
process.stdin.on("data", data => {
  const cmd = data.toString().trim();
  switch (cmd) {
    case "pwd":
      pwdFnc();
      break;
    case "ls":
      lsFnc();
      break;
    default:
      process.stdout.write("\nprompt > ");
      break;
  }
});
