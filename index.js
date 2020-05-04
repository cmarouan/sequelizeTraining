const express = require('express');
const db = require('./config/db');

const app = express();


db.authenticate()
.then(() => console.log("Database connected"))
.catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.send('index');
});
app.use('/api', require('./routes'));

app.listen(5000, console.log(`server running on ${5000}`));