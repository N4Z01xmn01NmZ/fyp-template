const app = require('express')();

const httpServer = require('http').createServer(app);

const io = require('socket.io')(httpServer);

io.on('connection', socket => {

});

const PORT = process.env.PORT || 4433;

httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));