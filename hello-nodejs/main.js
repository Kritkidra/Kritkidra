// const sum = require('./app.js')
// const result = sum(10, 20)
// console.log('main.js > ', result)


////// Read File
// const fs = require('fs')

// fs.readFile('data.txt', 'utf-8', (error, data) => {
//     console.log('data', data)
// })

////// Write File
// const fs = require('fs')
// fs.writeFile('data.txt', 'Krit Kidrakarn', 'utf8', (error, data) => {
//     console.log('file saved')
// })

////// Append File
const fs = require('fs')
const path = require('path')

fs.appendFile(
    path.join(__dirname, '/db/data.txt'), 
    'This is Node.js\n', 
    'utf8', 
    (error, data) => {
    console.log('file saved')
    console.log('dir', __dirname)
    console.log('file', __filename)
}
)