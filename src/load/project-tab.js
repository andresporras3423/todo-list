import projectLogic from '../logic/project-logic';

const projectLoad = () => ({
  divContent: document.getElementById('content'),
  divProject: document.createElement('div'),
  formProject: document.createElement('form'),
  tableProjects: document.createElement('table'),
  projectLogic: projectLogic(),
  labelName : document.createElement('label'),
  inputName : document.createElement('input'),
  labelDesc : document.createElement('label'),
  textAreaDesc : document.createElement('textarea'),
  inputSubmit : document.createElement("input"),
  inputClear : document.createElement("input"),
  tBody : document.createElement('tbody'),
  tHead : document.createElement('thead'),
  id: null,
  loadDivProject() {
    this.divProject.id = 'div1';
    this.divProject.className = 'item-style margin-menu d-none';
    this.formProject.classList.add("col-6");
    this.tableProjects.classList.add("col-6");
    this.divContent.appendChild(this.divProject);
    this.loadForm();
    this.loadTable();
  },
  loadForm(){
   const that = this;
   this.labelName.innerText="Name";
   this.inputName.type="text";
   this.inputName.placeholder="Project name";
   this.labelDesc.innerText="Description";
   this.textAreaDesc.placeholder="Project description";
   this.inputSubmit.type="submit";
   this.inputSubmit.value="save";
   this.inputClear.type="submit";
   this.inputClear.value="clear";
   this.inputSubmit.onclick=function(event){
     event.preventDefault();
     that.projectLogic.saveProject(that.id, that.inputName.value, that.textAreaDesc.value);
     that.cleanForm();
     that.loadTableBody();
   }
   this.inputClear.onclick=function(event){
    event.preventDefault();
    that.cleanForm();
   }
   this.formProject.appendChild(this.labelName);
   this.formProject.appendChild(this.inputName);
   this.formProject.appendChild(this.labelDesc);
   this.formProject.appendChild(this.textAreaDesc);
   this.formProject.appendChild(this.inputSubmit);
   this.formProject.appendChild(this.inputClear);
   this.divProject.appendChild(this.formProject);
   const formChildren = this.formProject.children;
   Object.values(formChildren).forEach((child)=> child.classList.add("col-12"));
  },
  loadTable(){
    this.loadTableHead();
    this.loadTableBody();
    this.divProject.appendChild(this.tableProjects);
  },
  loadTableHead(){
    const tr = document.createElement("tr");
    const titleHead = document.createElement('th');
    const watchHead = document.createElement('th');
    const editHead = document.createElement('th');
    const deleteHead = document.createElement('th');
    titleHead.innerText="Project";
    watchHead.innerText="Watch";
    editHead.innerText="Edit";
    deleteHead.innerText="Delete";
    tr.appendChild(titleHead);
    tr.appendChild(watchHead);
    tr.appendChild(editHead);
    tr.appendChild(deleteHead);
    this.tHead.appendChild(tr);
    this.tableProjects.appendChild(this.tHead);
  },
  loadTableBody(){
    this.tBody.innerHTML="";
    Object.values(this.projectLogic.list).forEach((project) => {
      let tr = document.createElement("tr");
      let tdProject = document.createElement('td');
      let tdWatch = document.createElement('td');
      let tdEdit = document.createElement('td');
      let tdDelete = document.createElement('td');
      let btWatch = document.createElement('button');
      let btEdit = document.createElement('button');
      let btDelete = document.createElement('button');
      btWatch.innerHTML="watch";
      btEdit.innerHTML="edit";
      btDelete.innerHTML="delete";
      let that = this;
      btWatch.onclick=function(){
        that.completeForm(that.projectLogic.list[project.id]);
        that.disabledForm(true);
      };
      btDelete.onclick=function(){
        that.projectLogic.deleteProject(project.id);
        that.loadTableBody();
        that.cleanForm();
      };
      btEdit.onclick=function(){
        that.completeForm(that.projectLogic.list[project.id]);
        that.disabledForm(false);
      };
      tdProject.innerText=project.name;
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
  cleanForm(){
    this.inputName.value="";
    this.textAreaDesc.value="";
    this.id=null;
    this.disabledForm(false);
  },
  completeForm(project){
    this.inputName.value=project.name;
    this.textAreaDesc.value=project.description;
    this.id=project.id;
  },
  disabledForm(status){
    this.inputName.disabled=status;
    this.textAreaDesc.disabled=status;
    this.inputSubmit.disabled=status;
  }
});

export default projectLoad;