const express = require('express');
const router = express.Router();
const UserInfo = require('../models/users')
const GetClassInfo = require('../models/class/classDetail');
const GetStudentInfo = require('../models/student/studentDetail');
var fetchuser = require('../middlewares/fetchUser');



router.post('/class', fetchuser,  async (req, res) => {

  try {
    const userId = req.user.id;
    const user = await UserInfo.findById(userId)
    // if(user){
    //   const classuser = await GetClassInfo.find({id:user.id})
    //   res.send(classuser)
    // }else{
    //   res.send("Some Error Occured")
    // }
    if(user){
      console.log(userId);
      const classuser = await GetClassInfo.find({user_id: userId})
      res.status(200).send( classuser );
    }else{
      res.send("Some Error Occured")
    }
    // res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
  })


  router.post('/student', fetchuser,  async (req, res) => {

    try {
      const userId = req.user.id;
      const user = await GetStudentInfo.findById(userId).select("-password")
      res.send(user)
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
    })

  module.exports = router