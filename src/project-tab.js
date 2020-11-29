import Project from './project';

const projectLoad = () => ({
  divContent: document.getElementById('content'),
  divProject: document.createElement('div'),
  formProject: document.createElement('form'),
  tableProjects: document.createElement('table'),
  listProjects: [
    Project(1, 'todo project', 'this is a todo web project'),
    Project(2, 'restaurant project', 'this is a restaurant web project'),
    Project(3, 'library project', 'this is a library web project')
],
  loadDivProject() {
    this.divMenu.id = 'div1';
    this.divMenu.className = 'item-style margin-menu d-none';
    this.divContent.appendChild(this.divMenu);
    this.loadItems();
  },
  loadForm(){
   const labelName = document.createElement('label');
   const inputName = document.createElement('input');
   const labelDesc = document.createElement('label');
   const textAreaDesc = document.createElement('textarea');
   const inputSubmit = document.createElement("input");
   labelName.innerText="Name";
   inputName.type=text;
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
  },
  loadTable(){
    this.loadTableHead();
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
    const tr = document.createElement("tr");
    this.listProjects.forEach((project) => {
      const tdProject = document.createElement('td');
      const tdWatch = document.createElement('td');
      const tdEdit = document.createElement('td');
      const tdDelete = document.createElement('td');
      tdProject.innerText=project.title;
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