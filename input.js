//const { connect } = require("./client");
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(data) {
  // your code here
  connection.write("Say: bye");
  if (data  === '\u0003') {
    process.exit();
  } else if (data  === 'w') {
    //console.log("Move: up");
    connection.write("Move: up");
  } else if (data  === 'a') {
    connection.write("Move: left");
  } else if (data  === 's') {
    connection.write("Move: down");
  } else if (data  === 'd') {
    connection.write("Move: left");
  }
};


//setupInput(connection);

module.exports = {setupInput};