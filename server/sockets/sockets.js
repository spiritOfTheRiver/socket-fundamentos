const { io } =require('../server');

io.on('connection',(client) => {
    console.log('Usuario Conectado');
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta App'
    });

    client.on('disconnect',()=>{
        console.log('Usuario desconectado');
    });

    // Escuchar cliente
    client.on('enviarMensaje',(data, callback)=>{
        
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if ( messaje.usuario ){
        //     callback({
        //         resp: 'TODO SALIO BIEN'
        //     }); 
        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL!!!'
        //     }); 
        // }

    });
})