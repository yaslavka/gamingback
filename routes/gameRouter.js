const Router = require('express')
const GameControllers = require('../controllers/GameControllers')
const RaccoonTalesController = require("../controllers/RaccoonTalesController")
const router = new Router()



router.post('/html5/evoplay/nukeworld', GameControllers.project)
router.post('/html5/evoplay/raccoontales', RaccoonTalesController.RaccoonTales)




module.exports = router