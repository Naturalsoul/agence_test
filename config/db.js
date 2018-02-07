var mysql = require("mysql")

var cn = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "Edd",
	port: "3306"
})

module.exports = {
    exec: function (sql, next) {
        cn.query(sql, function (err, res, field) {
            if (err) {
                console.log(err)
                next([])
            } else {
                next(res)
            }
        })
    }
}