import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any;

  constructor(private dataService: DataService) { 
    console.log('constructor of HomeComponent');
  }

  ngOnInit() {
    console.log('ngOnInit of HomeComponent');
    this.dataService.obj.subscribe(userData => {
      console.log(userData);
      return this.user = userData;
    });
  }

}
