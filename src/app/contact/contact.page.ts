/* eslint-disable @typescript-eslint/member-delimiter-style */
import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  title = 'Chef Jannick';
  cardContent = 'This is very usefull indeed';
  url='https://www.w3schools.com?name=ADAM';

  model: NgbDateStruct;
  date: {year: number, month: number};
  constructor(private calendar: NgbCalendar) {}

  selectToday() {
    this.model = this.calendar.getToday();
  }

  ngOnInit() {
  }

}
