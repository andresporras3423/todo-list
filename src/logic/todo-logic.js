import Todo from '../classes/todo';
import todos from '../data/todos';

const todoLogic = () => ({
  list: todos,
  saveTodo(id, name, description, idProject, priority, duedate){
    if(id==null) return this.addTodo(Todo(id, name, description, idProject, priority, duedate));
    return this.editTodo(Todo(id, name, description, idProject, priority, duedate));
  },
  validateTodo(name, description, priority, idProject){
    if(name=="" || description=="" || priority==-1) return "Name, description and priority cannot be blank";
    if(Object.values(this.list).some((to)=> to.name==name && to.idProject==idProject)) return "There is already a to-do with this name in the current project";
    return "";
  },
  addTodo(newTodo) {
    this.list[Math.max(...Object.keys(this.list))+1]=newTodo;
    return "to-do succesfully saved";
  },
  deleteTodo(index){
    delete this.list[index];
  },
  editTodo(updatedTodo){
    this.list[updatedTodo.id] = updatedTodo;
    return "to-do successfully updated";
  }
});

export default todoLogic;