// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('Hello World')
// })

// const handler = (req, res) => {
//     res.end(`
//         <div>
//             <h2 style="color: #ff3456;">Test!</h2>
//             <p style="color: #23dd55;">This is node.js tutorial</p>
//         </div>
//     `)
// }

// const fs = require('fs')
// const path = require('path')

// const handler = (req, res) => {
//     const filename = path.join(__dirname, '/hello-nodejs/index.html')
//     const indexData = fs.readFileSync(filename)
//     res.end(indexData)
// }

// const server = http.createServer(handler)

// server.listen(port, hostname, () =>{
//     console.log(`Server running at http://${hostname}:${port}/`)
// })

const express = require('express')

const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.send('Hello World!!!')
})

app.get('/about', (req, res) => {
    res.render('about', {
        message: 'This is message sent from app.js',
        name: 'Tom'
    })
})

app.get('/index', (req, res) => {
    res.render('index', {
        message: 'This is message sent from app.js',
        name: 'Tom'
    })
})

app.listen(3000)