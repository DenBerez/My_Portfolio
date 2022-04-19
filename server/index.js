const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public/dist')));
const port = process.env.PORT || 3001;
app.listen(port, () => console.log('listening on port ', port));