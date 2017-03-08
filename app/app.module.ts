import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from 'clarity-angular';
import { ChartsModule } from 'ng2-charts';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,
                  ClarityModule.forRoot(),
                  ChartsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }	