const verifyUserController = require('../controllers/verifyUser')
const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');




// router.post("/class", [
//   body('email', 'Enter a valid email').isEmail(),
//   body('password', 'Password cannot be blank').exists(),
// ],
//   async (req, res, next) => {
//     // If there are errors, return Bad request and the errors
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }else{
//       next()
//     }

//   },
//   verifyUserController.verifyClassLogin
// );


// router.post("/student", [
//   body('email', 'Enter a valid email').isEmail(),
//   body('password', 'Password cannot be blank').exists(),
// ],
//   async (req, res, next) => {
//     // If there are errors, return Bad request and the errors
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }else{
//       next()
//     }

//   },
//   verifyUserController.verifyStudentLogin
// );


router.post("/", [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Enter a valid password').exists({checkFalsy: true}),
  body('userType').not().isEmpty().withMessage('Please select a usertype from the dropdown'),
  // body('userType').isIn(['option1', 'option2', 'option3']).withMessage('Please select a valid option'),
],
  async (req, res, next) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({ errors: errors.array() });
      // const err1 = errors.array()
      // const err = err1.map((e) => {
      //   return e.msg
      // })
      // console.log(err);
      // const err2 = {email: err[0], password: err[1]}
      // const err3 = Object.values(err2)
      // return res.status(400).json(err3);
    }else{
      next()
    }

  },
  verifyUserController.verifyUserLogin
);

module.exports = router