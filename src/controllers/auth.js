exports.register = (req, res, next) => {
    const name = req.body.name;
    const sn = req.body.sn;
    const location = req.body.location;

    const result = {
        message: 'Register Success',
        data: {
            name: name,
            sn: sn,
            location: location
        }
    }
    res.status(201).json(result);
}