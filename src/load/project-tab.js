import projects from '../data/projects';

const projectLoad = () => ({
  divContent: document.getElementById('content'),
  divProject: document.createElement('div'),
  formProject: document.createElement('form'),
  tableProjects: document.createElement('table'),
  listProjects: projects().list,
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
   const labelName = document.createElement('label');
   const inputName = document.createElement('input');
   const labelDesc = document.createElement('label');
   const textAreaDesc = document.createElement('textarea');
   const inputSubmit = document.createElement("input");
   labelName.innerText="Name";
   inputName.type="text";
   inputName.placeholder="Project name";
   labelDesc.innerText="Description";
   textAreaDesc.placeholder="Project description";
   inputSubmit.type="submit";
   inputSubmit.value="submit";
   this.formProject.appendChild(labelName);
   this.formProject.appendChild(inputName);
   this.formProject.appendChild(labelDesc);
   this.formProject.appendChild(textAreaDesc);
   this.formProject.appendChild(inputSubmit);
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
    const tHead = document.createElement('thead');
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
    tHead.appendChild(tr);
    this.tableProjects.appendChild(tHead);
  },
  loadTableBody(){
    const tBody = document.createElement('tbody');
    this.listProjects.forEach((project) => {
      let tr = document.createElement("tr");
      let tdProject = document.createElement('td');
      let tdWatch = document.createElement('td');
      let tdEdit = document.createElement('td');
      let tdDelete = document.createElement('td');
      tdProject.innerText=project.name;
      tr.appendChild(tdProject);
      tr.appendChild(tdWatch);
      tr.appendChild(tdEdit);
      tr.appendChild(tdDelete);
      tBody.appendChild(tr);
    });
    this.tableProjects.appendChild(tBody);
  }
});

export default projectLoad;