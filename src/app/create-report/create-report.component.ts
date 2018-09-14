import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { saveAs } from 'file-saver/FileSaver';

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
//let parseString = require('xml2js').parseString;

const auth = 'Basic ' + btoa("esmapen" + ":" + "Sweety1@3");

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'text/ppt',
    'Authorization': auth,
    'Accept' : 'application/pptx'
  })
};
@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent implements OnInit {

  teams: string[] = TEAMS;
  constructor(private http: HttpClient) { }
 
  ngOnInit() {
  }
  myFunction(){
    console.log("hello.....");

      this.http.get("http://localhost:8080/ppt/downloadFile", {
        headers: httpOptions.headers,
        responseType: 'text'
      }).toPromise()
      .then(response => this.saveToFileSystem(response));
  
   
  }
  
 
  private saveToFileSystem(response) {
    console.log(response.headers);
     var mediaType = 'application/ppt';
  //  const contentDispositionHeader: string = response.headers.get('Content-Disposition');
  //  const parts: string[] = contentDispositionHeader.split(';');
   // const filename = parts[1].split('=')[1];
    var filename = 'test.ppt';
    const blob = new Blob([response._body], { type: mediaType });
    saveAs(blob, filename);
  }
}
