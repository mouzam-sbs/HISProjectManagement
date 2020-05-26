import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Story } from '../models/story';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  baseUrl: string = "http://localhost:7000/api/stories";

  constructor(private api: HttpClient) { }

  postStory(story: Story) {
    return this.api.post<Story>(this.baseUrl, story);
  }

  getStoriesByStatus(isApproved: boolean) {
    return this.api.get<Story[]>(this.baseUrl + "/getStoriesByStatus/" + isApproved);
  }

  approveStory(story: Story) {
    return this.api.put<Story>(this.baseUrl + "/approveStory/" + story.ssId, story);
  }

  getStoriesByUserId(id: string) {
    return this.api.get<Story[]>(this.baseUrl + "/getStoriesByUserId/" + id);
  }

getStories() {
    return this.api.get<Story[]>(this.baseUrl);
  }
}
