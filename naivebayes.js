const trainingData = [
    { text: "website crash error bug server issue", category: "Technical Issue" },
    { text: "application not working system failure", category: "Technical Issue" },

    { text: "refund payment invoice billing charge", category: "Billing Issue" },
    { text: "wrong amount deducted payment problem", category: "Billing Issue" },

    { text: "staff support service rude employee", category: "Service Issue" },
    { text: "customer service not responding", category: "Service Issue" },

    { text: "question inquiry information help", category: "General Inquiry" },
    { text: "need information about account", category: "General Inquiry" },

    { text: "login page crashes", category: "Technical Issue" },
    { text: "database connection error", category: "Technical Issue" },
    { text: "cannot access website", category: "Technical Issue" },

    { text: "refund not received", category: "Billing Issue" },
    { text: "payment failed but money deducted", category: "Billing Issue" },
    { text: "charged twice for subscription", category: "Billing Issue" },

    { text: "support team ignored my request", category: "Service Issue" },
    { text: "staff behavior was unprofessional", category: "Service Issue" },

    { text: "need more information", category: "General Inquiry" },
    { text: "how can i update my profile", category: "General Inquiry" }

    { text: "technical support needed for software installation", category: "Technical Issue" },
    { text: "billing discrepancy in my account statement", category: "Billing Issue" },

    { text: "customer service was very helpful and responsive", category: "Service Issue" },
    { text: "general inquiry about product features and pricing", category: "General Inquiry" },

    { text: "website is down and not accessible", category: "Technical Issue" },
    { text: "incorrect billing amount charged to my account", category: "Billing Issue" },

    { text: "service representative was rude and unhelpful", category: "Service Issue" },
    { text: "general inquiry regarding company policies and procedures", category: "General Inquiry" },

    { text: "technical issue with software installation", category: "Technical Issue" },
    { text: "billing problem with my recent purchase", category: "Billing Issue" },

    { text: "service complaint about delayed response", category: "Service Issue" },
    { text: "general inquiry about product availability", category: "General Inquiry" },

    { text: "technical support needed for software installation", category: "Technical Issue" },
    { text: "billing discrepancy in my account statement", category: "Billing Issue" },

    { text: "customer service was very helpful and responsive", category: "Service Issue" },
    { text: "general inquiry about product features and pricing", category: "General Inquiry" },

    { text: "website is down and not accessible", category: "Technical Issue" },
    { text: "incorrect billing amount charged to my account", category: "Billing Issue" },
    
    { text: "service representative was rude and unhelpful", category: "Service Issue" },
    { text: "general inquiry regarding company policies and procedures", category: "General Inquiry" }
];

function tokenize(text) {

    return text
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .split(/\s+/)
        .filter(word =>
            ![
                "the",
                "is",
                "a",
                "an",
                "and",
                "for",
                "to",
                "of",
                "in"
            ].includes(word)
        );

}

const vocabulary = new Set();

const wordCounts = {};
const categoryCounts = {};

trainingData.forEach(item => {

    const words = tokenize(item.text);

    if (!wordCounts[item.category]) {
        wordCounts[item.category] = {};
    }

    if (!categoryCounts[item.category]) {
        categoryCounts[item.category] = 0;
    }

    categoryCounts[item.category]++;

    words.forEach(word => {

        vocabulary.add(word);

        if (!wordCounts[item.category][word]) {
            wordCounts[item.category][word] = 0;
        }

        wordCounts[item.category][word]++;
    });

});

function predictCategory(text) {

    const words = tokenize(text);

    let bestCategory = "";
    let bestScore = -Infinity;

    for (let category in categoryCounts) {

        let score = Math.log(
            categoryCounts[category] /
            trainingData.length
        );

        const totalWords =
            Object.values(wordCounts[category])
                .reduce((a, b) => a + b, 0);

        words.forEach(word => {

            const count =
                (wordCounts[category][word] || 0) + 1;

            const probability =
                count /
                (totalWords + vocabulary.size);

            score += Math.log(probability);

        });

        if (score > bestScore) {
            bestScore = score;
            bestCategory = category;
        }
    }

    return bestCategory;
}