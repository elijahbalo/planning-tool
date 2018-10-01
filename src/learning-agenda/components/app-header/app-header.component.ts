import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  browse;
  create;
  @Input()
  route;

  constructor(private router: Router) {}

  ngOnInit() {
    if (this.route == 'browse') {
      this.browse = true;
    } else {
      this.browse = true;
    }
  }

  navigateToBrowsePage() {
    this.router.navigate(['BrowsePage']);
  }
  navigateToCreatePage() {
    this.router.navigate(['CreatePage']);
  }
}
