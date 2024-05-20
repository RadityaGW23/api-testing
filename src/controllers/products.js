exports.createProduct = (req, res, next) => {
    const id = req.body.id;
    const uuid = req.body.uuid;
    const id_rfid = req.body.id_rfid;
    const name = req.body.name;
    const qty = req.body.qty;
    const location = req.body.location;
    res.json(
        {
            message: 'Berhasil',
            data: {
                id: id,
                uuid: uuid,
                id_rfid: id_rfid,
                name: name,
                qty: qty,
                location: location
            }
        }
    );
    next();
}

exports.getAllProducts = (req, res, next) => {
    res.json(
        {
            message: "Get All Product Success",
            data: [
                {
                id: 1,
                uuid: 123,
                id_rfid: 534,
                name: 'Barang A',
                qty: 55,
                location: 'Jakarta'
                }
            ]
        }
    );
    next();
}