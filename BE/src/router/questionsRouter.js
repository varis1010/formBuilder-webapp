const express = require("express");
const Question = require("../models/questions");
const Answer = require("../models/answer");

const router = new express.Router();

router.post("/question", async (req, res) => {
  const question = new Question({
    ...req.body,
  });
  try {
    await question.save();
    res.status(201).send(question);
  } catch (err) {
    console.log("err", err);
    res.status(400).send({ err });
  }
});

router.get("/question", async (req, res) => {
  try {
    const queryStringParameters = req.query || {};
    const limit = queryStringParameters.limit || 10;
    const skip = queryStringParameters.skip || 0;
    const sortBy = queryStringParameters.sortBy || `createdAt`;
    const orderBy = queryStringParameters.orderBy || "asc";

    const question = await Question.find()
      .sort({ [sortBy]: orderBy == "asc" ? 1 : -1 })
      .limit(+limit)
      .skip(+skip);

    const totalCount = await Question.countDocuments();

    res.setHeader("X-Total-Count", totalCount);
    res.send(question);
  } catch (err) {
    console.log("err", err);
    res.status(500).send({ err });
  }
});

router.get("/answer", async (req, res) => {
  try {
    const answer = await Answer.find().populate("question");
    const totalCount = await Answer.countDocuments();

    res.setHeader("X-Total-Count", totalCount);
    res.send(answer);
  } catch (err) {
    console.log("err", err);
    res.status(500).send({ err });
  }
});

router.get("/question/:id/survey-form", (req, res) => {
  const _id = req.params.id;
  try {
    Question.findById(_id).then((response) => {
      res.render("./pages/index", {
        question: response,
      });
    });
  } catch (err) {
    console.log("err", err);
    res.status(500).send({ err });
  }
});

router.get("/question/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const question = await Question.findById(_id);
    res.send(question);
  } catch (err) {
    console.log("err", err);
    res.status(500).send({ err });
  }
});

router.post("/question/:id/post-survey", async (req, res) => {
  const _id = req.params.id;
  const answer = new Answer({
    ...req.body,
    question: _id,
  });

  try {
    await answer.save();
    res.render("./successpage/index");
  } catch (err) {
    console.log("err", err);
    res.status(500).send({ err });
  }
});

router.delete("/question/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const question = await Question.findById(_id);
    if (!question) {
      throw new Error(`question not found`);
    }

    await question.remove();
    res.send({
      status: 200,
      body: { message: `question removed successfully!` },
    });
  } catch (err) {
    console.log("err", err);
    res.status(500).send({ err });
  }
});

module.exports = router;
