import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { SelectBeverageComponent } from './select-beverage/select-beverage.component';
import { TheUsualComponent } from './the-usual/the-usual.component';
import { DeleteMeComponent } from './delete-me/delete-me.component';
import { LoginComponent } from './login/login.component';
import { AddNewBeverageComponent } from './add-new-beverage/add-new-beverage.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    SelectBeverageComponent,
    TheUsualComponent,
    DeleteMeComponent,
    LoginComponent,
    AddNewBeverageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
