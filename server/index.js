/**
 * Created by dlarchikov on 14.08.16.
 */
/**
 * @var io Server
 */
var io = require('socket.io')();
var clients = require('./app/Client');

io.on('connection', function (connect) {
    clients.add(connect.id, connect);
    clients.on('emptyName', function () {
        console.log('emptyName');
    });
});
io.listen(5555);