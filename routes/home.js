exports.path = '/';

exports.get = function(req, res){
  var dns = require('dns')
    , mongoose = require('mongoose')
    , Forward = mongoose.model('Forward')
    ;

  dns.reverse(
    req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    function(err, domains){
      if (err) {
        throw err;
      }
      Forward.getLatest(function(err, latest){
        if (err) { throw err; }
        Forward.getRecent(function(err, recent){
          if (err) { throw err; }
          Forward.getPopular(function(err, popular){
            res.render('home', {
              title: null
            , host: domains
            , latest: latest
            , recent: recent
            , popular: popular
            });
          });
        });
      });
  });
};
