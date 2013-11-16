var message = 'oh hi';
exports.index = function(req, res){
  res.type('text/plain');
  res.send(message);
};

exports.send = function(req, res){
 if(!req.body.hasOwnProperty('text')) {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect.');
  }

  message = req.body.text;
  res.statusCode = 200;
  res.send('sent');
};