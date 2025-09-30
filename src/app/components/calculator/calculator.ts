import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css'
})
export class Calculator {

  first:string=''
  second:string=''
  result:number=0

  

  add(){
    this.result=parseInt(this.first)+parseInt(this.second)
    this.first='';
    this.second=''
  }

  subtract(){
    this.result=parseInt(this.first)-parseInt(this.second);
    this.first='';
    this.second=''
  }

  multilply(){
    this.result=parseInt(this.first)*parseInt(this.second);
    this.first='';
    this.second=''
  }

  divide(){
    this.result=parseInt(this.first)/parseInt(this.second);
    this.first='';
    this.second='';
  }

}
