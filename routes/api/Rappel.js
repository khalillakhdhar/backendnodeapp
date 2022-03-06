const express = require('express');
const router = express.Router();
const Rappel=require("../../models/Rappel");

// @route GET api/rappels/test
// @description tests rappels route
// @access Public
router.get('/test', (req, res) => res.send('rappel route testing!'));

// @route GET api/rappels
// @description Get all rappels
// @access Public
router.get('/', (req, res) => {
  Rappel.find()
    .then(rappels => res.json(rappels))
    .catch(err => res.status(404).json({ norappelsfound: 'No Rappels found' }));
});

// @route GET api/rappels/:id
// @description Get single rappel by id
// @access Public
router.get('/:id', (req, res) => {
  Rappel.findById(req.params.id)
    .then(rappel => res.json(rappel))
    .catch(err => res.status(404).json({ norappelfound: 'No Rappel found' }));
});

// @route GET api/rappels
// @description add/save rappel
// @access Public
router.post('/', (req, res) => {
  Rappel.create(req.body)
    .then(rappel => res.json({ msg: 'Rappel added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this rappel' }));
});

// @route GET api/rappels/:id
// @description Update rappel
// @access Public
router.put('/:id', (req, res) => {
  Rappel.findByIdAndUpdate(req.params.id, req.body)
    .then(rappel => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/rappels/:id
// @description Delete rappel by id
// @access Public
router.delete('/:id', (req, res) => {
  Rappel.findByIdAndRemove(req.params.id, req.body)
    .then(rappel => res.json({ mgs: 'Rappel entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a rappel' }));
});

module.exports = router;

