exports.path = '/_forward/:id/edit';
exports.requiresAuth = true;

exports.get = function(req, res){
  var mongoose = require('mongoose')
    , Forward = mongoose.model('Forward')
    ;

  Forward.findById(req.params.id, function(err, fwd){
    if (err) { throw err; }
    res.render('forwards/edit', {
      title: null
    , fwd: fwd
    , page: 'edit'
    });
  });
};
