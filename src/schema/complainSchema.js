const mongoose = require("mongoose");

const complainSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now() },
  service: String,
  location: {
    latitude: Number,
    longitude: Number,
  },
  userId: String,
  isAssigned: { type: Boolean, default: false },
  agentId: { type: String, default: "" },
  isCompleted: { type: Boolean, default: false },
  feedback: {
    stars: Number,
    content: String,
  },
});

module.exports = mongoose.model("Complain", complainSchema);
