fetch("https://randomuser.me/api/?gender=female")
.then((response) => {
    // response.json() return promise. so we use Promise Chaining 
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log("error", error);
});