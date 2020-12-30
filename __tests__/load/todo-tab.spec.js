/* eslint-disable no-unused-expressions */
import 'bootstrap';
import pageLoad from '../../src/load/page-load';
import todoLoad from '../../src/load/todo-tab';
import lStorage from '../../src/data/local-storage';
import Todo from '../../src/classes/todo';

describe('Testing todoLoad module', () => {
  const content = document.createElement('div');
  content.id = 'content';
  document.getElementsByTagName('body')[0].appendChild(content);
  let tLoad;

  const testLoadBeforeForm = () => {
    tLoad.divTodo.id = 'div0';
    tLoad.divTodo.className = 'item-style margin-menu';
    tLoad.pMessage.classList.add('col-12');
    tLoad.formTodo.classList.add('col-4');
    tLoad.divTable.classList.add('col-8');
    tLoad.divTable.classList.add('table');
    tLoad.tableTodos.classList.add('col-12');
    tLoad.divTodo.appendChild(tLoad.pMessage);
    tLoad.divContent.appendChild(tLoad.divTodo);
  };

  const testLoadForm = () => {
    testLoadBeforeForm();
    tLoad.loadForm();
  };

  const testLoadSelectProject = () => {
    testLoadBeforeForm();
    tLoad.hForm.innerText = 'Add a new to-do';
    tLoad.formTodo.appendChild(tLoad.hForm);
    tLoad.loadSelectProject();
  };

  const testLoadInsideForm = () => {
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
  };

  const testLoadSelectPriority = () => {
    testLoadBeforeForm();
    testLoadInsideForm();
    tLoad.loadSelectPriority();
  };

  const testLoadInputDuedate = () => {
    testLoadBeforeForm();
    testLoadInsideForm();
    tLoad.loadSelectPriority();
    tLoad.loadInputDuedate();
  };

  const testLoadInputSubmit = () => {
    testLoadBeforeForm();
    testLoadInsideForm();
    tLoad.loadSelectPriority();
    tLoad.loadInputDuedate();
    tLoad.loadInputSubmit();
  };

  const testLoadInputClear = () => {
    testLoadBeforeForm();
    testLoadInsideForm();
    tLoad.loadSelectPriority();
    tLoad.loadInputDuedate();
    tLoad.loadInputSubmit();
    tLoad.loadInputClear();
  };

  const testLoadTable = () => {
    testLoadBeforeForm();
    tLoad.loadForm();
    tLoad.loadTable();
  };

  const testLoadTableTitle = () => {
    testLoadBeforeForm();
    tLoad.loadForm();
    tLoad.loadTableTitle();
  };

  const testLoadTableHead = () => {
    testLoadBeforeForm();
    tLoad.loadForm();
    tLoad.loadTableTitle();
    tLoad.loadTableHead();
  };

  const testLoadTableBody = () => {
    testLoadBeforeForm();
    tLoad.loadForm();
    tLoad.loadTableTitle();
    tLoad.loadTableHead();
    tLoad.loadTableBody();
  };

  const testLoadTableBodyContent = () => {
    testLoadBeforeForm();
    tLoad.loadForm();
    tLoad.loadTableTitle();
    tLoad.loadTableHead();
    tLoad.loadTableBodyContent();
  };

  beforeEach(() => {
    localStorage.clear();
    lStorage.loadData();
    pageLoad().loadNav();
    const pLoad = pageLoad();
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
    tLoad = todoLoad();
  });
  test('Check that div0 id element is added with loadDiv() method', () => {
    tLoad.loadDiv();
    expect(document.getElementById('div0')).not.toBeNull;
  });
  test('Check that a form element is added with loadDiv() method', () => {
    tLoad.loadDiv();
    expect(document.getElementsByTagName('form')[0]).toBeDefined;
  });

  test('Check if an input is added to the form', () => {
    testLoadForm();
    const form = document.getElementsByTagName('form')[0];
    expect(form.getElementsByTagName('input')[0]).not.toBeNull;
  });
  test('Check if label is added to the form', () => {
    testLoadForm();
    const form = document.getElementsByTagName('form')[0];
    expect(form.getElementsByTagName('label')[0]).toBeDefined;
  });

  test('Check if options were added to project select element', () => {
    testLoadSelectProject();
    expect(document.getElementById('projectOpt1')).not.toBeNull;
  });
  test('Check if onchange was assigned to the selectProject element', () => {
    testLoadSelectProject();
    expect(typeof tLoad.selectProject.onchange).toBe('function');
  });

  test('Check if loadSelectPriority method add innerText to labelPriority', () => {
    testLoadSelectPriority();
    expect(tLoad.labelPriority.innerText).toBe('Priority: ');
  });
  test('Check if onchange was assigned to the selectProject element', () => {
    testLoadSelectPriority();
    expect(tLoad.selectPriority.value).not.toBeUndefined;
  });

  test('Check if loadSelectPriority method add innerText to labelPriority', () => {
    testLoadInputDuedate();
    expect(tLoad.labelDuedate.innerText).toBe('due date: ');
  });
  test('Check if onchange was assigned to the selectProject element', () => {
    testLoadInputDuedate();
    expect(tLoad.labelDuedate.type).not.toBeUndefined;
  });

  test('Check if loadInputSubmit method add value to inputSubmit', () => {
    testLoadInputSubmit();
    expect(tLoad.inputSubmit.value).toBe('save');
  });
  test('Check if type was assigned to the input Submit element', () => {
    testLoadInputSubmit();
    expect(tLoad.inputSubmit.type).not.toBeUndefined;
  });

  test('Check if loadInputClear method add value to inputClear', () => {
    testLoadInputClear();
    expect(tLoad.inputClear.value).toBe('clear');
  });
  test('Check if type was assigned to the inputClear element', () => {
    testLoadInputClear();
    expect(tLoad.inputClear.type).not.toBeUndefined;
  });

  test('Check that loadTable add a table', () => {
    testLoadTable();
    expect(document.getElementsByTagName('table')).not.toBeNull;
  });
  test('Check if type was assigned to the inputClear element', () => {
    testLoadTable();
    expect(tLoad.inputClear.type).not.toBeUndefined;
  });

  test('Check that loadTableTitle add innerText to the title of the table', () => {
    testLoadTableTitle();
    expect(tLoad.hTable.innerText).not.toBe('');
  });
  test('Check if type was assigned to the inputClear element', () => {
    testLoadTableTitle();
    expect(tLoad.hTable.classList.contains('col-12')).toBeTruthy;
  });

  test('Check that loadTableHead add th to the thead', () => {
    testLoadTableHead();
    expect(tLoad.tHead.getElementsByTagName('th')[0]).not.toBeNull;
  });
  test('Check that loadTableHeaf add tr to the thead', () => {
    testLoadTableHead();
    expect(tLoad.tHead.getElementsByTagName('tr')[0]).toBeDefined;
  });

  test('Check that loadTableHead add td to the tbody', () => {
    testLoadTableBody();
    expect(tLoad.tBody.getElementsByTagName('td')[0]).not.toBeNull;
  });
  test('Check if type was assigned to the inputClear element', () => {
    testLoadTableBody();
    expect(tLoad.tBody.getElementsByTagName('td')[0]).toBeDefined;
  });

  test('Check if first button in tbody element has onclick event associated after loadTableBodyContent()', () => {
    testLoadTableBodyContent();
    expect(typeof tLoad.tBody.getElementsByTagName('button')[0].onclick).toBe('function');
  });
  test('Check if second button in tbody element has onclick event associated after loadTableBodyContent()', () => {
    testLoadTableBodyContent();
    expect(typeof tLoad.tBody.getElementsByTagName('button')[1].onclick).not.toBe('object');
  });

  test('Check that cleanForm() method remove value of inputName', () => {
    tLoad.loadDiv();
    tLoad.inputName.value = 'oscar';
    tLoad.cleanForm();
    expect(tLoad.inputName.value).toBe('');
  });
  test('Check that cleanForm() method convert id to null', () => {
    tLoad.loadDiv();
    tLoad.id = 10;
    tLoad.cleanForm();
    expect(tLoad.id).toBeNull;
  });

  test('Check that completeForm() method assign a value to inputName', () => {
    tLoad.loadDiv();
    tLoad.completeForm(new Todo(10, 'name', 'description', 2, 2, '11/11/2011'));
    expect(tLoad.inputName.value).toBe('name');
  });
  test('Check that completeForm() method assign a value to id', () => {
    tLoad.loadDiv();
    tLoad.completeForm(new Todo(12, 'name2', 'description2', 2, 2, '11/11/2011'));
    expect(tLoad.id).toBe(12);
  });

  test('Check that disabledForm() assigns true to inputName.disabled if receives true as parameter', () => {
    tLoad.loadDiv();
    tLoad.disabledForm(true);
    expect(tLoad.inputName.disabled).toBeTruthy;
  });
  test('Check that disabledForm() assigns false to textAreaDesc.disabled if receives false as parameter', () => {
    tLoad.loadDiv();
    tLoad.disabledForm(false);
    expect(tLoad.textAreaDesc.disabled).toBeFalsy;
  });
});