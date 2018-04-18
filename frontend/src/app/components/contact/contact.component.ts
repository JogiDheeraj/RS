import {Contact} from '../../model/model.contact';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact=new Contact();
  
  constructor() {}

  ngOnInit() {
  }

}
