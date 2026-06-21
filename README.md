# Complaint Analysis & Priority Prediction System

## Overview

A web-based complaint analysis system that applies Natural Language Processing (NLP) and Naive Bayes Classification to automatically categorize customer complaints. The system predicts complaint priority levels, generates automated recommendations, and visualizes complaint analytics through an interactive dashboard.

## Features

* NLP text preprocessing (tokenization and stop-word removal)
* Naive Bayes complaint classification
* Automatic complaint categorization
* Priority prediction (High, Medium, Low)
* Automated recommendations
* Complaint dashboard and history tracking
* Analytics summary cards
* Interactive pie chart visualization
* Responsive user interface

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Chart.js
* Git & GitHub

## Machine Learning Concepts

### NLP Preprocessing

* Text cleaning
* Lowercasing
* Tokenization
* Stop-word removal

### Naive Bayes Classification

The system uses a Naive Bayes classifier trained on sample complaint data to predict the most probable complaint category based on word frequencies and probability calculations.

## Complaint Categories

* Technical Issue
* Billing Issue
* Service Issue
* General Inquiry

## Priority Levels

| Category        | Priority |
| --------------- | -------- |
| Technical Issue | High     |
| Billing Issue   | Medium   |
| Service Issue   | Medium   |
| General Inquiry | Low      |

## How to Run

1. Clone the repository

```bash
git clone <repository-url>
```

2. Open the project folder

```bash
cd Complaint-Analysis-System
```

3. Open `index.html` using Live Server in VS Code.

## Project Structure

```text
Complaint-Analysis-System/
│
├── index.html
├── style.css
├── script.js
├── naivebayes.js
└── README.md
```

## Future Improvements

* Confidence score prediction
* Export reports to CSV
* Advanced NLP preprocessing
* Larger training dataset
* Additional complaint categories

## Author

Developed as an AI & Data Mining mini-project demonstrating NLP, Naive Bayes Classification, data visualization, and dashboard development.
