import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private src = new BehaviorSubject<any>(Object);
  public obj = this.src.asObservable();

  constructor() {
  }

  setValue(value: any) {
      this.src.next(value);
  }

}
