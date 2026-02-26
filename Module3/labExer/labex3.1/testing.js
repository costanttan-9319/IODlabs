import fetch from 'node-fetch'
globalThis.fetch = fetch

function fetchURLData1(url) {
    let fetchPromise = fetch(url).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    });
    return fetchPromise;
}

// Part a
async function fetchURLData2(url) {
    const response = await fetch(url);
    if (response.status === 200) {
        return await response.json();
    } else {
        throw new Error(`Request failed with status ${response.status}`);
    }
}

// Part c
async function fetchAllURLData(urls) {
    // Create an array of promises by calling our fetch function for each URL
    const fetchPromises = urls.map(url => fetchURLData2(url));
    
    // Use Promise.all to execute all fetches concurrently
    return await Promise.all(fetchPromises);
}

//Part b

const validURL = 'https://jsonplaceholder.typicode.com/todos/1';
const invalidURL = 'https://jsonplaceholder.typicode.com/invalid/url';

// Testing data 1 
fetchURLData1(validURL)
    .then(data => console.log('Data 1 (Valid) Success:', data))
    .catch(error => console.error('Data 1 (Valid) Error:', error.message));

// Testing data 2 (New Async/Await version - Valid)
try {
    const data2 = await fetchURLData2(validURL);
    console.log('Data2 (Valid) Success:', data2);
} catch (error) {
    console.error('Data2 (Valid) Error:', error.message);
}

// Testing Data 2 (New Async/Await version - Invalid)
try {
    await fetchURLData2(invalidURL);
} catch (error) {
    console.log('Data 2 (Invalid) Expected Error:', error.message);
}

// Testing Part C Extension array of URLs
const urlList = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2'
];

try {
    const allData = await fetchAllURLData(urlList);
    console.log('Part C (Promise.all) Success:', allData);
} catch (error) {
    console.error('Part C Error:', error.message);
}