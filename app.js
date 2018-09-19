console.log('Starting app');

const fs = require('fs');
const notes = require('./notes');
const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;
const command = process.argv[2];
console.log('Command:', command);

if (command === 'add') 
{
    notes.addNote(argv.title, argv.body);
} 
else if (command === 'list')
{
    notes.getAll();
}
else if (command === 'read')
{
    console.log('Reading note');
}
else if (command === 'remove')
{
    console.log('Removing note');
}
else 
{
    console.log('Command not recognized');
}