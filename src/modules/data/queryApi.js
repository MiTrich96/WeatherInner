function sendRequest(method, url, body = null) {
    return fetch(url)
            .then(response => response.json())
            .catch(error => { error });
}

export default sendRequest;