import { Component, OnInit,Output,Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-new-beverage',
  templateUrl: './add-new-beverage.component.html',
  styleUrls: ['./add-new-beverage.component.css']
})
export class AddNewBeverageComponent implements OnInit {
 
  @Input() authorized: boolean;
  inputValue: string = '';
  @Output() onSaveBeverage = new EventEmitter<string>();
	onKeyUp2(event) {
		this.inputValue = event.target.value;
  }
	saveBeverage() {
		console.log('About to send an event with data: ' + this.inputValue);
    this.onSaveBeverage.emit(this.inputValue);
    console.log('authorized', this.authorized);
	}
	

  constructor() { }

  ngOnInit(): void {
  }

}
