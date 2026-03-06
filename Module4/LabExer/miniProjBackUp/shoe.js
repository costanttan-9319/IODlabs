let masterList = [];

async function loadShoes() {
  const display = document.getElementById("shoe-display");
  const searchInput = document.getElementById("shoe-search");

  try {
    const response = await fetch("shoe.json");
    const data = await response.json();

    // Combine all shoes into one searchable list
    masterList = [
      ...(data.men || []),
      ...(data.women || []),
      ...(data.kids || []),
    ];

    // Setup Enter Key Listener
    if (searchInput) {
      searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          executeSearch(e.target.value);
        }
      });

      // Live filtering (only if display div exists)
      searchInput.addEventListener("input", (e) => {
        if (display) {
          const query = e.target.value.toLowerCase();
          const filtered = masterList.filter((shoe) =>
            shoe.name.toLowerCase().includes(query),
          );
          renderResults(filtered);
        }
      });
    }
  } catch (error) {
    console.error("Error loading shoe.json:", error);
  }
}

/**
 * Triggered by the HTML Search Button
 */
function handleSearchClick() {
  const searchInput = document.getElementById("shoe-search");
  if (searchInput) {
    executeSearch(searchInput.value);
  }
}

/**
 * Shared Search Logic: Finds the shoe and REDIRECTS to the correct page
 */
function executeSearch(inputValue) {
  const query = inputValue.toLowerCase().trim();
  if (query === "") return;

  // Find the shoe in our masterList
  const match = masterList.find((shoe) =>
    shoe.name.toLowerCase().includes(query),
  );

  if (match && match.page) {
    // Change the URL to the shoe's specific category page
    window.location.href = match.page;
  } else {
    alert("Shoe not found! Try 'Gazelle', 'Samba', or 'Stan Smith'.");
  }
}

function renderResults(shoeList) {
  const display = document.getElementById("shoe-display");
  if (!display) return;
  display.innerHTML = "";

  shoeList.forEach((shoe) => {
    const card = document.createElement("div");
    card.className = "col-12 col-md-6 col-lg-4 mb-4";
    card.innerHTML = `
            <div class="card h-100 shadow-sm border-0">
                <div class="card-body d-flex flex-column">
                    <h6 class="card-title font-weight-bold mb-1">${shoe.name}</h6>
                    <div class="d-flex justify-content-between align-items-center my-2">
                        <span class="text-primary font-weight-bold">$${shoe.price || "N/A"}</span>
                    </div>
                    <button type="button" class="btn btn-sm btn-dark btn-block" onclick="window.location.href='${shoe.page}'">
                        View Details
                    </button>
                </div>
            </div>
        `;
    display.appendChild(card);
  });
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", loadShoes);
