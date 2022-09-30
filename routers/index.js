const express = require('express');
const router = express.Router();
const booksRouter = require('../routers/books');
const authorsRouter = require('../routers/authors');

router.use('/books', booksRouter);
router.use('/authors', authorsRouter);

module.exports = router;
