import { Component } from '@angular/core';

import { Repository } from '../../interfaces/repository';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent {

  public data: Repository[] = [];

  constructor() {}

  ngOnInit() {}

  onHandle(event) {
    this.data = event;
  }
}
