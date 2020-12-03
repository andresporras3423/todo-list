import projects from '../data/projects';

const projectLogic = () => ({
  list: projects().list,
  addProjects(newProject) {
    this.list[newProject.id]=newProject;
  },
  deleteProject(index){
    delete this.list[index];
  },
  editProject(updatedProject){
    this.list[updatedProject.id] = updatedProject;
  }
});

export default projectLogic;