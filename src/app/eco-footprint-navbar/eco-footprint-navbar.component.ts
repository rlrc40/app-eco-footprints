import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

  import { AuthService } from '../service/auth.service';

@Component({
  selector: 'eco-footprint-navbar',
  templateUrl: './eco-footprint-navbar.component.html',
  styleUrls: ['./eco-footprint-navbar.component.scss']
})
export class EcoFootprintNavbarComponent implements OnInit, OnDestroy {
  loggedIn:boolean = false;
  loggedInSubscription: Subscription ;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loggedInSubscription = this.authService.isAuthenticate().subscribe(
      (authenticated: boolean) => this.loggedIn = authenticated
    );
  }

  ngOnDestroy(): void {
    this.loggedInSubscription.unsubscribe();
  }

  handleLogout() {
    this.authService.logout();
  }
}
