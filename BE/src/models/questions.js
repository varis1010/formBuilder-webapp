const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionConstants = {
  types: {
    boolean: "boolean",
    multipleChoiceMultiSelect: "multiple-choice-multi-select",
    freeText: "free-text",
  },
};

const optionSchema = new Schema({
  title: { type: String, required: true },
  value: { type: String, required: true },
});

const questionSchema = mongoose.Schema(
  {
    formName: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    questionType: {
      type: String,
      enum: [
        QuestionConstants.types.multipleChoiceMultiSelect,
        QuestionConstants.types.boolean,
        QuestionConstants.types.freeText,
      ],
    },
    options: {
      type: [optionSchema],
    },
  },
  {
    timestamps: true,
    toObject: { virtuals: true, getters: true },
    toJSON: { virtuals: true, getters: true },
  }
);

// Virtuals
questionSchema.virtual("formUrl").get(function () {
  return `http://localhost:5000/question/${this._id}/survey-form`;
});

const question = mongoose.model("question", questionSchema);
module.exports = question;
