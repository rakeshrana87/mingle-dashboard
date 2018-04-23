import { Component, OnInit } from '@angular/core';

const TEAMS = [
  "SDP Team 1",
  "SDP Team 2",
  "SDP Team 3",
  "SDP Team 5",
  "SDP Team 6",
  "SDP Team 7",
  "SDP Team 8",
  "SDP Team 9",
  "SDP Team 10",
  "SDP Team 11",
  "SDP Team 12",
  "SDP Team 13",
  "SDP Team 14",
  "SDP Team 15"
];

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})

export class StatusComponent implements OnInit {

  teams: string[] = TEAMS;
  constructor() { }

  ngOnInit() {
  }

}
