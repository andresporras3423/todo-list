import localStorage from '../../mocks/localStorageMock';
import lStorage from '../../src/data/local-storage';
import projectLogic from '../../src/logic/project-logic';

describe("Testing projectLogic module", () => {
    beforeEach(() => {
        localStorage.clear();
        lStorage.loadData();
      });
    test("Check if new project is added", () => {
        expect(projectLogic().saveProject(null, 'new project', 'this is a new project')).toBe('Project successfully saved!');
    });
    test("Check new project doesn't return update message", () => {
        expect(projectLogic().saveProject(null, 'new project 2', 'this is a new project 2')).not.toBe('Project successfully updated!');
    });
    test("Check if project is updated", () => {
        expect(projectLogic().saveProject(1, 'new project', 'this is a new project')).toBe('Project successfully updated!');
    });
    test("Check if project is updated", () => {
        expect(projectLogic().saveProject(2, 'new project 2', 'this is a new project 2')).not.toBe('Project successfully saved!');
    });
  });