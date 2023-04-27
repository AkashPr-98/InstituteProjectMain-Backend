const subjectDetailController = require('../../controllers/classController/subjectController')
const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');


router.post("/add",
  [
    body("subject_name")
      .isLength({ min: 3 })
      .withMessage("minimum length 3")
      .trim(),

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
  subjectDetailController.addSubject
);

router.post("/view", subjectDetailController.viewSubject)

module.exports = router