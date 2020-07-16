const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');

router.get('/image', imageController.getImage);
router.get('/image/:id', imageController.getImageById);
router.post('/image', imageController.createImage);
router.put('/image/:id', imageController.updateImage);


module.exports = router;