//------------------------------------------------------------
// packages
//------------------------------------------------------------
const path = require('path');
const router = require('express').Router();

//------------------------------------------------------------
// URL handlers
//------------------------------------------------------------

// GET /notes returns notes html
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// All other route return index html
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
