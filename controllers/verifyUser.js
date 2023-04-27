// const ClassDetailLogin = require('../models/class/classDetail');
// const StudentDetailLogin = require('../models/student/studentDetail');
const UsersLogin = require('../models/users')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "AkashRajput@intern"



// const verifyClassLogin = async (req, res, next) => {

//     const user = await ClassDetailLogin.findOne({ email: req.body.email });
//     let success = false;
//     try{

//         if (!user) {
//             success = false
//             return res.status(400).json({ error: "Please try to login with correct credentials" });
//           }

//           const data = {
//             user: {
//               id: user.id
//             }
//           }  

//         const match = await bcrypt.compare(req.body.password, user.password);
//         const accessToken = jwt.sign(data, JWT_SECRET)
//         if(match){
//             success = true
//             res.json({success, accessToken });
//         } else {
//             res.status(400).json({ message: "Invalid Credentials" });
//         }
//     } catch(e) {
//         console.log(e)
//     }


// }

// const verifyStudentLogin = async (req, res, next) => {

//   const user = await StudentDetailLogin.findOne({ email: req.body.email });
//   let success = false
//   try{
//       if (!user) {
//           success = false
//           return res.status(400).json({ error: "Please try to login with correct credentials" });
//         }

//         const data = {
//           user: {
//             id: user.id
//           }
//         }  

//       const match = await bcrypt.compare(req.body.password, user.password);
//       const accessToken = jwt.sign(data, JWT_SECRET)
//       if(match){
//           success = true
//           res.json({success, accessToken });
//       } else {
//           res.status(400).json({ message: "Invalid Credentials" });
//       }
//   } catch(e) {
//       console.log(e)
//   }
// }


const verifyUserLogin = async (req, res, next) => {
  const user = await UsersLogin.findOne({ email: req.body.email, userType: req.body.userType});
  let success = false
  try {
    if (!user) {
      success = false
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }

    const data = {
      user: {
        id: user.id
      }
    }

    const match = await bcrypt.compare(req.body.password, user.password);
    const accessToken = jwt.sign(data, JWT_SECRET)
    if (match) {
      success = true
      res.json({ success, accessToken, user });
    } else {
      res.status(400).json({ message: "Please try to login with correct credentials" });
    }
  } catch (e) {
    console.log(e)
  }
}

// module.exports = {verifyClassLogin, verifyStudentLogin}
module.exports = { verifyUserLogin }