import { Component, OnInit, NgZone } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../model/user';
import { AuthService, GoogleLoginProvider } from 'angular5-social-login';
import { Router } from '@angular/router';
import { DataService } from '../common/data.service';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  user: any = {};

  public formControlEmail = new FormControl('',[ Validators.required ]);
  public formControlPassword = new FormControl('',[ Validators.required ]);

  constructor(private googleAuthService: AuthService, private ngZone: NgZone, private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }

  onSignIn(googleUser) {
    debugger
    console.log(googleUser);
    /* let profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present. */
  }

  googleSignIn() {
    let googleProvider = GoogleLoginProvider.PROVIDER_ID;
    if(googleProvider) {
      this.googleAuthService.signIn(googleProvider).then(
        (userData) => {
          // if userData route to welcome page.
          console.log(" sign in data : " , userData);
          this.dataService.setValue(userData);
          this.router.navigate(['/home']);
        }
      );
    }
  }

}
