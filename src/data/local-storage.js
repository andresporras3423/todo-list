import Project from '../classes/project';
import Todo from '../classes/todo';

const lStorage =  {
    listProjects: {
      1: Project(1, 'weather project', 'this is the todo web project'),
      2: Project(2, 'restaurant project', 'this is the restaurant web project'),
      3: Project(3, 'library project', 'this is the library web project'),
    },
    listTodos: {
      1: Todo(1, 'create form for projects', 'this is the to-do for creating form for projects', 1, 2, '08/09/2021'),
      2: Todo(2, 'create a function to delete projects', 'this is the to-do for creating a function to delete projects', 1, 2, '09/10/2019'),
      3: Todo(3, 'create a class for projects', 'this is the to-do for creating a class for projects', 1, 1, '02/08/2020'),
      4: Todo(4, 'add a tab for the menus', 'this is the to-do for adding a tab for the menus', 2, 3, '10/10/2021'),
      5: Todo(5, 'add a model for the menus', 'this is the to-do for adding a model for the menus', 2, 2, '11/10/2020'),
      6: Todo(6, 'create a class for the books', 'this is the to-do for creating a class for the books', 3, 1, '01/10/2021'),
    },
    loadData: function(){
        if (localStorage.getItem("projects")!== null) this.listProjects = JSON.parse(localStorage.getItem("projects"));
        if (localStorage.getItem("todos")!== null)  this.listTodos = JSON.parse(localStorage.getItem("todos"));
    },
    saveTodos: function(){
      localStorage.setItem("todos", JSON.stringify(this.listTodos));
    },
    saveProjects: function(){
      localStorage.setItem("projects", JSON.stringify(this.listProjects));
    }
};

export default lStorage;
