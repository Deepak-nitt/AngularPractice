
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FAQ{
  question:string,
  answer:string,
  isOpen:boolean;
}

@Component({
  selector: 'app-accordion',
  imports: [CommonModule],
  templateUrl: './accordion.html',
  styleUrl: './accordion.css'
})
export class Accordion {

  faq:FAQ[]=[
    {question:"what is your name?", answer:"My name is Deepak Kumar",isOpen:false},
    {question:"where do you live?", answer:"I live in Noida", isOpen:true}
  ]


  toggle(index:number){
    if(this.faq[index].isOpen){
      this.faq[index].isOpen=false;

    }
    else{
      this.faq[index].isOpen=true;
    }


  }



}
