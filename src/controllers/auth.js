exports.register = (req, res, next) => {
    const name = req.body.name;
    const qty = req.body.qty;
    const location = req.body.location;

    const result = {
        message: 'Register Success',
        data: {
            name: name,
            qty: qty,
            location: location
        }
    }
    res.status(201).json(result);
}