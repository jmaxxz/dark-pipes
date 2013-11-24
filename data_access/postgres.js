exports.getMessages = function(reciever, success, error){
  'use strict';
  db.query('SELECT message, sender FROM messages WHERE reciever=$1', [reciever], function(err, result) {
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
  db.query('INSERT INTO messages (message, sender, reciever) VALUES ($1, $2, $3)',
    [ m.message, m.sender, m.reciever], function(err) {
        if(err) {
          console.dir(err);
          return error();
        }
        return success();
        
	});
}