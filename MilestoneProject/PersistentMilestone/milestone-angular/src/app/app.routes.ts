import { Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { ChatsComponent } from './chats/chats.component';
import { ListingsComponent } from './listings/listings.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RatingsComponent } from './ratings/ratings.component';

export const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'chats', component: ChatsComponent },
  { path: 'listings', component: ListingsComponent },
  { path: 'ratings', component: RatingsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
