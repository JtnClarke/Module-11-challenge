const fs = require('fs')
const path = require('path')

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

    function noteDelete( id, notes) {
    let noteArray = notes.filter(el => {
        if(el.id === id) {
            return false
        } else {
            return true
        }
    })
}

let index = 0 
notesArray.forEach(note => {
    note.id = index;
    index += 1;
});

fs.writeFileSync(
    path.join(__dirname, './db/db.json'),
    JSON.stringify({notesArray}, null, 2)
);
return notesArray;

module.exports = {
    clientNotes,
     noteDelete
}




