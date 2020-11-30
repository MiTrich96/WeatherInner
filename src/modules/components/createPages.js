import createControlPage from './control';
import createTodayPage from './today';
import createThreePage from './three';
import createGeoPage from './geo';
import loadApplicationBackground from './loadImage';

function destroyPages() {
    let destroyPageBlock = document.getElementsByClassName('block');
    if (destroyPageBlock) {
        [...destroyPageBlock].map(page => {
            page.parentNode.removeChild(page);
        });
    }
}

function createPages() {
    loadApplicationBackground();
    destroyPages();
    
    createControlPage();
    createTodayPage();
    createThreePage();
    createGeoPage();
}

export default createPages;
