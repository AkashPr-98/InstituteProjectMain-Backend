const subjectQuestionDetailController = require('../../controllers/classController/subjectQuestionsController')
const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');


router.post("/add",
  [
    body("subject")
    .not()
    .isEmpty()
    .withMessage('Please select an option from the dropdown'),

    body("question")
      .isLength({ min: 1 })
      .withMessage("minimum length 1")
      .trim(),

    body("option1")
    .isLength({ min: 1 })
    .withMessage("minimum length 1")
    .trim(),

    body("option2")
    .isLength({ min: 1 })
    .withMessage("minimum length 1")
    .trim(),

    body("option3")
    .isLength({ min: 1 })
    .withMessage("minimum length 1")
    .trim(),

    body("option4")
    .isLength({ min: 1 })
    .withMessage("minimum length 1")
    .trim(),

    body("correctans")
    .not()
    .isEmpty()
    .withMessage('Please select an option from the dropdown'),
  ],
  async (req, res, next) => {
    // const error = validationResult(req).formatWith(({ msg }) => msg);
    const error = validationResult(req)

    const hasError = !error.isEmpty();

    if (hasError) {
      res.status(422).json({ error: error.array() });
    } else {
      next();
    }

  },
  subjectQuestionDetailController.addSubjectQuestions
);

router.post("/view", subjectQuestionDetailController.viewSubjectQuestions)

router.post("/viewoptions", subjectQuestionDetailController.viewQuestionOptions)


module.exports = router