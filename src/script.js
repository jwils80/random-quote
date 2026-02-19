console.log('👍 JS Connected');

// Tailwind Background Utlities
const backgrounds = ["bg-purple-500", "bg-pink-500", "bg-yellow-300"];

// Sample design quotes JSON data
const quotes = [
  {
    quote: "Don't do stupid shit.",
    author: "Love, Mom"
  },
  {
    quote: "Mean People Suck",
    author: "Mom Wisdom"
  },
  {
    quote: "In my defense, the mooon was full and I was left unsupervised",
    author: "Mom excuses"
  },
  {
    quote: "Stay wild Moon Child",
    author: "Mom"
  },
  {
    quote: "I love you more than coffee, but please don't make me prove it",
    author: "Mom"
  },
  {
    quote: "I run on coffee, chaos, and tiny humans who need snacks every 12 minutes.",
    author: "Surviving on Coffee and Chaos gpt"
  }
];

// Get DOM elements
const body = document.querySelector("#body");
const quoteText = document.querySelector("#quote-text");
const quoteAuthor = document.querySelector("#quote-author");
const refreshBtn = document.querySelector("#refresh-btn");

// Function to get random quote and background
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];

  // Update quote
  quoteText.textContent = `"${selectedQuote.quote}"`;
  quoteAuthor.textContent = `— ${selectedQuote.author}`;

  // Get random background
  const randomBgIndex = Math.floor(Math.random() * backgrounds.length);
  const newBackground = backgrounds[randomBgIndex];

  // Replace entire class attribute
  body.className = `${newBackground} min-h-screen flex items-center justify-center transition-all duration-700`;
}

// Add event listener to button
refreshBtn.addEventListener("click", getRandomQuote);
