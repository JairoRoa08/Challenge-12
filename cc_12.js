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
