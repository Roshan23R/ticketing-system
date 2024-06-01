const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
  attachedImages: [
    {
      type: String,
    },
  ],
  attachedFiles: [
    {
      name: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  replyMessageId: {
    type: Schema.Types.ObjectId,
    ref: 'Message',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  ticketId: {
    type: Schema.Types.ObjectId,
    ref: 'Ticket',
    required: true,
  }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
