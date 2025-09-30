import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Livetext } from "./components/livetext/livetext";
import { Todos } from "./components/todos/todos";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Livetext, Todos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('beginning-app');
}
