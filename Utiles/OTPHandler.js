var springedge = require('springedge');

module.exports  = function(request) {
    var params = {
        'apikey': process.env.Phone_API_KEY, // API Key
        'sender': 'SEDEMO', // Sender Name
        'to': [
            request.phone  //Moblie Number
        ],
        'message': request.number
    };

    springedge.messages.send(params, 5000, function (err, response) {
        if (err) {
            console.log(err);
            return err;
        } else
            return response;
    });


    // result
    // {
    //     "groupID":xxxx,
    //     "MessageIDs":"xxxxx-x",
    //     "status":"AWAITED-DLR"
    // }

    // error
    // {
    //     "error":"Invalid Mobile Numbers"
    // }

}