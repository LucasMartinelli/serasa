import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { fadeAnimation } from 'src/assets/animations/page-transition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation],
})
export class AppComponent {
  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    let data =
      this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
    return data;
  }
}
