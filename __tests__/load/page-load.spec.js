import 'bootstrap';
import pageLoad from '../../src/load/page-load';
import lStorage from '../../src/data/local-storage';

describe("Testing pageLoad module", () => {
    beforeEach(() => {
        localStorage.clear();
        lStorage.loadData();
      });
    test("Check data is added to localStorage", () => {
        const content = document.createElement('div');
        content.id="content";
        document.getElementsByTagName("body")[0].appendChild(content);
        pageLoad().loadNav();
        const element = document.createElement('div');
        expect(element).not.toBeNull();
    });
});
