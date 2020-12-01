/*
 * @Descripttion: 
 * @version: 
 * @Author: 王鹏
 * @Date: 2020-11-18 11:17:17
 * @LastEditors: 王鹏
 * @LastEditTime: 2020-12-01 14:13:51
 */
var express = require('express');
var router = express.Router();
var user = require('../mysql/handle');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('user')
  // 基本连接方式
  // var mysql = require("mysql");
  // var connection = mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   password:"12345678",
  //   database: "name1",
  //   })
  // connection.connect();
  // var id = req.query.id
  // var sql = `SELECT * FROM user WHERE id = '${id}'`
  // connection.query(sql,function(err,result){
  //   res.send(result);
    
  // });
  // connection.end();
});

router.get('/addUser', function(req, res, next) {
  user.add(req, res, next);
});
router.get('/queryAll', function(req, res, next) {
  user.queryAll(req, res, next);
});

router.get('/query', function(req, res, next) {
  user.queryById(req, res, next);
});
router.get('/deleteUser', function(req, res, next) {
  user.delete(req, res, next);
});
router.get('/update', function(req, res, next) {
  res.render('update');
});
router.post('/updateUser', function(req, res, next) {
  user.update(req, res, next);
});

module.exports = router;
