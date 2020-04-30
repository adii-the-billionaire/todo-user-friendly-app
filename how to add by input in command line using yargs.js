const chalk = require('chalk')
const yargs = require('yargs')
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
    handler: function(argv) {
        console.log('title:' + argv.title)
        console.log('body:' + argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing a note')
    }
})
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function(argv) {
        console.log('Listing the note')
    }
})
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Reading a note')
    }
})
console.log(process.argv[2])
console.log(yargs.argv)