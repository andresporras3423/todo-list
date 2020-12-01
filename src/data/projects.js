import Project from '../classes/project';

const projects = () => (
    {
        list: [
            Project(1, 'todo project', 'this is a todo web project'),
            Project(2, 'restaurant project', 'this is a restaurant web project'),
            Project(3, 'library project', 'this is a library web project')
        ]
    }
  );

  export default projects;
