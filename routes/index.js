var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  const {sequelize} = require("../models/index");
  const {QueryTypes} = require("sequelize");

  let toDoItems = await sequelize.query('select * from todo', {type: QueryTypes.SELECT });
  res.render('index', {toDoItems});
});

router.get('/add', function(req, res){
  res.render('create_todo');
})

module.exports = router;
