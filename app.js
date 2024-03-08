// App.js Practice
// By: Marie Angelika Maglinte

const express = require('express'); // import Express library to Node.js
const app = express(); // create instance of Express app
const routes = require('./routes'); // import routes modules from routes.js

app.use('/', routes); // use routes for any requrests that come to the root URL

// start express server; listen for incoming HTTP requrest on port 3000
app.listen(3000, () => {
  console.log(`Server is running....`);
});