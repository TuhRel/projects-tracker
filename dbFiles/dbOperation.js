const config    = require('./dbConfig');
const sql       = require('mssql');

const getProjects = async (projectname) => {
  try {
    let pool = await sql.connect(config);
    let projects = await pool.request().query(`SELECT * FROM ProjectDetails WHERE ProjectName = '${projectname}'`);
    return projects;
  }
  catch(error) {
    console.log(error);
  }
}

const createProject = async (Project) => {
  try {
    let pool = await sql.connect(config);
    let projects = await pool.request()
    .query(`INSERT INTO ProjectDetails VALUES
    (
      ${Project.ProjectID},
      '${Project.ProjectName}',
      '${Project.ProjectDescription}',
      '${Project.ProjectStart}',
      '${Project.ProjectComplete}',
      '${Project.ProjectLessons}'
    )
    `);
    return projects;
  }
  catch(error) {
    console.log(error);
  }
}

module.exports = {
  createProject,
  getProjects
}