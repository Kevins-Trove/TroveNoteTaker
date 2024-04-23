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
    return new Promise((resolve, reject) => {
        fs.writeFile(path.join(__dirname, dbPath), JSON.stringify(note), (err) => {
            if (err) {
                reject(err); // Reject the promise if an error occurs
            } else {
                resolve(); // Resolve the promise if the operation is successful
            }
        });
    });
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

    
    // Add new note, write notes, return the newNote
    const  notes = [...this.getNotes(), addNote]
    this.writeNotes(notes);

    return  addNote;
 }
  
 removeNote(id) {
  
  const notes = this.getNotes().filter((note) => note.id !== id);
  
  
  
  
  
  // Add new note, write notes, return the newNote
  return  this.writeNotes(notes)
  
  
}

}



  module.exports = new Notes;