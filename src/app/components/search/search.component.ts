import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Repository } from '../../interfaces/repository';
import { RepositoryService } from "../../services/repository.service";

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.scss']
})
export class SearchComponent {

  @Output() onHandle = new EventEmitter<Repository[]>();

  public searchForm = this.fb.group({
    search: ['', Validators.required],
  });

  public loading: boolean = false;
  public data: Repository[] = [];

  constructor(private fb: FormBuilder, private repoService: RepositoryService) {}

  ngOnInit() {}

  hasError(controlName: string, errorName: string) {
    return this.searchForm.controls[controlName].hasError(errorName);
  }

  send() {
    if (this.searchForm.valid) {
      this.loading = true;

      this.searchForm.controls.search.disable();

      this.repoService.fetchRepositories(this.searchForm.value.search)
        .subscribe(
          (success: any) => {
            this.loading = false;
            this.searchForm.controls.search.enable();
            this.data = success.items;
            this.onHandle.emit(this.data)
          },
          error => {
            this.loading = false;
            this.searchForm.controls.search.enable();
          },
          () => {
          }
        );
    }
  }

  reset() {
    this.searchForm.reset();
    this.onHandle.emit([])
  }
}
