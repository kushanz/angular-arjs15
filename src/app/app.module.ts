import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CdkDrag } from '@angular/cdk/drag-drop';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';

@NgModule({
  imports: [CommonModule, BrowserModule, CdkDrag, HttpClientModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
