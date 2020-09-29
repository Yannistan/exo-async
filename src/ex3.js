import fs from 'fs/promises'



console.log('START OF PROGRAM')
let copyFile1 = await fs.copyFile('./../file1.txt', './../file4.txt')

console.log(copyFile1)

console.log('END OF PROGRAM')