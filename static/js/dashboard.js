// ==========================================
// LogiPilot Dashboard JS
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    animateCounter("shipmentCounter", 0, 1248, 1200);
    createToast();
    animateProgressBar();
    rotateAIRecommendations();
    simulateLiveActivity();

    // AI Assistant Button

    const aiBtn = document.querySelector(".ai-btn");

    if (aiBtn) {

        aiBtn.addEventListener("click", () => {

            alert(`🤖 AI SUPPLY CHAIN ASSISTANT

Current Overview
----------------------------

• 3 High Priority Shipments

• 2 Customs Delays

• 1 Weather Disruption

Recommended Actions

✓ Switch SH422 to DHL

✓ Notify Customer

✓ Update ETA

✓ Route via Alternate Port

Confidence : 96.2%
`);

        });

    }

    // Review Recommendation Button

    const reviewBtn = document.querySelector(".primary-btn");

    if (reviewBtn) {

        reviewBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 550,

                behavior: "smooth"

            });

        });

    }

});


// ==========================================
// Counter Animation
// ==========================================

function animateCounter(id, start, end, duration) {

    const obj = document.getElementById(id);

    if (!obj) return;

    let current = start;

    const increment = end / (duration / 16);

    const timer = setInterval(() => {

        current += increment;

        if (current >= end) {

            current = end;

            clearInterval(timer);

        }

        obj.innerText = Math.floor(current).toLocaleString();

    }, 16);

}


// ==========================================
// Progress Animation
// ==========================================

function animateProgressBar() {

    const bar = document.querySelector(".progress-fill");

    if (!bar) return;

    const finalWidth = bar.style.width;

    bar.style.width = "0%";

    setTimeout(() => {

        bar.style.transition = "1.5s ease";

        bar.style.width = finalWidth;

    }, 400);

}


// ==========================================
// AI Recommendation Rotation
// ==========================================

function rotateAIRecommendations() {

    const recommendations = document.querySelectorAll(".recommendation");

    if (recommendations.length === 0) return;

    setInterval(() => {

        const first = recommendations[0];

        first.parentNode.appendChild(first);

    }, 3500);

}


// ==========================================
// Live Activity Feed
// ==========================================

function simulateLiveActivity() {

    const feed = document.getElementById("activityFeed");

    if (!feed) return;

    const logs = [

        "10:02 • DHL availability confirmed",

        "10:04 • Weather alert generated",

        "10:06 • Shipment SH442 rerouted",

        "10:08 • ETA recalculated",

        "10:10 • Customs clearance complete",

        "10:13 • AI selected alternate carrier",

        "10:16 • Port congestion detected",

        "10:20 • Shipment priority updated",

        "10:24 • Insurance recommendation generated",

        "10:28 • Route optimization complete"

    ];

    let i = 0;

    setInterval(() => {

        const item = document.createElement("div");

        item.className = "activity-item";

        item.style.opacity = "0";

        item.innerHTML = logs[i];

        feed.prepend(item);

        setTimeout(() => {

            item.style.transition = "0.4s";

            item.style.opacity = "1";

        }, 50);

        if (feed.children.length > 6) {

            feed.removeChild(feed.lastChild);

        }

        i++;

        if (i >= logs.length) {

            i = 0;

        }

    }, 4000);

}


// ==========================================
// Toast Notification
// ==========================================

function createToast() {

    const toast = document.createElement("div");

    toast.id = "toast";

    toast.style.position = "fixed";

    toast.style.top = "25px";

    toast.style.right = "25px";

    toast.style.background = "#2563eb";

    toast.style.color = "white";

    toast.style.padding = "14px 18px";

    toast.style.borderRadius = "10px";

    toast.style.fontWeight = "600";

    toast.style.boxShadow = "0 8px 25px rgba(0,0,0,.15)";

    toast.style.zIndex = "9999";

    toast.style.opacity = "0";

    toast.style.transition = ".4s";

    document.body.appendChild(toast);

    const notifications = [

        "🤖 AI detected shipment risk",

        "🚚 DHL recommended for SH422",

        "⚠ Customs delay predicted",

        "📦 ETA updated successfully",

        "🌧 Weather risk increased",

        "✅ Alternative route available"

    ];

    let idx = 0;

    function showToast() {

        toast.innerHTML = notifications[idx];

        toast.style.opacity = "1";

        setTimeout(() => {

            toast.style.opacity = "0";

        }, 2500);

        idx++;

        if (idx >= notifications.length) {

            idx = 0;

        }

    }

    setTimeout(showToast, 1500);

    setInterval(showToast, 8000);

}

