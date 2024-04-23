//------------------------------------------------------------
// notes.js class
//------------------------------------------------------------

//------------------------------------------------------------
// packages
//------------------------------------------------------------
const util = require('util');
const fs = require('fs');
const path = require('path');


const uuid = require('uuid'); // Generate our unique ids. https://www.npmjs.com/package/uuid

const dbPath = '/../db/db.json';

//------------------------------------------------------------
// Class declaration
//------------------------------------------------------------


class Notes {
  static getNotes() {
    const out = fs.readFileSync(path.join(__dirname, dbPath), 'utf8');
    return JSON.parse(out);
  }

//   static saveNotes(newNote) {
//     const notes = this.getNotes();
//     notes.put(newNote);
//     fs.writeFileSync(path.join(__dirname, dbPath), JSON.stringify(notes));
//  }
  
}



  module.exports = Notes;