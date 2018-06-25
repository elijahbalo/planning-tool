import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
 showIamge=false;
 showTools=false;
 showDescription=false;
 adjust=false;
 view=false;
 display=false;

  constructor( private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
  }
  navigateToDesign(){
    this.router.navigateByUrl('DesignPage');
  }
}
