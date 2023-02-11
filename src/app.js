const http = require('http');
const getUsers = require('./modules/users')

const hostName = "http://127.0.0.1";


const server = http.createServer((request, response) => {
    const url = new URL(request.url, hostName);
    const userName = url.searchParams.get("name");

    if (userName) {
        response.status = 200;
        response.statusMessage = "OK";
        response.header= "Content-Type: text/plain"
        response.write(`Hello ${userName}!`);
        response.end();
        return;
      }

      switch (request.url) {

        case "/":
            response.status = 200;
            response.statusMessage = "OK";
            response.header= "Content-Type: text/plain"
            response.write(`Hello world`);
            response.end();
            break

        case "/?name":
            response.status = 400;
            response.statusMessage = "Bad Request";
            response.header= "Content-Type: text/plain"
            response.write(`Enter a name`);
            response.end();
            break;


        case "/?users":
            response.status = 200;
            response.statusMessage = "OK";
            response.header = "Content-Type: application/json"
            response.write(getUsers());
            response.end();
            break;

    default:
        response.status = 500;
        response.statusMessage = "Internal Server Error";
        response.setHeader("Content-Type", "text/plain");
        response.write("ERROR");
        response.end();
        break;
    }
});

server.listen(3003, () => {
    console.log(`сервер запущен по адресу http://127.0.0.1:3003`);
} )