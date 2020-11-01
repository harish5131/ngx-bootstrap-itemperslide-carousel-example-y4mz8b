import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';



import { DemoCarouseBasicComponent } from './ngx-bootstrap-demo.component'
@NgModule({
  declarations: [DemoCarouseBasicComponent],
  imports: [
    CarouselModule.forRoot(),
    
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  entryComponents: [],
  bootstrap: [DemoCarouseBasicComponent]
})
export class AppModule {
}
