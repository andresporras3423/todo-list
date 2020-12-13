import Project from '../classes/project';
import projects from '../data/projects';

const projectLogic = () => ({
  list: projects,
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
    if (id===null && Object.values(this.list).some((pr) => pr.name === name)) return 'name already taken';
    return '';
  },
  addProject(newProject) {
    newProject.id = Math.max(...Object.keys(this.list)) + 1;
    this.list[Math.max(...Object.keys(this.list)) + 1] = newProject;
  },
  deleteProject(index) {
    delete this.list[index];
  },
  editProject(updatedProject) {
    this.list[updatedProject.id] = updatedProject;
  },
});

export default projectLogic;