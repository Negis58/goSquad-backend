const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.get('/message', messageController.getMessage);
router.get('/message/:id', messageController.getMessageById);
router.post('/message', messageController.createMessage);
router.put('/message/:id', messageController.updateMessage);


module.exports = router;