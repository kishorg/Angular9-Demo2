import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {


  canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot):boolean {
    if(this.dataService.getUserName() !== '' && this.dataService.getUserName().length>8) {
    return true;
    } else {
      return false;
    }
  }

  constructor(private dataService: DataService) { }

}
