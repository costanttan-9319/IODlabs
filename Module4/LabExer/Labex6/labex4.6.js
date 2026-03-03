function fetchPosts() {
    // 1. Define the URL with the limit of 10 as per instructions
    const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

    // 2. Make the request
    fetch(url)
        .then(response => response.json()) // Convert response to JSON
        .then(posts => {
            const container = document.getElementById('posts-container');
            
            // 3. Loop through the data and create a card for each post
            let cardHTML = '';
            
            posts.forEach(post => {
                cardHTML += `
                    <div class="col-sm-6 col-md-4 col-lg-3">
                        <div class="card h-100 shadow-sm">
                            <div class="card-body">
                                <h5 class="card-title text-capitalize">${post.title}</h5>
                                <p class="card-text text-muted">${post.body}</p>
                            </div>
                        </div>
                    </div>
                `;
            });

            // 4. Update the page
            container.innerHTML = cardHTML;
        })
        .catch(error => console.error('Error:', error));
}

// 5. Run the function automatically when the page loads
window.onload = fetchPosts;