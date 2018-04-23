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
  selector: 'app-mingle-pages',
  templateUrl: './mingle-pages.component.html',
  styleUrls: ['./mingle-pages.component.css']
})
export class MinglePagesComponent implements OnInit {

  isDataAvailable:boolean = false;
  response: Observable<any>;
  body: any;
  pages: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPages();
  }

  getPages() {
    this.http.get("https://mingle.epk.ericsson.se/api/v2/projects/classic_sdp/wiki.xml", {
      headers: httpOptions.headers,
      responseType: 'text'
    }).subscribe(data => {
      this.body = this.convertToJson(data);
      this.pages = this.body.pages.page;
      console.log(this.pages);
      this.isDataAvailable = true;      
    })
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
