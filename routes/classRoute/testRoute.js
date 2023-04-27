const testDetailController = require('../../controllers/classController/testController')
const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');


router.post("/add",
  [
    body("test_name")
      .isLength({ min: 3 })
      .withMessage("minimum length 3")
      .trim(),

    body("test_date")
      .isLength({ min: 3 })
      .withMessage("minimum length 5")
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
  testDetailController.addTest
);

router.post("/view", testDetailController.viewTest)

module.exports = router