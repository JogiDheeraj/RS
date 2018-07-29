import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import {WebSpiderService} from '../../services/webspider.service';
import {WebSocketService} from '../../services/websocket.service';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';

import {Job} from '../../model/model.job';

@Component({
  selector: 'app-webspider',
  templateUrl: './webspider.component.html',
  styleUrls: ['./webspider.component.css']
})
export class WebspiderComponent implements OnInit {

  selected: number;

  jobs: Array<Job>;

  jobsData: Array<Job>;

  constructor(
    public webspiderService: WebSpiderService,
    public webSocketService: WebSocketService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.pullSpiders();
    this.webSocketService.initConnection(
      "/task/task-state",
      this.changeStatus,
      this
    );
  }

  private changeStatus(message: Job, owner: WebspiderComponent) {
    for (let i = 0; i < owner.jobsData.length; i++) {
      owner.jobsData[i] =
        message.jobID === owner.jobsData[i].jobID
          ? message
          : owner.jobsData[i];
    }
  }
  
  private pullSpiders() {
    this.webspiderService.getAll()
      .subscribe(results => {
        this.jobs = results;
        this.jobsData = results;
      });
  }

  public setSelected(index: number) {
    if (this.selected === index) {
      this.selected = null;
    } else {
      this.selected = index;
    }
  }

  public startJob(jobID: string) {
    this.webspiderService.start(jobID);
  }

  public stopJob(jobID: string) {
    const dialogRef = this.dialog.open(
      ConfirmDialogComponent,
      {data: 'account-jobs.stopConfirmM'}
    );
    dialogRef.afterClosed().subscribe(dialogresult => {
      if (dialogresult) {
        this.webspiderService.stop(jobID);
      }
    });
  }

  public resumJob(jobID: string) {
    this.webspiderService.resum(jobID);
  }

  public newSpider(name: string) {
    console.log(name)
    this.webspiderService.new(name)
      .subscribe(result => {
        this.pullSpiders();
      });
  }

}
