let quotes = [
  "Take a deep breath, you're doing great 💫",
  "The vibe is slow, the progress is real.",
  "You're not behind — you're on your own path 🐢",
  "Focus, flow, and lo-fi beats 🎧",
  "You're allowed to rest. That is part of the work.",
  "Soft glow, strong mind, gentle heart."
];

function ShowRandomQuote(){
    let quote = document.getElementById("Quote");
    let randomIndex = Math.floor(Math.random() * quotes.length);
    quote.textContent= quotes[randomIndex];
}
window.onload = ShowRandomQuote;

let suggestFrom = document.getElementById("suggest-form");
let thankYouMessage = document.getElementById("thank-you");

if (form) {
  form.addEventListner("submit", function(event){
    event.preventDefault();

    let name = document.getElementById("name").Value.trim();
    let track = document.getElementById('track').value.trim();
    let link = document.getElementById("link").value.trim();

    if (!name || !track || !link){
      alert("Please fill in the required fields");
      return;
    }
    form.reset();
    thankYouMessage.classList.remove("hidden");
  });
}