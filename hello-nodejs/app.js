const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

// const fs = require('fs')
// const path = require('path')

const handler = (req, res) => {
    const filename = path.join(__dirname, 'index.html')
    const indexData = fs.readFileSync(filename)
    res.end(indexData)
}


const server = http.createServer(handler)