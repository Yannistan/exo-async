import fs from 'fs'

console.log('START OF PROGRAM')

//asynchronous copying of file1.txt
fs.copyFile('./../file1.txt', './../file2.txt', (err) => {
  if (err) console.error(err)
  else console.log('file1.txt copied successfully')
})



console.log('END OF PROGRAM') 
