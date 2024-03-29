const { Resume } = require('../models');

const addNewResume = data => new Promise(((resolve, reject) => {
  const newResume = new Resume(data);
  newResume.save((err) => {
    if (err) return reject(err);
    console.log('new resume');
    resolve(newResume);
  });
}));

const getResumesByCategory = () => {};

const getFilteredResumes = ({ page = 1, category }) => new Promise(((resolve, reject) => {
  Resume.paginate({ category }, { limit: 9, page })
    .then((result) => {
      resolve({ resumes: result.docs, pages: result.totalPages });
    })
    .catch(reject);
}));

const getSingleResume = id => new Promise(((resolve, reject) => {
  Resume.findById(id).exec((err, resume) => {
    if (err) return reject(err);
    resolve(resume);
  });
}));

const checkExistence = link => new Promise(((resolve, reject) => {
  Resume.findOne({ link }, { _id: 1 }).exec((err, resume) => {
    if (err) return reject(err);
    if (resume) return resolve(true);
    resolve(false);
  });
}));

module.exports = {
  addNewResume,
  getResumesByCategory,
  getFilteredResumes,
  getSingleResume,
  checkExistence,
};
