import fs from 'fs'

console.log("\nFile contents of file1.txt:", fs.readFileSync("../file1.txt", "utf-8"));

fs.copyFileSync("../file1.txt", "../file2.txt");