import fs from 'fs/promises'

function callback(err) {
    if (err) throw err
    console.log('source.txt was copied to destination.txt')
}

fs.copyFile('./../file1.txt', './../file5.txt', callback)
