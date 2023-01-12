const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  postUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userControllers.js');

router.route('/')
.get(getUsers)
.post(postUser)
.put(updateUser);

router.route('/:userId').get(getSingleUser).delete(deleteUser);

module.exports = router;
