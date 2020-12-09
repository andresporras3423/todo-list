import 'bootstrap';
import pageLoad from './load/page-load';
// import todoLoad from './load/todo-tab';
// import projectLoad from './load/project-tab';

pageLoad().loadNav();
// todoLoad().loadDivTodo();
// projectLoad().loadDivProject();
// const divs = [function(){ todoLoad().loadDivTodo()}, function(){projectLoad().loadDivProject()}]
// let activeIndex = 0;
// divs[activeIndex]();

// let updateContent = (index) => {
//   if (index !== activeIndex) {
//     const oldTab = document.getElementById(`tab${activeIndex}`);
//     const newTab = document.getElementById(`tab${index}`);
//     oldTab.classList.remove('active');
//     newTab.classList.add('active');
//     document.getElementById(`div${activeIndex}`).remove();
//     divs[index]();
//     activeIndex = index;
//   }
// }

// // const updateContent = (index) => {
// //   if (index !== activeIndex) {
// //     const oldTab = document.getElementById(`tab${activeIndex}`);
// //     const oldDiv = document.getElementById(`div${activeIndex}`);
// //     const newTab = document.getElementById(`tab${index}`);
// //     const newDiv = document.getElementById(`div${index}`);
// //     oldTab.classList.remove('active');
// //     oldDiv.classList.add('d-none');
// //     newTab.classList.add('active');
// //     newDiv.classList.remove('d-none');
// //     activeIndex = index;
// //   }
// // };

// const addTabClickEvent = () => {
//   const tabs = document.getElementsByClassName('tab-event');
//   Object.values(tabs).forEach((tab, index) => {
//     tab.onclick = function callUpdateContent() { updateContent(index) };
//   });
// };
// addTabClickEvent();