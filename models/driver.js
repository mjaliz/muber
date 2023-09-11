const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DrvierSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  driving: {
    type: Boolean,
    default: false,
  },
});

const Driver = mongoose.model("driver", DrvierSchema);

module.exports = Driver;
