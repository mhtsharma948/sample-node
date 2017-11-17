var express = require('express')
var router = express.Router()
var os = require('os')
    /* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express !!! host:' + os.hostname() })

})

router.get('/user', (req, res, next) => {
    let data = {
        "firstName": "komal"
    }
    res.end(JSON.stringify(data));
})

module.exports = router