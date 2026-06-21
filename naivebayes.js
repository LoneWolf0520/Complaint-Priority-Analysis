const trainingData = [
    { text: "website crash error bug server issue", category: "Technical Issue" },
    { text: "application not working system failure", category: "Technical Issue" },

    { text: "refund payment invoice billing charge", category: "Billing Issue" },
    { text: "wrong amount deducted payment problem", category: "Billing Issue" },

    { text: "staff support service rude employee", category: "Service Issue" },
    { text: "customer service not responding", category: "Service Issue" },

    { text: "question inquiry information help", category: "General Inquiry" },
    { text: "need information about account", category: "General Inquiry" }
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