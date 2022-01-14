import { Injectable } from '@angular/core';
import { Observable, observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  teller = 0;

  constructor() { }

  getTeller(): Observable<number>{
    return of(this.teller);
  }

  add(){
    this.teller++;
  }


}
