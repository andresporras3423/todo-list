import todoLogic from '../logic/todo-logic';
import projectLogic from '../logic/project-logic';
import icons from '../data/icons';

const todoLoad = () => ({
  icons,
  divContent: document.getElementById('content'),
  divTodo: document.createElement('div'),
  pMessage: document.createElement('p'),
  divTable: document.createElement('div'),
  formTodo: document.createElement('form'),
  hForm: document.createElement('h4'),
  hTable: document.createElement('h3'),
  tableTodos: document.createElement('table'),
  todoLogic: todoLogic(),
  projectLogic: projectLogic(),
  labelName: document.createElement('label'),
  inputName: document.createElement('input'),
  labelDesc: document.createElement('label'),
  textAreaDesc: document.createElement('textarea'),
  labelSelect: document.createElement('label'),
  selectProject: document.createElement('select'),
  labelPriority: document.createElement('label'),
  selectPriority: document.createElement('select'),
  labelDuedate: document.createElement('label'),
  inputDuedate: document.createElement('input'),
  inputSubmit: document.createElement('input'),
  inputClear: document.createElement('input'),
  tBody: document.createElement('tbody'),
  tHead: document.createElement('thead'),
  id: null,
  loadDiv() {
    this.divTodo.id = 'div0';
    this.divTodo.className = 'item-style margin-menu';
    this.pMessage.classList.add('col-12');
    this.formTodo.classList.add('col-4');
    this.divTable.classList.add('col-8');
    this.divTable.classList.add('table');
    this.tableTodos.classList.add('col-12');
    this.divTodo.appendChild(this.pMessage);
    this.divContent.appendChild(this.divTodo);
    this.loadForm();
    this.loadTable();
  },
  loadForm() {
    this.hForm.innerText = 'Add a new to-do';
    this.formTodo.appendChild(this.hForm);
    this.loadSelectProject();
    this.labelName.innerText = 'Name';
    this.inputName.type = 'text';
    this.inputName.placeholder = 'Todo name';
    this.labelDesc.innerText = 'Description';
    this.textAreaDesc.placeholder = 'Todo description';
    this.formTodo.appendChild(this.labelName);
    this.formTodo.appendChild(this.inputName);
    this.formTodo.appendChild(this.labelDesc);
    this.formTodo.appendChild(this.textAreaDesc);
    this.loadSelectPriority();
    this.loadInputDuedate();
    this.loadInputSubmit();
    this.loadInputClear();
    this.divTodo.appendChild(this.formTodo);
    const formChildren = this.formTodo.children;
    Object.values(formChildren).forEach((child) => child.classList.add('col-12'));
    const formInputs = this.formTodo.getElementsByTagName('input');
    Object.values(formInputs).forEach((input) => {
      if (input.type === 'submit') {
        input.classList.add('btn');
        input.classList.add('btn-primary');
      } else input.classList.add('form-control');
    });
  },
  loadSelectProject() {
    const that = this;
    this.labelSelect.innerText = 'Current Project:';
    Object.values(this.projectLogic.list).forEach((project) => {
      const opt = document.createElement('option');
      opt.id = `projectOpt${project.id}`;
      opt.value = project.id;
      opt.innerHTML = project.name;
      that.selectProject.appendChild(opt);
    });
    this.selectProject.onchange = function sProject() {
      that.hTable.innerText = document.getElementById(`projectOpt${that.selectProject.value}`).innerText;
      that.loadTableBodyContent();
    };
    this.formTodo.appendChild(this.labelSelect);
    this.formTodo.appendChild(this.selectProject);
  },
  loadSelectPriority() {
    const that = this;
    this.labelPriority.innerText = 'Priority: ';
    ['low', 'medium', 'high'].forEach((prior, index) => {
      const opt = document.createElement('option');
      opt.value = index;
      opt.innerHTML = prior;
      that.selectPriority.appendChild(opt);
    });
    this.selectPriority.value = -1;
    this.formTodo.appendChild(this.labelPriority);
    this.formTodo.appendChild(this.selectPriority);
  },
  loadInputDuedate() {
    this.labelDuedate.innerText = 'due date: ';
    this.inputDuedate.type = 'date';
    this.inputDuedate.valueAsDate = new Date();
    this.formTodo.appendChild(this.labelDuedate);
    this.formTodo.appendChild(this.inputDuedate);
  },
  loadInputSubmit() {
    const that = this;
    this.inputSubmit.type = 'submit';
    this.inputSubmit.value = 'save';
    this.inputSubmit.onclick = function inputSubmitClick(event) {
      event.preventDefault();
      const validMessage = that.todoLogic.validateTodo(that.id,
        that.inputName.value,
        that.textAreaDesc.value,
        that.selectPriority.value,
        that.selectProject.value);
      if (validMessage === '') {
        that.pMessage.innerText = that.todoLogic.saveTodo(that.id,
          that.inputName.value,
          that.textAreaDesc.value,
          Number(that.selectProject.value),
          that.selectPriority.value,
          that.inputDuedate.valueAsDate);
        that.cleanForm();
        that.loadTableBodyContent();
      } else {
        that.pMessage.innerText = validMessage;
      }
    };
    this.formTodo.appendChild(this.inputSubmit);
  },
  loadInputClear() {
    const that = this;
    this.inputClear.type = 'submit';
    this.inputClear.value = 'clear';
    this.inputClear.onclick = function inputClearClick(event) {
      event.preventDefault();
      that.cleanForm();
    };
    this.formTodo.appendChild(this.inputClear);
  },
  loadTable() {
    this.loadTableTitle();
    this.loadTableHead();
    this.loadTableBody();
    this.divTable.appendChild(this.tableTodos);
    this.divTodo.appendChild(this.divTable);
  },
  loadTableTitle() {
    this.hTable.innerText = document.getElementById(`projectOpt${this.selectProject.value}`).innerText;
    this.hTable.classList.add('col-12');
    this.divTable.appendChild(this.hTable);
  },
  loadTableHead() {
    const tr = document.createElement('tr');
    const titleHead = document.createElement('th');
    const watchHead = document.createElement('th');
    const editHead = document.createElement('th');
    const deleteHead = document.createElement('th');
    titleHead.innerText = 'To do';
    watchHead.innerText = 'Watch';
    editHead.innerText = 'Edit';
    deleteHead.innerText = 'Delete';
    tr.appendChild(titleHead);
    tr.appendChild(watchHead);
    tr.appendChild(editHead);
    tr.appendChild(deleteHead);
    this.tHead.classList.add('thead-dark');
    this.tHead.appendChild(tr);
    this.tableTodos.appendChild(this.tHead);
  },
  loadTableBody() {
    this.loadTableBodyContent();
    this.tableTodos.appendChild(this.tBody);
  },
  loadTableBodyContent() {
    this.tBody.innerHTML = '';
    Object.values(this.todoLogic.list).forEach((todo) => {
      if (todo.idProject === Number(this.selectProject.value)) {
        const tr = document.createElement('tr');
        const tdTodo = document.createElement('td');
        const tdWatch = document.createElement('td');
        const tdEdit = document.createElement('td');
        const tdDelete = document.createElement('td');
        const btWatch = document.createElement('button');
        const btEdit = document.createElement('button');
        const btDelete = document.createElement('button');
        btWatch.innerHTML = this.icons.len;
        btEdit.innerHTML = this.icons.edit;
        btDelete.innerHTML = this.icons.delete;
        const that = this;
        btWatch.onclick = function buttonWatchClick() {
          that.completeForm(that.todoLogic.list[todo.id]);
          that.disabledForm(true);
        };
        btDelete.onclick = function buttonDeleteClick() {
          that.todoLogic.deleteTodo(todo.id);
          that.loadTableBodyContent();
          that.cleanForm();
        };
        btEdit.onclick = function buttonEditClick() {
          that.completeForm(that.todoLogic.list[todo.id]);
          that.disabledForm(false);
        };
        tdTodo.innerText = todo.name;
        tdWatch.appendChild(btWatch);
        tdEdit.appendChild(btEdit);
        tdDelete.appendChild(btDelete);
        tr.appendChild(tdTodo);
        tr.appendChild(tdWatch);
        tr.appendChild(tdEdit);
        tr.appendChild(tdDelete);
        this.tBody.appendChild(tr);
      }
    });
  },
  cleanForm() {
    this.inputName.value = '';
    this.textAreaDesc.value = '';
    this.id = null;
    this.selectPriority.value = -1;
    this.inputDuedate.valueAsDate = new Date();
    this.disabledForm(false);
  },
  completeForm(todo) {
    this.inputName.value = todo.name;
    this.textAreaDesc.value = todo.description;
    this.selectProject.value = todo.idProject;
    this.id = todo.id;
    this.selectPriority.value = todo.priority;
    this.inputDuedate.valueAsDate = new Date(todo.duedate);
  },
  disabledForm(status) {
    this.inputName.disabled = status;
    this.textAreaDesc.disabled = status;
    this.selectProject.disabled = status;
    this.selectPriority.disabled = status;
    this.inputDuedate.disabled = status;
    this.inputSubmit.disabled = status;
  },
});

export default todoLoad;