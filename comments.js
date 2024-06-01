// Create web server
// 1. Import express
// 2. Create an instance of express
// 3. Define a route for a GET request to /comments
// 4. Define a route for a POST request to /comments
// 5. Start the server on port 3000

const express = require('express');
const app = express();
const comments = [];

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.post('/comments', (req, res) => {
  comments.push(req.body);
  res.send('Successfully added a new comment');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
