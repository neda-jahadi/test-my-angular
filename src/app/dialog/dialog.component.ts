import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';
import { StoreDataService } from '../store-data.service';
import { Beverage} from '../beverages';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input() authorized: boolean;            // user has logged in previously (data in localStorage)
  @Input() hasLoggedIn: boolean = false;   // user has clicked on "enter name"
  @Input() deleted=false;                  // user has clicked on "forget me"
  @Input() knowCustomer: boolean= false;   // true if it's the second load of the page and there is a user in localStorage ???
  beverageChosed: boolean =false;          // user has clicked button to choose beverage
  @Input() thereIsBeverage: boolean;         // true if localStorage has any beverages TODO move to service
  
  @Input() beverageList: Beverage[] = [];
  inputValueF : string = '';  // what user types in text field
  inputValueL : string = '';  // what user types in text field
  @Output() onEnter = new EventEmitter();
  objectToSave: string;                    // ???
  
  @Input() firstName;                            // information returned from service - user
  @Input() lastName;
  @Input() beverageData: string;                    // information returned from service - beverage
  whatToDrink: string= '';                 // what the user selected from the beverage list
  
  @Input() myCustomer: string;                 // the user's name

   
   
 
   saveUserInService(){
    console.log('localStorageUser.setItem');
    this.storedataService.saveUserValueF(this.inputValueF);
    this.storedataService.saveUserValueL(this.inputValueL);
    
   }
   saveBeverageInService(text: string){
    this.storedataService.saveBeverageValue(text);
   }
   
   handleChoose(text: string): void{
       this.beverageChosed=true;
       this.thereIsBeverage=true;
       this.whatToDrink=text;
       this.saveBeverageInService(this.whatToDrink);
      
       

   }
   handleUsual(text: string): void{
     
     
     this.whatToDrink=this.storedataService.getBeverageValue();
     this.beverageChosed=true;
   }
   logIn(): void{
     this.beverageChosed= false;
    
     this.saveUserInService();
     console.log('deleted', this.deleted);
     console.log('authorized when I enter', this.authorized);
     this.onEnter.emit();
   }
   onKeyUpF(event): void {
     
     this.inputValueF=event.target.value;
     
   }
   onKeyUpL(event): void {
     
    this.inputValueL=event.target.value;
    
  }
   beverageUp(eventn): void {
     console.log(eventn);
   }

  constructor(public storedataService: StoreDataService) { }

  ngOnInit(): void {
    
   
    console.log('the page is loaded, authorized is:', this.authorized);
  }

}
