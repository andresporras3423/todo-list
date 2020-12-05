import Todo from '../classes/todo';

const todos = () => (
    {
        list: {
            1: Todo(1, 'todo project', 'this is a todo web project', 1),
            2: Todo(2, 'restaurant project', 'this is a restaurant web project', 2),
            3:  Todo(3, 'library project', 'this is a library web project', 2)
        }
    }
  );

  export default todos;
