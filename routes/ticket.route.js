const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticket.controller');

// Create a new ticket
router.post('/create', ticketController.createTicket);

// Get all tickets
router.get('/getall', ticketController.getAllTickets);

// Get a single ticket by ID
router.get('/:id', ticketController.getTicketById);

module.exports = router;
