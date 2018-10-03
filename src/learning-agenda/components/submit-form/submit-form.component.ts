import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LandingPageComponent } from '../../pages/landing-page/landing-page.component';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss']
})
export class SubmitFormComponent implements OnInit {
  @Output()
  userData: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  emplData: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  nxt: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  prev: EventEmitter<any> = new EventEmitter<any>();
  firstName = ''
  lastName = ''
  email = ''
  phone = ''
  @Input() lang
  @Input() news = false
  @Input() consent = false
  shouldSendNews


  @Input() fname
  @Input() lname
  @Input() mail
  @Input() phn


  @Input() enabled
  constructor() { }

  ngOnInit() {
    console.log(this.fname, this.lname, this.mail, this.phn, this.consent, this.news, this.lang)
  }




  changeNews() {

  }


  next() {
    if (this.news == true) {
      this.shouldSendNews = "wants to be notified with newsletters"
    }
    else {
      this.shouldSendNews = "does not want to be notified"
    }
    let usrData = {
      subject: 'New User Data',
      from_name: 'History Museum',
      from_email: 'elijah.balogun@museedelhistoire.ca',
      to: this.email,
      message: 'New user alert received from ' + this.firstName + '' + this.lastName + '\n email address is: ' + this.email + '\n phone:' + this.phone + '\n group language:' + this.lang + '\n' + this.shouldSendNews,
      AKEY: 'uK21MLM0A2'
    }

    let day = JSON.parse(localStorage.getItem('day'))
    let grade = JSON.parse(localStorage.getItem('f_grade'))
    let itn = JSON.parse(localStorage.getItem('itn_En'))


    let data = {
      subject: 'Your Itinerary',
      from_name: 'History Museum',
      from_email: 'elijah.balogun@museedelhistoire.ca',
      to: this.email,
      message: 'you have a ' + day + ' itinerary ' + '\n for the grade ' + grade + this.convertItn(itn),
      AKEY: 'uK21MLM0A2'
    }

    this.emplData.emit(usrData)
    this.userData.emit(data)





    this.nxt.emit(true);
    this.prev.emit('step5');
  }

  checkForm() {
    localStorage.setItem('fname', JSON.stringify(this.firstName))
    localStorage.setItem('lname', JSON.stringify(this.lastName))
    localStorage.setItem('email', JSON.stringify(this.email))
    localStorage.setItem('phone', JSON.stringify(this.phone))
    localStorage.setItem('langs', JSON.stringify(this.lang))
    localStorage.setItem('news', JSON.stringify(this.news))
    localStorage.setItem('consent', JSON.stringify(this.consent))


    if (this.firstName == '' || this.lastName == '' || this.email == '' || this.lang == '') {

      this.enabled = false
    }
    else {
      console.log("first")
      this.enabled = true
    }


  }


  convertItn(itn) {
    let str = '\nyour itineraries:'
    for (var i = 0; i < itn.length; i++) {
      str += '\n title: ' + itn[i].name
    }
    return str
  }




  Lang() {

  }
  setnews() {

  }
  setConsent() {

  }
}
