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

