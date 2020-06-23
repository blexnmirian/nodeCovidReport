const request = require('request');
const data = require('../model/index_model');


class Controllers {
  static index(req, res){
      res.status(200);
     
      request(data, { json: true }, (err, response, body) => {
          if (err) {
              console.error(err);
          } else {
              const data = body.data;
              const states = data.states;
              res.render('index', { data, states });
          }
  })

  }
}
module.exports = Controllers

