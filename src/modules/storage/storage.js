function createStorage(state, value) {
    if (localStorage.getItem(state) === null) 
        localStorage.setItem(state, value);
}

function saveToStrorage(state, value) {
    localStorage.setItem(state, value);
}

function loadFromStorage(state) {
    return localStorage.getItem(state);
}

const storage = {
    createStorage: createStorage,
    saveToStorage: saveToStrorage,
    loadFromStorage : loadFromStorage
}

export default storage;