import { Injectable, Input } from '@angular/core';
import { Beverage} from './beverages';
@Injectable({
  providedIn: 'root'
})
export class StoreDataService {
  beverageList: Beverage[] = [
		{ name: 'Wine' },
		{ name: 'Coffee' },
		{ name: 'Lemonade' },
		{ name: 'Hot chocolate'}
	];
	getBeverages(): Beverage[] {
		return this.beverageList;
  }
  addNewBeverage(beverageName: string) {
		let beverageObject = { name: beverageName };
		this.beverageList.push(beverageObject);
	}
  loginInfoF: string ='loginInfoF';
  loginInfoL: string ='loginInfoL';
  beverageInfo: string= 'beverageInfo';
  
  
  getUserValueF(): any{
    return localStorage.getItem(this.loginInfoF);
  }
  getUserValueL(): any{
    return localStorage.getItem(this.loginInfoL);
  }
  getBeverageValue(): any{
    // TODO check if there is any data. If not, save default values
    return localStorage.getItem(this.beverageInfo);
  }
  saveUserValueF(text: string): void{
    // lägger till eller ändrar login
    localStorage.setItem( this.loginInfoF, text);
  }
  saveUserValueL(text: string): void{
    // lägger till eller ändrar login
    localStorage.setItem( this.loginInfoL, text);
  }
  saveBeverageValue(text: string): void{
    localStorage.setItem(this.beverageInfo, text);
  }
  deleteDataService(): void{
    
    localStorage.clear();
  }

  constructor() { }
}
