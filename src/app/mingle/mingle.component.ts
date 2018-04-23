import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from '@angular/common/http';

declare var require: any;

let parseString = require('xml2js').parseString;

const auth = 'Basic ' + btoa("" + ":" + "");

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'text/xml',
    'Authorization': auth
  })
};  

@Component({
  selector: 'app-mingle',
  templateUrl: './mingle.component.html',
  styleUrls: ['./mingle.component.css']
})
export class MingleComponent implements OnInit {

  isDataAvailable:boolean = false;
  response: Observable<any>;
  body: any;
  project: any = {};
  cards: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {

    console.log("Inside mingle init");
    this.getProject();
    this.getCards();
  }

  getCards() {
    this.http.get("https://mingle.epk.ericsson.se/api/v2/projects/classic_sdp/cards.xml", {
      headers: httpOptions.headers,
      responseType: 'text'
    }).subscribe(data => {
      this.body = this.convertToJson(data);
      this.cards = this.body.cards.card;
      console.log(this.body);
      this.isDataAvailable = true;      
    })
  }

  getProject() {
    this.http.get("https://mingle.epk.ericsson.se/api/v2/projects/classic_sdp.xml", {
      headers: httpOptions.headers,
      responseType: 'text'
    }).subscribe(data => {
      this.body = this.convertToJson(data);
      this.project = this.body.project;
      console.log(this.project);
    });

  }

  public convertToJson(data: string): Object {

    let res;
    // setting the explicitArray option prevents an array structure
    // where every node/element is always wrapped inside an array
    // set it to true, and see for yourself what changes
    parseString(data, { explicitArray: false }, (error, result) => {

      if (error) {
        throw new Error(error);
      } else {
        res = result;
      }

    });

    return res;

  }

}
