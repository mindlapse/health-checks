var supertest = require("supertest")
var timeout = 2000

module.exports = function(tape) {

    tape("calls google", {timeout}, function(t) {
        console.log("Running test")
        supertest.agent("http://www.google.ca")
            .get("/")
            .expect(200)
            .end(function(err, res) {
                t.false(err)
                t.pass();
                t.end();
            })
    })

    tape("calls yahoo", {timeout}, function(t) {
        console.log("Running test")
        supertest.agent("http://www.yahoo.ca")
            .get("/")
            .expect(200)
            .end(function(err, res) {
                t.false(err)
                t.end();
            })
    })
    
    tape("calls amazon", {timeout}, function(t) {
        console.log("Checking amazon")
        supertest.agent("http://www.amazon.ca")
            .get("/")
            .expect(200)
            .end(function(err, res) {
                t.false(err)
                t.end();
            })
    })
}



