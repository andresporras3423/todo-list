import 'bootstrap';
import pageLoad from '../../src/load/page-load';
import todoLoad from '../../src/load/todo-tab';
import lStorage from '../../src/data/local-storage';
import Todo from '../../src/classes/todo';

describe("Testing todoLoad module", () => {
    const content = document.createElement('div');
    content.id="content";
    document.getElementsByTagName("body")[0].appendChild(content);
    let tLoad;

    let testLoadBeforeForm = ()=>{
        tLoad.divTodo.id = 'div0';
        tLoad.divTodo.className = 'item-style margin-menu';
        tLoad.pMessage.classList.add('col-12');
        tLoad.formTodo.classList.add('col-4');
        tLoad.divTable.classList.add('col-8');
        tLoad.divTable.classList.add('table');
        tLoad.tableTodos.classList.add('col-12');
        tLoad.divTodo.appendChild(tLoad.pMessage);
        tLoad.divContent.appendChild(tLoad.divTodo);
    }

    let testLoadForm = ()=>{
        testLoadBeforeForm();
        tLoad.loadForm();
    }

    let testLoadSelectProject = ()=>{
        testLoadBeforeForm();
        tLoad.hForm.innerText = 'Add a new to-do';
        tLoad.formTodo.appendChild(tLoad.hForm);
        tLoad.loadSelectProject();
    }

    let testLoadInsideForm = ()=>{
        tLoad.hForm.innerText = 'Add a new to-do';
        tLoad.formTodo.appendChild(tLoad.hForm);
        tLoad.loadSelectProject();
        tLoad.labelName.innerText = 'Name';
        tLoad.inputName.type = 'text';
        tLoad.inputName.placeholder = 'Todo name';
        tLoad.labelDesc.innerText = 'Description';
        tLoad.textAreaDesc.placeholder = 'Todo description';
        tLoad.formTodo.appendChild(tLoad.labelName);
        tLoad.formTodo.appendChild(tLoad.inputName);
        tLoad.formTodo.appendChild(tLoad.labelDesc);
        tLoad.formTodo.appendChild(tLoad.textAreaDesc);
    }

    let testLoadSelectPriority = ()=>{
        testLoadBeforeForm();
        testLoadInsideForm();
        tLoad.loadSelectPriority();
    }

    let testLoadInputDuedate = ()=>{
        testLoadBeforeForm();
        testLoadInsideForm();
        tLoad.loadSelectPriority();
        tLoad.loadInputDuedate();
    }

    let testLoadInputSubmit = ()=>{
        testLoadBeforeForm();
        testLoadInsideForm();
        tLoad.loadSelectPriority();
        tLoad.loadInputDuedate();
        tLoad.loadInputSubmit();
    }

    let testLoadInputClear = ()=>{
        testLoadBeforeForm();
        testLoadInsideForm();
        tLoad.loadSelectPriority();
        tLoad.loadInputDuedate();
        tLoad.loadInputSubmit();
        tLoad.loadInputClear()
    }

    let testLoadTable = ()=>{
        testLoadBeforeForm();
        tLoad.loadForm();
        tLoad.loadTable();
    }

    let testLoadTableTitle = ()=>{
        testLoadBeforeForm();
        tLoad.loadForm();
        tLoad.loadTableTitle();
    }

    let testLoadTableHead = ()=>{
        testLoadBeforeForm();
        tLoad.loadForm();
        tLoad.loadTableTitle();
        tLoad.loadTableHead();
    }

    let testLoadTableBody = ()=>{
        testLoadBeforeForm();
        tLoad.loadForm();
        tLoad.loadTableTitle();
        tLoad.loadTableHead();
        tLoad.loadTableBody();
    }

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
        tLoad = new todoLoad();
      });
    test("Check that div0 id element is added with loadDiv() method", () => { 
        tLoad.loadDiv();
        expect(document.getElementById('div0')).not.toBeNull;
    });
    test("Check that a form element is added with loadDiv() method", () => { 
        tLoad.loadDiv();
        expect(document.getElementsByTagName('form')[0]).toBeDefined;
    });

    test("Check if an input is added to the form", () => { 
        testLoadForm();
        const form = document.getElementsByTagName("form")[0];
        expect(form.getElementsByTagName("input")[0]).not.toBeNull;
    });
    test("Check if label is added to the form", () => { 
        testLoadForm();
        const form = document.getElementsByTagName("form")[0];
        expect(form.getElementsByTagName("label")[0]).toBeDefined;
    });

    test("Check if options were added to project select element", () => { 
        testLoadSelectProject();
        expect(document.getElementById("projectOpt1")).not.toBeNull;
    });
    test("Check if onchange was assigned to the selectProject element", () => {
        testLoadSelectProject();
        expect(typeof tLoad.selectProject.onchange).toBe('function');
    });

    test("Check if loadSelectPriority method add innerText to labelPriority", () => { 
        testLoadSelectPriority();
        expect(tLoad.labelPriority.innerText).toBe('Priority: ');
    });
    test("Check if onchange was assigned to the selectProject element", () => {
        testLoadSelectPriority();
        expect(tLoad.selectPriority.value).not.toBeUndefined;
    });

    test("Check if loadSelectPriority method add innerText to labelPriority", () => { 
        testLoadInputDuedate();
        expect(tLoad.labelDuedate.innerText).toBe('due date: ');
    });
    test("Check if onchange was assigned to the selectProject element", () => {
        testLoadInputDuedate();
        expect(tLoad.labelDuedate.type).not.toBeUndefined;
    });

    test("Check if loadInputSubmit method add value to inputSubmit", () => { 
        testLoadInputSubmit();
        expect(tLoad.inputSubmit.value).toBe('save');
    });
    test("Check if type was assigned to the input Submit element", () => {
        testLoadInputSubmit();
        expect(tLoad.inputSubmit.type).not.toBeUndefined;
    });

    test("Check if loadInputClear method add value to inputClear", () => { 
        testLoadInputClear();
        expect(tLoad.inputClear.value).toBe('clear');
    });
    test("Check if type was assigned to the inputClear element", () => {
        testLoadInputClear();
        expect(tLoad.inputClear.type).not.toBeUndefined;
    });

    test("Check that loadTable add a table", () => { 
        testLoadTable();
        expect(document.getElementsByTagName("table")).not.toBeNull;
    });
    test("Check if type was assigned to the inputClear element", () => {
        testLoadTable();
        expect(tLoad.inputClear.type).not.toBeUndefined;
    });

    test("Check that loadTableTitle add innerText to the title of the table", () => { 
        testLoadTableTitle();
        expect(tLoad.hTable.innerText).not.toBe("");
    });
    test("Check if type was assigned to the inputClear element", () => {
        testLoadTableTitle();
        expect(tLoad.hTable.classList.contains("col-12")).toBeTruthy;
    });

    test("Check that loadTableHead add th to the thead", () => { 
        testLoadTableHead();
        expect(tLoad.tHead.getElementsByTagName("th")[0]).not.toBeNull;
    });
    test("Check that loadTableHeaf add tr to the thead", () => {
        testLoadTableHead();
        expect(tLoad.tHead.getElementsByTagName("tr")[0]).toBeDefined;
    });

    test("Check that loadTableHead add td to the tbody", () => { 
        testLoadTableBody();
        expect(tLoad.tBody.getElementsByTagName("td")[0]).not.toBeNull;
    });
    test("Check if type was assigned to the inputClear element", () => {
        testLoadTableBody();
        expect(tLoad.tBody.getElementsByTagName("td")[0]).toBeDefined;
    });
});