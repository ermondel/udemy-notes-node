const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return 'Your notes...';
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(note => note.title === title);
  let msg = '';

  if (duplicateNotes.length === 0) {
    notes.push({ title, body });
    saveNotes(notes);
    msg = chalk.green('New note added.');
  } else {
    msg = chalk.yellow('Note title taken!');
  }
  console.log('\n' + msg + '\n');
};

const saveNotes = notes => {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
};

const loadNotes = () => {
  try {
    const data = fs.readFileSync('notes.json');
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};

module.exports = { getNotes, addNote };
