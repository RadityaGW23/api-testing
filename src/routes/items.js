const express = require('express');
const {body} = require('express-validator')

const router = express.Router();

const itemController = require('../controllers/items');

router.post('/post', [
    body('name').isLength({min: 5}).withMessage('Input nama minimal 5 huruf'), 
    body('location').isLength({min: 5}).withMessage('Input location minimal 5 huruf')], 
    itemController.createItems);

router.get('/posts', itemController.getAllItemPost);
router.get('/post/:postId', itemController.getAllItemById);
router.put('/post/:postId', [
    body('name').isLength({min: 5}).withMessage('Input nama minimal 5 huruf'), 
    body('location').isLength({min: 5}).withMessage('Input location minimal 5 huruf')],
    itemController.updateItemPost);

router.delete('/post/:postId', itemController.deleteItemPost);

module.exports = router;