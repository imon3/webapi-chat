const server = require('./server');


// PORT LISTENER
server.listen(5000, () => {
  console.log('\n*** Server Running on http://localhost:5000 ***\n');
});