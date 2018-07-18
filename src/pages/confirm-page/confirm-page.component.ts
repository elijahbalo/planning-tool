import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
//import * as nodemailer from 'nodemailer';

//declare var mail: any;

@Component({
  selector: 'app-confirm-page',
  templateUrl: './confirm-page.component.html',
  styleUrls: ['./confirm-page.component.scss']
})


export class ConfirmPageComponent implements OnInit {
  
  page="SubmitPage"
  number = localStorage.getItem('count');
  endpoint = 'https://your-project.cloudfunctions.net/httpEmail';
  constructor( private router: Router, 
    private route:ActivatedRoute, private http: HttpClient) { 
     //this.mailer.send();
  }

  ngOnInit() {
  }


  
  



}
