const{validationResult} = require('express-validator');
const ItemPost = require ('../models/items');

exports.createItems = (req, res, next) => {
    // const id = req.body.id;
    // const uuid = req.body.uuid;
    // const id_rfid = req.body.id_rfid;
    // const title = req.body.title;
    const name = req.body.name;
    const location = req.body.location;
    // const created_at = req.body.created_at;

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        const err = new Error('Input value tidak sesuai');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }

    const Posting = new ItemPost({
        name: name,
        location: location,
        // created_at: created_at
    })

    Posting.save()
    .then(result => {
        // const result = {
            // data: {
            //     id: 1,
            //     // uuid: 1,
            //     id_rfid: 123,
            //     name: name,
            //     location: location,
            //     created_at: created_at
            // }
        // }
        res.status(201).json({
            message: 'Create Item Success',
            data: result
        });
    })
    .catch(err=> {
        console.log('err: ', err);
    });

    // res.status(201).json(result);
}