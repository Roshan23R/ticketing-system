const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for a Ticket
const ticketSchema = new Schema({
  title: { type: String },
  description: { type: String},
  reason: { type: String },
  comment: { type: String },
  amount: { type: Number },
  interestRate: { type: Number },
  interestType: { type: String },
  term: { type: Number },
  termType: { type: String },
  createdAt: { type: Date, default: Date.now },
  messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
});

// Create the model from the schema and export it
const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
