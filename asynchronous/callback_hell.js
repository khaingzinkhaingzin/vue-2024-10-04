let getUser = (resource, callback) => {
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

    request.open("GET", resource);
    request.send();
}

getUser("https://randomuser.me/api/?gender=female", (data, error) => {
    if (data) {
        console.log("first api call success");
        console.log(data);
        getUser("https://randomuser.me/api/?gender=male", (data, error) => {
            if (data) {
                console.log("second api call success");
                console.log(data);
            } else {
                console.log("second api call error");
            }
        });
    } else {
        console.log("first api call error");
    }
});