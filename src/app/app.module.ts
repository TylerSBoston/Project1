import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListRequestComponent } from "./requests/list-request/ListRequestComponent";
import { HeaderComponent } from './header/header.component';
import { EditRequestComponent } from './requests/edit-request/edit-request.component';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';







@NgModule({
  declarations: [
    AppComponent,
    ListRequestComponent,
    HeaderComponent,
    EditRequestComponent,
    LoginComponent,
    LogoutComponent
    
   
    
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
