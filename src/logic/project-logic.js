import Project from '../classes/project';
import projects from '../data/projects';

const projectLogic = () => ({
  list: projects().list,
  saveProject(id, name, description){
    if(id==null) this.addProject(Project(id, name, description));
    else this.editProject(Project(id, name, description));
  },
  addProject(newProject) {
    this.list[Math.max(...Object.keys(this.list))+1]=newProject;
  },
  deleteProject(index){
    delete this.list[index];
  },
  editProject(updatedProject){
    this.list[updatedProject.id] = updatedProject;
  }
});

export default projectLogic;