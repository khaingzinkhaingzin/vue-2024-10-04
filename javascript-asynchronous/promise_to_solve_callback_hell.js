let getUser = (resource) => {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();

        // async code
        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                let data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.statusCode === 404) {
                reject("something's going wrong.");
            }
        });
    
        request.open("GET", resource);
        request.send();
    });
}

getUser("https://randomuser.me/api/?gender=female")
.then((data) => {
    console.log("first api call success");
    console.log(data);
    
    // getUser("https://randomuser.me/api/?gender=male")
    // .then((data) => {
    //     console.log("second api call success");
    //     console.log(data);
    // })
    // .catch((error) => {
    //     console.log(error);
    // });

    return getUser("https://randomuser.me/api/?gender=male");
})
.then((data) => {
    console.log("second api call success");
    console.log(data);
})
.catch((error) => {
    console.log(error);
});
