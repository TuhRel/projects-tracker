class Project{
  constructor(ProjectID, ProjectName, ProjectDescription, ProjectStart, ProjectComplete, ProjectLessons){
    this.ProjectID = ProjectID;
    this.ProjectName = ProjectName;
    this.ProjectDescription = ProjectDescription;
    this.ProjectStart = ProjectStart;
    this.ProjectComplete = ProjectComplete;
    this.ProjectLessons = ProjectLessons;
  }
}

module.exports = Project;