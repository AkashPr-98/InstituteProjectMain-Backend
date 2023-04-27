const SubjectDetail = require('../../models/class/subject');
// const Users = require('../../models/users')
// const Users = require('../../models/users');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const JWT_SECRET = "AkashRajput@intern"


const addSubject = async (req, res, next) => {

    // const userid = await Users.findOne({ _id: req.body._id }, { _id: 1 })
    // console.log(userid);

    try {

        const subjectDetail = new SubjectDetail({

            subject_name: req.body.subject_name,
            user_id: req.body.user_id
        });

        const subjectDetailData = await subjectDetail.save();

        res.status(200).send({ success: true, msg: "Subject added successfully", datamsg: subjectDetailData });




    } catch (err) {
        console.log({ success: false, msg: err.message });
    }


}

const viewSubject = async (req, res, next) => {

    const subjects = await SubjectDetail.find({ user_id: req.body.user_id });
    try {
        if (subjects.length === 0) {
            res.status(400).json({error: "User has not added any subjects"})
        }else{
            res.json(subjects);
        }
        
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }


}

module.exports = { addSubject, viewSubject }