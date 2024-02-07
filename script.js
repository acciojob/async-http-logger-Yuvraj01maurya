//your JS code here. If required.
// Make an asynchronous HTTP request
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the JSON body of the response
    return response.json();
  })
  .then(data => {
    // Log the response body to the console
    console.log(data);
  })
  .catch(error => {
    // Log any errors to the console
    console.error('There was a problem with the fetch operation:', error);
  });
