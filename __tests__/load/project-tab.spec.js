import 'bootstrap';
import pageLoad from '../../src/load/page-load';
import projectLoad from '../../src/load/project-tab';
import lStorage from '../../src/data/local-storage';
import Project from '../../src/classes/project';

describe("Testing pageLoad module", () => {
    const content = document.createElement('div');
    content.id="content";
    document.getElementsByTagName("body")[0].appendChild(content);
    let proLoad;
    beforeEach(() => {
        localStorage.clear();
        lStorage.loadData();
        pageLoad().loadNav();
        const pLoad = new pageLoad();
        pLoad.nav.className = 'navbar navbar-expand-lg navbar-dark bg-dark';
        pLoad.divNav.className = 'navbar-nav';
        ['To-dos', 'Projects'].forEach((item, index) => {
          const a = document.createElement('a');
          a.text = item;
          if (index === 0) a.className = 'tab-event nav-item nav-link cursor-pointer active';
          else a.className = 'tab-event nav-item nav-link cursor-pointer';
          a.id = `tab${index}`;
          pLoad.divNav.appendChild(a);
        });
        pLoad.nav.appendChild(pLoad.divNav);
        pLoad.divContent.appendChild(pLoad.nav);
        proLoad = new projectLoad();
      });
    test("Check that div1 id element is added with loadDiv() method", () => { 
        proLoad.loadDiv();
        expect(document.getElementById('div1')).not.toBeNull;
    });
    test("Check that a form element is added with loadDiv() method", () => { 
        proLoad.loadDiv();
        expect(document.getElementsByTagName('form')[0]).toBeDefined;
    });

    test("Check that loadForm() add a label in the form", () => { 
        proLoad.divProject.id = 'div1';
        proLoad.divProject.className = 'item-style margin-menu';
        proLoad.formProject.classList.add('col-4');
        proLoad.tableProjects.classList.add('col-8');
        proLoad.tableProjects.classList.add('table');
        proLoad.pMessage.classList.add('col-12');
        proLoad.divProject.appendChild(proLoad.pMessage);
        proLoad.divContent.appendChild(proLoad.divProject);
        proLoad.loadForm();
        const form = document.getElementsByTagName('form')[0];
        expect(form.getElementsByTagName("label")[0]).toBeDefined;
    });
    test("Check that loadForm() add a submit in the form", () => { 
        proLoad.divProject.id = 'div1';
        proLoad.divProject.className = 'item-style margin-menu';
        proLoad.formProject.classList.add('col-4');
        proLoad.tableProjects.classList.add('col-8');
        proLoad.tableProjects.classList.add('table');
        proLoad.pMessage.classList.add('col-12');
        proLoad.divProject.appendChild(proLoad.pMessage);
        proLoad.divContent.appendChild(proLoad.divProject);
        proLoad.loadForm();
        const form = document.getElementsByTagName('form')[0];
        expect(form.getElementsByTagName("submit")[0]).not.toBeNull;
    });

    test("Check that loadTable() add a table", () => { 
        proLoad.divProject.id = 'div1';
        proLoad.divProject.className = 'item-style margin-menu';
        proLoad.formProject.classList.add('col-4');
        proLoad.tableProjects.classList.add('col-8');
        proLoad.tableProjects.classList.add('table');
        proLoad.pMessage.classList.add('col-12');
        proLoad.divProject.appendChild(proLoad.pMessage);
        proLoad.divContent.appendChild(proLoad.divProject);
        proLoad.loadForm();
        proLoad.loadTable();
        const table = document.getElementsByTagName('table')[0];
        expect(table).toBeDefined;
    });
    test("Check that loadTable() add a tr tag to the table", () => { 
        proLoad.divProject.id = 'div1';
        proLoad.divProject.className = 'item-style margin-menu';
        proLoad.formProject.classList.add('col-4');
        proLoad.tableProjects.classList.add('col-8');
        proLoad.tableProjects.classList.add('table');
        proLoad.pMessage.classList.add('col-12');
        proLoad.divProject.appendChild(proLoad.pMessage);
        proLoad.divContent.appendChild(proLoad.divProject);
        proLoad.loadForm();
        proLoad.loadTable();
        const table = document.getElementsByTagName('table')[0];
        expect(table.getElementsByTagName("tr")).not.toBeNull;
    });


    test("Check that loadTableHead() add a tr tag to the table", () => { 
        proLoad.divProject.id = 'div1';
        proLoad.divProject.className = 'item-style margin-menu';
        proLoad.formProject.classList.add('col-4');
        proLoad.tableProjects.classList.add('col-8');
        proLoad.tableProjects.classList.add('table');
        proLoad.pMessage.classList.add('col-12');
        proLoad.divProject.appendChild(proLoad.pMessage);
        proLoad.divContent.appendChild(proLoad.divProject);
        proLoad.loadForm();
        proLoad.loadTableHead();
        const thead = document.getElementsByTagName('thead')[0];
        expect(thead.getElementsByTagName("tr")).not.toBeNull;
    });
    test("Check that loadTableHead() add a th tag to the table", () => { 
        proLoad.divProject.id = 'div1';
        proLoad.divProject.className = 'item-style margin-menu';
        proLoad.formProject.classList.add('col-4');
        proLoad.tableProjects.classList.add('col-8');
        proLoad.tableProjects.classList.add('table');
        proLoad.pMessage.classList.add('col-12');
        proLoad.divProject.appendChild(proLoad.pMessage);
        proLoad.divContent.appendChild(proLoad.divProject);
        proLoad.loadForm();
        proLoad.loadTableHead();
        const thead = document.getElementsByTagName('thead')[0];
        expect(thead.getElementsByTagName("th")).toBeDefined;
    });

    test("Check that loadTableHead() add a tr tag to the table", () => { 
        proLoad.divProject.id = 'div1';
        proLoad.divProject.className = 'item-style margin-menu';
        proLoad.formProject.classList.add('col-4');
        proLoad.tableProjects.classList.add('col-8');
        proLoad.tableProjects.classList.add('table');
        proLoad.pMessage.classList.add('col-12');
        proLoad.divProject.appendChild(proLoad.pMessage);
        proLoad.divContent.appendChild(proLoad.divProject);
        proLoad.loadForm();
        proLoad.loadTableHead();
        proLoad.loadTableBody();
        const tbody = document.getElementsByTagName('tbody')[0];
        expect(tbody.getElementsByTagName("tr")).not.toBeNull;
    });
    test("Check that loadTableHead() add a th tag to the table", () => { 
        proLoad.divProject.id = 'div1';
        proLoad.divProject.className = 'item-style margin-menu';
        proLoad.formProject.classList.add('col-4');
        proLoad.tableProjects.classList.add('col-8');
        proLoad.tableProjects.classList.add('table');
        proLoad.pMessage.classList.add('col-12');
        proLoad.divProject.appendChild(proLoad.pMessage);
        proLoad.divContent.appendChild(proLoad.divProject);
        proLoad.loadForm();
        proLoad.loadTableHead();
        proLoad.loadTableBody();
        const tbody = document.getElementsByTagName('tbody')[0];
        expect(tbody.getElementsByTagName("td")).toBeDefined;
    });

    test("Check that cleanForm() empty the value of inputName value", () => { 
        proLoad.loadDiv();
        proLoad.inputName.value = 'a project name';
        proLoad.cleanForm();
        expect(proLoad.inputName.value).not.toBe("a project name");
    });
    test("Check that cleanForm() convert id to null", () => { 
        proLoad.loadDiv();
        proLoad.id = 12;
        proLoad.cleanForm();
        expect(proLoad.id).toBeNull;
    });

    test("Check that completeForm() add the value of inputName", () => { 
        proLoad.loadDiv();
        proLoad.completeForm(new Project(10, 'test project', 'description test project'));
        expect(proLoad.inputName.value).toBe("test project");
    });
    test("Check that completeForm() assign a value to id", () => { 
        proLoad.loadDiv();
        proLoad.completeForm(new Project(11, 'test project 11', 'description test project 11'));
        expect(proLoad.id).not.toBeNull;
    });

    test("Check that disabledForm() assign true to disable status of the form elements", () => { 
        proLoad.loadDiv();
        proLoad.disabledForm(true);
        expect(proLoad.inputName.disabled).toBeTruthy;
    });
    test("Check that disabledForm() assign false to disable status of the form elements", () => { 
        proLoad.loadDiv();
        proLoad.disabledForm(false);
        expect(proLoad.textAreaDesc.disabled).toBeFalsy;
    });
});