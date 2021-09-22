
const net = require("net");
const { IP, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function() {

  const conn = net.createConnection({
    host: IP ,// IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("hi player");
    conn.write('Name: Neo');
    //conn.write("Move: up");
  });
  conn.on("data", function(data) {
    console.log("Server says:", data);
  });
  conn.setEncoding("utf8");
  
  return conn;
  
};
//connect();

module.exports  = {connect};


