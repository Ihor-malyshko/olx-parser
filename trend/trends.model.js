const mongoose = require("mongoose");
const { Schema } = mongoose;

const cardSchema = new Schema(
  {
    olxId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    price: { type: String },
    link: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// collection name => cards
exports.CardModel = mongoose.model("Card", cardSchema);
