import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GToolbarComponent } from './g-toolbar/g-toolbar.component';
import { FormsComponent, } from './forms/forms.component';

import { MatToolbarModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatTabsModule, MatInputModule } from '@angular/material';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular5-social-login";

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataService } from './common/data.service';
import { AgmCoreModule } from '@agm/core';

const appRoutes: Routes = [
  { path: 'login', component: FormsComponent },
  { path: 'home', component: HomeComponent }
];

// configs
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("136963488307-mvif0uhuck85ldeimuo5hjr5vrop11de.apps.googleusercontent.com")
      }
    ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    GToolbarComponent,
    FormsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatTabsModule,
    MatInputModule,
    SocialLoginModule,
    RouterModule.forRoot(
      appRoutes
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBSEW-ZHLjieAPJPHGg0cHJT6UESGqgJPY',
      libraries: ["places"]
    })
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  },
  DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
