import Project from '../../src/classes/project';

describe("Testing Project class", () => {
    const project1 = Project(1, 'Project 1', 'Description project 1');
    const project2 = Project(2, 'Project 2', 'Description project 2');
    test("Check correct id value", () => {
        expect(project1.id===1).toBe(true);
    });
    test("Check incorrect id value", () => {
        expect(project2.id===1).toBe(false);
    });
    test("Check correct name value", () => {
        expect(project1.name==='Project 1').toBe(true);
    });
    test("Check incorrect name value", () => {
        expect(project2.name==='Project 1').toBe(false);
    });
    test("Check correct description value", () => {
        expect(project1.description==='Description project 1').toBe(true);
    });
    test("Check incorrect description value", () => {
        expect(project2.description==='Description project 1').toBe(false);
    });
  });