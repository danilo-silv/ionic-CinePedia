import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-illustration',
  templateUrl: './feedback-illustration.component.html',
  styleUrls: ['./feedback-illustration.component.scss'],
})
export class FeedbackIllustrationComponent implements OnInit {
  @Input() public messsage: string;
  @Input() public type: string;

  constructor() {}

  ngOnInit() {}
}
