const Message = require("../models/message.model");
const Ticket = require("../models/ticket.model");

// Add a message to a ticket
exports.addMessageToTicket = async (req, res) => {
  try {
    const { ticketId, messageText, attachedImages, attachedFiles } = req.body;

    const message = new Message({
      message: messageText,
      ticketId: ticketId,
      attachedImages: attachedImages || [],
      attachedFiles: attachedFiles || [],
    });

    await message.save();

    // Update the ticket with the new message
    await Ticket.findByIdAndUpdate(ticketId, {
      $push: { messages: message._id },
    });

    res.status(201).json(message);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Reply to a message
exports.replyToMessage = async (req, res) => {
  try {
    const {
      ticketId,
      messageText,
      replyMessageId,
      attachedImages,
      attachedFiles,
    } = req.body;

    const message = new Message({
      message: messageText,
      ticketId: ticketId,
      replyMessageId: replyMessageId,
      attachedImages: attachedImages || [],
      attachedFiles: attachedFiles || [],
    });

    await message.save();

    // Update the ticket with the new message
    await Ticket.findByIdAndUpdate(ticketId, {
      $push: { messages: message._id },
    });

    res.status(201).json(message);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all messages for a ticket
exports.getMessagesForTicket = async (req, res) => {
  try {
    // Find all messages for the ticket
    const messages = await Message.find({
      ticketId: req.params.ticketId,
    }).populate("replyMessageId", "message");

    res.status(200).json(messages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
