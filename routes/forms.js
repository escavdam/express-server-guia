const express = require('express');
const router = express.Router();
const path = require('path');

//Ejemplos de formularios en HTML y JSON

router.get("/html-form", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html-form-example.html'));
});

router.post("/html-form", express.urlencoded({ extended: true }), (req, res) => {
    const { name, password } = req.body;
    res.json({ name, password });
});

router.get("/json-form", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/json-form-example.html'));
});

router.post("/json-form", express.json(), (req, res) => {
    const { name, password } = req.body;
    res.json({ name, password });
});

module.exports = router;