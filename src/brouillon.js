import fs from 'fs'

fs.readFile('./file1.txt', 'utf-8', (err, data1) => {
  if (err) console.error(err)
  fs.readFile('./file2.txt', 'utf-8', (err, data2) => {
    if (err) console.log(err)
    let content = data1 + '\n' + data2
    fs.writeFile('./file3.txt', content, (err) => {
      if (err) console.log(err)
      console.log('copy of file1.txt and file2.txt to file3.txt done')
    })
  })
})