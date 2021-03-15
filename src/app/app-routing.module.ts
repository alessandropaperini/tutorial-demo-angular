import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './pages/login/login.component';
import { MessageDetailComponent } from './pages/message-detail/message-detail.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { AuthenticationGuard } from './services/guards/authentication.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: NavigationComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: '',
        component: MessagesComponent
      },
      {
        path: 'message/:id',
        component: MessageDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
