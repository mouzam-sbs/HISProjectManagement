import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { monkeyPatchChartJsTooltip, monkeyPatchChartJsLegend, Label, SingleDataSet } from 'ng2-charts';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { ApiService } from '../services/api.service';
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private local: LocalStorageService, private authService: AuthService, private service: ApiService, private router: Router) {
    //if (this.authService.isAuthenticated) {
    //  this.router.navigate(['./login']);
    //}
  }


  imageToShow: any;

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Pending', 'Approved'];
  public pieChartData: SingleDataSet = [0, 0];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };
  public barChartLabels: Label[] = ['Short Stories'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [0], label: 'Pending' },
    { data: [0], label: 'Approved' }
  ];

  pending: number = 0;
  approved: number = 0;
  ngOnInit() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
    debugger;
    if (this.authService.isAuthenticated) {
      this.authService.getProfilePic().subscribe(res => {

        let reader = new FileReader();

        reader.addEventListener("load", x => { this.imageToShow = reader.result; });

        reader.readAsDataURL(res);
      });

      this.service.getStories().subscribe(res => {
        if (this.local.get("user").role == 'Admin') {
          this.pending = res.filter(x => x.isApproved == false).length;
          this.approved = res.filter(x => x.isApproved == true).length;
        }
        else {
          this.pending = res.filter(x => x.isApproved == false && x.id == this.local.get("user").id).length;
          this.approved = res.filter(x => x.isApproved == true && x.id == this.local.get("user").id).length;
        }

        this.pieChartData = [this.pending, this.approved];
        this.barChartData = [
          { data: [this.pending], label: 'Pending' },
          { data: [this.approved], label: 'Approved' }
        ];
      });

    }
  }
}
