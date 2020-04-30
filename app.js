const chalk = require('chalk')
const yargs = require('yargs')
const {
    addNote,
    removeNote,
    listNote,
    readNote
} = require('./notes')
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Add a new note',
            demandOption: true,
            type: String
        },
        body: {
            describe: 'Adding our body',
            demandOption: true,
            type: String
        }
    },
    handler(argv) {
        addNote(argv.title, argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'removing note',
            demandOption: true,
            type: String
        }
    },
    handler(argv) {
        removeNote(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        listNote()
    }
})
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'reading note',
            demandOption: true,
            type: String
        }
    },
    handler(argv) {
        readNote(argv.title)
    }
})
console.log(process.argv[2])
console.log(yargs.argv)