import storage from './../storage/storage';

function changeDegree(current) {
    let degree = storage.loadFromStorage('degree');
    if (degree === 'ce') {
        return Math.round(current);
    }
    else {
        return Math.round((9 / 5) * current + 32);
    }
}

export default changeDegree;