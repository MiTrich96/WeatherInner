import createControlPage from './control';
import createTodayPage from './today';
import createThreePage from './three';
import createGeoPage from './geo';

function destroyPages() {
    let destroyPageBlock = document.getElementsByClassName('block');
    if (destroyPageBlock) {
        [...destroyPageBlock].map(page => {
            page.parentNode.removeChild(page);
        });
    }
}

function createPages() {
    destroyPages();
    
    Promise.resolve()
    .then(createControlPage)
    .then(createTodayPage)
    .then(createThreePage)
    .then(createGeoPage);
}

export default createPages;
