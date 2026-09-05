const quote = [
    "Peace over people.",
    "Silence speaks louder.",
    "Let it be.",
    "Choose yourself.",
    "Less talk, more growth.",
    "Vibes never lie.",
    "Stay real, stay rare.",
    "Trust the timing.",
    "No expectations, no disappointment.",
    "Built by struggles.",
    "Calm mind, strong soul.",
    "Make yourself proud.",
    "Some endings are blessings.",
    "Protect your peace.",
    "Dream big, stay humble.",
    "Actions reveal everything.",
    "Lost, but still learning.",
    "Be your own reason.",
    "Time reveals everything.",
    "Happiness looks good on me.",
    "Not everyone deserves access.",
    "Keep going, quietly.",
    "Memories stay, people change.",
    "My energy is expensive.",
    "One life. Make it count."
];

// ByEventLoop we can generate the quotes.
const button = document.querySelector('button');

button.addEventListener('click', ()=>{
  const text = document.getElementById('quotes');  

    const index = Math.floor(Math.random()*quote.length);
    text.textContent = quote[index];

})
