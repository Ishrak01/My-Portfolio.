
const express = require('express');
const {uploadFile,downloadFile}=require('../controller/fileController')


const router = express.Router();


router.post('/upload', uploadFile);
router.get('/download', downloadFile);



module.exports = router;