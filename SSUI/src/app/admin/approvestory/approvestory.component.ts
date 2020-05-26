import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Story } from '../../models/story';

@Component({
  selector: 'app-approvestory',
  templateUrl: './approvestory.component.html',
  styleUrls: ['./approvestory.component.css']
})
export class ApprovestoryComponent implements OnInit {

  constructor(private service: ApiService) { }

  ngOnInit() {
    this.getStoriesByStatus(false);
  }

  stories: Story[] = [];

  getStoriesByStatus(isApproved: boolean) {
    return this.service.getStoriesByStatus(isApproved).subscribe(res => {
      this.stories = res;
    });
  }

approveStory(story: Story) {
    this.service.approveStory(story).subscribe(res => {
      alert("Story approved Successfully");
      this.getStoriesByStatus(false);
    });
  }

}
