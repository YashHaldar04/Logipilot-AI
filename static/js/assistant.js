
// ==========================================
// LOGIPILOT AI ASSISTANT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const openBtn =
        document.getElementById("openAssistant");

    const closeBtn =
        document.getElementById("closeAssistant");

    const panel =
        document.getElementById("assistantPanel");

    const overlay =
        document.getElementById("assistantOverlay");

    const output =
        document.getElementById("assistantContent");

    // OPEN PANEL

    openBtn.addEventListener("click", () => {

        panel.classList.add("active");

        overlay.classList.add("active");

    });

    // CLOSE PANEL

    closeBtn.addEventListener("click", () => {

        panel.classList.remove("active");

        overlay.classList.remove("active");

    });

    overlay.addEventListener("click", () => {

        panel.classList.remove("active");

        overlay.classList.remove("active");

    });

    // TOOL CARDS

    document.querySelectorAll(".tool-card")
        .forEach(card => {

            card.addEventListener("click", () => {

                const tool =
                    card.dataset.tool;

                simulateThinking();

                setTimeout(() => {

                    renderTool(tool);

                }, 1200);

            });

        });

    // ======================================
    // Fake AI Thinking
    // ======================================

    function simulateThinking() {

        output.innerHTML = `

🤖 LogiPilot AI

Analyzing Request...

✓ Loading Knowledge Base

✓ Checking Logistics Context

✓ Running AI Workflow

`;

    }

    // ======================================
    // Tool Outputs
    // ======================================

    function renderTool(tool) {

        // DOCUMENT QA

        if (tool === "documents") {

            output.innerHTML = `

📄 DOCUMENT Q&A

Available Documents

• Bill Of Lading

• Packing List

• Certificate Of Origin

• Customs Declaration


Suggested Questions

1. Who is the consignee?

2. What goods are declared?

3. What is the shipment value?

4. What are the payment terms?


Sample Answer

Consignee:

ABC Imports LLC

Declared Goods:

Electronic Components

Source:

Page 3 Section 2

`;

        }

        // INVOICE

        if (tool === "invoice") {

            output.innerHTML = `

🧾 INVOICE ANALYZER

Invoice Summary

Carrier:
DHL Express

Shipment:
SH-4421

Total Amount:
$4,820


Breakdown

Base Freight:
$3,200

Fuel Surcharge:
$980

Port Handling:
$640


⚠ Anomaly Detected

Port Handling Charge

25% above average
for this route.

Recommendation:

Review invoice before payment.

`;

        }

        // REPORT

        if (tool === "report") {

            output.innerHTML = `

📊 DAILY DASHBOARD REPORT

Generated:
Today • 18:00


Shipment Summary

24 Active Shipments

18 On Schedule

4 Delayed

2 High Risk


Top Issue

Dubai Customs Hold


Recommended Action

Contact Customs Broker

for SH4421 & SH4422


Carrier Performance

DHL : Excellent

FedEx : Good

UPS : Stable


📄 Report Ready

`;

        }

        // GLOBAL TRADE PULSE

        if (tool === "trade") {

            output.innerHTML = `

🌍 GLOBAL TRADE PULSE

🔴 Hamburg Port Strike

Impact:
Critical

Affected:
3 Shipments

Action:
Reroute via Rotterdam


🟡 Red Sea Congestion

Impact:
Medium

Affected:
2 Shipments


🟢 Singapore Operations

Normal

No disruption detected.


Last Updated:
5 Minutes Ago

`;

        }

    }

});

