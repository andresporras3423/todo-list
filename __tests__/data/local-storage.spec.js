import lStorage from '../../src/data/local-storage';

describe("Testing localStorage module", () => {
    beforeEach(() => {
        localStorage.clear();
        lStorage.loadData();
      });
    test("Check data is added to localStorage", () => {
        expect(localStorage!=={}).toBe(true);
    });
    test("Check data is added to localStorage", () => {
        expect(lStorage.listTodos['6'] === undefined).toBe(false);
    });
    test("Check saveProject add new projects in prjects key of localStorage", () => {
        lStorage.listProjects['4']={id:4, name:'project 4', description: 'description 4'};
        lStorage.saveProjects();
        expect(localStorage.getItem('projects')['4'] !== null).toBe(true);
    });
    test("Check saveProject doesn't delete previous projects", () => {
        lStorage.listProjects['4']={id:4, name:'project 4', description: 'description 4'};
        lStorage.saveProjects();
        expect(localStorage.getItem('projects')['6'] === null).toBe(false);
    });
    test("Check saveTodo add new todo in todos key of localStorage", () => {
        lStorage.listTodos['7']={id:7, name:'todo 7', description: 'description 7', idProject: 3, priority: 1, duedate: '10/10/2020'};
        lStorage.saveTodos();
        expect(localStorage.getItem('todos')['7'] !== null).toBe(true);
    });
    test("Check saveTodo doesn't remove any key after add a new todo", () => {
        lStorage.listTodos['7']={id:7, name:'todo 7', description: 'description 7', idProject: 3, priority: 1, duedate: '10/10/2020'};
        lStorage.saveTodos();
        expect(localStorage.getItem('todos')['6'] === null).toBe(false);
    });
  });