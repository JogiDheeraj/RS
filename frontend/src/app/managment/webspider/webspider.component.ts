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

  displayedColumns = ['jobID', 'created', 'started', 'ended', 'state', 'options'];

  jobs;

  constructor(
    public webspiderService: WebSpiderService,
    public webSocketService: WebSocketService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.pullSpiders();
    this.webSocketService.initializeWebSocketConnection(
      "http://localhost:8080/ws", 
      this.changeStatus
    )
  }

  public endJob(jobID: string) {
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
  
  private changeStatus(message: Job) {
    console.log(message);
  }

  public strartJob(jobID: string) {
    this.webspiderService.start(jobID);
  }

  public newSpider(name: string) {
    console.log(name)
    this.webspiderService.new(name);
    this.pullSpiders();
  }

  private pullSpiders() {
    this.webspiderService.getAll()
      .subscribe(results => {
        this.jobs = results;
      });
  }
}
