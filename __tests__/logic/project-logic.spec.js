/* eslint-disable no-unused-expressions */
import lStorage from '../../src/data/local-storage';
import projectLogic from '../../src/logic/project-logic';
import Project from '../../src/classes/project';
import todoLogic from '../../src/logic/todo-logic';
import Todo from '../../src/classes/todo';

describe('Testing projectLogic module', () => {
  beforeEach(() => {
    localStorage.clear();
    lStorage.loadData();
  });
  test('Check if new project is added', () => {
    expect(projectLogic().saveProject(null, 'new project', 'this is a new project')).toBe('Project successfully saved!');
  });
  test("Check new project doesn't return update message", () => {
    expect(projectLogic().saveProject(null, 'new project 2', 'this is a new project 2')).not.toBe('Project successfully updated!');
  });
  test('Check if project is updated', () => {
    expect(projectLogic().saveProject(1, 'new project', 'this is a new project')).toBe('Project successfully updated!');
  });
  test("Check if updated project doesn't create a new one", () => {
    expect(projectLogic().saveProject(2, 'new project 2', 'this is a new project 2')).not.toBe('Project successfully saved!');
  });

  test('Check if validate method return a warning message when project name is an empty string', () => {
    expect(projectLogic().validateProject(2, '', 'this is a new project 2')).toBe('name and description cannot be blank');
  });
  test("Check if validate method doesn't return the wrong message when project name is an empty string", () => {
    expect(projectLogic().validateProject(3, '', 'this is a new project 3')).not.toBe('name already taken');
  });
  test('Check if validate method return a warning message when project description is an empty string', () => {
    expect(projectLogic().validateProject(2, 'new project 2', '')).toBe('name and description cannot be blank');
  });
  test("Check if validate method doesn't return the wrong message when project description is an empty string", () => {
    expect(projectLogic().validateProject(3, 'new project 3', '')).not.toBe('name already taken');
  });
  test('Check if validate method return a warning message when trying to create a project with a name already taken', () => {
    projectLogic().validateProject(2, 'new project 2', 'this is a new project 2');
    expect(projectLogic().validateProject(null, 'new project 2', 'this is a new project 2')).toBe('name already taken');
  });
  test('Check if validate method return a warning message when trying to create a project with a name already taken', () => {
    projectLogic().validateProject(3, 'new project 3', 'this is a new project 3');
    expect(projectLogic().validateProject(null, 'new project 3', 'this is a new project 3')).not.toBe('name and description cannot be blank');
  });

  test('Check if addProject method add the new project', () => {
    const id = Math.max(...Object.keys(projectLogic().list)) + 1;
    const newProject = Project(null, 'project 3', 'description 3');
    projectLogic().addProject(newProject);
    expect(projectLogic().list[id].name).toBe('project 3');
  });
  test('Check that there is no bigger id than the id of the recently added project', () => {
    const id = Math.max(...Object.keys(projectLogic().list)) + 1;
    const newProject = Project(null, 'project 4', 'description 4');
    projectLogic().addProject(newProject);
    expect(projectLogic().list[id + 1]).toBeNull;
  });

  test("Check if project doesn't exists after deleted", () => {
    const id = Math.max(...Object.keys(projectLogic().list)) + 1;
    const newProject = Project(null, 'project 3', 'description 3');
    projectLogic().addProject(newProject);
    projectLogic().deleteProject(id);
    expect(Math.max(...Object.keys(projectLogic().list))).toBe(id - 1);
  });
  test('Check if deleteProject delete the recently created project', () => {
    const id = Math.max(...Object.keys(projectLogic().list)) + 1;
    const newProject = Project(null, 'project 4', 'description 4');
    projectLogic().addProject(newProject);
    projectLogic().deleteProject(id);
    expect(projectLogic().list[id]).toBeNull;
  });

  test('Check if deleteRelatedTodos is working', () => {
    const id = Math.max(...Object.keys(projectLogic().list)) + 1;
    const newProject = Project(null, 'project 3', 'description 3');
    projectLogic().addProject(newProject);
    todoLogic().addTodo(Todo(null, 'todo1', 'description1', id, 1, '10/10/2020'));
    todoLogic().addTodo(Todo(null, 'todo2', 'description2', id, 1, '11/11/2020'));
    projectLogic().deleteRelatedTodos(id);
    expect(Object.keys(todoLogic().list)
      .filter((item) => todoLogic().list[item].id === id).length)
      .toBe(0);
  });
  test('Check if after deleteRelatedTodos the previously added todo is not present anymore', () => {
    const id = Math.max(...Object.keys(projectLogic().list)) + 1;
    const newProject = Project(null, 'project 3', 'description 3');
    projectLogic().addProject(newProject);
    todoLogic().addTodo(Todo(null, 'todo1', 'description1', id, 1, '10/10/2020'));
    todoLogic().addTodo(Todo(null, 'todo2', 'description2', id, 1, '11/11/2020'));
    const idTodoMax = Math.max(...Object.keys(todoLogic().list));
    projectLogic().deleteRelatedTodos(id);
    expect(todoLogic().list[idTodoMax]).toBeNull;
  });

  test('Check if editProject change name', () => {
    const id = Math.max(...Object.keys(projectLogic().list)) + 1;
    projectLogic().addProject(Project(null, 'project 4', 'description 4'));
    projectLogic().editProject(Project(id, 'project 5', 'description 5'));
    expect(projectLogic().list[id].name).toBe('project 5');
  });
  test("Check that editProject doesn't delete project", () => {
    const id = Math.max(...Object.keys(projectLogic().list)) + 1;
    projectLogic().addProject(Project(null, 'project 5', 'description 5'));
    projectLogic().editProject(Project(id, 'project 6', 'description 6'));
    expect(projectLogic().list[id]).toBeNull;
  });
});