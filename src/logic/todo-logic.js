import Todo from '../classes/todo';
import todos from '../data/todos';

const todoLogic = () => ({
  list: todos().list,
  saveTodo(id, name, description, idProject){
    if(id==null) this.addTodo(Todo(id, name, description, idProject));
    else this.editTodo(Todo(id, name, description, idProject));
  },
  addTodo(newTodo) {
    this.list[Math.max(...Object.keys(this.list))+1]=newTodo;
  },
  deleteTodo(index){
    delete this.list[index];
  },
  editTodo(updatedTodo){
    this.list[updatedTodo.id] = updatedTodo;
  }
});

export default todoLogic;