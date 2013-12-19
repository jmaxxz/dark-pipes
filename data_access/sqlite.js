exports.getMessages = function(receiver, success, error){
  'use strict';
  db.all('SELECT message, sender FROM messages WHERE receiver=?', [receiver], function(err, result) {
    if(err){
      console.dir(err);
      return error();
    }
    if(result){
      return success(result);
    }

    error();
  });
};

exports.sendMessage = function(m, success, error){
  db.run('INSERT INTO messages (message, sender, receiver) VALUES (?, ?, ?)',
    [ m.message, m.sender, m.receiver], function(err) {
        if(err) {
          console.dir(err);
          return error();
        }
        return success();
        
  });
};