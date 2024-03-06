
const express = require('express');
const {create,getData,getById,deleteById,updateById}=require('../controller/project')


const router = express.Router();


router.post('/create', create);
router.get('/getData', getData);
router.get('getById/:id', getById);
router.put('/updateById/:id', updateById);
router.delete('/deleteById/:id', deleteById);

module.exports = router;