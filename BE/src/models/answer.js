const mongoose = require("mongoose");
const Schema = mongoose.Schema

const answerSchema = mongoose.Schema(
  {
    answer: {
      type: String,
      required: true,
    },
    question: { type: Schema.Types.ObjectId, ref: 'question', required: true, index: true },
  },
  {
    timestamps: true,
    toObject: { virtuals: true, getters: true },
    toJSON: { virtuals: true, getters: true },
  }
);

const answer = mongoose.model("answer", answerSchema);
module.exports = answer;
