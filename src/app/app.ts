import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Livetext } from "./components/livetext/livetext";
import { Todos } from "./components/todos/todos";
import { Calculator } from "./components/calculator/calculator";
import { Showpassword } from "./components/showpassword/showpassword";
import { RandomQuotes } from "./components/random-quotes/random-quotes";
import { Modal } from './components/modal/modal';
import { Accordion } from "./components/accordion/accordion";

import { Darkmode } from "./components/darkmode/darkmode";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Livetext, Todos, Calculator, Showpassword, RandomQuotes, Modal, Accordion, Darkmode],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('beginning-app');
}
