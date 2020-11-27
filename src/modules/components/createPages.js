import animateButton from './animateButton';
import createControlPage from './control';
import createTodayPage from './today';
import createThreePage from './three';
import createGeoPage from './geo';
import loadApplicationBackground from './loadImage';

let isLoaded = false;

function destroyLastPage() {
    const destroyPageBlock = document.querySelector('.block');
    destroyPageBlock.parentNode.removeChild(destroyPageBlock);
}

function createPages(event) {
    loadApplicationBackground();
    const controlButton = document.querySelector('.control');
    let target = event === undefined ? controlButton : event.target;
    animateButton(target);

    if (!isLoaded) {
        isLoaded = !isLoaded;
    }
    else {
        destroyLastPage();
    }

    const pageClasses = [...target.classList];
    pageClasses.map(page => {
        switch (page) {
            case "control":
                createControlPage();
               break;
            case "today":
                createTodayPage();
                break;
            case "three":
                createThreePage();
                break;
            case "geo_button":
                createGeoPage();
                break;
        }
    });
}

export default createPages;
