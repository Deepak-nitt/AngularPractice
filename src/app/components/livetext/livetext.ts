import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-livetext',
  imports: [FormsModule],
  templateUrl: './livetext.html',
  styleUrl: './livetext.css'
})
export class Livetext {

  name:string ="";

}
