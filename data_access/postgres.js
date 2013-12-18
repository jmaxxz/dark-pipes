exports.getMessages = function(receiver, success, error){
  'use strict';
  db.query('SELECT message, sender FROM messages WHERE receiver=$1', [receiver], function(err, result) {
    if(err){
      return error()
    }
    if(result){
      return success(result.rows);
    }

    error();
  });
};

exports.sendMessage = function(m, success, error){
  db.query('INSERT INTO messages (message, sender, receiver) VALUES ($1, $2, $3)',
    [ m.message, m.sender, m.receiver], function(err) {
        if(err) {
          console.dir(err);
          return error();
        }
        return success();
        
	});
}