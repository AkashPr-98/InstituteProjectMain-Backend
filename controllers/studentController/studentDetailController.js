const StudentDetail = require('../../models/student/studentDetail');
const Users = require('../../models/users')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "AkashRajput@intern"


const addStudentDetail = async (req, res, next) => {



    try {

        const salt = await bcrypt.genSalt(10);
        const encPassword = await bcrypt.hash(req.body.password, salt);

        console.log(req.body);
        let studentinfo = { email: req.body.email, password: encPassword, userType: req.body.userType }
        const UserInsertedId = await Users.insertMany(studentinfo)
        console.log(UserInsertedId[0]._id);


        const studentDetail = new StudentDetail({

            user_id: UserInsertedId[0]._id,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            address: req.body.address,
            city: req.body.city,
            courses: req.body.courses,
            state: req.body.state

        });

        const studentDetailData = await studentDetail.save();

        const data = {
            user: {
                id: studentDetailData.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET)

        res.status(200).send({ success: true, msg: "Student added successfully", datamsg: studentDetailData, authToken });
    } catch (err) {
        res.status(400).send({ success: false, msg: err.message });
    }


}

module.exports = { addStudentDetail }