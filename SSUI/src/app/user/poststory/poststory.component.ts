import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Story } from '../../models/story';
import { ApiService } from '../../services/api.service';
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-poststory',
  templateUrl: './poststory.component.html',
  styleUrls: ['./poststory.component.css']
})
export class PoststoryComponent implements OnInit {
  stories: Story[] = [];
  approvedStories: Story[]=[];
  pendingStories: Story[]=[];
  postStoryForm: FormGroup;
  story: Story = new Story();
  constructor(private local: LocalStorageService,private fb: FormBuilder, private service:ApiService) { }

  ngOnInit() {
    this.getStoriesByUserId(this.local.get("user").id);
    this.postStoryForm = this.fb.group(
      {
        ssTitle: ['', [Validators.required]],
        ssDescription: ['', [Validators.required]]
      });
  }

  getStoriesByUserId(id: string) {
    this.service.getStoriesByUserId(id).subscribe(res => {
      this.stories = res;
      debugger;
      this.approvedStories = this.stories.filter(x => x.isApproved === true);
      this.pendingStories = this.stories.filter(x => x.isApproved === false);
    });
  }

  get ssTitle() {
    return this.postStoryForm.get('ssTitle');
  }

  get ssDescription() {
    return this.postStoryForm.get('ssDescription');
  }
  serverErrors = [];
  showSuccessMsg: boolean = false;
  showFailureMsg: boolean = false;
   postStory() {
    if (this.postStoryForm.valid) {
      this.service.postStory(this.story).subscribe(res => {
        this.postStoryForm.reset();
        this.showFailureMsg = false;
        this.showSuccessMsg = true;
        setTimeout(() => {
          this.showSuccessMsg = false;
        }, 2000);
        this.getStoriesByUserId(this.local.get('user').id);
      }, err => {
        this.serverErrors = [];
        if (err.status === 400) {
          Object.keys(err.error).forEach(key => {
            this.serverErrors.push(err.error[key]["key"]);
          });
        }
        else if (err.status === 500) {
          console.log(err);
          this.serverErrors.push(err.error);
        }
        this.showFailureMsg = true;
        this.showSuccessMsg = false;
      });
    }
  }

}
