import Todo from '../classes/todo';
import todos from '../data/todos';

const todoLogic = () => ({
  list: todos().list,
  saveTodo(id, name, description){
    if(id==null) this.addTodo(Todo(id, name, description));
    else this.editTodo(Todo(id, name, description));
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