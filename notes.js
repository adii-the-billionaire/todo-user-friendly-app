const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.find((note) => note.title === title)
    if (!duplicateNotes) {
        notes.push({
            title: title,
            body: body
        })
        savedNotes(notes)
        console.log(chalk.yellow.italic('new note is added'))
    } else {
        console.log(chalk.green.inverse('Note title is already taken'))
    }


    //here is alternative method for above both are feasible


    /* const duplicateNotes = notes.filter((note) => {
        note.title === title
    })
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        savedNotes(notes)
        console.log('New note is added')
    } else {
        console.log('Note title is already taken')
    }*/
}
const removeNote = (title) => {
    const notes = loadNotes()
    const noteToKeep = notes.filter((note) => {
        return note.title !== title
    })
    if (notes.length > notesToKeep.length) {
        console.log('Your notes is removed')
        savedNotes(noteToKeep)
    } else {
        console.log('No note is found')
    }
}
const listNote = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse('Your notes is here'))
    notes.forEach((note) => {
        console.log(note.title)
    })
}
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(chalk.blue.italic(note.title))
        console.log(chalk.red.inverse(note.body))
    } else {
        console.log(chalk.green.inverse('note is not found'))
    }
}
const savedNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch (e) {
        return []
    }
}
module.exports = {
    addNote,
    removeNote,
    listNote,
    readNote
}