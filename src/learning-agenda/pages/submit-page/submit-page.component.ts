import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-page',
  templateUrl: './submit-page.component.html',
  styleUrls: ['./submit-page.component.scss']
})
export class SubmitPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.setItem('submit', JSON.stringify(true));
    localStorage.setItem('landing', JSON.stringify(false));
    localStorage.setItem('design', JSON.stringify(false));
    localStorage.setItem('confirm', JSON.stringify(false));
  }

}
