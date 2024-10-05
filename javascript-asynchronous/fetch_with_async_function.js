let getJson = async () => {
    // add await because of getting Promise 
    let response = await fetch("https://randomuser.me/api/");

    // fetch return resolve even if fetch is not successful so we need to add custom throw error 
    if (response.status === 404) {
        throw new Error("url is not available.");
    }

    let data = await response.json();
    return data;
}

// getJson returns Promise
getJson()
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error.message);
});