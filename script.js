let technicalCount = 0;
let billingCount = 0;
let serviceCount = 0;
let inquiryCount = 0;

let totalComplaints = 0;
let highCount = 0;
let mediumCount = 0;
let lowCount = 0;

let chart;

function updateChart() {

    if (chart) {
        chart.destroy();
    }

    const ctx = document.getElementById("complaintChart");

    chart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: [
                "Technical",
                "Billing",
                "Service",
                "General"
            ],
            datasets: [{
                data: [
                    technicalCount,
                    billingCount,
                    serviceCount,
                    inquiryCount
                ]
            }]
        }
    });
}

document.getElementById("analyzeBtn").addEventListener("click", function () {

    let complaintText = document.getElementById("complaint").value.trim().toLowerCase();

    let category = predictCategory(complaintText);

    let priority = "Low";
    let recommendation = "Review and respond to the inquiry.";

    if (category === "Technical Issue") {
        priority = "High";
        recommendation = "Escalate immediately to technical support.";
    }

    else if (category === "Billing Issue") {
        priority = "Medium";
        recommendation = "Forward complaint to billing department.";
    }

    else if (category === "Service Issue") {
        priority = "Medium";
        recommendation = "Notify customer service manager for review.";
    }

    else {
        priority = "Low";
        recommendation = "Provide requested information to the customer.";
    }

    if (category === "Technical Issue") {
    technicalCount++;
    }
    else if (category === "Billing Issue") {
        billingCount++;
    }
    else if (category === "Service Issue") {
        serviceCount++;
    }
    else {
        inquiryCount++;
    }

    document.getElementById("result").innerHTML =
        `
        <h3>Analysis Result</h3>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Priority:</strong> ${priority}</p>
        <p><strong>Recommendation:</strong> ${recommendation}</p>
        `;

    let priorityClass = "";

    if (priority === "High") {
        priorityClass = "high";
    }
    else if (priority === "Medium") {
        priorityClass = "medium";
    }
    else {
        priorityClass = "low";
    }

    let newRow = `
    <tr>
        <td>${complaintText}</td>
        <td>${category}</td>
        <td class="${priorityClass}">${priority}</td>
    </tr>
    `;

    totalComplaints++;

    if (priority === "High") {
        highCount++;
    }
    else if (priority === "Medium") {
        mediumCount++;
    }
    else {
        lowCount++;
    }

    document.getElementById("totalComplaints").textContent = totalComplaints;
    document.getElementById("highCount").textContent = highCount;
    document.getElementById("mediumCount").textContent = mediumCount;
    document.getElementById("lowCount").textContent = lowCount;
    document.getElementById("tableBody").innerHTML += newRow;
    updateChart();
});