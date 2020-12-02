import projects from '../data/projects';

const projectLogic = () => ({
  listProjects: projects(),
  addProjects(newProject) {
    this.listProjects.push(newProject);
  },
  deleteProject(index){
    delete this.listProjects[index];
  },
  editProject(updatedProject){
    this.listProjects[updatedProject.id] = updatedProject;
  }
});

export default projectLogic;