const fs = require('fs')
const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 8000;
const userNotes = require('./db/db.json');

const API_routes = require('./routes/API_routes')
const html_routes = require('./routes/html_routes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static('public'))

app.get('/api/notes', (req, res) => {
    res.json(userNotes.slice(1))
})

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, './public/index.html'))
);

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.post('/api/notes', (req, res) => {
    const newNote = clientNotes(req.body, userNotes)
    
    res.json(newNote)
})

app.listen(PORT, ()=> {
    console.log(`API is now on port ${PORT}`)
})