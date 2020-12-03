import Project from '../classes/project';

const projects = () => (
    {
        list: {
            1: Project(1, 'todo project', 'this is a todo web project'),
            2: Project(2, 'restaurant project', 'this is a restaurant web project'),
            3:  Project(3, 'library project', 'this is a library web project')
        }
    }
  );

  export default projects;
