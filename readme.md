# 🚚 LogiPilot – AI Supply Chain Copilot

## Overview

LogiPilot is an AI-powered logistics decision support platform designed to help supply chain teams respond quickly during disruptions.

The system assists users by:

* Predicting shipment delays
* Classifying products using HS Codes
* Recommending alternative logistics carriers during emergencies
* Assessing shipment risk levels
* Providing AI-generated operational recommendations

This project is being developed as a prototype solution for supply chain disruption management.

---

# Project Structure

```text
logistics-agent/

│
├── app.py
├── requirements.txt
├── README.md
├── .gitignore
│
├── templates/
│   │
│   ├── base.html
│   ├── dashboard.html
│   ├── emergency_transport.html
│   ├── hs_classifier.html
│   ├── delay_predictor.html
│   └── risk_assessment.html
│
├── static/
│   │
│   ├── css/
│   │   ├── global.css
│   │   ├── dashboard.css
│   │   ├── emergency.css
│   │   ├── hs.css
│   │   ├── delay.css
│   │   └── risk.css
│   │
│   ├── js/
│   │   ├── dashboard.js
│   │   ├── emergency.js
│   │   ├── hs.js
│   │   ├── delay.js
│   │   └── risk.js
│   │
│   └── images/
│
├── data/
│   │
│   ├── transport_data.py
│   ├── hs_data.py
│   ├── shipment_data.py
│   └── risk_data.py
│
└── modules/
    │
    ├── emergency_transport.py
    ├── hs_classifier.py
    ├── delay_predictor.py
    └── risk_engine.py
```

---

# Module Ownership

To avoid merge conflicts, each team member should primarily work on their assigned module.

| Module              | Responsibility                   |
| ------------------- | -------------------------------- |
| Dashboard           | Main system overview             |
| HS Classifier       | Product → HS Code classification |
| Emergency Transport | Carrier recommendation engine    |
| Delay Predictor     | Shipment delay estimation        |
| Risk Assessment     | Shipment risk analysis           |

---

# Current Features

## Dashboard

Provides:

* Shipment overview
* Active alerts
* AI recommendations
* Live activity feed
* Risk summary

---

## HS Code Classifier

Input:

* Product description

Output:

* Predicted HS Code
* Confidence Score
* Tax Information

---

## Emergency Transport Engine

Input:

* Origin
* Destination
* Freight Weight

Output:

* Ranked logistics providers
* ETA estimates
* Cost estimates
* AI recommendation
* Reliability scores

---

## Delay Predictor

Input:

* Shipment Details

Output:

* Delay probability
* Expected delay duration
* Suggested mitigation actions

---

## Risk Assessment

Input:

* Shipment Data

Output:

* Risk score
* Risk factors
* Recommended actions

---

# Technology Stack

Frontend

* HTML
* CSS
* JavaScript

Backend

* Python
* Flask

Future AI Layer

* OpenAI API
* Gemini API
* Custom Ranking Logic

Data Sources

* Logistics APIs
* Carrier Data
* Weather Data
* Customs Data

---

# Installation

Create Virtual Environment

```bash
python -m venv venv
```

Activate Environment

Windows

```bash
venv\Scripts\activate
```

Mac/Linux

```bash
source venv/bin/activate
```

Install Dependencies

```bash
pip install -r requirements.txt
```

Run Application

```bash
python app.py
```

Open Browser

```text
http://127.0.0.1:5000
```

---

# Git Workflow

Before Starting Work

```bash
git pull
```

Save Changes

```bash
git add .
git commit -m "Your message"
```

Push Changes

```bash
git push
```

---

# Team Guidelines

1. Pull latest changes before starting work.

2. Commit frequently.

3. Use meaningful commit messages.

4. Avoid modifying another module without informing the owner.

5. Do not upload:

* venv/
* .env
* **pycache**/

6. Keep UI styling inside respective CSS files.

7. Keep JavaScript inside module-specific JS files.

---

# Future Enhancements

* Real-time logistics APIs
* Live carrier pricing
* Weather integration
* Customs delay monitoring
* AI chatbot assistant
* Automated rerouting recommendations
* Supply chain analytics dashboard

---

# Authors

Softlink Global Prototype Team

Project: LogiPilot – AI Supply Chain Copilot

```
