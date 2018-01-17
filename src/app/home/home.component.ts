import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/data.service';
import { AuthService, GoogleLoginProvider } from 'angular5-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any;

  lat: number = 17.3390841;
  lng: number = 76.8049206;

  constructor(private dataService: DataService, private googleAuthService: AuthService, private router: Router) { 
    console.log('constructor of HomeComponent');
  }

  ngOnInit() {
    console.log('ngOnInit of HomeComponent');
    this.dataService.obj.subscribe(userData => {
      return this.user = userData;
    });
  }

  signOut() {
    console.log('signOut()');
    this.googleAuthService.signOut().then(
      ()=>{
        this.router.navigate(['/login']);
        console.log("user logged out.")}
    ).catch(
      ()=>{console.log('failed to logout')} 
    );
  }


}
