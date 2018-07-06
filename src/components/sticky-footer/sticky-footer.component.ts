import { Component, OnInit, Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sticky-footer',
  templateUrl: './sticky-footer.component.html',
  styleUrls: ['./sticky-footer.component.scss']
})
export class StickyFooterComponent implements OnInit {

@Input() page:string;

  constructor(private router: Router,
    private route:ActivatedRoute) {


     }
      
  ngOnInit() {
  }
  navigate(){
    this.router.navigate([this.page]);
    
  }
}
