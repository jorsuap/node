const http = require('http');

http.createServer((req, res) => {//recibe la solicitud
    console.log(req);
    res.writeHead(200, {'Content-Type':'text/plain'});
    const persona = {
        id:1,
        name:'jorddi'
    }
    res.write(JSON.stringify(persona));
    res.end();
})
.listen(8080);

console.log('Escuchando el puerto 8080')