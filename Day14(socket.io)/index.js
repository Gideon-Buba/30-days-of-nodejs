const app = require("express")();
const server = require('http').Server(app);
const io = require("socket.io")(server);

const port = 3000

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get('/admin', (req, res) => {
    res.sendFile(__dirname + "/admin.html");
});

io.on('connection', function (socket) {
  
    socket.emit('welcome', { data: 'welcome' });
  
    socket.on('new' , function(data) {   
            console.log('About to upload Quote');
            io.sockets.emit( 'next' , { data : data } )
      })
  });

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
