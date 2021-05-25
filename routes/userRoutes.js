const express = require('express')
const router = express.Router()
const controllers = require('../controllers/controller')

router.get('/', controllers.indexPage )
router.get('/about', controllers.aboutPage )
router.get('/contact', controllers.contactPage )
router.get('/store', controllers.storePage)

router.post('/', express.urlencoded({extended:true}), (req, res)=>{

})




module.exports = router