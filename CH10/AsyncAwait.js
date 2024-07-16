async function makeAjaxRequest(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        let data = await response.json(); // Convert the response to JSON
        return data;
    } catch (error) {
        throw error; // Rethrow the error to be handled by the caller
    }
}

// Using the async function to make an Ajax request
async function fetchData() {
    try {
        let data = await makeAjaxRequest('https://jsonplaceholder.typicode.com/posts');
        console.log('Success:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the fetchData function to execute the request
fetchData();
