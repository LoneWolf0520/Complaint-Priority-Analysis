let totalComplaints = 0;
let highCount = 0;
let mediumCount = 0;
let lowCount = 0;
document.getElementById("analyzeBtn").addEventListener("click", function () {

    let complaintText = document.getElementById("complaint").value.trim().toLowerCase();

    let category = "General Inquiry";
    let priority = "Low";
    let recommendation = "Review and respond to the inquiry.";

    if (
        complaintText.includes("crash") ||
        complaintText.includes("error") ||
        complaintText.includes("bug") ||
        complaintText.includes("website") ||
        complaintText.includes("server")
    ) {
        category = "Technical Issue";
        priority = "High";
        recommendation = "Escalate immediately to technical support.";
    }

    else if (
        complaintText.includes("payment") ||
        complaintText.includes("refund") ||
        complaintText.includes("billing") ||
        complaintText.includes("invoice")
    ) {
        category = "Billing Issue";
        priority = "Medium";
        recommendation = "Forward complaint to billing department.";
    }

    else if (
        complaintText.includes("service") ||
        complaintText.includes("support") ||
        complaintText.includes("staff") || 
        complaintText.includes("assistance")
    ) {
        category = "Service Issue";
        priority = "Medium";
        recommendation = "Notify customer service manager for review.";
    }

    else if (
        complaintText.includes("question") ||
        complaintText.includes("information") ||
        complaintText.includes("inquiry") ||
        complaintText.includes("ask")
    ) {
        category = "General Inquiry";
        priority = "Low";
        recommendation = "Provide requested information to the customer.";
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
});