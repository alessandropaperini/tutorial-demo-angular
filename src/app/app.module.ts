import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { MessageDetailComponent } from './pages/message-detail/message-detail.component';
import { FormsModule } from '@angular/forms';
import { CreateMessageDialogComponent } from './components/create-message-dialog/create-message-dialog.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MessagesComponent,
    MessageDetailComponent,
    CreateMessageDialogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
