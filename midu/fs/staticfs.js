const fs = require("fs");

const stats = fs.statSync("./fs/file.txt");
console.log(
  `File size: ${stats.size} bytes` +
    `, Modified: ${new Date(stats.mtime).toLocaleString()}` +
    `, Is directory: ${stats.isDirectory()}` +
    `, Is file: ${stats.isFile()}` +
    `, Is symbolic link: ${stats.isSymbolicLink()}`
);
