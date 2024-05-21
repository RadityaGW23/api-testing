const express = require('express');
const {body} = require('express-validator')

const router = express.Router();

const itemController = require('../controllers/items');

router.post('/post', [
    body('name').isLength({min: 5}).withMessage('Input nama minimal 5 huruf'), 
    body('location').isLength({min:5}).withMessage('Input location minimal 5 huruf'),], 
    itemController.createItems);

module.exports = router;