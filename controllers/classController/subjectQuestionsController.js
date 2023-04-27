const SubjectQuestionsDetail = require('../../models/class/subjectQuestions');

const addSubjectQuestions = async (req, res, next) => {


  try {

    const subjectQuestionsDetail = new SubjectQuestionsDetail({

      subject: req.body.subject,
      question: req.body.question,
      option1: req.body.option1,
      option2: req.body.option2,
      option3: req.body.option3,
      option4: req.body.option4,
      correctans: req.body.correctans,
      user_id: req.body.user_id
    });

    const subjectQuestionDetailData = await subjectQuestionsDetail.save();

    res.status(200).send({ success: true, msg: "Questions added successfully", datamsg: subjectQuestionDetailData });
  } catch (err) {
    res.status(400).send({ success: false, msg: err.message });
  }


}

const viewSubjectQuestions = async (req, res, next) => {

  try {
    const documents = await SubjectQuestionsDetail.find(
      { user_id: req.body.user_id })
      .lean();
    res.json(documents);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }

}

const viewQuestionOptions = async (req, res, next) => {

  try {

    const documents = await SubjectQuestionsDetail.find(
      { question: req.body.question },
      { _id: 0, correctans: 0 }).lean();
    res.json(documents);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }

}





module.exports = { addSubjectQuestions, viewSubjectQuestions, viewQuestionOptions }