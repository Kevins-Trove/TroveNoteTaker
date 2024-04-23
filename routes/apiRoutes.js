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

router.post('/notes', (req, res) => {
    notes
      .saveNote(req.body)
      .then((note) => res.json(note))
      .catch((err) => res.status(500).json(err));
  });
  

// DELETE notes that equals req.params.id
router.delete('/notes/:id', (req, res) => {
    notes.removeNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch((err) => res.status(500).json(err));;
 });

module.exports = router;
