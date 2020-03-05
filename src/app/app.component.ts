import { Component,EventEmitter } from '@angular/core';
import { StoreDataService } from './store-data.service';
import { Beverage } from './beverages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    beverageList: Beverage[] = [];
    thereIsBeverage: boolean;
    authorized: boolean;
    deleted: boolean= false;
    hasLoggedIn: boolean;
    knowCustomer: boolean;
    firstName: any ;                              // information returned from service - user
    lastName: any;
    beverageData: string;
    myCustomer: string ='';
    loadFromDataService(){
    
      this.firstName= this.storedataService.getUserValueF();
      this.lastName= this.storedataService.getUserValueL();
      console.log('first name is:', this.firstName);
      this.beverageData= this.storedataService.getBeverageValue();
      console.log('this beveragedata:', this.beverageData);
      if(this.beverageData){
        this.thereIsBeverage= true;
  
      }
  
      else{this.thereIsBeverage= false;}
  
      if((this.firstName)||(this.lastName)){
        this.knowCustomer= true;
        this.authorized= true;
        this.myCustomer=this.firstName+' '+this.lastName;
        console.log('authorized:', this.authorized);
  
      }
  
      else{
        this.authorized=false;
        
      }
  
  
  
  
        
     }
    handleEnter(): void{
      this.hasLoggedIn= true;
     this.authorized=true;
     this.deleted= false;
    }
  addNewBeverage(name: string): void {
    
		console.log('addNewBEverage', name);
		this.storedataService.addNewBeverage(name);
		this.beverageList = this.storedataService.getBeverages();
	}
  handleDelete(): void{
    
    this.storedataService.deleteDataService();
    //this.thereIsBeverage=false;
    this.hasLoggedIn= false;
    this.deleted= true;
    this.authorized= false;
    this.knowCustomer= false;
    
    
  }
  title = 'lab1';
  //beverages = ['beverage1', 'beverage2', 'beverage3', 'beverage4'];
  constructor(public storedataService: StoreDataService) { }
  ngOnInit() {
    this.beverageList = this.storedataService.getBeverages();
    this.loadFromDataService();
	}
}
