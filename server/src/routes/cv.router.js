const {Router} = require('express');

const router = Router()

const {createCvHandler, getCvs }= require('../handlers/cv.handler')


router.get('/', getCvs)
router.post('/cvs', createCvHandler)

module.exports = router;