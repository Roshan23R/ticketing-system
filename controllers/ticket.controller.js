const Ticket = require('../models/ticket.model');
const Message = require('../models/message.model');

// Create a new ticket
exports.createTicket = async (req, res) => {
  try {
    const ticket = new Ticket(req.body);
    await ticket.save();
    res.status(201).json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all tickets
exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find().populate('messages');
    res.status(200).json(tickets);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single ticket by ID
exports.getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id).populate('messages');
    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }
    res.status(200).json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
