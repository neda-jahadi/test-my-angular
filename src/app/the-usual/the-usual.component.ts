import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-the-usual',
  templateUrl: './the-usual.component.html',
  styleUrls: ['./the-usual.component.css']
})
export class TheUsualComponent implements OnInit {
  
  @Input() thereIsBeverage: boolean;
  @Output() usual = new EventEmitter();

	chooseUsual(): void {
		
    this.usual.emit();
    
	}


  constructor() { }

  ngOnInit(): void {
  }

}
