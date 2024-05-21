exports.register = (req, res, next) => {
    // const id = req.body.id;
    // const uuid = req.body.uuid;
    // const id_rfid = req.body.id_rfid;
    const name = req.body.name;
    const qty = req.body.qty;
    const location = req.body.location;

    const result = {
        message: 'Register Success',
        data: {
            // id: id,
            // uuid: uuid,
            // id_rfid: id_rfid,
            name: name,
            qty: qty,
            location: location
        }
    }
    res.status(201).json(result);
}