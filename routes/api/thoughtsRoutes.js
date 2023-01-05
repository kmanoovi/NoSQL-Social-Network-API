const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  postThought,
  updateThought,
  deleteThought,
} = require('../controllers/userController.js');

router.route('/').get(getThought).post(postThought).put(updateThought);

router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

module.exports = router;
