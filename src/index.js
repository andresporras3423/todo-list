import 'bootstrap';
import lStorage from './data/local-storage';
import pageLoad from './load/page-load';
lStorage.loadData();
pageLoad().loadNav();