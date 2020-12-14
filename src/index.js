import 'bootstrap';
import lStorage from './data/local-storage';
import pageLoad from './load/page-load';
//localStorage.clear();
lStorage.loadData();
pageLoad().loadNav();