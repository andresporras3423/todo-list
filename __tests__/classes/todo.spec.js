import Todo from '../../src/classes/todo';

describe('Testing Todo class', () => {
  const todo1 = Todo(1, 'Todo 1', 'Description todo 1', 1, 1, '10/10/2020');
  const todo2 = Todo(2, 'Todo 2', 'Description todo 2', 2, 2, '10/10/2021');
  test('Check correct id value', () => {
    expect(todo1.id === 1).toBe(true);
  });
  test('Check incorrect id value', () => {
    expect(todo2.id === 1).toBe(false);
  });
  test('Check correct name value', () => {
    expect(todo1.name === 'Todo 1').toBe(true);
  });
  test('Check incorrect name value', () => {
    expect(todo2.name === 'Todo 1').toBe(false);
  });
  test('Check correct description value', () => {
    expect(todo1.description === 'Description todo 1').toBe(true);
  });
  test('Check incorrect description value', () => {
    expect(todo2.description === 'Description todo 1').toBe(false);
  });
  test('Check correct idProject value', () => {
    expect(todo1.idProject === 1).toBe(true);
  });
  test('Check incorrect idProject value', () => {
    expect(todo2.idProject === 1).toBe(false);
  });
  test('Check correct priority value', () => {
    expect(todo1.priority === 1).toBe(true);
  });
  test('Check incorrect priority value', () => {
    expect(todo2.priority === 1).toBe(false);
  });
  test('Check correct duedate value', () => {
    expect(todo1.duedate === '10/10/2020').toBe(true);
  });
  test('Check incorrect duedate value', () => {
    expect(todo2.duedate === '10/10/2020').toBe(false);
  });
});