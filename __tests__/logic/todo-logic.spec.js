import localStorage from '../../mocks/localStorageMock';
import lStorage from '../../src/data/local-storage';
import todoLogic from '../../src/logic/todo-logic';
import Todo from '../../src/classes/todo';

describe("Testing todoLogic module", () => {
    beforeEach(() => {
        localStorage.clear();
        lStorage.loadData();
      });
    test("Check if new todo is added after calling saveProject", () => {
        expect(todoLogic().saveTodo(null, 'new todo', 'this is a new todo', 1, 1, '10/10/2020')).toBe('to-do succesfully saved');
    });
    test("Check if saveProject doesn't update if project id is null", () => {
        expect(todoLogic().saveTodo(null, 'new todo', 'this is a new todo', 1, 1, '10/10/2020')).not.toBe('to-do succesfully updated');
    });
    test("Check if todo is updated after calling saveProject", () => {
        expect(todoLogic().saveTodo(1, 'new todo', 'this is a new todo', 1, 1, '10/10/2020')).toBe('to-do successfully updated');
    });
    test("Check if saveProject doesn't save a new todo if todo id is  not null", () => {
        expect(todoLogic().saveTodo(1, 'new todo', 'this is a new todo', 1, 1, '10/10/2020')).not.toBe('to-do succesfully saved');
    });
    test("Check if validateTodo add after calling saveProject", () => {
        expect(todoLogic().validateTodo(null, 'new todo20', 'description of new todo20', 1, 1)).toBe('');
    });
    test("Check if validateTodo doesn't add after calling saveProject using a name already used in current project", () => {
        expect(todoLogic().validateTodo(null, 'new todo', 'description of new todo', 1, 1)).toBe('There is already a to-do with this name in the current project');
    });
    test("Check if validateTodo not add after calling saveProject if name is an empty string", () => {
        expect(todoLogic().validateTodo(null, '', 'this is a new todo', 1, 1)).toBe('Name, description and priority cannot be blank');
    });
    test("Check if validateTodo not add after calling saveProject if description is an empty string", () => {
        expect(todoLogic().validateTodo(null, 'new todo', '', 1, 1)).toBe('Name, description and priority cannot be blank');
    });
    test("Check if validateTodo not add after calling saveProject if priority is -1 is an empty string", () => {
        expect(todoLogic().validateTodo(null, 'new todo', 'description of new todo', -1, 1)).toBe('Name, description and priority cannot be blank');
    });
    test("Check if addTodo added a new todo with the right description", () => {
        let id = Math.max(...Object.keys(todoLogic().list)) + 1;
        todoLogic().addTodo(Todo(null,'new todo 30','description new todo 30',1,1,'10/10/2020'));
        expect(todoLogic().list[id].description).toBe('description new todo 30');
    });
    test("Check if addTodo added a new todo with the biggest id", () => {
        let id = Math.max(...Object.keys(todoLogic().list)) + 1;
        todoLogic().addTodo(Todo(null,'new todo 30','description new todo 30',1,1,'10/10/2020'));
        expect(todoLogic().list[id+1]).toBeNull;
    });

    test("Check if deleteTodo delete last added project", () => {
        let id = Math.max(...Object.keys(todoLogic().list)) + 1;
        todoLogic().addTodo(Todo(null,'new todo 30','description new todo 30',1,1,'10/10/2020'));
        todoLogic().deleteTodo(id);
        expect(todoLogic().list[id]).toBeNull;
    });
    test("Check if deleteTodo doesn't delete de previous project to the last one", () => {
        let id = Math.max(...Object.keys(todoLogic().list)) + 1;
        todoLogic().addTodo(Todo(null,'new todo 30','description new todo 30',1,1,'10/10/2020'));
        todoLogic().deleteTodo(id);
        expect(todoLogic().list[id-1]).not.toBeNull;
    });

    test("Check if editTodo update project name", () => {
        let id = Math.max(...Object.keys(todoLogic().list)) + 1;
        todoLogic().addTodo(Todo(null,'new todo 30','description new todo 30',1,1,'10/10/2020'));
        todoLogic().editTodo(Todo(id,'new todo 31','description new todo 31',1,1,'10/10/2020'));
        expect(todoLogic().list[id].name).toBe('new todo 31');
    });
    test("Check if name of project doesn't remain the same after editTodo", () => {
        let id = Math.max(...Object.keys(todoLogic().list)) + 1;
        todoLogic().addTodo(Todo(null,'new todo 30','description new todo 30',1,1,'10/10/2020'));
        todoLogic().editTodo(Todo(id,'new todo 31','description new todo 32',2,2,'11/11/2021'));
        expect(todoLogic().list[id].name).not.toBe('new todo 30');
    });
  });
