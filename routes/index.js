const express= require('express');

const router= express.Router();
const homeController = require('../controllers/home_controller');
//const homeController1 = require('../controllers/home_controller')

console.log('router loaded');


router.get('/',homeController.home);
router.use('/users', require('./users'));


//for any other routes access from here
//router.use('/roterName', require('./routerfile'));

module.exports=router;
