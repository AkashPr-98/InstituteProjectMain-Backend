const classDetailController = require('../../controllers/classController/classDetailController')
const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');


router.post("/add",
  [
    body("firstname")
      .isLength({ min: 3 })
      .withMessage("minimum length 3")
      .trim(),

    body("lastname")
      .isLength({ min: 5 })
      .withMessage("minimum length 5")
      .trim(),

    body("email")
      .isEmail()
      .withMessage("invalid email address")
      .normalizeEmail(),

    body("password")
      .isLength({ min: 8, max: 15 })
      .withMessage("min and max length between 8-15")
      .matches(/\d/)
      .withMessage("at least one number needed")
      .matches(/[!@#$%^&*(),.?":{}|<>]/)
      .withMessage("at least one special character needed"),

    body("city")
    .not()
    .isEmpty()
    .withMessage('Please select a city from the dropdown'),

    body("state")
    .not()
    .isEmpty()
    .withMessage('Please select a state from the dropdown'),

    //   body("confirmPassword").custom((value, { req }) => {
    //     if (value !== req.body.password) {
    //       console.log(req.body.password, req.body.confirmPassword);
    //       throw new Error("confirm password does not match");
    //     }
    //     return true;
    //   }),
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
  classDetailController.addClassDetail
);

module.exports = router