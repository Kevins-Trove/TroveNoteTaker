//------------------------------------------------------------
// packages
//------------------------------------------------------------
const router = require('express').Router();

const notes = require('../lib/notesClass');




//------------------------------------------------------------
// URL handlers
//------------------------------------------------------------
// GET notes returns all notes
router.get('/notes', (req, res) => {
    return res.json(notes.getNotes());
});

// Post notes writes notes to DB
router.post('/notes', (req, res) => {
  console.log("router.post(/notes");
});

// DELETE notes that equals req.params.id
router.delete('/notes/:id', (req, res) => {
    console.log("router.notes(/notes");
 
});

module.exports = router;
