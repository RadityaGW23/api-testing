const {validationResult} = require('express-validator');
const ItemPost = require ('../models/items');

exports.createItems = (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        const err = new Error('Input value tidak sesuai');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }

    const name = req.body.name;
    const location = req.body.location;

    const Posting = new ItemPost({
        name: name,
        location: location
    })

    Posting.save()
    .then(result => {
        res.status(201).json({
            message: 'Create Item Success',
            data: result
        });
    })
    .catch(err=> {
        console.log('err: ', err);
    });
}

exports.getAllItemPost = (req, res, next) => {
    ItemPost.find()
    .then(result => {
        res.status(200).json({
            message: "Berhasil memanggil data",
            data: result
        })
    })
    .catch(err => {
        next(err);
    })
}

exports.getAllItemById = (req, res, next) => {
    const postId = req.params.postId;
    ItemPost.findById(postId)
    .then(result => {
        if(!result){
            const error = new Error('Item tidak ditemukan');
            error.errorStatus = 404;
            throw error;
        }
        res.status(200).json({
            message: "data berhasil dipanggil",
            data: result,
        })
    })
    .catch(err => {
        next(err)
    })
}

exports.updateItemPost = (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        const err = new Error('Input value tidak sesuai');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }

    const name = req.body.name;
    const location = req.body.location;
    const postId = req.params.postId;

    ItemPost.findById(postId)
    .then(post => {
        if(!post){
            const err = new Error('Data tidak ditemukan');
            err.errorStatus = 400;
            throw err;
        }

        post.name = name;
        post.location = location;

        return post.save();
    })
    .then(result => {
        res.status(200).json({
            message: 'Update Success',
            data: result
        })
    })
    .catch(err => {
        next(err);
    })
}

exports.deleteItemPost = (req, res, next) => {
    const postId = req.params.postId;

    ItemPost.findById(postId)
    .then(post => {
        if(!post){
            const error = new Error('Item tidak ditemukan');
            error.errorStatus = 404;
            throw error;
        }

        return ItemPost.findByIdAndDelete(postId);
        
    })
    .then(result => {
        res.status(200).json({
            message: 'Hapus Item Berhasil',
            data: result
        })
    })
    .catch(err => {
        next(err);
    })
}