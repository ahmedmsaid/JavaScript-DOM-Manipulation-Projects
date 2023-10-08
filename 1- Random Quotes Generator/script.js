const button = document.querySelector('button');
const quote = document.querySelector('q');
const author = document.getElementById('author');

button.addEventListener('click', () => {
    const random = Math.floor(Math.random() * quotes.length);
    console.log(random)
    quote.innerText = quotes[random].quote;
    author.innerText = "- " + quotes[random].author;
})

const quotes = [
  {
    author: "Bayek of Siwa",
    quote: " I am a Medjay. I solve problems. ",
  },
  {
    author: "Sun Tzu",
    quote: " To fight and conquer in all our battles is not supreme excellence; supreme excellence consists in breaking the enemy's resistance without fighting. "
  },
  {
    author: "Samira",
    quote: " WHEN YOUR TEAM NEEDED YOU MOST… I MADE YOU VANISH! "
  },
  {
    author: "Booker DeWitt",
    quote: " Bring us the girl, and wipe away the debt', that was the deal. The details elude me now, but the details wouldn't change a Goddamn thing. "
  }
];
