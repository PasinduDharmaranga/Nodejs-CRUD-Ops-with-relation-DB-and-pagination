const express = require('express');
const router = express.Router({ mergeParams: true });
const authorsController = require('../controllers/authorsController');

router.route("/all").get(authorsController.fetchAllAuthors);
router.route("/:id").get(authorsController.fetchOneAuthor);
router.route("/create").post(authorsController.createAuthor);
router.route("/:id").put(authorsController.updateAuthor);

module.exports = router;
