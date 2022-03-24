const express = require('express');
const router = express.Router();
const db = require('../service/db');

router.get('', async (req, res) => {
  db.getUsers(req, res)
});

router.get('/:id', async (req, res) => {
  db.getUserById(req, res)
});

router.post('', async (req, res) => {
  db.createUser(req, res)
});

router.put('/:id', async (req, res) => {
  db.updateUser(req, res)
});

router.delete('/:id', async (req, res) => {
  db.deleteUser(req, res)
});

module.exports = router;
