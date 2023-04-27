const TestDetail = require('../../models/class/test');

const addTest = async (req, res, next) => {


    try {

        const testDetail = new TestDetail({

            test_name: req.body.test_name,
            test_date: req.body.test_date,
            user_id: req.body.user_id
        });

        const testDetailData = await testDetail.save();

        res.status(200).send({ success: true, msg: "Test added successfully", datamsg: testDetailData });




    } catch (err) {
        res.status(400).send({ success: false, msg: err.message });
    }


}

const viewTest = async (req, res, next) => {

    try {
        const tests = await TestDetail.find({user_id:req.body.user_id});
        res.json(tests);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }


}

module.exports = { addTest, viewTest }