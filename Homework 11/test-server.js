const http = require('http');
const os = require('os');
const fs = require('fs');
let path = require('path');
let scriptName = path.basename(__filename);

// TASK 1
/*http.createServer(function (request, response) {
//Send HTTP header
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(
        `<h1>Systmem information</h1>
<p>Current user name: ${os.userInfo().username}</p>
<p>OS type: ${os.type()}</p>
<p>System work time: ${os.uptime}</p>
<p>Current work directory: ${process.cwd()}</p>
<p>Server file name: ${scriptName}</p>`
    );
//     Send response
    response.end('Testing NodeJs server');
}).listen(5000);

// Console will print the message
console.log('Server running at http://127.0.0.1:5000/');*/

//TASK 2
const personalModule = require('./personalmodule');

http.createServer(function (request, response) {
//Send HTTP header
    response.writeHead(200, {'Content-Type': 'text/html'});
    personalModule.greetingUser(os.userInfo().username, response);
    response.end('Testing greeting on server');
}).listen(8000);

// Console will print the message
console.log('Server running at http://127.0.0.1:8000/');