const fs = require("fs");

fs.writeFile("name.txt", "Hello this is praneeth", (err) => {
  if (err) throw err;
  console.log("File has been saved");
});

fs.readFile("./name.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
