const express = require('express');
const router = express.Router();
const messageController = require('../controllers/message.controller');

// Route to add a message to a ticket
router.post('/add', messageController.addMessageToTicket);

// Route to reply to a message
router.post('/reply', messageController.replyToMessage);

// Route to get all messages for a specific ticket
router.get('/:ticketId', messageController.getMessagesForTicket);

module.exports = router;
