(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/landing-page/landing-page.component */ "./src/pages/landing-page/landing-page.component.ts");
/* harmony import */ var _pages_design_page_design_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/design-page/design-page.component */ "./src/pages/design-page/design-page.component.ts");
/* harmony import */ var _pages_confirm_page_confirm_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/confirm-page/confirm-page.component */ "./src/pages/confirm-page/confirm-page.component.ts");
/* harmony import */ var _pages_submit_page_submit_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/submit-page/submit-page.component */ "./src/pages/submit-page/submit-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: 'LandingPage', pathMatch: 'full' },
    { path: 'LandingPage', component: _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPageComponent"] },
    { path: 'DesignPage', component: _pages_design_page_design_page_component__WEBPACK_IMPORTED_MODULE_3__["DesignPageComponent"] },
    { path: 'ConfirmPage', component: _pages_confirm_page_confirm_page_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmPageComponent"] },
    { path: 'SubmitPage', component: _pages_submit_page_submit_page_component__WEBPACK_IMPORTED_MODULE_5__["SubmitPageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div>\n        <ul>\n                <li *ngFor=\"let item of items | async\">\n                     <div *ngFor=\"let list of item.activities\">{{list.name| json}}</div> \n             \n                    \n                </li>\n            </ul>\n </div>   -->\n\n<!--  <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" placeholder=\"Title..\">\n <Form>\n <input type=\"radio\" [(ngModel)]=\"length\" value=\"Half-Day...\" name=\"length\" placeholder=\"Title..\">\n <input type=\"radio\" [(ngModel)]=\"length\" value=\"Full-Day...\" name=\"length\" placeholder=\"Title..\">\n </Form>\n<textarea [(ngModel)]=\"content\" name=\"content\" placeholder=\"Content..\"></textarea>\n<input type=\"submit\" value=\"Add a Post\" (click)=\"addPost()\">  -->\n<!--outlet for router navigation--> \n<!-- \n\n<div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\" style=\"margin:18%;\">\n        <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\" >\n<div style=\"border-radius:100%; background-color:black; height:30px; width:30px; color:white; box-shadow:5px 5px blue\">1</div> <div>DESIGN</div>\n  <div style=\"border-radius:100%; background-color:red; height:30px; width:30px; color:white;\">2</div> <div>CONFIRM</div>\n         \n        </div>\n      </div>\n -->\n\n\n \n<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\n  position: relative;\n  height: 100%; }\n\nbody {\n  background: #eee;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  color: #000;\n  margin: 0;\n  padding: 0; }\n\n.swiper-container {\n  width: 100%;\n  height: 100%; }\n\n.swiper-slide {\n  text-align: center;\n  font-size: 18px;\n  background: #fff;\n  /* Center slide text vertically */\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(db) {
        this.db = db;
        this.items = db.collection('/itineraries').snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
    }
    AppComponent.prototype.addPost = function () {
        this.db.collection('/itineraries').add({ 'name': this.title, 'description': this.content, 'length': this.length });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/card/card.component */ "./src/components/card/card.component.ts");
/* harmony import */ var _components_empty_card_empty_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/empty-card/empty-card.component */ "./src/components/empty-card/empty-card.component.ts");
/* harmony import */ var _components_build_build_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/build/build.component */ "./src/components/build/build.component.ts");
/* harmony import */ var _components_activity_activity_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/activity/activity.component */ "./src/components/activity/activity.component.ts");
/* harmony import */ var _components_activity_card_activity_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/activity-card/activity-card.component */ "./src/components/activity-card/activity-card.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/header/header.component */ "./src/components/header/header.component.ts");
/* harmony import */ var _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/confirm/confirm.component */ "./src/components/confirm/confirm.component.ts");
/* harmony import */ var _components_sticky_footer_sticky_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/sticky-footer/sticky-footer.component */ "./src/components/sticky-footer/sticky-footer.component.ts");
/* harmony import */ var _components_confirm_sticker_confirm_sticker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/confirm-sticker/confirm-sticker.component */ "./src/components/confirm-sticker/confirm-sticker.component.ts");
/* harmony import */ var _components_warning_warning_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/warning/warning.component */ "./src/components/warning/warning.component.ts");
/* harmony import */ var _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/calendar/calendar.component */ "./src/components/calendar/calendar.component.ts");
/* harmony import */ var _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/timeline/timeline.component */ "./src/components/timeline/timeline.component.ts");
/* harmony import */ var _components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/main-header/main-header.component */ "./src/components/main-header/main-header.component.ts");
/* harmony import */ var _components_main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/main-footer/main-footer.component */ "./src/components/main-footer/main-footer.component.ts");
/* harmony import */ var _components_submit_form_submit_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/submit-form/submit-form.component */ "./src/components/submit-form/submit-form.component.ts");
/* harmony import */ var _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../pages/landing-page/landing-page.component */ "./src/pages/landing-page/landing-page.component.ts");
/* harmony import */ var _pages_confirm_page_confirm_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../pages/confirm-page/confirm-page.component */ "./src/pages/confirm-page/confirm-page.component.ts");
/* harmony import */ var _pages_design_page_design_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../pages/design-page/design-page.component */ "./src/pages/design-page/design-page.component.ts");
/* harmony import */ var _pages_submit_page_submit_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../pages/submit-page/submit-page.component */ "./src/pages/submit-page/submit-page.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-simple-slideshow */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.es5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"],
                _components_empty_card_empty_card_component__WEBPACK_IMPORTED_MODULE_4__["EmptyCardComponent"],
                _components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"],
                _components_build_build_component__WEBPACK_IMPORTED_MODULE_5__["BuildComponent"],
                _components_activity_activity_component__WEBPACK_IMPORTED_MODULE_6__["ActivityComponent"],
                _components_activity_card_activity_card_component__WEBPACK_IMPORTED_MODULE_7__["ActivityCardComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmComponent"],
                _components_sticky_footer_sticky_footer_component__WEBPACK_IMPORTED_MODULE_10__["StickyFooterComponent"],
                _components_confirm_sticker_confirm_sticker_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmStickerComponent"],
                _components_warning_warning_component__WEBPACK_IMPORTED_MODULE_12__["WarningComponent"],
                _components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_15__["MainHeaderComponent"],
                _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_14__["TimelineComponent"],
                _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_13__["CalendarComponent"],
                _components_main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_16__["MainFooterComponent"],
                _components_submit_form_submit_form_component__WEBPACK_IMPORTED_MODULE_17__["SubmitFormComponent"],
                _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_18__["LandingPageComponent"],
                _pages_design_page_design_page_component__WEBPACK_IMPORTED_MODULE_20__["DesignPageComponent"],
                _pages_confirm_page_confirm_page_component__WEBPACK_IMPORTED_MODULE_19__["ConfirmPageComponent"],
                _pages_submit_page_submit_page_component__WEBPACK_IMPORTED_MODULE_21__["SubmitPageComponent"]
            ],
            imports: [
                ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_24__["SlideshowModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_27__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_27__["ReactiveFormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_29__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_25__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_28__["AngularFirestoreModule"]
            ],
            providers: [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_28__["AngularFirestoreModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/components/activity-card/activity-card.component.html":
/*!*******************************************************************!*\
  !*** ./src/components/activity-card/activity-card.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n <div class=\"card-container\" (click)=\"changeItem(item)\">\n   \n      <img src=\"{{item.img}}\" alt=\"Random first slide\" class=\"img-responsive img-resize\">\n      <div class=\"tag\"> CURRENT SELECTION</div>\n      <div class=\"text\" >\n        <h5 style=\"font-size:12.5px; font-weight:bold;\">SPECIAL EXHIBITION</h5>\n        <h2  style=\"font-size:20px; font-weight:bold; margin-top:1%;\">{{item.name}}</h2>\n       \n   </div>\n\n </div>\n</div>"

/***/ }),

/***/ "./src/components/activity-card/activity-card.component.scss":
/*!*******************************************************************!*\
  !*** ./src/components/activity-card/activity-card.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-container {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #E0E0E0; }\n\n.img-resize {\n  height: 180px;\n  width: 100%; }\n\n.text {\n  position: absolute;\n  margin-left: 2%;\n  bottom: 2%;\n  font-size: 12.5px;\n  color: white; }\n\n.tag {\n  background-color: red;\n  font-size: 12.5px;\n  top: 0;\n  width: 35%;\n  margin: 0;\n  position: absolute;\n  height: 15%;\n  padding: 2%;\n  color: white; }\n"

/***/ }),

/***/ "./src/components/activity-card/activity-card.component.ts":
/*!*****************************************************************!*\
  !*** ./src/components/activity-card/activity-card.component.ts ***!
  \*****************************************************************/
/*! exports provided: ActivityCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityCardComponent", function() { return ActivityCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivityCardComponent = /** @class */ (function () {
    function ActivityCardComponent() {
        this.newItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.length = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ActivityCardComponent.prototype.ngOnInit = function () {
    };
    ActivityCardComponent.prototype.changeItem = function (event) {
        this.newItem.emit(event);
        this.length.emit(event.length);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActivityCardComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ActivityCardComponent.prototype, "newItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ActivityCardComponent.prototype, "length", void 0);
    ActivityCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activity-card',
            template: __webpack_require__(/*! ./activity-card.component.html */ "./src/components/activity-card/activity-card.component.html"),
            styles: [__webpack_require__(/*! ./activity-card.component.scss */ "./src/components/activity-card/activity-card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ActivityCardComponent);
    return ActivityCardComponent;
}());



/***/ }),

/***/ "./src/components/activity/activity.component.html":
/*!*********************************************************!*\
  !*** ./src/components/activity/activity.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!set\">\n<div  class=\"outer-flex\">\n  \n<div *ngIf=\"!edited\" style=\"margin-left:1%; width:7%; font-size:15px; font-weight:bold;\">\n\n        <img  *ngIf=\"selected\" src=\"../../assets/images/check.png\" class=\"icon\">\n  \n{{timeConvert(date[item.order])}}\n</div>\n\n<div *ngIf=\"edited\" style=\"margin-left:1%; width:7%; font-size:15px; font-weight:bold;\">\n\n    <img  *ngIf=\"selected\" src=\"../../assets/images/check.png\" class=\"icon\">\n\n{{timeConvert(selectedItem.time)}}\n</div>\n<div style=\"border-top-style:dashed; border-width:thin; border-color:grey; width:90%; align-self:center;\">\n \n</div>\n</div>\n\n\n<div class=\"flex-container\" *ngIf=\"swap || !display\">\n \n  <div *ngIf=\"showImage\" class=\"img-flex\"> \n <img class=\"img-responsive img-resize\" src=\"{{selectedItem.img}}\">\n  </div>\n  <div *ngIf=\"!adjust\" class=\"middle-flex\" style=\"width:60%;\">\n      <div style=\"font-size:12.5px; font-weight:bold;\">\n       \n       {{selectedItem.type}}\n      </div>\n      <div style=\"font-size:20px; font-weight:bold;\">\n       {{selectedItem.name}}\n      </div>\n      <div *ngIf=\"showDescription\" style=\"margin-bottom:2%;\"> \n         {{selectedItem.description}}\n      </div>\n      <div style=\"font-size:12.5px\">\n        {{selectedItem.duration}} Minutes, {{selectedItem.place}}\n      </div>\n     </div>\n  <div *ngIf=\"adjust\" class=\"middle-flex\" style=\"width:60%;\">\n   <div style=\"font-size:12.5px; font-weight:bold;\">\n    \n    {{selectedItem.type}}\n   </div>\n   <div style=\"font-size:20px; font-weight:bold;\">\n    {{selectedItem.name}}\n   </div>\n   <div style=\"margin-bottom:2%; \"> \n     {{selectedItem.description}}\n   </div>\n   <div style=\"font-size:12.5px\">\n    {{selectedItem.duration}} Minutes, {{selectedItem.place}}\n   </div>\n  </div>\n  <div *ngIf=\"showTools\" style=\"align-self: center;\" class=\"inner-flex\">\n   <div style=\"margin-right:10px\"><div *ngIf=\"!details\"><a href=\"javascript: void(0)\"><img src=\"../../assets/images/info.png\"  (click)=\"toggleDetails()\" class=\"icon\"></a></div>\n   <div *ngIf=\"details\"><a href=\"javascript: void(0)\"><img src=\"../../assets/images/cancel.png\"  (click)=\"toggleDetails()\" class=\"icon\"></a></div>\n   <div style=\"font-weight:bold; font-size:12.5px\">DETAILS</div></div>\n  \n    <div *ngIf='!edited'><div><a href=\"javascript: void(0)\"><img src=\"../../assets/images/undo.png\" (click)=\"toggleSwap(item.order)\" class=\"icon\"></a></div><div style=\"font-weight:bold; font-size:12.5px\">SWAP</div></div>\n    <div *ngIf='edited'><div><a href=\"javascript: void(0)\"><img src=\"../../assets/images/undo.png\" (click)=\"toggleSwap(selectedItem.selection)\" class=\"icon\"></a></div><div style=\"font-weight:bold; font-size:12.5px\">SWAP</div></div>\n  </div>\n</div>\n  <div *ngIf=\"details && swap\" style=\"margin-left:19%; width:60%;\">\n   <div style=\"font-size:17px; font-weight:bold;\">\n     DETAILS\n   </div>\n   <div style=\"margin-top:2%; font-size:13px\">\n      {{selectedItem.details}}\n      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. \n          Aenean commodo ligula eget dolor. Aenean massa. \n          Cum sociis natoque penatibus et magnis dis parturient montes,\n          Aenean massa. \n          Cum sociis natoque penatibus et magnis dis parturient montes,\n          Aenean massa. \n          Cum sociis natoque penatibus et magnis dis parturient montes,</p>\n   </div>\n\n   <div style=\"font-size:17px; font-weight:bold; margin-top:3%\">\n     CURRICULUM CONNECTIONS\n   </div>\n   <div style=\"margin-top:2%; font-size:13px; \">\n   <ul>\n     <li class=\"list\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n     <li class=\"list\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n   </ul>\n  </div>\n  </div>\n\n\n\n  <div class=\"alt-flex\" *ngIf=\"!swap && display\">\n  <div style=\"margin-left:0%; margin-top:1%\">\n    <div class=\"my-row\">\n      <div class=\"row\" >\n    <div class=\"activity-card\" *ngFor=\"let item of items | async\"> \n        <app-activity-card [item]=\"item\" (newItem)=\"itemChange($event)\" (length)=\"getLength($event)\" (click)=\"toggleSwap(item.order)\"></app-activity-card>\n    </div>\n\n  </div>\n  </div>\n </div>\n \n</div>\n\n\n</div>\n\n\n\n\n\n\n\n\n\n  \n\n\n\n\n\n<div *ngIf=\"set\">\n  \n    <div  class=\"outer-flex\" > \n      \n    \n    \n    <div style=\"margin-left:1%; width:7%; font-size:15px; font-weight:bold;\">\n    \n   \n    \n    {{itinerary.time}}\n    </div>\n    <div style=\"border-top-style:dashed; border-width:thin; border-color:grey; width:90%; align-self:center;\">\n     \n    </div>\n    </div>\n    \n    \n    <div class=\"flex-container\" >\n     \n      <div  class=\"img-flex\"> \n     <img class=\"img-responsive img-resize\" src=\"{{itinerary.img}}\">\n      </div>\n      <div  class=\"middle-flex\" style=\"width:60%;\">\n          <div style=\"font-size:12.5px; font-weight:bold;\">\n           \n           {{itinerary.type}}\n          </div>\n          <div style=\"font-size:20px; font-weight:bold;\">\n           {{itinerary.name}}\n          </div>\n          <div  style=\"margin-bottom:2%;\"> \n             {{itinerary.description}}\n          </div>\n          <div style=\"font-size:12.5px\">\n            {{itinerary.duration}} Minutes, {{itinerary.place}}\n          </div>\n         </div>\n    \n  <div  style=\"align-self: center;\" class=\"inner-flex\">\n       <div  style=\"margin-right:10px\"><div *ngIf=\"!expand\"><a href=\"javascript: void(0)\"><img src=\"../../assets/images/info.png\"  (click)=\"toggleDetails2()\" class=\"icon\"></a></div>\n       <div *ngIf=\"expand\"><a href=\"javascript: void(0)\"><img src=\"../../assets/images/cancel.png\"  (click)=\"toggleDetails2()\" class=\"icon\"></a></div>\n       <div style=\"font-weight:bold; font-size:12.5px\">DETAILS</div></div>\n      \n        \n      </div>\n    </div>\n      <div *ngIf=\"expand\"  style=\"margin-left:19%; width:60%;\">\n       <div style=\"font-size:17px; font-weight:bold;\">\n         DETAILS\n       </div>\n       <div style=\"margin-top:2%; font-size:13px\">\n          {{itinerary.details}}\n          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. \n              Aenean commodo ligula eget dolor. Aenean massa. \n              Cum sociis natoque penatibus et magnis dis parturient montes,\n              Aenean massa. \n              Cum sociis natoque penatibus et magnis dis parturient montes,\n              Aenean massa. \n              Cum sociis natoque penatibus et magnis dis parturient montes,</p>\n       </div>\n    \n       <div style=\"font-size:17px; font-weight:bold; margin-top:3%\">\n         CURRICULUM CONNECTIONS\n       </div>\n       <div style=\"margin-top:2%; font-size:13px; \">\n       <ul>\n         <li class=\"list\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n         <li class=\"list\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n       </ul>\n      </div>\n      </div> \n    \n    \n    \n      \n    \n\n    </div>\n    \n  \n  \n  \n  "

/***/ }),

/***/ "./src/components/activity/activity.component.scss":
/*!*********************************************************!*\
  !*** ./src/components/activity/activity.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".height {\n  border-style: solid;\n  display: inline-block;\n  border-width: thin;\n  margin-top: 5%; }\n\nimg {\n  max-width: 100%;\n  max-height: 100%; }\n\n.img-resize {\n  height: 200px;\n  width: 90%; }\n\n.outer-flex {\n  display: flex;\n  flex-direction: row;\n  margin-top: 20px; }\n\n.flex-container {\n  display: flex;\n  /*  border-top-style: dashed;\r\n    border-color:#E0E0E0; */\n  flex-direction: row;\n  padding-top: 1%;\n  justify-content: flex-start; }\n\n.img-flex {\n  display: flex;\n  width: 18%; }\n\n.middle-flex {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-right: 5%; }\n\n.icon {\n  height: 19px; }\n\n.inner-flex {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n\n.main-flex {\n  display: flex;\n  flex-direction: column; }\n\n.list {\n  margin-bottom: 0%; }\n\n.activity-card {\n  height: 200px;\n  width: 350px;\n  font-size: 12px; }\n\n.alt-flex {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n"

/***/ }),

/***/ "./src/components/activity/activity.component.ts":
/*!*******************************************************!*\
  !*** ./src/components/activity/activity.component.ts ***!
  \*******************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActivityComponent = /** @class */ (function () {
    function ActivityComponent(_http, db) {
        this._http = _http;
        this.db = db;
        this.set = false;
        this.showImage = true;
        this.showTools = true;
        this.showDescription = true;
        this.adjust = true;
        this.details = false;
        this.swap = false;
        this.display = true;
        this.selected = false;
        this.fromConfirm = false;
        this.startTime = 20;
        this.expand = false;
        this.edited = false;
        this.activity = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.count = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.index = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ActivityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = this.db.collection('/activities').snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
        this.date = JSON.parse(localStorage.getItem('dates'));
        this._http.get('https://picsum.photos/list')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (images) { return _this._randomImageUrls(images); }))
            .subscribe(function (images) { return _this.images = images; });
    };
    ActivityComponent.prototype.itemChange = function (event) {
        this.selectedItem = event;
        if (this.edited) {
            this.index.emit(this.selectedItem);
        }
        else {
            this.index.emit(this.item);
        }
        this.activity.emit(event);
        this.date = JSON.parse(localStorage.getItem('dates'));
    };
    ActivityComponent.prototype.getLength = function (event) {
        this.length = event;
    };
    ActivityComponent.prototype.toggleSwap = function (event) {
        this.details = false;
        if (!this.selected) {
            this.selected = true;
        }
        else {
            this.selected = false;
        }
        if (!this.swap) {
            this.swap = true;
        }
        else {
            this.remove.emit(event);
            this.swap = false;
        }
        //this.remove.emit(event);
    };
    ActivityComponent.prototype.toggleSwap2 = function () {
        this.swap = !(this.swap);
    };
    ActivityComponent.prototype._randomImageUrls = function (images) {
        return [1, 2, 3].map(function () {
            var randomId = images[Math.floor(Math.random() * images.length)].id;
            return "https://picsum.photos/900/500?image=" + randomId;
        });
    };
    ActivityComponent.prototype.timeConvert = function (data) {
        if (!data) {
            return 'select for time';
        }
        else {
            var minutes = data % 60;
            var hours = (data - minutes) / 60;
            if (minutes < 10) {
                var min = '0' + minutes;
                return hours + ':' + min;
            }
            else {
                return hours + ':' + minutes;
            }
        }
    };
    ActivityComponent.prototype.toggleDetails = function () {
        if (!this.details) {
            this.details = true;
        }
        else {
            this.details = false;
        }
    };
    ActivityComponent.prototype.toggleDetails2 = function () {
        if (this.expand == false) {
            this.expand = true;
        }
        else {
            this.expand = false;
        }
    };
    ActivityComponent.prototype.timeOfDay = function (data) {
        if (data >= 720) {
            return 'PM';
        }
        else {
            if (!data) {
                return '';
            }
            else {
                return 'AM';
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActivityComponent.prototype, "set", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActivityComponent.prototype, "itinerary", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActivityComponent.prototype, "showImage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActivityComponent.prototype, "showTools", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActivityComponent.prototype, "showDescription", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActivityComponent.prototype, "adjust", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActivityComponent.prototype, "swap", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActivityComponent.prototype, "display", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActivityComponent.prototype, "selected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActivityComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActivityComponent.prototype, "selectedItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActivityComponent.prototype, "fromConfirm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActivityComponent.prototype, "time", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActivityComponent.prototype, "edited", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ActivityComponent.prototype, "activity", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ActivityComponent.prototype, "count", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ActivityComponent.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ActivityComponent.prototype, "remove", void 0);
    ActivityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activity',
            template: __webpack_require__(/*! ./activity.component.html */ "./src/components/activity/activity.component.html"),
            styles: [__webpack_require__(/*! ./activity.component.scss */ "./src/components/activity/activity.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], ActivityComponent);
    return ActivityComponent;
}());



/***/ }),

/***/ "./src/components/build/build.component.html":
/*!***************************************************!*\
  !*** ./src/components/build/build.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid \">\n  <div style=\"font-weight:bold; margin-top:7%\">\n    <h1>BUILD YOUR OWN ITENERARY</h1>\n  </div>\n  <div style=\"margin-top:5%\">\n      Lorem ipsum dolor sit amet, \n      consectetuer adipiscing elit. \n      Aenean commodo ligula eget dolor.\n       Aenean massa. \n  </div>\n  <div style=\"margin-top:7%\" >\n    <h6>GRADE LEVEL</h6>\n    <form>\n  <div class=\"form-check my-radio-btn\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\" checked>\n      <label class=\"form-check-label\" for=\"exampleRadios1\">\n       Preschool/Kindergaten and Grades 1-2/Cycle 1\n      </label>\n    </div>\n    <div class=\"form-check my-radio-btn\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\">\n      <label class=\"form-check-label\" for=\"exampleRadios2\">\n       Grades 3-6/Cycles 2-3\n      </label>\n    </div>\n    <div class=\"form-check my-radio-btn\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\" checked>\n        <label class=\"form-check-label\" for=\"exampleRadios1\">\n         Grades 7-8/Secondary 1-2\n        </label>\n      </div>\n      <div class=\"form-check my-radio-btn\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\">\n        <label class=\"form-check-label\" for=\"exampleRadios2\">\n         Grades 9-12/Secondary 3-5\n        </label>\n      </div>\n      </form>\n    </div>\n     \n    <div style=\"margin-top:7%;\">\n    <div style=\"font-weight:bold; font-size:11px; margin-left:1%;\">\n      DATE RANGE:\n    </div>\n    <div class=\"input-group\" style=\"width:100%; margin-left:1%;\">\n        <select class=\"custom-select\" id=\"inputGroupSelect04\" style=\" font-size:13px\">\n          <option selected >Choose your dates...</option>\n        </select>\n      </div>\n    </div>\n\n    <div style=\"margin-top:2%; overflow:scroll\">\n        <ngb-datepicker #dp (select)=\"onDateSelection($event)\" [displayMonths]=\"2\" [dayTemplate]=\"t\" >\n          \n          </ngb-datepicker>\n          \n          <ng-template #t let-date=\"date\" let-focused=\"focused\">\n            <span class=\"custom-day\"\n                  [class.focused]=\"focused\"\n                  [class.range]=\"isFrom(date) || isTo(date) || isInside(date) || isHovered(date)\"\n                  [class.faded]=\"isHovered(date) || isInside(date)\"\n                  (mouseenter)=\"hoveredDate = date\"\n                  (mouseleave)=\"hoveredDate = null\">\n              {{ date.day }}\n            </span>\n          </ng-template>\n        </div>\n          <div class=\"form-check my-radio-btn\" style=\"margin-bottom:13%;\">\n            <div style=\"margin-bottom:2%;   margin-top:5%;\">\n              <h6>HALF DAY OR FULL DAY?:</h6>\n            </div>\n            <form>\n              <div style=\"float:left; margin-right:9%;\">\n              <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"Half-Day\" checked>\n              <label class=\"form-check-label\" for=\"exampleRadios1\">\n              Half Day\n              </label>\n            </div>\n            <div style=\"float:left; margin-right:9%;\">\n              <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"Full-Day\" checked>\n              <label class=\"form-check-label\" for=\"exampleRadios1\">\n              Full Day\n              </label>\n            </div>\n            </form>\n            </div>\n            \n        \n</div>"

/***/ }),

/***/ "./src/components/build/build.component.scss":
/*!***************************************************!*\
  !*** ./src/components/build/build.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-container {\n  height: 10%;\n  width: 100%;\n  border-width: 1px;\n  border-style: solid;\n  background-color: white;\n  border-color: #E0E0E0; }\n\n.my-radio-btn {\n  margin-bottom: 1%; }\n\n.custom-day {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem; }\n\n.custom-day.focused {\n  background-color: #e6e6e6; }\n\n.custom-day.range, .custom-day:hover {\n  background-color: red;\n  color: white; }\n\n.custom-day.faded {\n  background-color: #DCDCDC; }\n\n#new-btn {\n  white-space: normal; }\n\n#footer {\n  border-top-color: #E0E0E0;\n  border-top-style: solid;\n  border-top-width: thin;\n  padding: 6%; }\n"

/***/ }),

/***/ "./src/components/build/build.component.ts":
/*!*************************************************!*\
  !*** ./src/components/build/build.component.ts ***!
  \*************************************************/
/*! exports provided: BuildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildComponent", function() { return BuildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var equals = function (one, two) {
    return one && two && two.year === one.year && two.month === one.month && two.day === one.day;
};
var before = function (one, two) {
    return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
        ? false : one.day < two.day : one.month < two.month : one.year < two.year;
};
var after = function (one, two) {
    return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
        ? false : one.day > two.day : one.month > two.month : one.year > two.year;
};
var BuildComponent = /** @class */ (function () {
    function BuildComponent(calendar) {
        var _this = this;
        this.isHovered = function (date) { return _this.fromDate && !_this.toDate && _this.hoveredDate && after(date, _this.fromDate) && before(date, _this.hoveredDate); };
        this.isInside = function (date) { return after(date, _this.fromDate) && before(date, _this.toDate); };
        this.isFrom = function (date) { return equals(date, _this.fromDate); };
        this.isTo = function (date) { return equals(date, _this.toDate); };
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }
    BuildComponent.prototype.ngOnInit = function () {
    };
    BuildComponent.prototype.onDateSelection = function (date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    };
    BuildComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-build',
            template: __webpack_require__(/*! ./build.component.html */ "./src/components/build/build.component.html"),
            styles: [__webpack_require__(/*! ./build.component.scss */ "./src/components/build/build.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]])
    ], BuildComponent);
    return BuildComponent;
}());



/***/ }),

/***/ "./src/components/calendar/calendar.component.html":
/*!*********************************************************!*\
  !*** ./src/components/calendar/calendar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:2%; overflow:scroll\">\n  <ngb-datepicker #dp (select)=\"onDateSelection($event)\" [displayMonths]=\"2\" [dayTemplate]=\"t\" >\n    \n    </ngb-datepicker>\n    \n    <ng-template #t let-date=\"date\" let-focused=\"focused\">\n      <span class=\"custom-day\"\n            [class.focused]=\"focused\"\n            [class.range]=\"isFrom(date) || isTo(date) || isInside(date) || isHovered(date)\"\n            [class.faded]=\"isHovered(date) || isInside(date)\"\n            (mouseenter)=\"hoveredDate = date\"\n            (mouseleave)=\"hoveredDate = null\">\n        {{ date.day }}\n      </span>\n    </ng-template>\n  </div>"

/***/ }),

/***/ "./src/components/calendar/calendar.component.scss":
/*!*********************************************************!*\
  !*** ./src/components/calendar/calendar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-container {\n  height: 10%;\n  width: 100%;\n  border-width: 1px;\n  border-style: solid;\n  background-color: white;\n  border-color: #E0E0E0; }\n\n.my-radio-btn {\n  margin-bottom: 1%; }\n\n.custom-day {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem; }\n\n.custom-day.focused {\n  background-color: #e6e6e6; }\n\n.custom-day.range, .custom-day:hover {\n  background-color: red;\n  color: white; }\n\n.custom-day.faded {\n  background-color: #DCDCDC; }\n\n#new-btn {\n  white-space: normal; }\n\n#footer {\n  border-top-color: #E0E0E0;\n  border-top-style: solid;\n  border-top-width: thin;\n  padding: 6%; }\n"

/***/ }),

/***/ "./src/components/calendar/calendar.component.ts":
/*!*******************************************************!*\
  !*** ./src/components/calendar/calendar.component.ts ***!
  \*******************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var equals = function (one, two) {
    return one && two && two.year === one.year && two.month === one.month && two.day === one.day;
};
var before = function (one, two) {
    return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
        ? false : one.day < two.day : one.month < two.month : one.year < two.year;
};
var after = function (one, two) {
    return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
        ? false : one.day > two.day : one.month > two.month : one.year > two.year;
};
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(calendar) {
        var _this = this;
        this.isHovered = function (date) { return _this.fromDate && !_this.toDate && _this.hoveredDate && after(date, _this.fromDate) && before(date, _this.hoveredDate); };
        this.isInside = function (date) { return after(date, _this.fromDate) && before(date, _this.toDate); };
        this.isFrom = function (date) { return equals(date, _this.fromDate); };
        this.isTo = function (date) { return equals(date, _this.toDate); };
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }
    CalendarComponent.prototype.ngOnInit = function () {
    };
    CalendarComponent.prototype.onDateSelection = function (date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    };
    CalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/components/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.scss */ "./src/components/calendar/calendar.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/components/card/card.component.html":
/*!*************************************************!*\
  !*** ./src/components/card/card.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"card-container\">\n  <div id=\"slideshow\">\n<ngb-carousel *ngIf=\"images\">\n  <ng-template ngbSlide>\n    <img [src]=\"images[0]\" alt=\"Random first slide\" class=\"img-responsive img-resize\">\n    <div class=\"carousel-caption text\">\n      <h3></h3>\n      <p></p>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <img [src]=\"images[1]\" alt=\"Random second slide\" class=\"img-responsive img-resize\">\n    <div class=\"carousel-caption text\">\n        <h3></h3>\n        <p></p>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <img [src]=\"images[2]\" alt=\"Random third slide\" class=\"img-responsive img-resize\">\n    <div class=\"carousel-caption text\">\n        <h3></h3>\n        <p></p>\n    </div>\n  </ng-template>\n</ngb-carousel>\n</div>\n<div *ngIf=\"view\" class=\"layers\">\n    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. \n    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis \n    natoque penatibus et magnis dis parturient montes, nascetur \n    ridiculus mus. Donec quam felis, ultricies nec.\n</div>\n<div *ngIf=\"!view\" class=\"layers\" style=\"margin-bottom:3%;\">\n    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. \n    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis \n    natoque penatibus et magnis dis parturient montes, nascetur \n    ridiculus mus. Donec quam felis, ultricies nec.\n</div>\n<div *ngIf=\"view\" class=\"layers\" style=\"font-weight:bold; margin-bottom:3%\">\n  <a href=\"javascript:void(0)\" (click)=\"navigateToDesign()\">VIEW THIS ITENERARY</a>\n  <img src=\"../../assets/images/right-arrow.png\">\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./src/components/card/card.component.scss":
/*!*************************************************!*\
  !*** ./src/components/card/card.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-container {\n  height: 100%;\n  width: 100%;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #E0E0E0; }\n\n#slideshow {\n  width: 100%; }\n\n.text {\n  text-align: justify;\n  padding-left: 2%;\n  padding-right: 2%; }\n\n.layers {\n  text-align: justify;\n  padding-left: 4%;\n  padding-right: 4%;\n  margin-top: 3%; }\n\n.img-resize {\n  height: 250px;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/components/card/card.component.ts":
/*!***********************************************!*\
  !*** ./src/components/card/card.component.ts ***!
  \***********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_activity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/activity */ "./src/models/activity.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CardComponent = /** @class */ (function () {
    function CardComponent(_http, router, route) {
        this._http = _http;
        this.router = router;
        this.route = route;
        this.activities = [];
        this.view = true;
    }
    CardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._http.get('https://picsum.photos/list')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (images) { return _this._randomImageUrls(images); }))
            .subscribe(function (images) { return _this.images = images; });
    };
    CardComponent.prototype._randomImageUrls = function (images) {
        return [1, 2, 3].map(function () {
            var randomId = images[Math.floor(Math.random() * images.length)].id;
            return "https://picsum.photos/900/500?image=" + randomId;
        });
    };
    CardComponent.prototype.navigateToDesign = function () {
        var _this = this;
        this.item.activities.map(function (activity) {
            _this.activities.push(new _models_activity__WEBPACK_IMPORTED_MODULE_4__["Activity"](activity.time, 0, activity.name, activity.type, activity.length, activity.description, activity.on, activity.qc, activity.fees, activity.img, activity.ageRange, activity.timeOfYear, activity.timeSlots, activity.order));
        });
        /*  this.activities.push(new Activity(
             this.dates[this.select.order],
             this.select.order,
             event.name,
             event.type,
             event.length,
             event.description,
             event.on,
             event.qc,
             event.fees,
             event.img,
             event.ageRange,
             event.timeOfYear,
             event.timeSlots,
             event.order));     */
        localStorage.setItem("itinerary", JSON.stringify(this.activities));
        localStorage.setItem("set", JSON.stringify(true));
        this.router.navigate(["/DesignPage"]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "view", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "item", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/components/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/components/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/components/confirm-sticker/confirm-sticker.component.html":
/*!***********************************************************************!*\
  !*** ./src/components/confirm-sticker/confirm-sticker.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"background-color:black; width:25%; height:80px; border-right-width:thin; border-right-style:solid;  border-right-color:white; float:left;\">\n    <div style=\"margin-top:20px; margin-left:100px;\"><div style=\"color:white; font-weight:bold; \">PRESERVE YOUR ITENERARY</div><div style=\"color:white; font-size:12px; width:70%;\">copy the public share link and return to your itenerary later </div></div>\n   </div>\n   <div  style=\"background-color:black; width:25%; height:80px; float:left;\">\n       <div style=\"margin-top:20px; margin-left:100px;\"><div style=\"color:white; font-weight:bold;\">PRINT YOUR ITENERARY</div><div style=\"color:white; font-size:12px; width:70%;\">Print a hard copy of PDF. NOTE: this does not constitute a reservation! </div></div>\n   </div>\n   <div  style=\"background-color:darkred; width:25%; height:80px; float:left;\">\n       <div style=\"margin-top:20px; margin-left:100px;\"><div style=\"color:white; font-weight:bold;\">8/8 TIME SLOTS COMPLETE</div><div style=\"color:white; font-size:12px; width:70%;\">You're done. Next Step: Confirm your itenerary before submitting </div></div>\n   </div>\n   <div  style=\"background-color:red; width:25%; height:80px; float:left;\">\n     <div style=\"margin-top:20px; margin-left:160px;\"><div style=\"float:left; font-size:25px; font-weight:bold; color:white;\" >NEXT</div><div style=\"width:0;height: 0; border-top: 10px solid transparent; border-left: 15px solid white; border-bottom: 10px solid transparent; float:left; margin-left:20px; margin-top:10px;\"></div></div>\n   </div>\n   "

/***/ }),

/***/ "./src/components/confirm-sticker/confirm-sticker.component.scss":
/*!***********************************************************************!*\
  !*** ./src/components/confirm-sticker/confirm-sticker.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/components/confirm-sticker/confirm-sticker.component.ts":
/*!*********************************************************************!*\
  !*** ./src/components/confirm-sticker/confirm-sticker.component.ts ***!
  \*********************************************************************/
/*! exports provided: ConfirmStickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmStickerComponent", function() { return ConfirmStickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmStickerComponent = /** @class */ (function () {
    function ConfirmStickerComponent() {
    }
    ConfirmStickerComponent.prototype.ngOnInit = function () {
    };
    ConfirmStickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-sticker',
            template: __webpack_require__(/*! ./confirm-sticker.component.html */ "./src/components/confirm-sticker/confirm-sticker.component.html"),
            styles: [__webpack_require__(/*! ./confirm-sticker.component.scss */ "./src/components/confirm-sticker/confirm-sticker.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmStickerComponent);
    return ConfirmStickerComponent;
}());



/***/ }),

/***/ "./src/components/confirm/confirm.component.html":
/*!*******************************************************!*\
  !*** ./src/components/confirm/confirm.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron main\">\n <div class=\"outer-box\">\n<div class=\"inner-box-head \">\n <div class=\"heading\">ITINERARY NAME</div>\n <div><div><div><a href=\"javascript: void(0)\" (click)=\"navigateToDesign()\"><img src=\"../../assets/images/edit.png\" class=\"icon\"></a></div><div style=\"font-weight:bold; font-size:12.5px\">EDIT</div></div></div>\n</div>\n<div class=\"inner-box-body\">\n  <div class=\"column\">\n\n<!-- <div class=\"note\">\n  <h4>IMPORTANT:</h4>\n  <p>Activities can accomodate up to 30 people.\n     Please create additional Iteneraries for  larger groups.\n  </p>\n</div> -->\n</div>\n<div class=\"activity\">\n<div class=\"column\">\n  <div *ngIf=\"!set\">\n  <div class=\"list\" *ngFor=\"let activity of activities\">\n  \n\n\n\n    <div class=\"outer-flex\">\n  \n      \n      <div style=\"border-top-style:dashed; border-width:thin; border-color:grey; width:90%; align-self:center;\">\n       {{timeConvert(activity.time)}}\n      </div>\n      </div>\n      \n      <div class=\"flex-container\" *ngIf=\"swap || !display\">\n       \n        <div *ngIf=\"showImage\" class=\"img-flex\"> \n       <img class=\"img-responsive img-resize\" src=\"{{selectedItem.img}}\">\n        </div>\n        <div *ngIf=\"!adjust\" class=\"middle-flex\" style=\"width:60%;\">\n            <div style=\"font-size:12.5px; font-weight:bold;\">\n             \n             {{activity.type}}\n            </div>\n            <div style=\"font-size:20px; font-weight:bold;\">\n             {{activity.name}} {{activity.order}}\n            </div>\n            <div *ngIf=\"showDescription\" style=\"margin-bottom:2%;\"> \n               {{activity.description}}\n            </div>\n            <div style=\"font-size:12.5px\">\n              {{activity.duration}} Minutes, {{activity.place}}\n            </div>\n           </div>\n        <div *ngIf=\"adjust\" class=\"middle-flex\" style=\"width:60%;\">\n         <div style=\"font-size:12.5px; font-weight:bold;\">\n          \n          {{activity.type}}\n         </div>\n         <div style=\"font-size:20px; font-weight:bold;\">\n          {{activity.name}}\n         </div>\n         <div style=\"margin-bottom:2%; \"> \n           {{activity.description}}\n         </div>\n         <div style=\"font-size:12.5px\">\n          {{activity.duration}} Minutes, {{activity.place}}\n         </div>\n        </div>\n        <div *ngIf=\"showTools\" style=\"align-self: center;\" class=\"inner-flex\">\n         <div style=\"margin-right:10px\"><div *ngIf=\"!details\"><a href=\"javascript: void(0)\"><img src=\"../../assets/images/info.png\"  (click)=\"toggleDetails()\" class=\"icon\"></a></div>\n         <div *ngIf=\"details\"><a href=\"javascript: void(0)\"><img src=\"../../assets/images/cancel.png\"  (click)=\"toggleDetails()\" class=\"icon\"></a></div>\n         <div style=\"font-weight:bold; font-size:12.5px\">DETAILS</div></div>\n        \n          <div><div><a href=\"javascript: void(0)\"><img src=\"../../assets/images/undo.png\" (click)=\"toggleSwap()\" class=\"icon\"></a></div><div style=\"font-weight:bold; font-size:12.5px\">SWAP</div></div>\n        </div>\n      </div>\n    \n    \n\n</div>\n\n\n</div>\n\n<div *ngIf=\"set\">\n    <div class=\"list\" *ngFor=\"let itinerary of itineraries\">\n    \n  \n  \n  \n      <div class=\"outer-flex\">\n    \n        \n        <div style=\"border-top-style:dashed; border-width:thin; border-color:grey; width:90%; align-self:center;\">\n         {{itinerary.time}}\n        </div>\n        </div>\n        \n        <div class=\"flex-container\" *ngIf=\"swap || !display\">\n         \n          <div *ngIf=\"showImage\" class=\"img-flex\"> \n         <img class=\"img-responsive img-resize\" src=\"{{selectedItem.img}}\">\n          </div>\n          <div *ngIf=\"!adjust\" class=\"middle-flex\" style=\"width:60%;\">\n              <div style=\"font-size:12.5px; font-weight:bold;\">\n               \n               {{itinerary.type}}\n              </div>\n              <div style=\"font-size:20px; font-weight:bold;\">\n               {{itinerary.name}} {{itinerary.order}}\n              </div>\n              <div *ngIf=\"showDescription\" style=\"margin-bottom:2%;\"> \n                 {{itinerary.description}}\n              </div>\n              <div style=\"font-size:12.5px\">\n                {{itinerary.duration}} Minutes, {{itinerary.place}}\n              </div>\n             </div>\n          <div *ngIf=\"adjust\" class=\"middle-flex\" style=\"width:60%;\">\n           <div style=\"font-size:12.5px; font-weight:bold;\">\n            \n              {{itinerary.type}}\n            </div>\n            <div style=\"font-size:20px; font-weight:bold;\">\n             {{itinerary.name}} {{itinerary.order}}\n            </div>\n            <div *ngIf=\"showDescription\" style=\"margin-bottom:2%;\"> \n               {{itinerary.description}}\n            </div>\n            <div style=\"font-size:12.5px\">\n              {{itinerary.duration}} Minutes, {{itinerary.place}}\n           </div>\n          </div>\n          <div *ngIf=\"showTools\" style=\"align-self: center;\" class=\"inner-flex\">\n           <div style=\"margin-right:10px\"><div *ngIf=\"!details\"><a href=\"javascript: void(0)\"><img src=\"../../assets/images/info.png\"  (click)=\"toggleDetails()\" class=\"icon\"></a></div>\n           <div *ngIf=\"details\"><a href=\"javascript: void(0)\"><img src=\"../../assets/images/cancel.png\"  (click)=\"toggleDetails()\" class=\"icon\"></a></div>\n           <div style=\"font-weight:bold; font-size:12.5px\">DETAILS</div></div>\n          \n            <div><div><a href=\"javascript: void(0)\"><img src=\"../../assets/images/undo.png\" (click)=\"toggleSwap()\" class=\"icon\"></a></div><div style=\"font-weight:bold; font-size:12.5px\">SWAP</div></div>\n          </div>\n        </div>\n      \n      \n  \n  </div>\n  \n  \n  </div>\n\n</div>\n</div>\n\n\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/components/confirm/confirm.component.scss":
/*!*******************************************************!*\
  !*** ./src/components/confirm/confirm.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  padding: 3%; }\n\n.outer-box {\n  background-color: white;\n  padding: 3%; }\n\n.heading {\n  font-size: 20px; }\n\n.inner-box-head {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 1%;\n  margin-bottom: 2%; }\n\n.inner-box-body {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n\n.note {\n  width: 65%;\n  word-wrap: break-word;\n  margin-top: 10%;\n  margin-left: 11%;\n  font-weight: bold; }\n\n.icon {\n  height: 19px; }\n\n.my-card {\n  height: 380px;\n  width: 75%;\n  font-size: 13px;\n  margin-left: 8%; }\n\n.activity {\n  width: 95%; }\n\n.col {\n  display: flex;\n  flex-direction: column; }\n\n.list {\n  margin-bottom: 2%; }\n\n.height {\n  border-style: solid;\n  display: inline-block;\n  border-width: thin;\n  margin-top: 5%; }\n\nimg {\n  max-width: 100%;\n  max-height: 100%; }\n\n.img-resize {\n  height: 200px;\n  width: 90%; }\n\n.outer-flex {\n  display: flex;\n  flex-direction: row;\n  margin-top: 20px; }\n\n.flex-container {\n  display: flex;\n  /*  border-top-style: dashed;\r\n    border-color:#E0E0E0; */\n  flex-direction: row;\n  padding-top: 1%;\n  justify-content: flex-start; }\n\n.img-flex {\n  display: flex;\n  width: 18%; }\n\n.middle-flex {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-right: 5%; }\n\n.icon {\n  height: 19px; }\n\n.inner-flex {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n\n.main-flex {\n  display: flex;\n  flex-direction: column; }\n\n.list {\n  margin-bottom: 0%; }\n\n.activity-card {\n  height: 200px;\n  width: 23.5%;\n  font-size: 12px; }\n\n.alt-flex {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n"

/***/ }),

/***/ "./src/components/confirm/confirm.component.ts":
/*!*****************************************************!*\
  !*** ./src/components/confirm/confirm.component.ts ***!
  \*****************************************************/
/*! exports provided: ConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function() { return ConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmComponent = /** @class */ (function () {
    function ConfirmComponent(router, route) {
        this.router = router;
        this.route = route;
        this.showIamge = false;
        this.showTools = false;
        this.showDescription = false;
        this.adjust = false;
        this.view = false;
        this.display = false;
    }
    ConfirmComponent.prototype.ngOnInit = function () {
        this.set = JSON.parse(localStorage.getItem("set"));
        localStorage.setItem('edit', JSON.stringify(false));
        this.itineraries = JSON.parse(localStorage.getItem("itinerary"));
        this.activities = JSON.parse(localStorage.getItem('activities'));
    };
    ConfirmComponent.prototype.navigateToDesign = function () {
        localStorage.setItem('edit', JSON.stringify(true));
        this.router.navigateByUrl('DesignPage');
    };
    ConfirmComponent.prototype.timeConvert = function (data) {
        var minutes = data % 60;
        var hours = (data - minutes) / 60;
        if (minutes < 10) {
            var min = '0' + minutes;
            return hours + ':' + min;
        }
        else {
            return hours + ':' + minutes;
        }
    };
    ConfirmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm',
            template: __webpack_require__(/*! ./confirm.component.html */ "./src/components/confirm/confirm.component.html"),
            styles: [__webpack_require__(/*! ./confirm.component.scss */ "./src/components/confirm/confirm.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ConfirmComponent);
    return ConfirmComponent;
}());



/***/ }),

/***/ "./src/components/empty-card/empty-card.component.html":
/*!*************************************************************!*\
  !*** ./src/components/empty-card/empty-card.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron card-container\">\n  <div style=\"margin-top:9%; text-align:center;\">\n  <h1 class=\"title\">BUILD YOUR OWN ITENERARY</h1>\n <div>\n    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. \n    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis \n    natoque penatibus et magnis dis parturient montes, nascetur \n    ridiculus mus. Donec quam felis, ultricies nec.\n </div>\n <div class=\"my-btn\">\n    <button type=\"button\" class=\"btn btn-danger\" id=\"new-btn\" (click)=\"open(content)\"> BUILD YOUR OWN</button>\n </div>\n</div>\n</div>\n\n\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div style=\"width:100%\">\n        <button type=\"button\"  (click)=\"d('Cross click')\" style=\"background-color:black; float:right; height:70px; width:70px; \">\n            <div style=\"color:white; \">\n              x\n            </div>\n            <div style=\"color:white; font-weight:bold; font-size:12px;\">\n              CLOSE\n            </div>\n          </button>\n    <app-build></app-build>\n\n    \n    <div id=footer>\n        <div style=\"margin-bottom:30px;\">\n        <div>\n        <button type=\"button\" class=\"btn btn-danger\" id=\"new-btn\"  (click)=\"d('Cross click')\"  (click)=\"navigateToDesignPage()\"> <div style=\"float:left;\">CONTINUE</div> <div style=\"width:0;height: 0; border-top: 5px solid transparent; border-left: 10px solid white; border-bottom: 5px solid transparent; float:left; margin-left:28px; margin-top:6px;\"></div></button>\n      </div>\n      \n  </div>\n  </div>\n    \n\n    \n  </div>\n  </ng-template>"

/***/ }),

/***/ "./src/components/empty-card/empty-card.component.scss":
/*!*************************************************************!*\
  !*** ./src/components/empty-card/empty-card.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-container {\n  height: 100%;\n  width: 100%;\n  border-color: red;\n  text-align: center;\n  padding: 5.5%;\n  background-color: white;\n  border-width: thick;\n  border-style: dashed;\n  word-wrap: break-word; }\n\n.my-btn {\n  margin-top: 4%;\n  margin-left: 32%; }\n\n#new-btn {\n  white-space: normal; }\n\n#footer {\n  border-top-color: #E0E0E0;\n  border-top-style: solid;\n  border-top-width: thin;\n  padding: 6%; }\n\n@media only screen and (max-width: 850px) {\n  .my-btn {\n    margin-top: 4%;\n    margin-left: 28%; }\n  #new-btn {\n    white-space: normal; } }\n\n@media only screen and (max-width: 750px) {\n  .my-btn {\n    margin-top: 4%;\n    margin-left: 28%; }\n  #new-btn {\n    white-space: normal; } }\n"

/***/ }),

/***/ "./src/components/empty-card/empty-card.component.ts":
/*!***********************************************************!*\
  !*** ./src/components/empty-card/empty-card.component.ts ***!
  \***********************************************************/
/*! exports provided: EmptyCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyCardComponent", function() { return EmptyCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmptyCardComponent = /** @class */ (function () {
    function EmptyCardComponent(modalService, router, route) {
        this.modalService = modalService;
        this.router = router;
        this.route = route;
    }
    EmptyCardComponent.prototype.ngOnInit = function () {
    };
    EmptyCardComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        });
    };
    EmptyCardComponent.prototype.navigateToDesignPage = function () {
        this.router.navigateByUrl('DesignPage');
    };
    EmptyCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-empty-card',
            template: __webpack_require__(/*! ./empty-card.component.html */ "./src/components/empty-card/empty-card.component.html"),
            styles: [__webpack_require__(/*! ./empty-card.component.scss */ "./src/components/empty-card/empty-card.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EmptyCardComponent);
    return EmptyCardComponent;
}());



/***/ }),

/***/ "./src/components/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/components/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"img-container\" >\n    <img class=\"logo\"  src=\"../../assets/images/logo.jpg\"> \n  </div>\n<nav class=\"navbar bg-dark bg\" >\n  \n<div class=\"nav-text\" >SCHOOL TRIP PLANNER</div>\n    <!-- <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\" style=\"margin-right:18%;\">\n        <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\" >\n          <button type=\"button\" class=\"btn btn-secondary\" style=\" width:200px; color:black;\"><div style=\"border-radius:100%; background-color:black; width:30px; color:white;\">1</div> DESIGN</button>\n          <button type=\"button\" class=\"btn btn-secondary\" style=\"background-color:white; width:150px; color:red;\"><div style=\"border-radius:100%; background-color:red; width:30px; color:white;\">2</div> CONFIRM</button>\n          <button type=\"button\" class=\"btn btn-secondary\" style=\" width:100px;\">3</button>\n        </div>\n      </div> -->\n      <!-- <div style=\"color:white; background-color: black; width:70px; padding:0.25%; float:right; margin-right:0; text-align:center;\" (click)=\"open(content)\">\n\n        <div style=\"margin-left:2%;\">\n        <div style=\"font-size:25px;\">X</div>\n        <div>EXIT</div>\n      </div>\n      </div> -->\n  </nav>\n\n\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n      <div style=\"width:100%\">\n          <button type=\"button\"  (click)=\"d('Cross click')\" style=\"background-color:black; float:right; height:70px; width:70px; \">\n              <div style=\"color:white; \">\n                x\n              </div>\n              <div style=\"color:white; font-weight:bold; font-size:12px;\">\n                CLOSE\n              </div>\n            </button>\n      <app-warning></app-warning>\n    </div>\n    </ng-template>"

/***/ }),

/***/ "./src/components/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/components/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg {\n  height: 80px; }\n\n.logo {\n  height: 80px;\n  width: 100px; }\n\n.img-container {\n  float: left; }\n\n.nav-text {\n  color: white;\n  font-size: 25px;\n  float: left;\n  font-weight: bold; }\n\n.nav1 {\n  height: 60px;\n  background-color: purple;\n  border-radius: 20%;\n  margin-left: 54%;\n  position: absolute;\n  width: 10%; }\n\n.nav2 {\n  height: 60px;\n  background-color: red;\n  border-radius: 20%;\n  margin-left: 46%;\n  position: absolute;\n  width: 10%; }\n\n.nav3 {\n  height: 60px;\n  background-color: white;\n  border-radius: 48%;\n  margin-left: 38%;\n  position: absolute;\n  width: 20%; }\n\n@media only screen and (max-width: 414px) {\n  .bg {\n    height: 80px; }\n  .logo {\n    height: 20px;\n    width: 20px; }\n  .img-container {\n    padding: 3%;\n    float: left; }\n  .navbar {\n    height: 45px; }\n  .nav-text {\n    color: white;\n    font-size: 12px;\n    float: left;\n    font-weight: bold; }\n  .nav1 {\n    height: 60px;\n    background-color: purple;\n    border-radius: 20%;\n    margin-left: 54%;\n    position: absolute;\n    width: 10%; }\n  .nav2 {\n    height: 60px;\n    background-color: red;\n    border-radius: 20%;\n    margin-left: 46%;\n    position: absolute;\n    width: 10%; }\n  .nav3 {\n    height: 60px;\n    background-color: white;\n    border-radius: 48%;\n    margin-left: 38%;\n    position: absolute;\n    width: 20%; } }\n\n@media only screen and (max-width: 375px) {\n  .bg {\n    height: 80px; }\n  .logo {\n    height: 20px;\n    width: 20px; }\n  .img-container {\n    padding: 3%;\n    float: left; }\n  .navbar {\n    height: 45px; }\n  .nav-text {\n    color: white;\n    font-size: 12px;\n    float: left;\n    font-weight: bold; }\n  .nav1 {\n    height: 60px;\n    background-color: purple;\n    border-radius: 20%;\n    margin-left: 54%;\n    position: absolute;\n    width: 10%; }\n  .nav2 {\n    height: 60px;\n    background-color: red;\n    border-radius: 20%;\n    margin-left: 46%;\n    position: absolute;\n    width: 10%; }\n  .nav3 {\n    height: 60px;\n    background-color: white;\n    border-radius: 48%;\n    margin-left: 38%;\n    position: absolute;\n    width: 20%; } }\n"

/***/ }),

/***/ "./src/components/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/components/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(modalService) {
        this.modalService = modalService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/components/main-footer/main-footer.component.html":
/*!***************************************************************!*\
  !*** ./src/components/main-footer/main-footer.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"secondary-footer\" tabindex=\"-1\">\n    <ul class=\"footer-sitemap\"><li id=\"menu-item-452\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-452\"><a href=\"https://www.historymuseum.ca/visit/\">Visit</a>\n  <ul class=\"sub-menu\">\n    <li id=\"menu-item-5102\" class=\"menu-item menu-item-type-custom menu-item-object-custom menu-item-5102\"><a href=\"/visit/#admission-fees\">Admission Fees</a></li>\n    <li id=\"menu-item-456\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-456\"><a href=\"https://www.historymuseum.ca/visit/cineplus/\">CINÉ+</a></li>\n    <li id=\"menu-item-458\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-458\"><a href=\"https://www.historymuseum.ca/visit/childrens-museum/\">Children&#8217;s Museum</a></li>\n    <li id=\"menu-item-4231\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-4231\"><a href=\"https://www.historymuseum.ca/visit/groups/\">Group Visits</a></li>\n    <li id=\"menu-item-457\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-457\"><a href=\"https://www.historymuseum.ca/learn/activities/\">Activities</a></li>\n  </ul>\n  </li>\n  <li id=\"menu-item-459\" class=\"menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-8 current_page_item menu-item-has-children menu-item-459\"><a href=\"https://www.historymuseum.ca/exhibitions/\">Exhibitions</a>\n  <ul class=\"sub-menu\">\n    <li id=\"menu-item-460\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-460\"><a href=\"https://www.historymuseum.ca/exhibitions/special-exhibitions/\">Special Exhibitions</a></li>\n    <li id=\"menu-item-463\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-463\"><a href=\"https://www.historymuseum.ca/exhibitions/online-exhibitions/\">Online Exhibitions</a></li>\n    <li id=\"menu-item-466\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-466\"><a href=\"https://www.historymuseum.ca/exhibitions/travelling-exhibitions/\">Travelling Exhibitions</a></li>\n  </ul>\n  </li>\n  <li id=\"menu-item-467\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-467\"><a href=\"https://www.historymuseum.ca/learn/\">Learn</a>\n  <ul class=\"sub-menu\">\n    <li id=\"menu-item-468\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-468\"><a href=\"https://www.historymuseum.ca/learn/resource-centre/\">Resource Centre</a></li>\n    <li id=\"menu-item-469\" class=\"menu-item menu-item-type-custom menu-item-object-custom menu-item-469\"><a href=\"https://www.historymuseum.ca/collections\">Collections</a></li>\n    <li id=\"menu-item-472\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-472\"><a href=\"https://www.historymuseum.ca/learn/research/\">Research</a></li>\n    <li id=\"menu-item-3825\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-3825\"><a href=\"https://www.historymuseum.ca/learn/school-programs/\">School Programs</a></li>\n  </ul>\n  </li>\n  <li id=\"menu-item-474\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-474\"><a href=\"https://www.historymuseum.ca/shop/\">Shop</a>\n  <ul class=\"sub-menu\">\n    <li id=\"menu-item-5123\" class=\"menu-item menu-item-type-custom menu-item-object-custom menu-item-5123\"><a href=\"/shop/#memberships\">Memberships</a></li>\n    <li id=\"menu-item-5103\" class=\"menu-item menu-item-type-custom menu-item-object-custom menu-item-5103\"><a href=\"/boutique/\">Online Gift Shop</a></li>\n    <li id=\"menu-item-5122\" class=\"menu-item menu-item-type-custom menu-item-object-custom menu-item-5122\"><a href=\"https://www.historymuseum.ca/boutique/category-categorie/all-books/museum-publications/\">Publications</a></li>\n  </ul>\n  </li>\n  <li id=\"menu-item-484\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-484\"><a href=\"https://www.historymuseum.ca/support/\">Support</a>\n  <ul class=\"sub-menu\">\n    <li id=\"menu-item-4248\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-4248\"><a href=\"https://www.historymuseum.ca/support/\">Make a Donation</a></li>\n    <li id=\"menu-item-491\" class=\"menu-item menu-item-type-custom menu-item-object-custom menu-item-491\"><a href=\"/support/#tabs\">Ways of Giving</a></li>\n    <li id=\"menu-item-3426\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-3426\"><a href=\"https://www.historymuseum.ca/support/volunteering/\">Volunteer</a></li>\n  </ul>\n  </li>\n  <li id=\"menu-item-485\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-485\"><a href=\"https://www.historymuseum.ca/about/\">About</a>\n  <ul class=\"sub-menu\">\n    <li id=\"menu-item-5124\" class=\"menu-item menu-item-type-custom menu-item-object-custom menu-item-5124\"><a href=\"/about/the-corporation/#tabs\">The Corporation</a></li>\n    <li id=\"menu-item-499\" class=\"menu-item menu-item-type-custom menu-item-object-custom menu-item-499\"><a href=\"https://www.historymuseum.ca/blog\">Blog</a></li>\n    <li id=\"menu-item-10180\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-10180\"><a href=\"https://www.historymuseum.ca/about/media-centre/\">Media Centre</a></li>\n    <li id=\"menu-item-500\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-500\"><a href=\"https://www.historymuseum.ca/about/facility-rentals/\">Facility Rentals</a></li>\n    <li id=\"menu-item-498\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-498\"><a href=\"https://www.historymuseum.ca/about/contact-us/\">Contact Us</a></li>\n    <li id=\"menu-item-4131\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-4131\"><a href=\"https://www.historymuseum.ca/about/jobs/\">Jobs</a></li>\n  </ul>\n  </li>\n  </ul>\t\n  \n  <a class=\"hwm-subscribe-bar\" target=\"_blank\" href=\"http://web.historymuseum.ca/cn/ae6hw/cmh-form\">\n    <div class=\"hwm-subscribe-bar-wrapper\">\n      <main class=\"subscribe-bar-main\">\n        <h2 class=\"subscribe-bar-title\">Get the Inside Scoop</h2>\n        <p class=\"subscribe-bar-desc\">Subscribe to our mailing list.</p>\n      </main>\n      <span class=\"subscribe-bar-button\">\n        Subscribe\t\t</span>\n    </div>\n  </a></footer><!--End #secondary-footer-->\n  <svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none;\">\n      <symbol id=\"twitter\" viewBox=\"0 0 49.221 40\">\n    <path d=\"M49.22,4.734c-1.809,0.804-3.756,1.346-5.799,1.589c2.086-1.249,3.686-3.228,4.439-5.587\n    c-1.951,1.158-4.111,1.998-6.412,2.452C39.605,1.227,36.982,0,34.077,0c-5.576,0-10.098,4.521-10.098,10.099\n    c0,0.791,0.089,1.562,0.262,2.302C15.848,11.978,8.407,7.958,3.427,1.848C2.557,3.339,2.06,5.074,2.06,6.926\n    c0,3.504,1.782,6.595,4.492,8.405c-1.654-0.053-3.212-0.508-4.573-1.264c-0.001,0.041-0.001,0.084-0.001,0.127\n    c0,4.893,3.48,8.973,8.1,9.903c-0.847,0.229-1.739,0.354-2.66,0.354c-0.651,0-1.284-0.062-1.9-0.182\n    c1.285,4.012,5.015,6.934,9.433,7.014c-3.456,2.709-7.809,4.322-12.541,4.322c-0.814,0-1.618-0.049-2.408-0.143\n    C4.47,38.33,9.778,40,15.48,40c18.576,0,28.732-15.387,28.732-28.731c0-0.438-0.01-0.873-0.029-1.308\n    C46.156,8.539,47.866,6.759,49.22,4.734z\"></path>\n      </symbol>\n      <symbol id=\"facebook\" viewBox=\"18.891 10.326 18.586 40\">\n    <path d=\"M37.477,23.278h-6.33v-4.151c0-1.56,1.033-1.923,1.762-1.923c0.727,0,4.467,0,4.467,0v-6.854l-6.152-0.023\n    c-6.829,0-8.383,5.112-8.383,8.383v4.569h-3.949v7.062h3.949c0,9.063,0,19.985,0,19.985h8.307c0,0,0-11.029,0-19.985h5.605\n    L37.477,23.278z\"></path>\n      </symbol>\n    <symbol id=\"instagram\" viewBox=\"0 0 40 40\">\n    <path d=\"M20 9.597c-5.646 0-10.323 4.596-10.323 10.323 0 5.726 4.597 10.322 10.323 10.322s10.322-4.677 10.322-10.322-4.678-10.323-10.322-10.323zm0 16.935c-3.629 0-6.613-2.982-6.613-6.612 0-3.629 2.984-6.613 6.613-6.613s6.613 2.984 6.613 6.613c0 3.63-2.984 6.612-6.613 6.612z\"/><circle cx=\"30.726\" cy=\"9.355\" r=\"2.339\"/><path d=\"M36.773 3.306c-2.095-2.177-5.081-3.306-8.466-3.306h-16.615c-7.014 0-11.692 4.678-11.692 11.693v16.532c0 3.469 1.129 6.451 3.387 8.63 2.176 2.097 5.081 3.145 8.386 3.145h16.451c3.468 0 6.371-1.128 8.468-3.145 2.179-2.096 3.308-5.081 3.308-8.549v-16.613c0-3.387-1.129-6.29-3.227-8.387zm-.484 25c0 2.502-.726 4.518-2.178 5.889-1.451 1.371-3.467 2.096-5.887 2.096h-16.451c-2.419 0-4.436-.725-5.887-2.096-1.452-1.452-2.177-3.469-2.177-5.969v-16.533c0-2.419.726-4.436 2.177-5.887 1.371-1.371 3.468-2.097 5.887-2.097h16.612c2.42 0 4.437.726 5.888 2.177 1.371 1.452 2.178 3.468 2.178 5.806v16.613h-.162v.001z\"/>\n    </symbol>\n  </svg>\n  \n  <footer id=\"main-footer\" class=\"en\">\n    <div class=\"hwm-section-wrapper\">\n    <p class=\"slogan h2\">Your Country.<br /> Your History.<br /> Your Museum.</p>\n    <ul class=\"footer-social-media\">\n      <li><a class=\"facebook\" href=\"https://www.facebook.com/CanMusHistory/\" title=\"Facebook\"><svg class=\"icon facebook\"><use xlink:href=\"#facebook\" /></svg>Facebook</a></li>\n      <li><a class=\"twitter\" href=\"https://twitter.com/CanMusHistory\" title=\"Twitter\"><svg class=\"icon twitter\"><use xlink:href=\"#twitter\" /></svg>Twitter</a></li>\n      <li><a class=\"instagram\" href=\"https://www.instagram.com/canmushistory/\" title=\"Instagram\"><svg class=\"icon instagram\"><use xlink:href=\"#instagram\" /></svg>Twitter</a></li>\n    </ul>\n    <footer>\n      <img class=\"canada-wordmark\" src=\"https://www.historymuseum.ca/wp-content/themes/hwm-2015/_images/canada-wordmark.svg\" width=\"100\" height=\"24\" alt=\"Symbol of the Government of Canada\" />\n      <div class=\"outro\">\n      <p class=\"copyright-text\">&copy; Canadian Museum of History</p>\n      <ul class=\"disclaimer-list\">\n      <li><a href=\"https://www.historymuseum.ca/about/privacy-statement/\">Privacy Statement</a></li>\n      <li><a href=\"https://www.historymuseum.ca/about/copyright-and-permissions/\">Copyright</a></li>\n      </ul>\n      </div><!--End .outro-->\n    </footer>\n    </div><!--End .hwm-section-wrapper-->\n  </footer><!--End #main-footer-->\n  "

/***/ }),

/***/ "./src/components/main-footer/main-footer.component.scss":
/*!***************************************************************!*\
  !*** ./src/components/main-footer/main-footer.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/components/main-footer/main-footer.component.ts":
/*!*************************************************************!*\
  !*** ./src/components/main-footer/main-footer.component.ts ***!
  \*************************************************************/
/*! exports provided: MainFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainFooterComponent", function() { return MainFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainFooterComponent = /** @class */ (function () {
    function MainFooterComponent() {
    }
    MainFooterComponent.prototype.ngOnInit = function () {
    };
    MainFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-footer',
            template: __webpack_require__(/*! ./main-footer.component.html */ "./src/components/main-footer/main-footer.component.html"),
            styles: [__webpack_require__(/*! ./main-footer.component.scss */ "./src/components/main-footer/main-footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainFooterComponent);
    return MainFooterComponent;
}());



/***/ }),

/***/ "./src/components/main-header/main-header.component.html":
/*!***************************************************************!*\
  !*** ./src/components/main-header/main-header.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"main-header\">\n\t\n\t<div class=\"header\">\n\t\t<ul class=\"hwm-bypass\">\n\t<li><a id=\"bypass-main\" href=\"#main-content\">Skip to main content</a></li>\n\t<li><a id=\"bypass-footer\" href=\"#secondary-footer\">Skip to main navigation</a></li>\n</ul>\t\t\n<a href=\"https://www.historymuseum.ca\" class=\"main-logo main-logo-en\" title=\"Go to the Home page\">\n\t<img src=\"https://www.historymuseum.ca/wp-content/themes/hwm-2015/_images/chm-main-logo.svg\" width=\"300\" height=\"44\" alt=\"Logo of the Canadian Museum of History\" />\n</a><!--End .main-logo-->\n\t\t\n\t\t<a href=\"#menu-handle\" id=\"main-menu-handle\" title=\"Main Menu\">\n\t\t\t<span class=\"text-val\">Main Menu</span>\n\t\t\t<span class=\"handle-bars-icon\">\n\t\t\t\t<b class=\"bar\"></b>\n\t\t\t\t<b class=\"bar\"></b>\n\t\t\t\t<b class=\"bar\"></b>\n\t\t\t</span>\n\t\t</a><!--End #main-menu-handle-->\n\t</div><!--End .header-->\n\t\n\t<nav id=\"main-menu\">\n\t\t<div class=\"form-wrapper\">\n\t\t\t<form>\n\t\t\t\t<input placeholder=\"Search ...\" type=\"text\" />\n\t\t\t\t<div class=\"button-wrapper\">\n\t\t\t\t\t<button>Search</button>\n\t\t\t\t</div><!--End .button-wrapper-->\n\t\t\t</form>\n\t\t</div><!--End .form-wrapper-->\n\t\t\n\t\t<ul>\n\n<span class=\"search-display\">\n\t<form role=\"search\" method=\"get\" class=\"search-form\" action=\"/search/\">\n    \t<label for=\"s\">Search</label>\n\t\t<input class=\"search-input\" type=\"search\" value=\"\" \n\t\tname=\"q\" id=\"s\" placeholder=\"Search...\" autocomplete=\"off\" />\n    \t<div class=\"form-button-wrapper\">\n\t        <svg class=\"search-icon\"><use xlink:href=\"#magnifying-glass\" /></svg>\n\t        <button type=\"submit\">Search</button>\n        </div>\n    </form>\n</span>\n\t<li id=\"menu-item-210\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-210\"><a href=\"https://www.historymuseum.ca/visit/\">Visit</a></li>\n<li id=\"menu-item-193\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-193\"><a href=\"https://www.historymuseum.ca/exhibitions/\">Exhibitions</a></li>\n<li id=\"menu-item-194\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-194\"><a href=\"https://www.historymuseum.ca/learn/\">Learn</a></li>\n<li id=\"menu-item-196\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-196\"><a href=\"https://www.historymuseum.ca/shop/\">Shop</a></li>\n<li id=\"menu-item-197\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-197\"><a href=\"https://www.historymuseum.ca/support/\">Support</a></li>\n<li id=\"menu-item-195\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-195\"><a href=\"https://www.historymuseum.ca/about/\">About</a></li>\n\t<li>\n\t\t<a class=\"icon magnifying-glass\" href=\"#search\" title=\"Search\">\n\t\t\t<svg class=\"icon magnifying-glass\"><use xlink:href=\"#magnifying-glass\" /></svg>Search\n\t\t</a>\n\t</li>\n\t<li><a id=\"language-toggle\" href=\"https://www.museedelhistoire.ca/\" title=\"Français\">Français</a></li>\n</ul>\t</nav><!--End #main-menu-->\n\n</header>"

/***/ }),

/***/ "./src/components/main-header/main-header.component.scss":
/*!***************************************************************!*\
  !*** ./src/components/main-header/main-header.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/components/main-header/main-header.component.ts":
/*!*************************************************************!*\
  !*** ./src/components/main-header/main-header.component.ts ***!
  \*************************************************************/
/*! exports provided: MainHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainHeaderComponent", function() { return MainHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainHeaderComponent = /** @class */ (function () {
    function MainHeaderComponent() {
    }
    MainHeaderComponent.prototype.ngOnInit = function () {
    };
    MainHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-header',
            template: __webpack_require__(/*! ./main-header.component.html */ "./src/components/main-header/main-header.component.html"),
            styles: [__webpack_require__(/*! ./main-header.component.scss */ "./src/components/main-header/main-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainHeaderComponent);
    return MainHeaderComponent;
}());



/***/ }),

/***/ "./src/components/sticky-footer/sticky-footer.component.html":
/*!*******************************************************************!*\
  !*** ./src/components/sticky-footer/sticky-footer.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"stick\">\n<div>\n<div style=\"background-color:black; width:25%; height:80px; border-right-width:thin; border-right-style:solid;  border-right-color:white; float:left;\">\n <div style=\"margin-top:20px; margin-left:100px;\"><div style=\"color:white; font-weight:bold; \">PRESERVE YOUR ITENERARY</div><div style=\"color:white; font-size:12px; width:70%;\">copy the public share link and return to your itenerary later </div></div>\n</div>\n<div  style=\"background-color:black; width:25%; height:80px; float:left;\">\n    <div style=\"margin-top:20px; margin-left:100px;\"><div style=\"color:white; font-weight:bold;\">PRINT YOUR ITENERARY</div><div style=\"color:white; font-size:12px; width:70%;\">Print a hard copy of PDF. NOTE: this does not constitute a reservation! </div></div>\n</div>\n<div  style=\"background-color:darkred; width:25%; height:80px; float:left;\">\n    <div style=\"margin-top:20px; margin-left:100px;\"><div style=\"color:white; font-weight:bold;\">{{count}}/12 TIME SLOTS COMPLETE</div><div style=\"color:white; font-size:12px; width:70%;\">You're done. Next Step: Confirm your itenerary before submitting </div></div>\n</div>\n<div  style=\"background-color:red; width:25%; height:80px; float:left;\">\n  <div style=\"margin-top:20px; margin-left:160px;\"><a href=\"javascript:void(0)\" (click)=\"navigate()\"><div style=\"float:left; font-size:25px; font-weight:bold; color:white;\" >NEXT</div><div style=\"width:0;height: 0; border-top: 10px solid transparent; border-left: 15px solid white; border-bottom: 10px solid transparent; float:left; margin-left:20px; margin-top:10px;\"></div></a></div>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./src/components/sticky-footer/sticky-footer.component.scss":
/*!*******************************************************************!*\
  !*** ./src/components/sticky-footer/sticky-footer.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stick {\n  position: fixed;\n  bottom: 0;\n  width: 100%; }\n\n.bg {\n  height: 90px;\n  border-style: solid; }\n\n.saturate {\n  -webkit-filter: saturate(3);\n          filter: saturate(3); }\n\n.grayscale {\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%); }\n\n.contrast {\n  -webkit-filter: contrast(160%);\n          filter: contrast(160%); }\n\n.brightness {\n  -webkit-filter: brightness(0.25);\n          filter: brightness(0.25); }\n\n.blur {\n  -webkit-filter: blur(3px);\n          filter: blur(3px); }\n\n.invert {\n  -webkit-filter: invert(100%);\n          filter: invert(100%); }\n\n.sepia {\n  -webkit-filter: sepia(100%);\n          filter: sepia(100%); }\n\n.huerotate {\n  -webkit-filter: hue-rotate(180deg);\n          filter: hue-rotate(180deg); }\n\n.rss.opacity {\n  -webkit-filter: opacity(50%);\n          filter: opacity(50%); }\n"

/***/ }),

/***/ "./src/components/sticky-footer/sticky-footer.component.ts":
/*!*****************************************************************!*\
  !*** ./src/components/sticky-footer/sticky-footer.component.ts ***!
  \*****************************************************************/
/*! exports provided: StickyFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyFooterComponent", function() { return StickyFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StickyFooterComponent = /** @class */ (function () {
    function StickyFooterComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    StickyFooterComponent.prototype.ngOnInit = function () {
    };
    StickyFooterComponent.prototype.navigate = function () {
        this.router.navigate([this.page]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StickyFooterComponent.prototype, "page", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StickyFooterComponent.prototype, "count", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StickyFooterComponent.prototype, "set", void 0);
    StickyFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sticky-footer',
            template: __webpack_require__(/*! ./sticky-footer.component.html */ "./src/components/sticky-footer/sticky-footer.component.html"),
            styles: [__webpack_require__(/*! ./sticky-footer.component.scss */ "./src/components/sticky-footer/sticky-footer.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], StickyFooterComponent);
    return StickyFooterComponent;
}());



/***/ }),

/***/ "./src/components/submit-form/submit-form.component.html":
/*!***************************************************************!*\
  !*** ./src/components/submit-form/submit-form.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron container-fluid\" style=\"padding:5%\">\n\n  <div style=\"margin-left:30%; background-color:white; width:38%; padding:3%\">\n    <div style=\"font-weight:bold; font-size:25px\">\n      SUBMITTING ITINERARY:\n    </div>\n    <div style=\"font-size:20px\">\n      FIRST AVE. GRADE3 CLASS- ITINERARY 1\n    </div>\n      <form>\n          <div class=\"form-group\" style=\"margin-top:1%\">\n            <label for=\"exampleInputEmail1\" style=\"font-weight:bold; font-size:10px\" >FIRST NAME:</label>\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\" style=\"font-weight:bold; font-size:10px\">LAST NAME:</label>\n            <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\">\n          </div>\n          <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\" style=\"font-weight:bold; font-size:10px\">SCHOOL/INSTITUTION:</label>\n              <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\" style=\"font-weight:bold; font-size:10px\">NUMBER OF ATTENDEES:</label><br>\n                <select class=\"custom-select\" id=\"inputGroupSelect04\" style=\"font-weight:bold; width:50%; font-size:13px\">\n                  <option selected>1 </option>\n                  <option value=\"1\">2</option>\n                  <option value=\"2\">3</option>\n                  <option value=\"3\">4</option>\n                </select>\n              </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\" style=\"font-weight:bold; font-size:10px\">PHONE:</label>\n              <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"exampleInputPassword1\" style=\"font-weight:bold; font-size:10px\">EMAIL ADDRESS:</label>\n                <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\">\n              </div>\n \n              <div class=\"form-group\" >\n                <div>\n                <label for=\"exampleInputEmail1\" style=\"font-weight:bold; font-size:10px\">PREFERRED METHOD OF CONTACT:</label></div>\n              <div style=\" float:left; margin-left:5.8%; margin-right:10%;\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\" checked>\n                  <label class=\"form-check-label\" for=\"exampleRadios1\">\n                 Phone\n                  </label>\n                </div>\n                <div style=\"float:left; margin-right:9%;\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\" checked>\n                 <label class=\"form-check-label\" for=\"exampleRadios1\">\n                 Email\n                  </label>\n                </div>\n                </div>\n                <div class=\"form-group\" style=\"margin-top:10%\">\n                    <div><label for=\"exampleInputEmail1\" style=\"font-weight:bold; font-size:10px\">PREFERRED TIME OF CONTACT:</label></div>\n                    <div style=\"float:left; margin-right:2%; margin-top:3%; font-size:10px\"> From</div><div style=\"width:36%; margin-right:3%; float:left\">\n                    <select class=\"custom-select\" id=\"inputGroupSelect04\" style=\"font-weight:bold; font-size:13px\">\n                      <option selected>9:30 AM </option>\n                      <option value=\"1\">2</option>\n                      <option value=\"2\">3</option>\n                      <option value=\"3\">4</option>\n                    </select>\n                    </div>\n                    <div style=\"float:left; margin-right:2%; margin-top:3%; font-size:10px \"> To</div><div style=\"width:36%; float:left\">\n                        <select class=\"custom-select\" id=\"inputGroupSelect04\" style=\"font-weight:bold; font-size:13px\">\n                          <option selected>9:30 AM </option>\n                          <option value=\"1\">2</option>\n                          <option value=\"2\">3</option>\n                          <option value=\"3\">4</option>\n                        </select>\n                        </div>\n                  </div>\n \n                  <div class=\"form-group\" style=\"margin-top:15%\">\n                      <label for=\"exampleInputEmail1\" style=\"font-weight:bold; font-size:10px\">COMMENTS:</label>\n                      <div style=\" font-size:9.5px\">Let us know about about any special instructions for contacting you or special needs for your group</div>\n                      <div>\n                        <textarea style=\"height:100px; width:98%;\"></textarea>\n                      </div>\n                      </div>\n \n                      <div id=footer>\n                          <div style=\"margin-bottom:20px;\">\n                          <div>\n                          <button type=\"button\" class=\"btn btn-danger\" id=\"new-btn\" style=\"margin-top:2%;\"> <div style=\"float:left;\">SUBMIT</div></button>\n                        </div>\n                       \n                    </div>\n                    </div>\n        </form>\n  </div>\n   </div>\n"

/***/ }),

/***/ "./src/components/submit-form/submit-form.component.scss":
/*!***************************************************************!*\
  !*** ./src/components/submit-form/submit-form.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer {\n  border-top-color: #D3D3D3;\n  border-top-style: solid;\n  border-top-width: thin;\n  padding: 1%; }\n"

/***/ }),

/***/ "./src/components/submit-form/submit-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/components/submit-form/submit-form.component.ts ***!
  \*************************************************************/
/*! exports provided: SubmitFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitFormComponent", function() { return SubmitFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubmitFormComponent = /** @class */ (function () {
    function SubmitFormComponent() {
    }
    SubmitFormComponent.prototype.ngOnInit = function () {
    };
    SubmitFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-submit-form',
            template: __webpack_require__(/*! ./submit-form.component.html */ "./src/components/submit-form/submit-form.component.html"),
            styles: [__webpack_require__(/*! ./submit-form.component.scss */ "./src/components/submit-form/submit-form.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SubmitFormComponent);
    return SubmitFormComponent;
}());



/***/ }),

/***/ "./src/components/timeline/timeline.component.html":
/*!*********************************************************!*\
  !*** ./src/components/timeline/timeline.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"outer-flex\">\n  \n  <div style=\"margin-left:1%; width:7%; font-size:15px; font-weight:bold;\">\n  \n          <img  *ngIf=\"selected\" src=\"../../assets/images/check.png\" class=\"icon\">\n    \n  {{time}}\n  </div>\n  <div style=\"border-top-style:dashed; border-width:thin; border-color:grey; width:90%; align-self:center;\">\n   \n  </div>\n  </div>"

/***/ }),

/***/ "./src/components/timeline/timeline.component.scss":
/*!*********************************************************!*\
  !*** ./src/components/timeline/timeline.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".height {\n  border-style: solid;\n  display: inline-block;\n  border-width: thin;\n  margin-top: 5%; }\n\nimg {\n  max-width: 100%;\n  max-height: 100%; }\n\n.img-resize {\n  height: 200px;\n  width: 90%; }\n\n.outer-flex {\n  display: flex;\n  flex-direction: row;\n  margin-top: 20px; }\n\n.flex-container {\n  display: flex;\n  /*  border-top-style: dashed;\n    border-color:#E0E0E0; */\n  flex-direction: row;\n  padding-top: 1%;\n  justify-content: flex-start; }\n\n.img-flex {\n  display: flex;\n  width: 18%; }\n\n.middle-flex {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-right: 5%; }\n\n.icon {\n  height: 19px; }\n\n.inner-flex {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n\n.main-flex {\n  display: flex;\n  flex-direction: column; }\n\n.list {\n  margin-bottom: 0%; }\n\n.activity-card {\n  height: 200px;\n  width: 23.5%;\n  font-size: 12px; }\n\n.alt-flex {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n"

/***/ }),

/***/ "./src/components/timeline/timeline.component.ts":
/*!*******************************************************!*\
  !*** ./src/components/timeline/timeline.component.ts ***!
  \*******************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TimelineComponent.prototype, "time", void 0);
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/components/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.scss */ "./src/components/timeline/timeline.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/components/warning/warning.component.html":
/*!*******************************************************!*\
  !*** ./src/components/warning/warning.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid \">\n    <div style=\"font-weight:bold; margin-top:7%; color:red;\">\n      <h1>DON'T LOSE YOUR ITENERARY!</h1>\n    </div>\n    <div style=\"margin-top:5%; font-weight:bold;\">\n        COPY YOUR <a href=\"javascript:void(0)\" style=\"color:black\"> PUBLIC SHARE LINK</a><br>\n        YOU'LL NEED IT TO KEEP FIND YOUR ITENERARY LATER.\n    </div>\n\n\n    <div style=\"margin-top:7%\" >\n      Use the forms below to copy and paste the link somewhere you \n      can find it, or email it to yourself and others.\n      </div>\n       \n      <div style=\"margin-top:7%; border-top-style:solid; border-top-width:thin; width:100%; border-top-color:#E0E0E0; padding:2%; \">\n      <div style=\"font-weight:bold;\">COPY</div>\n      <div style=\"margin-top:5%; font-size:12px; font-weight:bold;\">YOUR PUBLIC SHARE LINK</div>\n      <div >\n          <div class=\"input-group mb-3\">\n              <input id=\"bar\" type=\"text\" class=\"form-control\"  value=\"https://github.com/zenorocha/clipboard.js.git\">\n              <div class=\"input-group-append\"  id=\"copy-button\" data-clipboard-target=\"#bar\">\n                <button class=\"btn btn-danger\" type=\"button\">COPY LINK</button>\n              </div>\n            </div>\n      </div>\n      </div>\n  \n      <div style=\"margin-top:2%; border-top-style:solid; border-top-width:thin; border-top-color:#E0E0E0; padding:2%; \">\n        <div style=\"font-weight:bold;\">\n          EMAIL\n        </div>\n\n        <div style=\"margin-top:5%; font-size:12px; font-weight:bold;\">EMAIL ADDRESS:</div>\n          <div class=\"input-group mb-3\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Recipient's username\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-danger\" type=\"button\">SEND</button>\n              </div>\n            </div>\n        </div>\n              \n        <div style=\"margin-top:2%; border-top-style:solid; border-top-width:thin; border-top-color:#E0E0E0; padding:5%; \">\n             <div>\n            <input class=\"form-check-input\" type=\"checkbox\" name=\"exampleRadios\" id=\"examplecheckbox1\"  checked>\n            <label class=\"form-check-label\" for=\"exampleRadios1\" style=\"font-size:11px\">\n                I have copied the public share link to somewhere for safekeeping\n            </label>\n              </div>\n\n              <div style=\"float:right;padding:5%; \">\n                  <button type=\"button\" style=\"width:100%;\" class=\"btn \" id=\"new-btn\"> <div style=\"float:left; font-size:12px\">CONTINUE</div> <div style=\"width:0;height: 0; border-top: 5px solid transparent; border-left: 10px solid black; border-bottom: 5px solid transparent; float:left; margin-left:10px; margin-top:4px;\"></div></button>\n                </div>\n          </div>\n  \n  </div>\n\n  "

/***/ }),

/***/ "./src/components/warning/warning.component.scss":
/*!*******************************************************!*\
  !*** ./src/components/warning/warning.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/components/warning/warning.component.ts":
/*!*****************************************************!*\
  !*** ./src/components/warning/warning.component.ts ***!
  \*****************************************************/
/*! exports provided: WarningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningComponent", function() { return WarningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WarningComponent = /** @class */ (function () {
    function WarningComponent() {
    }
    WarningComponent.prototype.ngOnInit = function () {
    };
    WarningComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-warning',
            template: __webpack_require__(/*! ./warning.component.html */ "./src/components/warning/warning.component.html"),
            styles: [__webpack_require__(/*! ./warning.component.scss */ "./src/components/warning/warning.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WarningComponent);
    return WarningComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAqb1AZM_xWPycGFuWByknU7WPsTQ0auxk",
        authDomain: "planning-tool-532b0.firebaseapp.com",
        databaseURL: "https://planning-tool-532b0.firebaseio.com",
        projectId: "planning-tool-532b0",
        storageBucket: "planning-tool-532b0.appspot.com",
        messagingSenderId: "429282485430"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/models/activity.ts":
/*!********************************!*\
  !*** ./src/models/activity.ts ***!
  \********************************/
/*! exports provided: Activity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Activity", function() { return Activity; });
var Activity = /** @class */ (function () {
    function Activity(time, selection, name, type, length, description, on, qc, fees, img, ageRange, timeOfYear, timeSlots, order) {
        this.time = time;
        this.selection = selection;
        this.name = name;
        this.type = type;
        this.length = length;
        this.description = description;
        this.on = on;
        this.qc = qc;
        this.fees = fees;
        this.img = img;
        this.ageRange = ageRange;
        this.timeOfYear = timeOfYear;
        this.timeSlots = timeSlots;
        this.order = order;
    }
    return Activity;
}());



/***/ }),

/***/ "./src/pages/confirm-page/confirm-page.component.html":
/*!************************************************************!*\
  !*** ./src/pages/confirm-page/confirm-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-header></app-header>\n</div>\n\n<div class=\"container-fluid\">\n  <div class=\"outer\">\n <div class=\"heading\">\n   REVIEW & CONFIRM YOUR ITINERARY\n </div>\n <div class=\"description\">\n  Review the information below before we move on to the next step\n   when we'll submit our itinerary to the Museum's call center\n </div>\n </div>\n</div>\n\n<div style=\"margin-top:2%;\">\n  <app-confirm></app-confirm>\n</div>\n\n<div>\n  <app-sticky-footer [count]=\"number\" [page]=\"page\"></app-sticky-footer>\n</div>\n\n"

/***/ }),

/***/ "./src/pages/confirm-page/confirm-page.component.scss":
/*!************************************************************!*\
  !*** ./src/pages/confirm-page/confirm-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outer {\n  margin-left: 2%;\n  margin-top: 2%; }\n\n.heading {\n  font-weight: bold;\n  font-size: 50px; }\n\n.description {\n  font-size: 15px; }\n\n@media only screen and (max-width: 414px) {\n  .outer {\n    margin: 8%; }\n  .heading {\n    font-weight: bold;\n    font-size: 21px; }\n  .description {\n    font-size: 12px;\n    margin-bottom: 12%; } }\n\n@media only screen and (max-width: 375px) {\n  .outer {\n    margin: 8%; }\n  .heading {\n    font-weight: bold;\n    font-size: 21px; }\n  .description {\n    font-size: 12px;\n    margin-bottom: 12%; } }\n"

/***/ }),

/***/ "./src/pages/confirm-page/confirm-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/pages/confirm-page/confirm-page.component.ts ***!
  \**********************************************************/
/*! exports provided: ConfirmPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPageComponent", function() { return ConfirmPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import * as nodemailer from 'nodemailer';
//declare var mail: any;
var ConfirmPageComponent = /** @class */ (function () {
    function ConfirmPageComponent(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.page = "SubmitPage";
        this.number = localStorage.getItem('count');
        this.endpoint = 'https://your-project.cloudfunctions.net/httpEmail';
        //this.mailer.send();
    }
    ConfirmPageComponent.prototype.ngOnInit = function () {
    };
    ConfirmPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-page',
            template: __webpack_require__(/*! ./confirm-page.component.html */ "./src/pages/confirm-page/confirm-page.component.html"),
            styles: [__webpack_require__(/*! ./confirm-page.component.scss */ "./src/pages/confirm-page/confirm-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ConfirmPageComponent);
    return ConfirmPageComponent;
}());



/***/ }),

/***/ "./src/pages/design-page/design-page.component.html":
/*!**********************************************************!*\
  !*** ./src/pages/design-page/design-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div>\n  <app-header></app-header>\n</div>\n\n<div class=\"container-fluid\">\n  <div style=\"margin-left:2%; margin-top:2%;\">\n <div style=\" font-weight:bold; font-size:50px;\">\n   DESIGN YOUR ITINERARY\n </div>\n <div style=\"font-size:15px;\">\n   Build your itinerary...your way! Choose from our programs for each timeslot of your visit\n </div>\n </div>\n</div>\n\n<div style=\"background-color:#F0F0F0; height:200px; margin-top:2%; padding:2%;\">\n<div style=\"background-color:white; height:120px; padding:1.5%;\"><div style=\"font-size:40px;  \">\n  FIRST AVE. GRADE 3 CLASS - ITINERARY 1</div>\n</div>\n</div>\n\n<div class=\"container-fluid\" style=\"margin-left:2%;\">\n  <div  style=\"font-weight:bold; font-size:25px; margin-top:2%;\">\n<div  style=\"font-weight:bold; font-size:25px;\"> \nITINERARY\n</div>\n<div *ngIf=\"!set\" style=\"font-weight:bold; font-size:20px; float:right; margin-right:2%\">\n    <a href=\"javascript:void(0)\" (click)=\"reset()\">Reset</a>\n  </div>\n  </div>\n<div *ngIf=\"!set\">\n    <div *ngIf='!isEdit' class=\"activity\">\n        <app-activity *ngFor=\"let item of items | async\" [item]=\"item\" [time]=\"time\" (index)=\"populate($event)\" (activity)=\"getActivity($event)\" [set]=\"set\" (remove)=\"remove($event)\"></app-activity>\n       </div>\n       \n       <div *ngIf='isEdit' class=\"activity\">\n        <app-activity *ngFor=\"let item of items\" [selectedItem]=\"item\" [time]=\"time\"  [swap]='swap' [display]='display' [showTools]='showTools' [edited]='edited' [set]=\"set\" [selected]='selected' (index)=\"populate($event)\" (activity)=\"getActivity($event)\" (remove)=\"remove($event)\"></app-activity>\n       </div>  \n</div>\n<div *ngIf=\"set\">\n    <div *ngIf='!isEdit' class=\"activity\">\n        <app-activity *ngFor=\"let itinerary of itineraries\" [itinerary]=\"itinerary\" [item]=\"item\" [time]=\"time\" (index)=\"populate($event)\" (activity)=\"getActivity($event)\" [set]=\"set\" (remove)=\"remove($event)\"></app-activity>\n       </div>\n       \n       <div *ngIf='isEdit' class=\"activity\">\n        <app-activity *ngFor=\"let itinerary of itineraries\" [itinerary]=\"itinerary\" [selectedItem]=\"item\" [time]=\"time\"  [swap]='swap' [display]='display' [showTools]='showTools' [edited]='edited' [set]=\"set\" [selected]='selected' (index)=\"populate($event)\" (activity)=\"getActivity($event)\" (remove)=\"remove($event)\"></app-activity>\n       </div>  \n</div>\n</div>\n\n<div style=\"width:100%\">\n  <app-sticky-footer [count]=\"count\" [page]=\"page\" [set]=\"set\"></app-sticky-footer>\n</div>"

/***/ }),

/***/ "./src/pages/design-page/design-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/pages/design-page/design-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".activity {\n  width: 100%;\n  margin-bottom: 2%; }\n\n.stick {\n  position: fixed;\n  bottom: 0;\n  width: 100%; }\n\n.bg {\n  height: 90px;\n  border-style: solid; }\n\n.saturate {\n  -webkit-filter: saturate(3);\n          filter: saturate(3); }\n\n.grayscale {\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%); }\n\n.contrast {\n  -webkit-filter: contrast(160%);\n          filter: contrast(160%); }\n\n.brightness {\n  -webkit-filter: brightness(0.25);\n          filter: brightness(0.25); }\n\n.blur {\n  -webkit-filter: blur(3px);\n          filter: blur(3px); }\n\n.invert {\n  -webkit-filter: invert(100%);\n          filter: invert(100%); }\n\n.sepia {\n  -webkit-filter: sepia(100%);\n          filter: sepia(100%); }\n\n.huerotate {\n  -webkit-filter: hue-rotate(180deg);\n          filter: hue-rotate(180deg); }\n\n.rss.opacity {\n  -webkit-filter: opacity(50%);\n          filter: opacity(50%); }\n"

/***/ }),

/***/ "./src/pages/design-page/design-page.component.ts":
/*!********************************************************!*\
  !*** ./src/pages/design-page/design-page.component.ts ***!
  \********************************************************/
/*! exports provided: DesignPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignPageComponent", function() { return DesignPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _models_activity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/activity */ "./src/models/activity.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DesignPageComponent = /** @class */ (function () {
    function DesignPageComponent(db, router, route) {
        this.db = db;
        this.router = router;
        this.route = route;
        this.page = "/ConfirmPage";
        this.activities = [];
        this.selection = new Array(7);
        this.dates = new Array(12);
        this.time = 45;
        this.count = 0;
        this.edited = true;
        this.swap = true;
        this.display = true;
        this.showTools = true;
        this.selected = true;
    }
    DesignPageComponent.prototype.ngOnInit = function () {
        // retreive the set variable from local storage
        this.set = JSON.parse(localStorage.getItem("set"));
        this.dates[0] = 570;
        // set date number in localstorage
        localStorage.setItem('dates', JSON.stringify(this.dates));
        this.edit = JSON.parse(localStorage.getItem('edit'));
        this.checkEdit();
        // load the itinerary from local storage if using pre-defined itinerary
        this.itineraries = JSON.parse(localStorage.getItem("itinerary"));
    };
    DesignPageComponent.prototype.checkEdit = function () {
        if (!this.edit) {
            this.items = this.db.collection('/activities', function (ref) { return ref.orderBy('order'); }).snapshotChanges().map(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    console.log(id);
                    return __assign({ id: id }, data);
                });
            });
            this.isEdit = false;
        }
        else {
            this.items = JSON.parse(localStorage.getItem('activities'));
            this.isEdit = true;
        }
    };
    DesignPageComponent.prototype.reset = function () {
        this.items = this.db.collection('/activities', function (ref) { return ref.orderBy('order'); }).snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                console.log(id);
                return __assign({ id: id }, data);
            });
        });
        this.isEdit = false;
        localStorage.setItem('edit', JSON.stringify(false));
        this.activities = [];
        localStorage.removeItem('activities');
    };
    DesignPageComponent.prototype.navigate = function () {
        this.router.navigate([this.page]);
    };
    DesignPageComponent.prototype.populate = function (event) {
        this.select = event;
        if (event.order != 0) {
            this.dates[event.order] = this.dates[event.order - 1] + this.duration;
            var next = this.dates[event.order + 1];
            /*   while(next != null ) {
                this.dates[event.order + 1] = this.dates[event.order] + this.activities[event.oder + 1].length;
                next = next + 1
              } */
        }
        localStorage.setItem('dates', JSON.stringify(this.dates));
        if ((!this.selection.some(function (item) { return item === event.id; }))) {
            this.count++;
        }
        localStorage.setItem('count', JSON.stringify(this.count));
        console.log(event.id, event.order);
        this.selection[event.order] = event.id;
        console.log(this.selection);
    };
    DesignPageComponent.prototype.placeEdit = function () {
    };
    DesignPageComponent.prototype.getActivity = function (event) {
        this.duration = event.length;
        this.time = this.time + event.length;
        if (!(this.activities.some(function (item) { return item.name === event.name; }))) {
            this.activities.push(new _models_activity__WEBPACK_IMPORTED_MODULE_2__["Activity"](this.dates[this.select.order], this.select.order, event.name, event.type, event.length, event.description, event.on, event.qc, event.fees, event.img, event.ageRange, event.timeOfYear, event.timeSlots, event.order));
        }
        localStorage.setItem('activities', JSON.stringify(this.activities));
        console.log(this.activities);
    };
    DesignPageComponent.prototype.remove = function (event) {
        console.log(event);
        var items = JSON.parse(localStorage.getItem('activities'));
        console.log(items);
        var index = items.findIndex(function (i) { return i.selection === event; });
        items.splice(index, 1);
        this.activities = items;
        console.log(items);
        localStorage.setItem('activities', JSON.stringify(items));
    };
    DesignPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-design-page',
            template: __webpack_require__(/*! ./design-page.component.html */ "./src/pages/design-page/design-page.component.html"),
            styles: [__webpack_require__(/*! ./design-page.component.scss */ "./src/pages/design-page/design-page.component.scss")]
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DesignPageComponent);
    return DesignPageComponent;
}());



/***/ }),

/***/ "./src/pages/landing-page/landing-page.component.html":
/*!************************************************************!*\
  !*** ./src/pages/landing-page/landing-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-main-header></app-main-header>\n</div>\n\n<div class=\"container-fluid\" style=\"padding:0%\">\n\n<div  style=\"margin-top:2%;\">\n <div class=\"plan1\" >PLAN YOUR VISIT</div>\n  <div style=\"width:0;height: 0; border-top: 4.5px solid transparent; border-left: 6px solid black; \n  border-bottom: 4.5px solid transparent; float:left; margin-left:20px; margin-top:4px;\"></div> \n</div>\n<br>\n<div style=\"margin-right:2%\">\n  <div class=\"plan2\">\n    PLAN A SCHOOL TRIP\n  </div>\n  <div style=\"float:right; margin-top:1%;\">\n      <div class=\"plan3\" >PLAN YOUR VISIT</div>\n      <div style=\"width:0;height: 0; border-top: 8px solid transparent; border-left: 12px solid #808080; \n      border-bottom: 8px solid transparent; float:left; margin-left:20px; margin-top:12px;\"></div>\n    </div>\n</div>\n\n<div >\n  <img src=\"../../assets/images/newlanding.jpg\" class=\"img-responsive img-resize\">\n</div>\n\n\n<div class=\"text1\">\n<div class=\"text2\" >\n    PLAN YOUR DAY AT THE MUSEUM\n  </div>\n<div class=\"text3\">\n    Lorem ipsum dolor sit amet, mel wisi justo salutandi ut, in blandit tacimates adipiscing mel. Cum et bonorum noluisse. Vel id quem laoreet insolens, \n    , erant dissentiet ea usu, eam in liber alterum. Mel debitis appetere honestatis eu, vel facete discere an. Cum ex unum atqui, habeo eligendi his an\n    <br><br>\n    Get started with our sample iteneraries below or build your own.\n</div>\n</div>\n\n</div>\n\n\n  <div class=\"filter\">\n        <div class=\"row\"  style=\"margin-bottom:2%; margin-left:0.1%\">\n            <div class=\"filtertext\" >FILTER ITENERARIES:</div>\n          <div class=\"input-group\" class=\"grades\">\n                  <select class=\"custom-select\" id=\"inputGroupSelect04\" style=\"font-weight:bold; height:35px; font-size:13px; background-color:#f7f7f7;\">\n                    <option selected>All Grades </option>\n                    <option value=\"1\">One</option>\n                    <option value=\"2\">Two</option>\n                    <option value=\"3\">Three</option>\n                  </select>\n                </div>\n                <div class=\"date\" >\n                      <button type=\"button\" class=\"btn \" style=\"width:100%; background-color:#f7f7f7; font-size:13px; font-weight:bold; border-color:#D8D8D8; border-width:thin; color:black\" (click)=\"open(content)\"> Select Date Range</button>\n                    </div>\n                    <div class=\"input-group\" class=\"day\" >\n                          <select class=\"custom-select\" id=\"inputGroupSelect04\" style=\"font-weight:bold; height:35px; font-size:13px; background-color:#f7f7f7;\">\n                            <option selected >Half-day and full-day</option>\n                            <option value=\"1\">One</option>\n                            <option value=\"2\">Two</option>\n                            <option value=\"3\">Three</option>\n                          </select>\n                        </div>\n                        <div class=\"show\">\n                          <button type=\"button\" class=\"btn \" style=\"width:100%; background-color:#8a8d8a; font-size:13px; font-weight:bold; border-color:#D8D8D8; border-width:thin; color:#f7f7f7\" (click)=\"open(content)\"> Show result</button>\n                        </div>\n                      </div>\n           \n  <div class=\"row\" style=\"margin-left:0%;\">\n          <div  class=\"empty-card\" >\n          <app-empty-card></app-empty-card>\n          </div>\n  \n  <div class=\"margin\"*ngFor=\"let item of items | async\" >\n          <app-card [item]=\"item\"></app-card>\n          </div>\n\n</div>\n\n<nav aria-label=\"...\">\n    <ul class=\"pagination pagination-lg\">\n      <li class=\"page-item\" style=\"margin-right:0.5%;\">\n        <a class=\"page-link\" href=\"#\" tabindex=\"-1\">1</a>\n      </li>\n      <li class=\"page-item\" style=\"margin-right:0.5%;\"><a class=\"page-link\" href=\"#\">2</a></li>\n      <li class=\"page-item\" style=\"margin-right:0.5%;\"><a class=\"page-link\" href=\"#\">3</a></li>\n    </ul>\n  </nav>\n</div>\n\n<div>\n  <app-main-footer></app-main-footer>\n</div>\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div style=\"width:100%\">\n        <div style=\"margin-bottom:5%; margin-top:2%; text-align:center;\">\n          <h4>SELECT YOUR DATE RANGE</h4>\n        </div>\n          <div > \n    <app-calendar></app-calendar>\n\n    </div>\n    <div id=footer>\n        <div style=\"margin-bottom:30px; margin-left:10%; padding-bottom:2%;\">\n        <div>\n        <button type=\"button\" class=\"btn btn-danger\" id=\"new-btn\"  (click)=\"d('Cross click')\"  (click)=\"navigateToDesignPage()\"> <div style=\"float:left;\">Done</div> </button>\n      </div>\n      \n  </div>\n  </div>\n    \n\n    \n  </div>\n  </ng-template>"

/***/ }),

/***/ "./src/pages/landing-page/landing-page.component.scss":
/*!************************************************************!*\
  !*** ./src/pages/landing-page/landing-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-resize {\n  height: auto;\n  width: 100%; }\n\n.margin {\n  margin-bottom: 3%;\n  height: 380px;\n  width: 32.8%;\n  font-size: 13px; }\n\n.empty-card {\n  height: 380px;\n  width: 32.8%;\n  font-size: 13px; }\n\n.plan1 {\n  float: left;\n  font-size: 12px;\n  font-weight: bold;\n  margin-left: 1.5%; }\n\n.plan2 {\n  float: left;\n  font-weight: bold;\n  margin-left: 1.5%;\n  font-size: 40px;\n  color: #4a4a4a; }\n\n.plan3 {\n  float: left;\n  font-size: 25px;\n  font-weight: bold;\n  color: #8a8d8a; }\n\n.text1 {\n  color: #4a4a4a;\n  margin-left: 1.5%;\n  margin-top: 2%; }\n\n.text2 {\n  font-weight: bold;\n  font-size: 40px;\n  color: #4a4a4a; }\n\n.text3 {\n  font-size: 17px;\n  width: 80%;\n  margin-top: 0.8%;\n  color: #4a4a4a; }\n\n.filter {\n  margin-left: 1.5%;\n  margin-top: 2%; }\n\n.filtertext {\n  font-weight: bold;\n  margin-top: 8px; }\n\n.filter2 {\n  margin-bottom: 2%;\n  margin-left: 0.1%; }\n\n.grade {\n  font-weight: bold;\n  margin-top: 8px; }\n\n.grades {\n  width: 15%;\n  margin-left: 1%;\n  height: 10px; }\n\n.select {\n  font-weight: bold;\n  font-size: 13px; }\n\n.date {\n  width: 15%;\n  margin-left: 1%; }\n\n.day {\n  width: 15%;\n  margin-left: 1%;\n  height: 10px; }\n\n.show {\n  width: 15%;\n  margin-left: 1%; }\n\n@media only screen and (max-width: 1300px) {\n  .grades {\n    width: 26%;\n    margin-left: 1%; }\n  .date {\n    width: 26%;\n    margin-left: 1%; }\n  .day {\n    width: 26%;\n    margin-left: 1%; }\n  .show {\n    width: 12%;\n    margin-left: 46%;\n    margin-top: 1%; } }\n\n@media only screen and (max-width: 1220px) {\n  .margin {\n    margin-bottom: 5%;\n    height: 380px;\n    width: 49%;\n    font-size: 13px; }\n  .empty-card {\n    height: 380px;\n    width: 49%;\n    font-size: 13px; } }\n\n@media only screen and (max-width: 1006px) {\n  .filtertext {\n    font-weight: bold;\n    margin-top: 8px;\n    margin-left: 37%; }\n  .grades {\n    width: 95%;\n    margin-left: 1%; }\n  .date {\n    width: 95%;\n    margin-left: 1%;\n    margin-top: 4%; }\n  .day {\n    width: 95%;\n    margin-left: 1%;\n    margin-top: 1.5%; }\n  .show {\n    width: 95%;\n    margin-left: 1%;\n    margin-top: 4%; } }\n\n@media only screen and (max-width: 1000px) {\n  .margin {\n    margin-bottom: 3%;\n    height: 380px;\n    width: 49%;\n    font-size: 13px; }\n  .empty-card {\n    height: 380px;\n    width: 49%;\n    font-size: 13px; }\n  .text1 {\n    margin-left: 1%;\n    margin-top: 2%; }\n  .text2 {\n    font-weight: bold;\n    font-size: 35px;\n    margin-left: 1%; }\n  .text3 {\n    font-size: 17px;\n    margin-left: 1%;\n    width: 93%;\n    margin-top: 0.8%; } }\n\n@media only screen and (max-width: 850px) {\n  .margin {\n    margin-bottom: 5%;\n    height: 380px;\n    width: 49%;\n    font-size: 13px; }\n  .empty-card {\n    height: 380px;\n    width: 49%;\n    font-size: 13px; }\n  .grades {\n    width: 95%;\n    margin-left: 1%; }\n  .date {\n    width: 95%;\n    margin-left: 1%;\n    margin-top: 4.2%; }\n  .day {\n    width: 95%;\n    margin-left: 1%;\n    margin-top: 1.5%; }\n  .show {\n    width: 95%;\n    margin-left: 1%;\n    margin-top: 4%; } }\n\n@media only screen and (max-width: 750px) {\n  .margin {\n    margin-bottom: 8%;\n    height: 380px;\n    width: 49%;\n    font-size: 13px; }\n  .empty-card {\n    height: 380px;\n    width: 49%;\n    font-size: 13px; }\n  .grades {\n    width: 95%;\n    margin-left: 1%; }\n  .date {\n    width: 95%;\n    margin-left: 1%;\n    margin-top: 5%; }\n  .day {\n    width: 95%;\n    margin-left: 1%;\n    margin-top: 1.5%; }\n  .show {\n    width: 95%;\n    margin-left: 1%;\n    margin-top: 5%; } }\n\n@media only screen and (max-width: 650px) {\n  .margin {\n    margin-bottom: 10%;\n    height: 380px;\n    width: 50%;\n    font-size: 13px; }\n  .empty-card {\n    height: 380px;\n    width: 49%;\n    font-size: 13px; }\n  .grades {\n    width: 95%;\n    margin-left: 1%; }\n  .date {\n    width: 95%;\n    margin-left: 1%;\n    margin-top: 5.5%; }\n  .day {\n    width: 95%;\n    margin-left: 1%;\n    margin-top: 1.5%; }\n  .show {\n    width: 95%;\n    margin-left: 1%;\n    margin-top: 5.5%; } }\n\n@media only screen and (max-width: 600px) {\n  .margin {\n    margin-bottom: 8%;\n    height: 380px;\n    width: 95%;\n    font-size: 13px; }\n  .empty-card {\n    height: 380px;\n    width: 95%;\n    font-size: 13px;\n    margin-bottom: 3%; }\n  .filtertext {\n    font-weight: bold;\n    margin-top: 8px;\n    margin-left: 1%; }\n  .grades {\n    width: 95%;\n    margin-left: 1%; }\n  .date {\n    width: 95%;\n    margin-left: 1%;\n    margin-top: 6%; }\n  .day {\n    width: 95%;\n    margin-left: 1%;\n    margin-top: 1.5%; }\n  .show {\n    width: 95%;\n    margin-left: 1%;\n    margin-top: 6%; } }\n\n@media only screen and (max-width: 470px) {\n  .margin {\n    margin-bottom: 8%;\n    height: 380px;\n    width: 98%;\n    font-size: 13px; }\n  .empty-card {\n    height: 380px;\n    width: 98%;\n    font-size: 13px;\n    margin-bottom: 3%; }\n  .filtertext {\n    font-weight: bold;\n    margin-top: 8px;\n    margin-left: 0%; }\n  .grades {\n    width: 92%;\n    margin-left: 1%; }\n  .date {\n    width: 92%;\n    margin-left: 1%;\n    margin-top: 7%; }\n  .day {\n    width: 92%;\n    margin-left: 1%;\n    margin-top: 1.5%; }\n  .show {\n    width: 92%;\n    margin-left: 1%;\n    margin-top: 7%; } }\n\n@media only screen and (max-width: 414px) {\n  .margin {\n    margin-bottom: 12%;\n    height: 380px;\n    width: 95%;\n    font-size: 13px; }\n  .plan1 {\n    float: left;\n    font-size: 12px;\n    font-weight: bold; }\n  .plan2 {\n    float: left;\n    margin-left: 10px;\n    font-weight: bold;\n    font-size: 28px; }\n  .plan3 {\n    float: left;\n    font-size: 0px;\n    font-weight: bold;\n    color: \"#808080\"; }\n  .empty-card {\n    height: 380px;\n    width: 92%;\n    font-size: 8px;\n    margin-bottom: 8%; }\n  .text1 {\n    margin-left: 1%;\n    margin-top: 2%; }\n  .text2 {\n    font-weight: bold;\n    font-size: 25px;\n    margin-left: 1%; }\n  .text3 {\n    font-size: 12px;\n    margin-left: 1%;\n    width: 80%;\n    margin-top: 0.8%; }\n  .grades {\n    width: 92%;\n    margin-left: 1%; }\n  .date {\n    width: 92%;\n    margin-left: 1%;\n    margin-top: 9%; }\n  .day {\n    width: 92%;\n    margin-left: 1%;\n    margin-top: 2.7%; }\n  .show {\n    width: 92%;\n    margin-left: 1%;\n    margin-top: 9%; } }\n\n@media only screen and (max-width: 375px) {\n  .margin {\n    margin-bottom: 12%;\n    height: 380px;\n    width: 95%;\n    font-size: 13px; }\n  .plan1 {\n    float: left;\n    font-size: 12px;\n    font-weight: bold; }\n  .plan2 {\n    float: left;\n    font-weight: bold;\n    font-size: 25px; }\n  .plan3 {\n    float: left;\n    font-size: 0px;\n    font-weight: bold;\n    color: \"#808080\"; }\n  .empty-card {\n    height: 380px;\n    width: 92%;\n    font-size: 8px;\n    margin-bottom: 8%; }\n  .text1 {\n    margin-left: 1%;\n    margin-top: 2%; }\n  .text2 {\n    margin-left: 1%;\n    font-weight: bold;\n    font-size: 25px; }\n  .text3 {\n    margin-left: 1%;\n    font-size: 12px;\n    width: 80%;\n    margin-top: 0.8%; }\n  .grades {\n    width: 92%;\n    margin-left: 1%; }\n  .date {\n    width: 92%;\n    margin-left: 1%;\n    margin-top: 9%; }\n  .day {\n    width: 92%;\n    margin-left: 1%;\n    margin-top: 2.2%; }\n  .show {\n    width: 92%;\n    margin-left: 1%;\n    margin-top: 9%; } }\n\n@media only screen and (max-width: 320px) {\n  .margin {\n    margin-bottom: 12%;\n    height: 380px;\n    width: 95%;\n    font-size: 13px; }\n  .plan1 {\n    float: left;\n    font-size: 12px;\n    font-weight: bold; }\n  .plan2 {\n    float: left;\n    font-weight: bold;\n    font-size: 25px; }\n  .plan3 {\n    float: left;\n    font-size: 0px;\n    font-weight: bold;\n    color: \"#808080\"; }\n  .empty-card {\n    height: 380px;\n    width: 92%;\n    font-size: 8px;\n    margin-bottom: 8%; }\n  .text1 {\n    margin-left: 1%;\n    margin-top: 2%; }\n  .text2 {\n    font-weight: bold;\n    font-size: 25px;\n    margin-left: 1%; }\n  .text3 {\n    font-size: 12px;\n    width: 80%;\n    margin-top: 0.8%;\n    margin-left: 1%; }\n  .grades {\n    width: 92%; }\n  .date {\n    width: 92%;\n    margin-top: 9%; }\n  .day {\n    width: 92%;\n    margin-top: 1.5%; }\n  .show {\n    width: 92%;\n    margin-top: 9%; } }\n"

/***/ }),

/***/ "./src/pages/landing-page/landing-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/pages/landing-page/landing-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(modalService, db) {
        this.modalService = modalService;
        this.db = db;
        this.items = db.collection('/itineraries').snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
    }
    LandingPageComponent.prototype.ngOnInit = function () {
        localStorage.setItem("set", JSON.stringify(false));
    };
    LandingPageComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        });
    };
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/pages/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.scss */ "./src/pages/landing-page/landing-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/pages/submit-page/submit-page.component.html":
/*!**********************************************************!*\
  !*** ./src/pages/submit-page/submit-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-header></app-header>\n</div>\n\n<div class=\"container-fluid\">\n  <div style=\"margin-left:2%; margin-top:2%;\">\n <div style=\" font-weight:bold; font-size:50px;\">\n   SUBMIT YOUR ITENERARY\n </div>\n <div style=\"font-size:17px; width:55%\">\n  <span style=\"color:red\">IMPORTANT: This is NOT a reservation.</span>\n  Submit your itenerary to the Museum call centre here, and \n  we will review and contact you within XX hours to follow up and confirm your booking\n </div>\n </div>\n</div>\n\n<div style=\"margin-top:3%;\">\n  <app-submit-form></app-submit-form>\n</div>\n\n<div>\n  <app-sticky-footer></app-sticky-footer>\n</div>"

/***/ }),

/***/ "./src/pages/submit-page/submit-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/pages/submit-page/submit-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/pages/submit-page/submit-page.component.ts":
/*!********************************************************!*\
  !*** ./src/pages/submit-page/submit-page.component.ts ***!
  \********************************************************/
/*! exports provided: SubmitPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitPageComponent", function() { return SubmitPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubmitPageComponent = /** @class */ (function () {
    function SubmitPageComponent() {
    }
    SubmitPageComponent.prototype.ngOnInit = function () {
    };
    SubmitPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-submit-page',
            template: __webpack_require__(/*! ./submit-page.component.html */ "./src/pages/submit-page/submit-page.component.html"),
            styles: [__webpack_require__(/*! ./submit-page.component.scss */ "./src/pages/submit-page/submit-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SubmitPageComponent);
    return SubmitPageComponent;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ebalogun/Desktop/planner/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map