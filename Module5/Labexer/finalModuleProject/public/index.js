let allProducts = []; // Our source of truth

// fetching the API data
fetch('/products')
    .then(res => res.json())
    .then(json => {
        allProducts = json;
        renderCards(allProducts); // display items
        setupCategoryDropdown(allProducts); // set up filter
    })
    .catch(err => console.error("Error fetching data from our backend:", err));

// .map to one by one categorize
function renderCards(products) {
    const container = document.getElementById('product-list');
    
    // Using .map to transform each product object into a string of HTML
    const cardTemplates = products.map(item => `
        <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card h-100 shadow-sm border-0">
                <div class="p-3 bg-white text-center">
                    <img src="${item.image}" class="img-fluid" style="height: 150px; object-fit: contain;" alt="${item.title}">
                </div>
                <div class="card-body d-flex flex-column">
                    <h6 class="card-title fw-bold">${item.title.substring(0, 35)}...</h6>
                    <p class="card-text small text-muted text-truncate" style="max-height: 50px;">${item.description}</p>
                    <div class="mt-auto pt-2">
                        <h6 class="text-primary fw-bold">SGD ${item.price.toFixed(2)}</h6>
                        <button class="btn btn-primary btn-sm w-100">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    `).join(''); // Combine the array of strings into one HTML string

    container.innerHTML = cardTemplates;
}

//  Drop-down Selection for different categories
function setupCategoryDropdown(products) {
    const selector = document.getElementById('category-filter');
    
    // one-by-one categories using Set and Map
    const categories = [...new Set(products.map(p => p.category))];
    
    // Add unique categories as <option> elements
    categories.forEach(catagory => {
        const option = document.createElement('option');
        option.value = catagory;
        option.textContent = catagory.charAt(0).toUpperCase() + catagory.slice(1);
        selector.appendChild(option);
    });

    // Listen for changes to filter the list
    selector.addEventListener('change', (e) => {
        const selectedCategory = e.target.value;
        const filteredProducts = (selectedCategory === 'all') 
            ? allProducts 
            : allProducts.filter(p => p.category === selectedCategory);
        
        renderCards(filteredProducts); // Re-render the cards with the new list
    });
}