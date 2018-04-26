import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//#region App Imports
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//#endregion

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
