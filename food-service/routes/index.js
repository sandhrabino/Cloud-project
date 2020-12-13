var express = require('express');
var router = express.Router();
let table = require("table"); 
let data, config; 

drinks=[
 ['tea', 10],
 ['coffee',15],
 ['boba', 100],
 ['mocha', 100],
 ['vanilla milkshake',  70],
 ['chocolate milkshake', 70],
 ['milk', 10]
	['sandwich','50'],
	['tacos',   '10'],
	['donut',   '30'],
	['cookies', '30'],
  ['pastry',  '70']
]
config = { 
  
  // Predefined styles of table 
  border: table.getBorderCharacters("ramac"), 
}

//let table = require("table"); 
//const drinks = new Table();
//drinks.addRow({ index: 1, item: 'mocha ', value: 100 }, { color: 'red' });
//drinks.addRow({ index: 2, item: 'coffee', value: 50 }, { color: 'green' });
//drinks.addRow({ index: 3, item: 'boba', value: 100 }, { color: 'yellow' });
//drinks.addRow({ index: 4, item: 'float', value: 100 }, { color: 'yellow' });
//drinks.addRow({ index: 5, item: 'strawberry milkshake', value: 100 }, { color: 'yellow' });
//drinks.addRow({ index: 6, item: 'chocolate milkshake', value: 200 }, { color: 'yellow' });
//
//const snackos = new Table();
//snackos.addRow({ index: 7, item: 'club sandwich ', value: 300 }, { color: 'red' });
//snackos.addRow({ index: 8, item: 'mexican taco ', value: 200 }, { color: 'red' });
//snackos.addRow({ index: 9, item: 'donut ', value: 100 }, { color: 'red' });
//snackos.addRow({ index: 10, item:'nutty cookie', value: 50}, { color: 'red' });
//snackos.addRow({ index: 11, item:'red velvet pastry ', value: 200 }, { color: 'red' });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'm&m Online Food Store' });
  res.send(menu_items)
});

router.get('/form', function(req, res, next) {
  res.render('form');
});

router.get('/menu', function(req,res, next){
  res.send(drinks)
  //res.send(table.table(snacks))
  //res.render('menu')
});

module.exports = router;
