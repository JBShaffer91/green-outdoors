const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => res.send('Green Outdoors Co API'));

app.listen(PORT, () => console.log(`Backend listening on ${PORT}`));
