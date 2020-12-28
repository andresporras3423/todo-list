import todoLoad from './todo-tab';
import projectLoad from './project-tab';

const pageLoad = () => ({
  divContent: document.getElementById('content'),
  nav: document.createElement('nav'),
  divNav: document.createElement('div'),
  divChildren: [function tLoad() { todoLoad().loadDiv(); },
    function pLoad() { projectLoad().loadDiv(); }],
  activeIndex: 0,
  loadNav() {
    this.nav.className = 'navbar navbar-expand-lg navbar-dark bg-dark';
    this.divNav.className = 'navbar-nav';
    ['To-dos', 'Projects'].forEach((item, index) => {
      const a = document.createElement('a');
      a.text = item;
      if (index === 0) a.className = 'tab-event nav-item nav-link cursor-pointer active';
      else a.className = 'tab-event nav-item nav-link cursor-pointer';
      a.id = `tab${index}`;
      this.divNav.appendChild(a);
    });
    this.nav.appendChild(this.divNav);
    this.divContent.appendChild(this.nav);
    this.loadContent();
  },
  loadContent() {
    this.divChildren[this.activeIndex]();
    this.addTabClickEvent();
  },
  updateContent(index) {
    if (index !== this.activeIndex) {
      const oldTab = document.getElementById(`tab${this.activeIndex}`);
      const newTab = document.getElementById(`tab${index}`);
      oldTab.classList.remove('active');
      newTab.classList.add('active');
      document.getElementById(`div${this.activeIndex}`).remove();
      this.divChildren[index]();
      this.activeIndex = index;
    }
  },
  addTabClickEvent() {
    const that = this;
    document.getElementById('tab0').onclick = function callUpdateContent() { that.updateContent(0); };
    document.getElementById('tab1').onclick = function callUpdateContent2() { that.updateContent(1); };
    console.log(`tab0 has attribute?: ${document.getElementById('tab0').getAttribute("onclick")}`);
  },
});
export default pageLoad;
