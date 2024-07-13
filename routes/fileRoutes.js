const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');

router.get('/', fileController.renderHomePage);
router.get('/files/:filename', fileController.getFile);
router.post('/files', fileController.createFile);
router.delete('/files/:filename', fileController.deleteFile);
router.post('/permanent-delete/:filename', fileController.permanentDeleteFile);

module.exports = router;
