import Project from '../classes/project';
import projects from '../data/projects';

const projectLogic = () => ({
  list: projects,
  saveProject(id, name, description) {
    if (id == null) {
      this.addProject(Project(id, name, description));
      return 'Project successfully saved!';
    }
    this.editProject(Project(id, name, description));
    return 'Project successfully updated!';
  },
  validateProject(name, description) {
    if (name === '' || description === '') return 'name and description cannot be blank';
    if (Object.values(this.list).some((pr) => pr.name === name)) return 'name already taken';
    return '';
  },
  addProject(newProject) {
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