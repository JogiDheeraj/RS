import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  
  SeoName:string;
  
  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.SeoName = this.route.snapshot.paramMap.get('SeoName');

  }

}
