import pageLoad from './page-load';
import homeLoad from './todo-tab';
import projectLoad from './project-tab';

pageLoad().loadNav();
homeLoad().loadDivHome();
projectLoad().loadDivMenu();

let activeIndex = 0;

const updateContent = (index) => {
  if (index !== activeIndex) {
    const oldTab = document.getElementById(`tab${activeIndex}`);
    const oldDiv = document.getElementById(`div${activeIndex}`);
    const newTab = document.getElementById(`tab${index}`);
    const newDiv = document.getElementById(`div${index}`);
    oldTab.classList.remove('active');
    oldDiv.classList.add('d-none');
    newTab.classList.add('active');
    newDiv.classList.remove('d-none');
    activeIndex = index;
  }
};

const addTabClickEvent = () => {
  const tabs = document.getElementsByClassName('tab-event');
  [...tabs].forEach((tab, index) => {
    tab.onclick = function callUpdateContent() { updateContent(index); };
  });
};

addTabClickEvent();