import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { MessageDetailComponent } from './pages/message-detail/message-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MessagesComponent,
    MessageDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
