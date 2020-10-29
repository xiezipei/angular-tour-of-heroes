import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = '英雄指南';
  subscription: Subscription;

  constructor(
    private router: Router
  ) {
    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // this.init();
        console.log(event);
      }
    });
  }
}
