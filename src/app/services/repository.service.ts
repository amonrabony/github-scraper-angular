import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class RepositoryService {

  public static REPOSITORIES_URL = 'https://api.github.com/search/repositories';
  public static REPOSITORY_URL = 'https://api.github.com/repositories';

  constructor(private http: HttpClient) {}

  fetchRepositories(param) {
    return this.http.get(`${RepositoryService.REPOSITORIES_URL}?q=${param}`);
  }

  fetchRepository(param) {
    return this.http.get(`${RepositoryService.REPOSITORY_URL}/${param}`);
  }
}
