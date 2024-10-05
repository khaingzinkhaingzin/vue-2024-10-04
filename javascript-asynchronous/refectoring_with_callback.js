let getUser = (callback) => {
    let request = new XMLHttpRequest();

    // async code
    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
            let data = JSON.parse(request.responseText);
            callback(data, undefined);
        } else if (request.statusCode === 404) {
            callback(undefined, "something's going wrong.")
        }
    });

    request.open("GET", "https://randomuser.me/api");
    request.send();
}

getUser((data, error) => {
    console.log(data, error);
});