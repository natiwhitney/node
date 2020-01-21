process.stdout.write("prompt > ");

process.stdin.on("data", data => {
  const cmd = data.toString().trim();
  process.stdout.write("You typed: " + cmd + "\n");
  if (cmd === "pwd") {
    process.stdout.write(process.env.PWD);
  }
  process.stdout.write("\nprompt > ");
});
