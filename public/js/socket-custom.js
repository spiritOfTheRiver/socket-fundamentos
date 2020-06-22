    var socket = io();
    socket.on('connect', function() {
        console.log('Conectado al servidor');
    });

    socket.on('disconnect', function() {
        console.log('perdimos conexión con el servidor');
    });

    socket.emit('enviarMensaje', {
        usuario: 'Fernando',
        mensaje: 'HolaMundo'
    }, function(resp) {
        console.log("Se disparo el callback", resp)
    });

    socket.on('enviarMensaje', (messaje) => {
        console.log(messaje);
    });