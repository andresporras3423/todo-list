import Todo from '../classes/todo';

const todos = () => (
    {
        list: {
            1: Todo(1, 'todo project', 'this is a todo web project', 1, 2, '12/10/2020'),
            2: Todo(2, 'restaurant project', 'this is a restaurant web project', 1, 2, '12/10/2020'),
            3:  Todo(3, 'library project', 'this is a library web project',1 , 2, '12/10/2020')
        }
    }
  );

  export default todos;
  