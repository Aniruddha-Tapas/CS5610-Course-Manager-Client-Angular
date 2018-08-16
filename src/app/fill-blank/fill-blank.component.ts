import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fill-blank',
  templateUrl: './fill-blank.component.html',
  styleUrls: ['./fill-blank.component.css']
})
export class FillBlankComponent implements OnInit {

  @Input() question;
  constructor() {
  }

  ngOnInit() {
    this.question.fillBlanksAnswer = {};
  }

}
