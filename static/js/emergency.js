// ==========================================
// LogiPilot Emergency Transport Module
// emergency.js
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const findButton =
        document.getElementById("findCarrierBtn");

    const loadingBox =
        document.getElementById("loadingBox");

    const resultsSection =
        document.getElementById("resultsSection");

    // Hide sections initially

    loadingBox.style.display = "none";

    resultsSection.style.display = "none";

    // ======================================
    // Find Best Carrier Button
    // ======================================

    findButton.addEventListener("click", () => {

        resultsSection.style.display = "none";

        loadingBox.style.display = "flex";

        const messages = [

            "🔄 Reading Shipment Details...",

            "🌍 Identifying Available Logistics Partners...",

            "🚚 Checking DHL Express...",

            "📦 Checking FedEx...",

            "🚛 Checking UPS...",

            "🚚 Checking BlueDart...",

            "🚢 Checking Maersk...",

            "⚠ Evaluating Disruption Risks...",

            "🌧 Checking Weather Conditions...",

            "📊 Comparing ETA & Cost...",

            "🤖 Ranking Providers Using AI...",

            "✅ Recommendation Ready"

        ];

        let index = 0;

        loadingBox.innerHTML = messages[0];

        const interval = setInterval(() => {

            index++;

            if (index < messages.length) {

                loadingBox.innerHTML =
                    messages[index];

            } else {

                clearInterval(interval);

                loadingBox.style.display = "none";

                resultsSection.style.display = "block";

                revealCards();

                showToast(
                    "🤖 AI completed carrier ranking"
                );

            }

        }, 700);

    });

    // ======================================
    // Select Carrier Buttons
    // ======================================

    document.addEventListener("click", (e) => {

        if (
            e.target.classList.contains("select-btn")
        ) {

            const card =
                e.target.closest(".carrier-card");

            const carrierName =
                card.querySelector("h3").innerText;

            showToast(
                `✅ ${carrierName} selected`
            );

            setTimeout(() => {

                alert(
`Carrier Selected Successfully

${carrierName}

Next Actions

✓ Notify Logistics Team

✓ Update Shipment Plan

✓ Generate Emergency Route

✓ Notify Customer

Status:
Ready for Approval`
                );

            }, 300);

        }

    });

});


// ==========================================
// Card Reveal Animation
// ==========================================

function revealCards() {

    const cards =
        document.querySelectorAll(".carrier-card");

    cards.forEach((card, index) => {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(25px)";

        setTimeout(() => {

            card.style.transition =
                "all .45s ease";

            card.style.opacity = "1";

            card.style.transform =
                "translateY(0)";

        }, index * 150);

    });

}


// ==========================================
// Toast Notification
// ==========================================

function showToast(message) {

    let toast =
        document.getElementById("carrierToast");

    if (!toast) {

        toast =
            document.createElement("div");

        toast.id = "carrierToast";

        toast.style.position = "fixed";

        toast.style.top = "25px";

        toast.style.right = "25px";

        toast.style.background = "#2563eb";

        toast.style.color = "white";

        toast.style.padding =
            "14px 18px";

        toast.style.borderRadius =
            "12px";

        toast.style.fontWeight =
            "600";

        toast.style.boxShadow =
            "0 10px 25px rgba(0,0,0,.15)";

        toast.style.zIndex =
            "9999";

        toast.style.opacity =
            "0";

        toast.style.transition =
            ".35s";

        document.body.appendChild(toast);

    }

    toast.innerHTML = message;

    toast.style.opacity = "1";

    setTimeout(() => {

        toast.style.opacity = "0";

    }, 2500);

}

