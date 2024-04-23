//------------------------------------------------------------
// notes.js class
//------------------------------------------------------------

//------------------------------------------------------------
// packages
//------------------------------------------------------------

const fs = require('fs');
const path = require('path');


const uuid = require('uuid'); // Generate our unique ids. https://www.npmjs.com/package/uuid

const dbPath = '/../db/db.json';

//------------------------------------------------------------
// Class declaration
//------------------------------------------------------------


class Notes {
   
  getNotes() {
      return JSON.parse(fs.readFileSync(path.join(__dirname, dbPath), 'utf8'));
  }

  writeNotes(note) {
    return fs.writeFileSync(path.join(__dirname, dbPath), JSON.stringify(note));
  }

  saveNote(newNote) {
    const { title, text } = newNote;

    if (!title || !text) {
      throw new Error("Title and text cannot be null");
    }

    // Add a unique id to the note using uuid package
    const addNote = { 
      title,
      text,
      id: uuid.v1()
     };

    const  notes = [...this.getNotes(), addNote]

    console.log(notes);
    // Get all notes, add the new note, write all the updated notes, return the newNote
    return this.writeNotes(notes).then(() => addNote);
    
    

 }
  
}



  module.exports = new Notes;