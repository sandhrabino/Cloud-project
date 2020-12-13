var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


drinks=[
  ['tea', 10],
  ['coffee',15],
  ['boba', 100],
  ['mocha', 100],
  ['vanilla milkshake',  70],
  ['chocolate milkshake', 70],
  ['milk', 10]
  ['sandwich',50],
  ['tacos',   10],
  ['donut',   30],
  ['cookies', 30],
  ['pastry',  70]
 ]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*process get form */
router.get('/process_get', function (req, res){
  response={
    order1:req.query.order1,
    order2:req.query.order2,
    order3:req.query.order3  
  };
  console.log(response);
  res.end(' You have succesfully checked out!\nAmount = '+ drinks[response.order1]+' '+drinks[response.order2]
  +' '+drinks[response.order3]);
//  res.end(' You have succesfully checked out!\nAmount = '+JSON.stringify(response));
});

module.exports = router;
