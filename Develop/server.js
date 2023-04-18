const fs = require('fs')
const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 8000;
const userNotes = require('./db/db_json')


app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static('public'))

app.get('/api/notes', (req, res) => {
    res.json(userNotes.slice(1))
})

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, './public/index.html'))
);

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

function clientNotes(body, noteArray) {
    const newNote = body
    if (!Array.isArray(noteArray))
        notesArray = []

    body.id = noteArray[0]
    noteArray[0]++
    noteArray.push(newNote)
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify(noteArray, null, 2)
    )

}
app.post('/api/notes', (req, res) => {
    const newNote = clientNotes(req.body, userNotes)
    
    res.json(newNote)
})