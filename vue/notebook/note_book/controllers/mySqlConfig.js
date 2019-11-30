var mysql = require('mysql')
var config = require('./defaultConfig')

// 创建线程池
var pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  post: config.database.POST,
  database: config.database.DATABASE
})

// 统一链接数据库的方法
let allServices = {
  query: function (sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function(err, connection){
        if (err) {
          reject(err)
        } else {
          // mySQL自带的方法query
          connection.query(sql, values, (err, rows) => {
            if(err){
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release()
          })
        }
      })
    })
  }
}

// 读取所有users 表的数据,测试数据链接
let getAllusers = function () {
  let _sql = `select * from users;`
  return allServices.query(_sql)
}

module.exports = {
  getAllusers,
}
