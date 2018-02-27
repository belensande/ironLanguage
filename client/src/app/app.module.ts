import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SessionService } from "./services/session.service";
import { CollectionsService } from "./services/collections.service";
import { ProfileService } from "./services/profile.service";
import { RouterModule } from "@angular/router";
import { FileSelectDirective } from "ng2-file-upload";
import { routes } from './routes';
import { AppComponent } from './app.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { MyPrivatePageComponent } from './my-private-page/my-private-page.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileSearchComponent } from './profile-search/profile-search.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLoginComponent,
    AuthSignupComponent,
    MyPrivatePageComponent,
    FileSelectDirective,
    ProfileComponent,
    ProfileSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService, CollectionsService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
