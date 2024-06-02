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
    }).populate({
      path: "replyMessageId",
    });

    res.status(200).json(messages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Get Message By Id
exports.getMessageById = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }
    res.status(200).json(message);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
