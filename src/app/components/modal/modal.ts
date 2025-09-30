import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrl: './modal.css'
})
export class Modal {

  isOpen: boolean=false;

  modalOpen(){
    this.isOpen=true;
  }

  modalClose(){
    this.isOpen=false;
  }

}
