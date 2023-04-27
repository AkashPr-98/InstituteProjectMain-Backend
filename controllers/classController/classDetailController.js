const ClassDetail = require('../../models/class/classDetail');
const Users = require('../../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "AkashRajput@intern"


const addClassDetail = async (req, res, next) => {

    //     const userval = await userValidation.findOne({
    //         userType: 1
    //     })
    //     console.log(userval);

    try {

        const salt = await bcrypt.genSalt(10);
        const encPassword = await bcrypt.hash(req.body.password, salt);

        console.log(req.body);
        let classinfo = { email: req.body.email, password: encPassword, userType: req.body.userType }
        const UserInsertedId = await Users.insertMany(classinfo)
        console.log(UserInsertedId[0]._id);

        const classDetail = new ClassDetail({

            firstname: req.body.firstname,
            lastname: req.body.lastname,
            address: req.body.address,
            user_id: UserInsertedId[0]._id,
            website: req.body.website,
            working_hours: req.body.working_hours,
            city: req.body.city,
            classes: req.body.classes,
            state: req.body.state

        });

        const classDetailData = await classDetail.save();

            const data = {
                user : {
                    id: classDetailData.id
                }
            }

           const authToken = jwt.sign(data, JWT_SECRET)
           console.log(data);
        // res.status(200).send({ success: true, msg: "Class added successfully", datamsg: classDetailData, authToken });
        res.status(200).send({ data, success: true, msg: "Class added successfully", datamsg: classDetailData, authToken});



    } catch (err) {
        res.status(400).send({ success: false, msg: err.message });
    }


}

module.exports = { addClassDetail }