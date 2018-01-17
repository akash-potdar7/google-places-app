import { Component, OnInit } from '@angular/core';
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

  constructor(private googleAuthService: AuthService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    console.log('form');
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
