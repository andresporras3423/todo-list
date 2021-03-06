import projectLogic from '../logic/project-logic';
import icons from '../data/icons';

const projectLoad = () => ({
  icons,
  divContent: document.getElementById('content'),
  divProject: document.createElement('div'),
  pMessage: document.createElement('p'),
  formProject: document.createElement('form'),
  hForm: document.createElement('h4'),
  tableProjects: document.createElement('table'),
  projectLogic: projectLogic(),
  labelName: document.createElement('label'),
  inputName: document.createElement('input'),
  labelDesc: document.createElement('label'),
  textAreaDesc: document.createElement('textarea'),
  inputSubmit: document.createElement('input'),
  inputClear: document.createElement('input'),
  tBody: document.createElement('tbody'),
  tHead: document.createElement('thead'),
  id: null,
  loadDiv() {
    this.divProject.id = 'div1';
    this.divProject.className = 'item-style margin-menu';
    this.formProject.classList.add('col-4');
    this.tableProjects.classList.add('col-8');
    this.tableProjects.classList.add('table');
    this.pMessage.classList.add('col-12');
    this.divProject.appendChild(this.pMessage);
    this.divContent.appendChild(this.divProject);
    this.loadForm();
    this.loadTable();
  },
  loadForm() {
    const that = this;
    this.hForm.innerText = 'Add a new Project';
    this.formProject.appendChild(this.hForm);
    this.labelName.innerText = 'Name';
    this.inputName.type = 'text';
    this.inputName.placeholder = 'Project name';
    this.labelDesc.innerText = 'Description';
    this.textAreaDesc.placeholder = 'Project description';
    this.inputSubmit.type = 'submit';
    this.inputSubmit.value = 'save';
    this.inputClear.type = 'submit';
    this.inputClear.value = 'clear';
    this.inputSubmit.onclick = function inputSubmitClick(event) {
      event.preventDefault();
      const validMessage = that.projectLogic.validateProject(that.id,
        that.inputName.value,
        that.textAreaDesc.value);
      if (validMessage === '') {
        that.pMessage.innerText = that.projectLogic.saveProject(that.id,
          that.inputName.value,
          that.textAreaDesc.value);
        that.cleanForm();
        that.loadTableBody();
      } else that.pMessage.innerText = validMessage;
    };
    this.inputClear.onclick = function inputClearClick(event) {
      event.preventDefault();
      that.cleanForm();
    };
    this.formProject.appendChild(this.labelName);
    this.formProject.appendChild(this.inputName);
    this.formProject.appendChild(this.labelDesc);
    this.formProject.appendChild(this.textAreaDesc);
    this.formProject.appendChild(this.inputSubmit);
    this.formProject.appendChild(this.inputClear);
    this.divProject.appendChild(this.formProject);
    const formChildren = this.formProject.children;
    Object.values(formChildren).forEach((child) => child.classList.add('col-12'));
    const formInputs = this.formProject.getElementsByTagName('input');
    Object.values(formInputs).forEach((input) => {
      if (input.type === 'submit') {
        input.classList.add('btn');
        input.classList.add('btn-primary');
      } else input.classList.add('form-control');
    });
  },
  loadTable() {
    this.loadTableHead();
    this.loadTableBody();
    this.divProject.appendChild(this.tableProjects);
  },
  loadTableHead() {
    const tr = document.createElement('tr');
    const titleHead = document.createElement('th');
    const watchHead = document.createElement('th');
    const editHead = document.createElement('th');
    const deleteHead = document.createElement('th');
    titleHead.innerText = 'Project';
    watchHead.innerText = 'Watch';
    editHead.innerText = 'Edit';
    deleteHead.innerText = 'Delete';
    tr.appendChild(titleHead);
    tr.appendChild(watchHead);
    tr.appendChild(editHead);
    tr.appendChild(deleteHead);
    this.tHead.classList.add('thead-dark');
    this.tHead.appendChild(tr);
    this.tableProjects.appendChild(this.tHead);
  },
  loadTableBody() {
    this.tBody.innerHTML = '';
    Object.values(this.projectLogic.list).forEach((project) => {
      const tr = document.createElement('tr');
      const tdProject = document.createElement('td');
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
        that.completeForm(that.projectLogic.list[project.id]);
        that.disabledForm(true);
      };
      btDelete.onclick = function buttonDeleteClick() {
        that.projectLogic.deleteProject(project.id);
        that.loadTableBody();
        that.cleanForm();
      };
      btEdit.onclick = function buttonEditClick() {
        that.completeForm(that.projectLogic.list[project.id]);
        that.disabledForm(false);
      };
      tdProject.innerText = project.name;
      tdWatch.appendChild(btWatch);
      tdEdit.appendChild(btEdit);
      tdDelete.appendChild(btDelete);
      tr.appendChild(tdProject);
      tr.appendChild(tdWatch);
      tr.appendChild(tdEdit);
      tr.appendChild(tdDelete);
      this.tBody.appendChild(tr);
    });
    this.tableProjects.appendChild(this.tBody);
  },
  cleanForm() {
    this.inputName.value = '';
    this.textAreaDesc.value = '';
    this.id = null;
    this.disabledForm(false);
  },
  completeForm(project) {
    this.inputName.value = project.name;
    this.textAreaDesc.value = project.description;
    this.id = project.id;
  },
  disabledForm(status) {
    this.inputName.disabled = status;
    this.textAreaDesc.disabled = status;
    this.inputSubmit.disabled = status;
  },
});

export default projectLoad;