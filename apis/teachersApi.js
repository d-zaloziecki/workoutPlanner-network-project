const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/spacebookDB')
const User = require('./models/usersModel');
const Teacher = require('./models/teachersModel')

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

module.exports = router