const app = require('express')();

const httpServer = require('http').createServer(app);

const io = require('socket.io')(httpServer);

io.on('connection', socket => {
    console.log(`${socket.id} connected`);

    socket.on('checkin', () => {

    });

    socket.on('checkout', () => {

    });

    socket.on('host_room', () => {

    });

    socket.on('close_room', () => {

    });

    socket.on('leave_room', () => {

    });

    socket.on('join_room', () => {

    });

    socket.on('message', () => {

    });

    socket.on('announcement', () => {

    })

    socket.on('disconnect', () => {
        console.log(`${socket.id} disconnected`);
    });
});

const PORT = process.env.PORT || 4433;

httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));