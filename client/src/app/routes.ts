import { Routes } from '@angular/router';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { MyPrivatePageComponent } from './my-private-page/my-private-page.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileSearchComponent } from './profile-search/profile-search.component';
import { RelationsComponent } from './relations/relations.component';

export const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'private', component: MyPrivatePageComponent },
  { path: 'login', component: AuthLoginComponent },
  { path: 'signup', component: AuthSignupComponent },
  { path: 'edit', component: AuthSignupComponent },
  { path: 'search', component: ProfileSearchComponent },
  { path: 'relations', component: RelationsComponent },
  { path: '**', redirectTo: 'private' }
];
