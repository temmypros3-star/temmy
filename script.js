const notifications = [
  "@StreamerX just ordered Twitch Partner Promotion 🎮 — $150",
  "@LunaTV purchased TikTok Growth Package 📱 — $50",
  "@JayStreams got YouTube Monetization Setup ✅ — $250",
  "@MikeyPlays upgraded to Premium Twitch Package 🚀 — $100",
  "@LexiVision unlocked YouTube Monetization 🔓 — $300",
  "@RicoFlow boosted TikTok engagement 🔥 — $220"
];

function showNotification() {
  const container = document.getElementById("notifications");
  const twitchWeight = Math.random() < 0.6;
  const message = twitchWeight
    ? notifications[0]
    : notifications[Math.floor(Math.random() * notifications.length)];

  const note = document.createElement("div");
  note.className = "notification";
  note.textContent = message;
  container.appendChild(note);

  setTimeout(() => {
    container.removeChild(note);
  }, 5000);
}

setInterval(showNotification, 6000);
document.querySelectorAll(".learn-more").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const content = document.getElementById("mainContent");
    if (content.classList.contains("hidden")) {
      content.classList.remove("hidden");
      content.classList.add("visible");
      setTimeout(() => {
        document
          .getElementById(targetId)
          .scrollIntoView({ behavior: "smooth" });
      }, 600);
    } else {
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    }
  });
});
document.querySelectorAll(".order-btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  });
});
// Contact form redirect
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const service = document.getElementById("service").value;

  const discordLink = "https://discord.gg/3E4fmaG9Zb";
  const mailtoLink = `mailto:temmypros3@gmail.com?subject=Service Request: ${service}&body=Name: ${name}%0AEmail: ${email}%0AService: ${service}`;

  // Redirect to Discord or email
  if (
    confirm(
      "Would you like to contact us via Discord? Click OK for Discord, Cancel for Email."
    )
  ) {
    window.open(discordLink, "_blank");
  } else {
    window.location.href = mailtoLink;
  }
});

// Background music toggle
const music = new Audio(
  "https://www.bensound.com/bensound-music/bensound-dreams.mp3"
);
document.getElementById("musicSwitch").addEventListener("change", function () {
  if (this.checked) {
    music.loop = true;
    music.play();
  } else {
    music.pause();
  }
});
function animateCounter(id, target) {
  let count = 0;
  const speed = Math.ceil(target / 100);
  const element = document.getElementById(id);
  const interval = setInterval(() => {
    count += speed;
    if (count >= target) {
      count = target;
      clearInterval(interval);
    }
    element.textContent = count;
  }, 30);
}

// ✅ Use IntersectionObserver for better scroll detection
const statsObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter("projects", 1200);
        animateCounter("reviews", 980);
        animateCounter("clients", 500);
        observer.disconnect(); // run only once
      }
    });
  },
  { threshold: 0.5 }
);

// ✅ Start observing once content is revealed
document.getElementById("revealBtn").addEventListener("click", function (e) {
  e.preventDefault();
  const content = document.getElementById("mainContent");
  content.classList.remove("hidden");
  content.classList.add("visible");

  // Start observing stats section
  const statsSection = document.getElementById("stats");
  if (statsSection) {
    statsObserver.observe(statsSection);
  }
});