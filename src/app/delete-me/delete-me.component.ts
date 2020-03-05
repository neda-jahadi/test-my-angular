import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-delete-me',
  templateUrl: './delete-me.component.html',
  styleUrls: ['./delete-me.component.css']
})
export class DeleteMeComponent implements OnInit {
  @Input() authorized: boolean;
  @Output() delete=new EventEmitter();
  deleteMe(): void {
    this.delete.emit();
    
    
  }

  
  constructor() { }

  ngOnInit(): void {
      
  }
  

}
