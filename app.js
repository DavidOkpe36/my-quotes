let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const  quotes = [{
    quote: `"The best way to find yourself is to loose yourself in the 
    service of others."`,
    person: ` Mahatma Gandhi`
},{
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    person: ` Albert Einstein`
}, {
    quote: `"Your time is limited, so dont waste it living someone else's life"`,
    person: ` Steve Jobs`
},{
    quote: `"The journey of a thousand miles begins with one step"`,
    person: `Lao Tzu`
}];

btn.addEventListener('click', function() {

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})