console.log('👍 JS Connected');

// Tailwind Background Utilities with matching borders
const backgrounds = ["bg-purple-800", "bg-pink-500", "bg-yellow-300"];
const borders = ["border-purple-800", "border-pink-500", "border-yellow-300"];

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
    quote: "In my defense, the moon was full and I was left unsupervised",
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
  const newBorder = borders[randomBgIndex];

  // Replace entire class attribute with background and border colors
  body.className = `${newBackground} ${newBorder} min-h-screen flex items-center justify-center transition-all duration-700 border-8`;
}

// Add event listener to button
refreshBtn.addEventListener("click", getRandomQuote);

// Call once on page load to set initial background and quote
getRandomQuote();
