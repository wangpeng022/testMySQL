/*
 * @Descripttion: 
 * @version: 
 * @Author: 王鹏
 * @Date: 2020-12-01 13:27:17
 * @LastEditors: 王鹏
 * @LastEditTime: 2020-12-01 14:15:36
 */
// SQL语句封裝
var user = {
  insert:'INSERT INTO user(id, username, age) VALUES(?,?,?)',
  update:'UPDATE user SET username=?, age=? WHERE id=?',
  delete: 'DELETE FROM user WHERE id=?',
  queryById: 'SELECT * FROM user WHERE id=?',
  queryAll: 'SELECT * FROM user'
};
module.exports = user;