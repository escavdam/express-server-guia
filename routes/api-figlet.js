const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/figlet', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/figlet.html'));
});

router.post('/figlet', express.json(), (req, res) => {
    const figlet = require('figlet');
    const text = req.body.text;
    const font = req.body.font;
    figlet.text(text, {
        font,
        horizontalLayout: 'default',
        verticalLayout: 'default'
    })
    .then(data => {
        console.log(data)
        res.send({text: data});
    })
});

module.exports = router;