import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-confirm-page',
  templateUrl: './confirm-page.component.html',
  styleUrls: ['./confirm-page.component.scss']
})


export class ConfirmPageComponent implements OnInit {
  page="SubmitPage"


  constructor( private router: Router,
    private route:ActivatedRoute) { 
    
  
  }

  ngOnInit() {
  }

}
