import { Component } from '@angular/core';

interface Quote {
  text: string;
  author: string;
}
@Component({
  selector: 'app-random-quotes',
  imports: [],
  templateUrl: './random-quotes.html',
  styleUrl: './random-quotes.css',
})
export class RandomQuotes {
  quotes: Quote[] = [
   { text: 'The best way to predict the future is to invent it.', author: 'Alan Kay' },
    { text: 'Life is 10% what happens to us and 90% how we react to it.', author: 'Charles R. Swindoll' },
    { text: 'The only limit to our realization of tomorrow is our doubts of today.', author: 'Franklin D. Roosevelt' },
    { text: 'Do not wait to strike till the iron is hot; but make it hot by striking.', author: 'William Butler Yeats' },
    { text: 'Whether you think you can or think you can’t, you’re right.', author: 'Henry Ford' }
  ];

  // current quote ko null rkha phle
  currentQuote: Quote | null = null;
  generateQuote() {
    // random method se index nikala phle
    const currindex = Math.floor(Math.random() * this.quotes.length);
    console.log(currindex);
    this.currentQuote = this.quotes[currindex];
  }
}
