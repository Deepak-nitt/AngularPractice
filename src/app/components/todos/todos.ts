import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  imports: [FormsModule, CommonModule],
  templateUrl: './todos.html',
  styleUrl: './todos.css'
})
export class Todos {
   todo:string[]=[];
   newtodo:string='';

   addTodo(){
    if(this.newtodo.trim()!==''){
      this.todo.push(this.newtodo.trim());
      console.log(this.todo);
      this.newtodo=''
    }
    else{
      alert("Enter the value first");
    }
   }

   deleteTodo(index:number){
    this.todo.splice(index , 1)
   }



 


}
