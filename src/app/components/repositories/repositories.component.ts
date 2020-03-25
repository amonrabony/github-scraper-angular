import { Component, OnInit, Input } from '@angular/core';

import { Repository } from '../../interfaces/repository';

@Component({
  selector: 'app-repositories',
  templateUrl: 'repositories.component.html',
  styleUrls: ['repositories.component.scss']
})
export class RepositoriesComponent {

  private _data: Repository[];
  public displayedColumns: string[] = ['index', 'full_name', 'stargazers_count', 'open_issues'];

  @Input() set data(value: Repository[]) {
    this._data = value;
  }

  get data(): Repository[] {
    return this._data;
  }

  constructor() {}

  ngOnInit() {}
}
