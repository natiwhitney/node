const pwdFnc = require("./pwd");
const lsFnc = require("./ls");
const catFnc = require("./cat");

process.stdout.write("\nprompt > ");
process.stdin.on("data", data => {
  let args = data.toString().trim("\n");
  let cmd = args;
  if (args.includes(" ")) {
    args = args.split(" ");
    cmd = args[0];
  }
  switch (cmd) {
    case "pwd":
      pwdFnc();
      break;
    case "ls":
      lsFnc();
      break;
    case "cat":
      catFnc(args.slice(1));
      break;
    default:
      process.stdout.write("\nprompt > ");
      break;
  }
});
