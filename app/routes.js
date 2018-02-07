// ------------------ Controllers

// ------------------

module.exports = function (app) {
    
    
    
    // This is for angularjs to controll the Front-End routes ----------------
    
    app.get("*", function (req, res) {
        res.sendFile("index.html", {root: __dirname + "/../public/"})
    })
}