import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-beverage',
  templateUrl: './select-beverage.component.html',
  styleUrls: ['./select-beverage.component.css']
})
export class SelectBeverageComponent implements OnInit {
  @Input() beverageName: string;
  @Output() choose = new EventEmitter<string>();

	chooseThis(): void {
		
    this.choose.emit(this.beverageName);
    console.log(this.beverageName);
	}

  constructor() { }

  ngOnInit(): void {
  }

}
