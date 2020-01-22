const fs = require("fs");

const cat = file => {
  console.log(`reading file ${file}`);
  fs.readFile("./" + file, "utf8", (err, contents) => {
    if (err) throw err;
    console.log(contents);
    process.stdout.write("\nprompt > ");
  });
};

//
// }

module.exports = cat;
