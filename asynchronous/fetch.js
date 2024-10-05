fetch("https://randomuser.me/api/?gender=female")
.then((response) => {
    // response.json() return promise. so we use Promise Chaining 
    if (response.status === 404) {
        throw new Error("url link is not available.");
    }
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error.message);
});