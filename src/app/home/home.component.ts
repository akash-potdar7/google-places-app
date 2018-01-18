import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { DataService } from '../common/data.service';
import { AuthService, GoogleLoginProvider } from 'angular5-social-login';
import { Router } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule, MapsAPILoader, AgmMap } from '@agm/core';
import { } from '@types/googlemaps';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any;

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public searchKey: string;

  @ViewChild('search') searchElementRef: ElementRef;

  constructor(
    private dataService: DataService,
    private googleAuthService: AuthService,
    private router: Router,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  ngOnInit() {
    this.dataService.obj.subscribe(userData => {
      return this.user = userData;
    });

    this.latitude = 17.3390841;
    this.longitude = 76.8049206;
    this.searchControl = new FormControl();

    this.setCurrentPosition();
     this.mapsAPILoader.load().then(
      () => {
        let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, { types: ["geocode"] });

        autocomplete.addListener('place_changed', () => {
          this.ngZone.run(() => {
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            console.log(place);
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
            this.latitude = place.geometry.location.lat();
            this.longitude = place.geometry.location.lng();
             this.zoom = 14;
          });
        })
      }
    );
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (postion) => {
          this.latitude = postion.coords.latitude;
          this.longitude = postion.coords.longitude;
          this.zoom = 12;
        }
      );
    }
  }

  signOut() {
    console.log('signOut()');
    this.googleAuthService.signOut().then(
      () => {
        this.router.navigate(['/login']);
        console.log("user logged out.")
      }
    ).catch(
      () => { console.log('failed to logout') }
      );
  }

}
