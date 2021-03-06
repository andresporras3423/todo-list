import Todo from '../classes/todo';
import lStorage from '../data/local-storage';

const todoLogic = () => ({
  list: lStorage.listTodos,
  saveTodo(id, name, description, idProject, priority, duedate) {
    if (id == null) {
      return this.addTodo(Todo(Number(id),
        name,
        description,
        idProject,
        priority,
        duedate));
    }
    return this.editTodo(Todo(Number(id), name, description, idProject, priority, duedate));
  },
  validateTodo(id, name, description, priority, idProject) {
    if (name === '' || description === '' || priority === -1) return 'Name, description and priority cannot be blank';
    if (id === null && Object.values(this.list).some((to) => to.name === name && to.idProject === Number(idProject))) return 'There is already a to-do with this name in the current project';
    return '';
  },
  addTodo(newTodo) {
    newTodo.id = Math.max(...Object.keys(this.list)) + 1;
    this.list[Math.max(...Object.keys(this.list)) + 1] = newTodo;
    lStorage.saveTodos();
    return 'to-do succesfully saved';
  },
  deleteTodo(index) {
    delete this.list[index];
    lStorage.saveTodos();
  },
  editTodo(updatedTodo) {
    this.list[updatedTodo.id] = updatedTodo;
    lStorage.saveTodos();
    return 'to-do successfully updated';
  },
});

export default todoLogic;