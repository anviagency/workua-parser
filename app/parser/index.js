const {
  getDom, getPage, getPageResumeLinks, getResume, getPagesCount
} = require('./parser');
const { asyncMap, asyncForEach } = require('./parserUtils');
const db = require('../db');

const parseResume = async (link) => {
  const alreadyExists = await db.resume.checkExistence(link);
  if (alreadyExists) return null;
  return getResume(link);
};

const parse = async () => {
  const categories = await db.category.getAllCategories();
  const targetCategory = categories[0].name;
  const firstPageData = await getPage(targetCategory, 1);
  const firstPageDom = getDom(firstPageData);
  const pagesCount = getPagesCount(firstPageDom);
  let currentPageNumber = 1;
  while (currentPageNumber < pagesCount) {
    const currentPage = await getPage(targetCategory, currentPageNumber);
    const currentPageDom = getDom(currentPage);
    const resumeLinks = getPageResumeLinks(currentPageDom);
    const resumes = await asyncMap(resumeLinks, async link => parseResume(link));
    const validResumes = resumes.filter(item => !!item);
    await asyncForEach(validResumes, async resume => db.resume.addNewResume(resume));
    if (validResumes.length !== resumes.length) break;
    currentPageNumber += 1;
  }
};

module.exports = parse;
