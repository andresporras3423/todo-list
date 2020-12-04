import todoLogic from '../logic/todo-logic';

const todoLoad = () => ({
  divContent: document.getElementById('content'),
  divTodo: document.createElement('div'),
  formTodo: document.createElement('form'),
  tableTodos: document.createElement('table'),
  todoLogic: todoLogic(),
  labelName : document.createElement('label'),
  inputName : document.createElement('input'),
  labelDesc : document.createElement('label'),
  textAreaDesc : document.createElement('textarea'),
  inputSubmit : document.createElement("input"),
  inputClear : document.createElement("input"),
  tBody : document.createElement('tbody'),
  tHead : document.createElement('thead'),
  id: null,
  loadDivTodo() {
    this.divTodo.id = 'div0';
    this.divTodo.className = 'item-style margin-menu';
    this.formTodo.classList.add("col-6");
    this.tableTodos.classList.add("col-6");
    this.divContent.appendChild(this.divTodo);
    this.loadForm();
    this.loadTable();
  },
  loadForm(){
   const that = this;
   this.labelName.innerText="Name";
   this.inputName.type="text";
   this.inputName.placeholder="Todo name";
   this.labelDesc.innerText="Description";
   this.textAreaDesc.placeholder="Todo description";
   this.inputSubmit.type="submit";
   this.inputSubmit.value="save";
   this.inputClear.type="submit";
   this.inputClear.value="clear";
   this.inputSubmit.onclick=function(event){
     event.preventDefault();
     that.todoLogic.saveProject(that.id, that.inputName.value, that.textAreaDesc.value);
     that.cleanForm();
     that.loadTableBody();
   }
   this.inputClear.onclick=function(event){
    event.preventDefault();
    that.cleanForm();
   }
   this.formTodo.appendChild(this.labelName);
   this.formTodo.appendChild(this.inputName);
   this.formTodo.appendChild(this.labelDesc);
   this.formTodo.appendChild(this.textAreaDesc);
   this.formTodo.appendChild(this.inputSubmit);
   this.formTodo.appendChild(this.inputClear);
   this.divTodo.appendChild(this.formTodo);
   const formChildren = this.formTodo.children;
   Object.values(formChildren).forEach((child)=> child.classList.add("col-12"));
  },
  loadTable(){
    this.loadTableHead();
    this.loadTableBody();
    this.divTodo.appendChild(this.tableTodos);
  },
  loadTableHead(){
    const tr = document.createElement("tr");
    const titleHead = document.createElement('th');
    const watchHead = document.createElement('th');
    const editHead = document.createElement('th');
    const deleteHead = document.createElement('th');
    titleHead.innerText="To do";
    watchHead.innerText="Watch";
    editHead.innerText="Edit";
    deleteHead.innerText="Delete";
    tr.appendChild(titleHead);
    tr.appendChild(watchHead);
    tr.appendChild(editHead);
    tr.appendChild(deleteHead);
    this.tHead.appendChild(tr);
    this.tableTodos.appendChild(this.tHead);
  },
  loadTableBody(){
    this.tBody.innerHTML="";
    Object.values(this.todoLogic.list).forEach((todo) => {
      let tr = document.createElement("tr");
      let tdTodo = document.createElement('td');
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
        that.completeForm(that.todoLogic.list[todo.id]);
        that.disabledForm(true);
      };
      btDelete.onclick=function(){
        that.todoLogic.deleteTodo(todo.id);
        that.loadTableBody();
        that.cleanForm();
      };
      btEdit.onclick=function(){
        that.completeForm(that.todoLogic.list[todo.id]);
        that.disabledForm(false);
      };
      tdTodo.innerText=todo.name;
      tdWatch.appendChild(btWatch);
      tdEdit.appendChild(btEdit);
      tdDelete.appendChild(btDelete);
      tr.appendChild(tdTodo);
      tr.appendChild(tdWatch);
      tr.appendChild(tdEdit);
      tr.appendChild(tdDelete);
      this.tBody.appendChild(tr);
    });
    this.tableTodos.appendChild(this.tBody);
  },
  cleanForm(){
    this.inputName.value="";
    this.textAreaDesc.value="";
    this.id=null;
    this.disabledForm(false);
  },
  completeForm(todo){
    this.inputName.value=todo.name;
    this.textAreaDesc.value=todo.description;
    this.id=todo.id;
  },
  disabledForm(status){
    this.inputName.disabled=status;
    this.textAreaDesc.disabled=status;
    this.inputSubmit.disabled=status;
  }
});

export default todoLoad;