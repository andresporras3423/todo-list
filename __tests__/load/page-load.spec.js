import 'bootstrap';
import pageLoad from '../../src/load/page-load';
import lStorage from '../../src/data/local-storage';

describe("Testing pageLoad module", () => {
    const content = document.createElement('div');
    content.id="content";
    document.getElementsByTagName("body")[0].appendChild(content);
    let pLoad;

    let testLoadContent = ()=>{
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
        pLoad.loadContent();
    }

    let testUpdateContent = (numbers)=>{
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
        pLoad.divChildren[pLoad.activeIndex]();
        document.getElementById('tab0').onclick = function callUpdateContent() { pLoad.updateContent(0); };
        document.getElementById('tab1').onclick = function callUpdateContent2() { pLoad.updateContent(1); };
        pLoad.updateContent(numbers);
    }

    let testAddTabClickEvent = (number)=>{
        testUpdateContent(number);
        pLoad.addTabClickEvent();
    }

    beforeEach(() => {
        localStorage.clear();
        lStorage.loadData();
        pLoad = new pageLoad();
      });
    test("Check that two navbars element is added after calling loadNav()", () => {
        pLoad.loadNav();
        const element = document.getElementsByClassName('navbar-nav');
        expect(element[1]).not.toBeNull();
    });
    test("Check that second navbar element is not active after calling loadNav()", () => {
        pLoad.loadNav();
        const element = document.getElementsByClassName('navbar-nav');
        expect(element[1].classList.contains('active')).toBe(false);
    });

    test("Check that two select elements are added after calling loadContent() ", () => {
        testLoadContent();
        expect(document.getElementsByTagName("select")[1]).not.toBeNull();
    });
    test("Check that first select element has an object with value '1' after calling loadContent()", () => {
        testLoadContent();
        expect(document.getElementById("projectOpt1").value).toBe("1");
    });

    test("Check that updateContent() doesn't update activeIndex when it clicks on the active navbar", () => {
        testUpdateContent(0);
        expect(pLoad.activeIndex).not.toBe(1);
    });
    test("Check that first select element has an object with value '1' after calling loadContent()", () => {
        testUpdateContent(1);
        expect(pLoad.activeIndex).toBe(1);
    });

    test("Check that addTabClickEvent() add the event to the tabs and the event doesn't update the active tab", () => {
        testAddTabClickEvent(0);
        expect(pLoad.activeIndex).not.toBe(1);
    });
    test("Check that addTabClickEvent() add the event to the tabs and the event modify the active tab", () => {
        testAddTabClickEvent(1);
        expect(pLoad.activeIndex).toBe(1);
    });
});
