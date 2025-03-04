// Task 1: Business Dashboard – DOM Element Selection and Creation
const dashboardById = document.getElementById("dashboard");
const dashboardBySelector = document.querySelector("#dashboard");
const dashboard = dashboardById || dashboardBySelector;
if (dashboard) {
const metricCard = document.createElement("div");
metricCard.setAttribute("class", "metric-card");
metricCard.setAttribute("id", "revenueCard");
metricCard.innerHTML= "<h3>Revenue</h3><p>$0</p>";
} else {
    console.error("Dashboard container not found.");
}

// Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays
const metricCards = document.querySelectorAll (".metric-card");
const metricCardsArray = Array.from(metricCards);
metricCardsArray.forEach (card => {
    card.innerHTML += "-Updated";
    card.computedStyleMap.backgroundColor = "#f0f0f0";
});

// Task 3: Dynamic Inventory Management – Adding and Removing Items
function addProduct () {
    const inventoryList = document.getElementById("inventory");
    if (inventoryList) {
        const production = document.createElement("li");
        productItem.setAttribute("class", "product-item");
        productItem.setAttribute("data-product-id", Date.now()); // Unique ID
        productItem.textContent = "New Product";
        productItem.addEventListener("click", removeProduct);
        inventoryList.appendChild(productItem);
    } else {
        console.error("Inventory list not found");
    }
}
function removeProduct(event) {
    const inventoryList = document.getElementById("inventory");

    if (inventoryList) {
        inventoryList.removeChild(event.target);
    }
}
const addButton = document.getElementById("addProductionBtn");
if (addButton) {
    addButton.addEventListener("click", addProduct);
}

// Task 4: Business Customer Section – Handling Event Bubbling
const customerSection = document.getElementById("customerSection");
function addCustomerCard() {
    if (customerSection) {
        const customerCard = document.createElement("div");
        customerCard.setAttribute("class", "customer-card");
        customerCard.textContent = "Customer Card";
        customerCard.addEventListener("click", function (event) {
            console.log("Customer card clicked");
            event.stopPropagation();
        });
        customerSection.appendChild(customerCard);
    } else {
        console.error("Customer section not found.");
    }
}
if (customerSection) {
    customerSection.addEventListener("click", function () {
        console.log("Customer section clicked");
    });
}
const addCustomerBtn = document.getElementById("addCustomerBtn");
if (addCustomerBtn) {
    addCustomerBtn.addEventListener("click", addCustomerCard);
}