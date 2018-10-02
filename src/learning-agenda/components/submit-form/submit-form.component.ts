import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss']
})
export class SubmitFormComponent implements OnInit {
  firstName
  lastName
  email
  phone
  lang
  news
  consent
  shouldSendNews

  constructor() { }

  ngOnInit() {
  }
  postUserData() {
    if (this.news == true) {
      this.shouldSendNews = "wants to be notified with newsletters"
    }
    else {
      this.shouldSendNews = "does not want to be notified"
    }
    let userData = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      lang: this.lang,
      news: this.shouldSendNews
    }
    let data = {
      subject: 'New User Data',
      from_name: 'History Museum',
      from_email: 'elijah.balogun@museedelhistoire.ca',
      to: this.email,
      message: 'New user alert received from ' + this.firstName + '' + this.lastName + '\n email address is: ' + this.email + '\n phone:' + this.phone + '\n group language:' + this.lang + '\n' + this.shouldSendNews,
      AKEY: 'uK21MLM0A2'
    }
    console.log(data)
    var urlEncodedData = "";
    var urlEncodedDataPairs = [];
    var name

    for (name in data) {
      urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
    }

    // Combine the pairs into a single string and replace all %-encoded spaces to 
    // the '+' character; matches the behaviour of browser form submissions.
    urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');


    var http = new XMLHttpRequest();
    var url = '/form-util/';
    var params = data;
    http.open('POST', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function () {//Call a function when the state changes.
      if (http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
      }
    }
    http.send(urlEncodedData);
  }

  convertItn(itn) {
    let str = '\nyour itineraries:'
    for (var i = 0; i < itn.length; i++) {
      str += '\n title: ' + itn[i].name
    }
    return str
  }

  sendUserEmail() {
    let day = JSON.parse(localStorage.getItem('day'))
    let grade = JSON.parse(localStorage.getItem('f_grade'))
    let itn = JSON.parse(localStorage.getItem('itn_En'))
    console.log(day)
    console.log(grade)
    console.log(itn)

    var div = document.getElementById('custom-form');


    let data = {
      subject: 'Your Itinerary',
      from_name: 'History Museum',
      from_email: 'elijah.balogun@museedelhistoire.ca',
      to: this.email,
      message: 'you have a ' + day + ' itinerary ' + '\n for the grade ' + grade + this.convertItn(itn),
      AKEY: 'uK21MLM0A2'
    }
    console.log(data)
    var urlEncodedData = "";
    var urlEncodedDataPairs = [];
    var name

    for (name in data) {
      urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
    }

    // Combine the pairs into a single string and replace all %-encoded spaces to 
    // the '+' character; matches the behaviour of browser form submissions.
    urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');


    var http = new XMLHttpRequest();
    var url = '/test.php';
    var params = data;
    http.open('POST', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function () {//Call a function when the state changes.
      if (http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
      }
    }
    http.send(urlEncodedData);
  }






  changeLang() {
    console.log(this.firstName, this.lastName, this.email, this.phone)
    console.log(this.lang)


  }
  changeNews() {
    console.log(this.news)
  }
  changeConsent() {
    console.log(this.consent)
  }
  setLang() {

  }
  setnews() {

  }
  setConsent() {

  }
}
