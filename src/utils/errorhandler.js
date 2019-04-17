module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    console.log('errorr');
    if (typeof (err) === 'string') {
        // custom application error
        return res.status(400).json({ message: err });
    }

    // default to 500 server error
    return res.status(500).json({ message: err.message });
}