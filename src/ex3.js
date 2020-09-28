import fs from 'fs/promises'

const copyFile1 = async () => {
  let content = await fs.copyFile('./../file1.txt', './../file4.txt')
  return content
}


console.log('START OF PROGRAM')
let content1 = await copyFile1()

console.log('END OF PROGRAM')