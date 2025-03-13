let quote = document.querySelector('.blockquote p');
let footer = document.querySelector('.blockquote-footer');

const quotes = [
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" }
];
let  changeQuote=()=>{
    let index = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[index].quote;
    footer.textContent = quotes[index].author;    
}
// changeQuote();
// setInterval(() => {
//     changeQuote();

// }, 1000);
