exports.getMessages = function(reciever, success, error){
  'use strict';
  db.all('SELECT message, sender FROM messages WHERE reciever=?', [reciever], function(err, result) {
    if(err){
      console.dir(err);
      return error()
    }
    if(result){
      return success(result);
    }

    error();
  });
};

exports.sendMessage = function(m, success, error){
  db.run('INSERT INTO messages (message, sender, reciever) VALUES (?, ?, ?)',
    [ m.message, m.sender, m.reciever], function(err) {
        if(err) {
          console.dir(err);
          return error();
        }
        return success();
        
	});
}