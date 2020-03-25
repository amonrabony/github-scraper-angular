import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';

import { Repository } from '../../interfaces/repository';
import { RepositoryService } from "../../services/repository.service";

@Component({
  selector: 'app-repository',
  templateUrl: 'repository.component.html',
  styleUrls: ['repository.component.scss']
})
export class RepositoryComponent {

  public loading: boolean = false;
  public id;
  public model: Repository;

  constructor(
    private route: ActivatedRoute,
    private repoService: RepositoryService,
    private location: Location,
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.loading = true;
    this.model = null;

    this.repoService.fetchRepository(this.id)
      .subscribe(
        (success: any) => {
          this.loading = false;
          this.model = success;
        },
        error => {
          this.loading = false;
        },
        () => {
        }
      );
  }

  goBack($event) {
    $event.preventDefault();
    this.location.back();
  }
}
