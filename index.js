const express = require('express');
const { exec } = require('child_process');
const app = express();

app.use(express.static('public'));

const execRoutes = require('./routes/exec');
const formsRoutes = require('./routes/forms');
const reqRoutes = require('./routes/ejemplo-api');
app.use(execRoutes);
app.use(formsRoutes);
app.use("/apiv1",reqRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

