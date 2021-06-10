import { NavbarComponent } from './shared/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
