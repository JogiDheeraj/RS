
import { Job } from '../../model/model.job';
import {Component, OnInit} from '@angular/core';

import {WebSpiderService} from '../../services/webspider.service';

@Component({
  selector: 'app-webspider',
  templateUrl: './webspider.component.html',
  styleUrls: ['./webspider.component.css']
})
export class WebspiderComponent implements OnInit {
  
  displayedColumns = ['jobID', 'created', 'started', 'ended', 'state', 'options'];
  
  jobs;
  
  constructor(public webspiderService: WebSpiderService) {}

  ngOnInit() {
    this.webspiderService.getAll()
      .subscribe(results => {
        this.jobs = results;
      });
  }

}
