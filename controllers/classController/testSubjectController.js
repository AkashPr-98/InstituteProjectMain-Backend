const TestSubjectDetail = require('../../models/class/testSubject');

const addTestSubject = async (req, res, next) => {

    try {

        const testSubjectDetail = new TestSubjectDetail({

            // subject_name: req.body.subject_name,
            test_name: req.body.test_name,
            user_id: req.body.user_id,
            // question_details: req.body.question_details
            question: req.body.question,
        });

        const testSubjectDetailData = await testSubjectDetail.save();

        res.status(200).send({ success: true, msg: "Test & Subject added successfully", datamsg: testSubjectDetailData });
    } catch (err) {
        res.status(400).send({ success: false, msg: err.message });
    }
}

const viewTestSubject = async (req, res, next) => {

    try {
        const testview = await TestSubjectDetail.find(
            {
                user_id: req.body.user_id,
                test_name: req.body.test_name
            });
        res.json(testview);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
}


module.exports = { addTestSubject, viewTestSubject }