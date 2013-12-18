var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('messages', {
    message: 'blob',
    receiver: { type: 'string', length: 32 },
    sender: { type: 'string', length: 32 }
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('messages', callback);
};
