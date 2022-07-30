import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  openState = false;

  constructor() {}

  ngOnInit() {}

  changeOpenStateDesktop() {
    this.openState = !this.openState;
  }
}
