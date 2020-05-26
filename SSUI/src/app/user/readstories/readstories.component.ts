import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Story } from '../../models/story';
import { AngularCsv } from 'angular7-csv';

@Component({
  selector: 'app-readstories',
  templateUrl: './readstories.component.html',
  styleUrls: ['./readstories.component.css']
})
export class ReadstoriesComponent implements OnInit {


  constructor(private service: ApiService) { }
  csvOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'List Of Approved Stories',
    useBom: true,
    noDownload: false,
    headers: ["ssId", "ssTitle", "ssDescription","Id"]
  };
  ngOnInit() {
    this.getStoriesByStatus(true);
  }

  stories: Story[] = [];

 reslut = [];
  downloadCSV() {
    this.reslut = this.stories.map(x => ({"ssId":x.ssId, "ssTitle":x.ssTitle, "ssDescription":x.ssDescription,"Id":x.id}));
    new AngularCsv(this.reslut, "Stories", this.csvOptions);
  }

  getStoriesByStatus(isApproved: boolean) {
    return this.service.getStoriesByStatus(isApproved).subscribe(res => {
      this.stories = res;
    });
  }

like(story: Story) {
    this.stories.find(x => x.ssId == story.ssId).like
      = this.stories.find(x => x.ssId == story.ssId).like + 1;
  }

}
