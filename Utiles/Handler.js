var en = require('../localization/en.json') ;

exports = function() {
    this.handleError = function(res,err) {
        if (process.env.NODE_ENV === 'development') {
            console.log(err);
        }
        if (err.code == undefined) {
            err.code = 500;
            err.message = en.error;
        }
        // Sends error to user
        res.status(err.code).json({
            errors: {
                msg: err.message
            }
        })
    };
    //etc
}