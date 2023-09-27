const http = require('http');
const fs = require('fs');
let newModule = require('./myModule');

// fs.appendFile('myFile.html','I am new File created with fs.appendFile.', (err) => {
//  if (err) throw err;
//  console.log('File has created!');   
// })

const server = http.createServer((req, res) => {
    fs.readFile('myFile.html', 'utf8',(err, data) => {
        if (err) {
            res.writeHead(404,{ 'Content-Type': 'text/html'});
            res.end('Server Error!');
        }
        res.writeHead(200,{ 'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
});

server.listen(6000, () => {
    console.log('Server Listening on port No: 6000');
});