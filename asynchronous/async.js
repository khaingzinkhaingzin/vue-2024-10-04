let request = new XMLHttpRequest();

// async code
request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
        console.log(request.responseText);
    } else if (request.statusCode === 404) {
        console.log("url is not available");
    }
});

request.open("GET", "https://randomuser.me/api");
request.send();