import Project from '../classes/project';
import lStorage from '../data/local-storage';

const projectLogic = () => ({
  list: lStorage.listProjects,
  listTodos: lStorage.listTodos,
  saveProject(id, name, description) {
    if (id == null) {
      this.addProject(Project(Number(id), name, description));
      return 'Project successfully saved!';
    }
    this.editProject(Project(Number(id), name, description));
    return 'Project successfully updated!';
  },
  validateProject(id, name, description) {
    if (name === '' || description === '') return 'name and description cannot be blank';
    if (id === null && Object.values(this.list).some((pr) => pr.name === name)) return 'name already taken';
    return '';
  },
  addProject(newProject) {
    newProject.id = Math.max(...Object.keys(this.list)) + 1;
    this.list[Math.max(...Object.keys(this.list)) + 1] = newProject;
    lStorage.saveProjects();
  },
  deleteProject(index) {
    delete this.list[index];
    this.deleteRelatedTodos(index);
    lStorage.saveProjects();
    lStorage.saveTodos();
  },
  deleteRelatedTodos(index){
    Object.keys(this.listTodos).forEach((i)=>{
      if(this.listTodos[i].idProject===index) delete this.listTodos[i];
    });
  }
  ,
  editProject(updatedProject) {
    this.list[updatedProject.id] = updatedProject;
    lStorage.saveProjects();
  },
});

export default projectLogic;