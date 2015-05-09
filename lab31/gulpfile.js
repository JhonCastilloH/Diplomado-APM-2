var express = require('express'),
	app     = express(),
	http    = require('http'),
	server  = http.createServer(app),
	io      = require('socket.io')(server), //corre sobre mi servidor
	port    = process.env.PORT || 8585;

server.listen(port, function(){

	console.log('Listen %d', port); //arranca servidor
});

app.use(express.static(__dirname)); //subiemdo staticos

// Ruta(s) que se manejaran
app.get('/', function(req, res){     //ruta donde estara el chat
	res.sendfile(__dirname + '/index.html');
});


// Variable `usernames` para los usuarios conectados
var usernames = {};
//con el metodo on comienzo a escuchar los eventos.
io.sockets.on('connection', function(socket){ //connection es un evento web socket el primero que debe ocurrir 1

	// Cuando el cliente, browser, emite el evento `sendchat` este debe escuchar y ejecutar
	socket.on('sendchat', function(data){  //sendchat es un evento el segundo del servidor al usuario 2
		io.sockets.emit('updatechat', socket.username, data); //emit es para emitir al cliente con el evento udatechat 3
	});

	// Cuando el cliente emite un evento `adduser` , este escucha y ejecuta
	socket.on('adduser', function(username){ //evento aduser 4

		// Almacenamiento del nombre de usuario en la sesión que toma info del cliente
		socket.username = username;

		// Adicionando el usuario `socket.username` al objeto `usernames`
		usernames[username] = username;

		// enviando a los clientes conectados el objet con la lista de usuarios del objeto `usernames`
		socket.broadcast.emit('updatechat', 'SERVIDOR', username + 'Esta conectado');
		//con broadcast envio a todos que entro un usuario.
		// enviamos petición al mismo cliente que solicita
		socket.emit('updatechat', 'SERVIDOR', 'Usted esta conectado');
					//nombre metodo, nombre de envio, informacion de envio
		// Actualizamos la lista de usuarios en el chat
		io.sockets.emit('updateusers', usernames);
	});

	socket.on('disconnect', function(){

		delete usernames[socket.username];

		io.sockets.emit('updateusers', usernames);

		socket.broadcast.emit('updatechat', 'SERVIDOR', socket.username + 'Esta desconectado');
	});
});