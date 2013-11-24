var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable('messages', {
    id: { type: 'int', primaryKey: true },
    message: 'blob'
    

  }, callback);
};

exports.down = function(db, callback) {
	db.dropTable('messages', callback);
};
	  
