//npm or better node.js here before pushing

const express = require('express');
const app = express();
const PORT =  process.env.PORT || 3000;

// Serve static files from 'public/bin' and 'public'
// This makes Express look for static files in these directories (e.g., HTML, CSS, JS, images)
app.use(express.static('public/bin'));
app.use(express.static('public'));

// A fallback route for handling 404 errors
app.use((req, res, next) => {
  res.status(404).send('File not found');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
