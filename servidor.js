const http = require('http');
const express = require('express');

const app = express();
const servidorHttp = http.createServer(app);

const io = require('socket.io')(servidorHttp);

io.addListener('connection', (socket) =>{
    console.log('Usuário conectado');
    socket.addListener('nova mensagem', (mensagem) => {
        console.log('Nova mensagem:', mensagem);
        io.emit('nova mensagem', mensagem);
    });
})

app.use(express.static('public'));

servidorHttp.listen(3001, '192.168.0.11');