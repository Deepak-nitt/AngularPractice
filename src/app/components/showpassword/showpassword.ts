import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-showpassword',
  imports: [FormsModule],
  templateUrl: './showpassword.html',
  styleUrl: './showpassword.css'
})
export class Showpassword {

  password:string ='';
  isVisible:boolean=false;

  showPassword(){
    this.isVisible=!this.isVisible
    console.log(this.password)
    
  }


}
