const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const ItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: [true, "Item name is required"],
  },
  itemDescription: {
    type: String,
    required: [true, "Item description is required"],
    unique: true,
  },
  itemPrice: {
    type: Number, // Assuming price is a number
    required: [true, "Listing price is required"],
  },
  availabilityAddress: {
    type: String,
    required: [true, "Address is required"],
  },
  availabilityDate: {
    type: Date, // Assuming date is a Date type
    required: [true, "Date is required"],
  },
  availabilityTime: {
    type: String,
    required: [true, "Time is required"],
  },
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  secondName: {
    type: String,
    required: [true, "Second name is required"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required"],
  },
  termCondition: {
    type: String,
    required: [true, "Terms and conditions are required"],
  },
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel' }
});

const ItemModel = mongoose.model("ItemModel", ItemSchema);

module.exports = ItemModel;
