const express = require('express');

const router = express.Router();

const DUMMY_USERS = [
  {
    id: 'u1',
    name: 'Tomasz',
  },
];

router.get('/:uid', (req, res, next) => {
  const userId = req.params.uid;
  const user = DUMMY_USERS.find((u) => {
    return u.id === userId;
  }); // {uid: 'u1'}
  res.json({ user }); // => { user } => { user: user }
});

module.exports = router;
