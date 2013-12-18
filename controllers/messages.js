
/* global exports, dbWrapper, console, Buffer*/
var getMessagesAs = function(encoding, req, res){
  'use strict';
  //Handle bad user inputs
  if(!req.params.hasOwnProperty('receiver')){
    res.statusCode = 400;
    return res.send('receiver must be specified');
  }

  da.getMessages(req.params.receiver, function(result) {
    if(result){
      var transformedResult=[], x, m, encoded;
      for(x in result) {
        m = result[x];
        encoded = new Buffer(m.message, 'binary').toString(encoding);
        transformedResult.push({ message:encoded, sender:m.sender });
      }
      res.type('application/json');
      return res.send(transformedResult);
    }}, function() {
      res.statusCode = 500;
      return res.send('yeah, we messed that up');
  });
};

exports.index = function(req, res){
  'use strict';
  return getMessagesAs('base64', req, res);
};

exports.utf8 = function(req, res){
  'use strict';
  return getMessagesAs('utf8', req, res);
};

exports.send = function(req, res){
  'use strict';
  var message;
  //Handle bad user inputs
  if(!req.body.hasOwnProperty('message')) {
    res.statusCode = 400;
    return res.send('no message included');
  }

  message = new Buffer(req.body.message, 'base64');
  if(message.length === 0){
    res.statusCode = 400;
    return res.send('base64 ended messages only');
  }

  //Write to the database
  da.sendMessage( {message:message, receiver:req.params.receiver, sender:null}, function () {
    res.statusCode = 200;
    res.send('sent');
  }, function() {
      res.statusCode = 500;
      return res.send('yeah, we messed that up');
  });

};