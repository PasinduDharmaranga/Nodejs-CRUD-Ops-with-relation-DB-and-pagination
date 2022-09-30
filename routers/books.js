const express = require('express');
const router = express.Router({ mergeParams: true });
const bookController = require('../controllers/booksController');

router.route("/all").get(bookController.fetchAllBooks);
router.route("/:id").get(bookController.fetchOneBook);
router.route("/create").post(bookController.createBook);
router.route("/:id").put(bookController.updateBook);
module.exports = router;
