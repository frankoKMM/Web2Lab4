fetch('hobbit.txt')
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch: ${response.status} ${response.statusText}");
        }
        return response.text();
    })
    .then(content => {
        console.log('Text file fetched successfully!');
    })
    .catch(error => {
        console.error('Error fetching text file:', error.message);
    });