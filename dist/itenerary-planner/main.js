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
/* harmony import */ var _pages_browse_page_browse_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/browse-page/browse-page.component */ "./src/pages/browse-page/browse-page.component.ts");
/* harmony import */ var _pages_itinerary_page_itinerary_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/itinerary-page/itinerary-page.component */ "./src/pages/itinerary-page/itinerary-page.component.ts");
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
    { path: 'SubmitPage', component: _pages_submit_page_submit_page_component__WEBPACK_IMPORTED_MODULE_5__["SubmitPageComponent"] },
    { path: 'BrowsePage', component: _pages_browse_page_browse_page_component__WEBPACK_IMPORTED_MODULE_6__["BrowsePageComponent"] },
    { path: 'ItineraryPage/:id', component: _pages_itinerary_page_itinerary_page_component__WEBPACK_IMPORTED_MODULE_7__["ItineraryPageComponent"] }
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

module.exports = "\n\n <!--  <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" placeholder=\"Title..\">\n <Form>\n <input type=\"radio\" [(ngModel)]=\"length\" value=\"Half-Day...\" name=\"length\" placeholder=\"Title..\">\n <input type=\"radio\" [(ngModel)]=\"length\" value=\"Full-Day...\" name=\"length\" placeholder=\"Title..\">\n </Form>\n<textarea [(ngModel)]=\"content\" name=\"content\" placeholder=\"Content..\"></textarea>\n<input type=\"submit\" value=\"Add a Post\" (click)=\"addPost()\"> \n\n<div *ngFor=\"let item of items | async\">\n  <div *ngIf=\"checkId(item.id)\">\n{{item.title}}\n    \n  </div>\n</div>\n\n<div></div> -->\n\n <!-- <app-itinerary-page></app-itinerary-page> -->\n <router-outlet></router-outlet> \n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  max-width: 900px;\n  height: 170px;\n  color: #4a4a4a; }\n\n.time {\n  display: flex;\n  flex-direction: row;\n  width: 7%;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial; }\n\n.big-box {\n  width: 97%;\n  background: red; }\n\n.first1 {\n  background-color: #e5e5e5;\n  width: 95%;\n  height: 25px;\n  font-size: 0.85rem; }\n\n.value {\n  margin-left: 8px;\n  margin-top: 2px; }\n\n.second1 {\n  width: 5%;\n  background-color: #e5e5e5; }\n\n.img {\n  position: relative;\n  height: 150px;\n  width: 200px; }\n\n.btext {\n  position: relative;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-weight: bold;\n  margin-bottom: 1%; }\n\n.img-res {\n  width: 100%; }\n\n.textt {\n  width: 55%;\n  display: flex;\n  flex-direction: column;\n  margin-right: 10px; }\n\n.title1 {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-weight: bold;\n  margin-bottom: 1%; }\n\n.bod {\n  font-family: Arial;\n  font-weight: lighter;\n  max-width: 85%;\n  height: 90px;\n  color: #8a8d8a; }\n\n.icon {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  display: flex;\n  flex-direction: column;\n  margin-top: 2%; }\n\n.img-res {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 20px;\n  width: 20px;\n  margin-left: 8px; }\n\n.det {\n  font-size: 0.9rem;\n  text-decoration: underline; }\n"

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
        this.postDoc = this.db.doc('modified_itineraries/_g28i01oey');
        this.post = this.postDoc.valueChanges();
    }
    AppComponent.prototype.addPost = function () {
        /* this.db.collection('/modified_itineraries').add({'name': this.title, 'description': this.content, 'length': this.length}); */
        this.db.collection('/modified_itineraries').doc(this.randomId()).set({ 'name': this.title, 'description': this.content, 'length': this.length });
    };
    AppComponent.prototype.randomId = function () {
        // Math.random should be unique because of its seeding algorithm.
        // Convert it to base 36 (numbers + letters), and grab the first 9 characters
        // after the decimal.
        return '_' + Math.random().toString(36).substr(2, 9);
    };
    ;
    AppComponent.prototype.checkId = function (id) {
        if (id == 5) {
            return true;
        }
        else {
            return false;
        }
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _learning_agenda_learning_agenda_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../learning-agenda/learning-agenda.module */ "./src/learning-agenda/learning-agenda.module.ts");
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
            declarations: [],
            imports: [
                _learning_agenda_learning_agenda_module__WEBPACK_IMPORTED_MODULE_2__["LearningAgendaModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]]
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

module.exports = "<div class=\"container\">\n <div class=\"card-container\" (click)=\"changeItem(item)\">\n   \n      <img src=\"{{item.img}}\" alt=\"Random first slide\" class=\"img-responsive img-resize\">\n      <!-- <div class=\"tag\"> CURRENT SELECTION</div> -->\n      <div class=\"text\" >\n        <div class=\"text1\">{{item.type}}</div>\n        <div class=\"text2\">{{item.name}}</div>\n     <div class=\"text3\">{{item.description}}</div> \n   </div>\n\n </div>\n</div>"

/***/ }),

/***/ "./src/components/activity-card/activity-card.component.scss":
/*!*******************************************************************!*\
  !*** ./src/components/activity-card/activity-card.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-container {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #E0E0E0; }\n\n.img-resize {\n  height: 240px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.text {\n  position: absolute;\n  margin-left: 2%;\n  bottom: 4%;\n  color: white; }\n\n.text2 {\n  font-weight: bold;\n  font-size: 1.5rem; }\n\n.text3 {\n  font-family: Arial;\n  width: 400px;\n  height: 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.tag {\n  background-color: red;\n  font-size: 12.5px;\n  top: 0;\n  width: 35%;\n  margin: 0;\n  position: absolute;\n  height: 15%;\n  padding: 2%;\n  color: white; }\n"

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

/***/ "./src/components/activity-display/activity-display.component.html":
/*!*************************************************************************!*\
  !*** ./src/components/activity-display/activity-display.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"!isSet\"> \n<div class=\"flex\">\n  <div class=\"time\">\n  <div  class=\"first1\" ><span class=\"value\" >{{tConvert(itinerary.time)}}</span></div>\n\n  <div class=\"second1\"></div>\n  \n  </div>\n  \n  <div *ngIf=\"swap\" class=\"big-box\">\n  \n  \n   <app-swap-box  *ngFor=\"let item of items | async\"  class=\"activities\" [item]=\"item\" [ord]=\"ord\" [add]=\"add\" (swap)=\"fixItem($event)\"></app-swap-box>\n\n\n \n  </div>\n  <div *ngIf=\"!swap\" class=\"big-box2\" >\n  <div class=\"img\">\n    <img class=\"img-responsive img\" src=\"{{itinerary.img}}\">\n    <div style=\"cursor:pointer;\" (click)=\"setSwap()\">\n    <div *ngIf=\"showSwap\" class=\"swap-text1\">\n      <svg width=\"20\" height=\"22\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#fff\" fill-rule=\"evenodd\"><path d=\"M12.626 4.511a1.005 1.005 0 0 0 .037 2.01l3.647-.135c.553-.021.985-.484.968-1.036-.002-.036-.002-.036-.004-.046a.488.488 0 0 1 .003.055v-.052l-.134-3.573a1.006 1.006 0 0 0-2.009.075l.049 1.293C11.649.79 6.9 1.092 3.68 4.004A9.443 9.443 0 0 0 .84 13.238a1.005 1.005 0 1 0 1.953-.473 7.433 7.433 0 0 1 2.237-7.27 7.45 7.45 0 0 1 8.537-1.019l-.941.035zm3.652.834v-.024.024zm-.005.041l-3.61.135a.005.005 0 0 1-.005-.005c0-.003.002-.005.005-.005l2.459-.092 1.156-.043c-.001.009-.003.01-.005.01zm-.85-.85a8.444 8.444 0 0 0-11.064.217A8.433 8.433 0 0 0 1.82 13a8.413 8.413 0 0 1 2.531-8.255 8.456 8.456 0 0 1 11.05-.24l.861.714-.13-3.447c.008-.006.141 3.476.141 3.476l-.85-.712zm.858.882l-.003-.042a.34.34 0 0 0 .003.042zM7.542 17.573a1.005 1.005 0 0 0-.179-2.002l-3.598.323c-.553.05-.961.538-.912 1.09l.323 3.598c.046.52.482.916 1 .916.045-.001.045-.001.089-.004.554-.05.962-.538.913-1.091L5.07 19.21A9.45 9.45 0 0 0 10.17 20.7a9.406 9.406 0 0 0 6.33-2.436 9.443 9.443 0 0 0 2.842-9.234 1.005 1.005 0 1 0-1.953.473 7.434 7.434 0 0 1-2.237 7.27 7.399 7.399 0 0 1-4.983 1.918 7.446 7.446 0 0 1-3.759-1.015l1.132-.102zm-3.693-.678c0-.003.002-.005.005-.005l3.598-.323c.003 0 .005.002.005.005a.005.005 0 0 1-.005.005l-2.477.222-1.125.101v-.005zm.846.783a8.424 8.424 0 0 0 5.474 2.012 8.398 8.398 0 0 0 5.654-2.176 8.434 8.434 0 0 0 2.538-8.247 8.414 8.414 0 0 1-2.531 8.254 8.407 8.407 0 0 1-5.66 2.178 8.433 8.433 0 0 1-5.377-1.926l-.923-.763.312 3.482c-.008.006-.327-3.531-.327-3.531l.84.717zM3.85 16.9l-.06.005.065.056-.005-.06z\"/></g></svg>\n    </div>\n    <div *ngIf=\"showSwap\" class=\"swap-text\">Swap</div>\n    </div>\n  </div>\n  \n  <div class=\"textt\">\n  <div class=\"title1\">{{itinerary.name}}</div> \n  <div *ngIf=\"!det\" class=\"bod\" appEllipsis>\n{{itinerary.description}}\n  </div>\n  <div *ngIf=\"det\" class=\"bod1\">\n    {{itinerary.description}}\n      </div>\n      \n      <div *ngIf=\"det\" class=\"type\">{{itinerary.type}}</div>\n\n  </div>\n  \n  \n  <div class=\"icon\">\n  <div class=\"info\">\n    <img class=\"img-responsive img-res\" src=\"../assets/images/info2.png\">\n  </div>\n  <div class=\"det\" (click)=\"toggleModal()\">\n  Details\n  </div>    \n      </div>\n  </div>\n  \n  </div>\n  </div>\n\n\n  <div *ngIf=\"isSet\"> \n    <div class=\"flex\">\n      <div class=\"time\">\n      <div  class=\"first1\" ><span class=\"value\" >{{tConvert(itinerary.time)}}</span></div>\n\n      <div class=\"second1\"></div>\n      \n      </div>\n      \n      <div *ngIf=\"swap\" class=\"big-box\">\n  \n  \n          <app-swap-box  *ngFor=\"let item of items | async\"  class=\"activities\" [item]=\"item\" [ord]=\"ord\" (swap)=\"fixItem($event)\"></app-swap-box>\n       \n       \n        \n         </div>\n      <div *ngIf=\"!swap\" class=\"big-box2\" >\n      <div class=\"img\">\n        <img class=\"img-responsive img\" src=\"{{activity.img}}\">\n        <div *ngIf=\"showSwap\" class=\"swap-text\" (click)=\"setSwap()\">swap</div>\n      </div>\n      \n      <div class=\"textt\">\n      <div class=\"title1\">{{activity.name}}</div>\n      <div *ngIf=\"!det\" class=\"bod\" appEllipsis>\n    {{activity.description}}\n      </div>\n      <div *ngIf=\"det\" class=\"bod1\">\n        {{activity.description}}\n          </div>\n          \n          <div *ngIf=\"det\" class=\"type\">{{activity.type}}</div>\n    \n      </div>\n      \n      \n      <div class=\"icon\">\n      <div class=\"info\">\n        <img class=\"img-responsive img-res\" src=\"../assets/images/info2.png\">\n      </div>\n      <div class=\"det\" (click)=\"toggleModal()\">\n      Details\n      </div>    \n          </div>\n      </div>\n      \n      </div>\n      </div>\n\n\n      <app-details [modal]=\"modal\" [item]=\"itinerary\" (set)=\"setModalFromChild($event)\"></app-details>\n     "

/***/ }),

/***/ "./src/components/activity-display/activity-display.component.scss":
/*!*************************************************************************!*\
  !*** ./src/components/activity-display/activity-display.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  max-width: 900px;\n  color: #4a4a4a; }\n\n.time {\n  display: flex;\n  flex-direction: row;\n  width: 10%;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial; }\n\n.big-box {\n  width: 85%;\n  background: #e5e5e5;\n  border-style: solid;\n  border-width: thin;\n  border-color: #e5e5e5;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  margin-bottom: 3%; }\n\n.activities {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  width: 50%;\n  margin-top: 2%; }\n\n.type {\n  margin-top: 1%;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-weight: bold; }\n\n.big-box2 {\n  width: 85%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-bottom: 3%; }\n\n.first1 {\n  background-color: #e5e5e5;\n  width: 95%;\n  height: 25px;\n  font-size: 0.85rem; }\n\n.value {\n  margin-left: 8px;\n  margin-top: 2px; }\n\n.second1 {\n  width: 5%;\n  background-color: #e5e5e5; }\n\n.img {\n  position: relative;\n  height: 150px;\n  width: 200px;\n  margin-bottom: 3%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.swap-text {\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-weight: bold;\n  cursor: pointer;\n  color: #fff;\n  text-decoration: underline; }\n\n.swap-text1 {\n  position: absolute;\n  bottom: 22px;\n  right: 15px;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-weight: bold;\n  cursor: pointer;\n  color: #fff; }\n\n.btext {\n  position: relative;\n  margin-bottom: 1%; }\n\n.img-res {\n  width: 100%; }\n\n.textt {\n  width: 55%;\n  display: flex;\n  flex-direction: column;\n  margin-right: 10px; }\n\n.title1 {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-weight: bold;\n  margin-bottom: 1%; }\n\n.bod {\n  font-family: Arial;\n  font-weight: lighter;\n  max-width: 85%;\n  height: 90px;\n  color: #8a8d8a; }\n\n.bod1 {\n  font-family: Arial;\n  font-weight: lighter;\n  max-width: 85%;\n  color: #8a8d8a; }\n\n.icon {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  display: flex;\n  flex-direction: column;\n  margin-top: 2%; }\n\n.img-res {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 20px;\n  width: 20px;\n  margin-left: 8px; }\n\n.det {\n  font-size: 0.9rem;\n  text-decoration: underline;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/components/activity-display/activity-display.component.ts":
/*!***********************************************************************!*\
  !*** ./src/components/activity-display/activity-display.component.ts ***!
  \***********************************************************************/
/*! exports provided: ActivityDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityDisplayComponent", function() { return ActivityDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
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


var ActivityDisplayComponent = /** @class */ (function () {
    function ActivityDisplayComponent(db) {
        this.db = db;
        this.order = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.item = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.time = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.modify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.modal = false;
        this.det = false;
        this.isSet = false;
        this.swap = false;
        this.innerSwap = false;
    }
    ActivityDisplayComponent.prototype.ngOnInit = function () {
        this.items = this.db.collection('/activities').snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
        console.log(this.itinerary.time);
        this.activities = JSON.parse(localStorage.getItem("itinerary"));
        console.log(this.activities);
        if (this.itinerary.time) {
            localStorage.setItem('c_time', JSON.stringify(this.itinerary.time));
        }
        this.newSet = JSON.parse(localStorage.getItem("_set"));
        if (this.itinerary == 0) {
            this.swap = true;
            this.add = true;
        }
    };
    ActivityDisplayComponent.prototype.setSwap = function () {
        if (this.swap == false)
            this.swap = true;
        else {
            this.swap = false;
        }
        if (this.isSet) {
            this.order.emit(this.activity.order);
            this.ord = this.activity.order;
        }
        else {
            this.order.emit(this.itinerary.order);
            this.ord = this.itinerary.order;
        }
    };
    ActivityDisplayComponent.prototype.toggleModal = function () {
        if (this.modal == false)
            this.modal = true;
        else {
            this.modal = false;
        }
    };
    ActivityDisplayComponent.prototype.setModalFromChild = function (event) {
        this.modal = event;
    };
    ActivityDisplayComponent.prototype.toggleInnerSwap = function () {
        if (this.innerSwap == false)
            this.innerSwap = true;
        else {
            this.innerSwap = false;
        }
    };
    ActivityDisplayComponent.prototype.fixItem = function (item) {
        var act = JSON.parse(localStorage.getItem("itinerary"));
        console.log(act);
        if (this.newSet == true) {
            if (this.itinerary.time) {
                console.log("do nothing");
            }
            else {
                item.time = this.timeConvert(act[(act.length) - 2].time, act[(act.length) - 2].length).toString();
            }
            this.item.emit(item);
            localStorage.setItem('_set', JSON.stringify(false));
        }
        this.swap = false;
        var order = JSON.parse(localStorage.getItem("n_e_o"));
        console.log(order);
        var index = act.findIndex(function (i) { return i.order === order; });
        console.log(index);
        if (index >= 0) {
            var index2 = index - 1;
            item.time = this.timeConvert(act[index2].time, act[index2].length).toString();
            console.log(act);
            act.splice(index, 1, item);
            localStorage.setItem("itinerary", JSON.stringify(act));
            this.notify.emit(true);
        }
        this.isSet = true;
        this.activity = item;
        this.modify.emit(true);
    };
    ActivityDisplayComponent.prototype.check = function (order) {
        if (order == this.ord)
            return true;
        else {
            return false;
        }
    };
    ActivityDisplayComponent.prototype.toggleDet = function () {
        if (this.det == false)
            this.det = true;
        else {
            this.det = false;
        }
    };
    ActivityDisplayComponent.prototype.setTime = function (item) {
        this.newTime = 25;
        item.time = 25;
    };
    ActivityDisplayComponent.prototype.timeConvert = function (data, length) {
        var index;
        var h = "";
        var m = "";
        for (var i = 0; i < data.length; i++) {
            var strChar = data.charAt(i);
            if (strChar == ":") {
                index = data.indexOf(strChar);
                console.log(index);
            }
        }
        for (var i = 0; i < index; i++) {
            var str = data.charAt(i);
            h += str;
        }
        for (var j = index + 1; j < data.length; j++) {
            var str = data.charAt(j);
            m += str;
        }
        var time = (Number(h) * 60) + Number(m) + length;
        this.my_time = time;
        var minutes = time % 60;
        var hours = (time - minutes) / 60;
        if (minutes < 10) {
            var min = '0' + minutes;
            return hours + ':' + min;
        }
        else {
            return hours + ':' + minutes;
        }
    };
    ActivityDisplayComponent.prototype.tConvert = function (time) {
        // Check correct time format and split into components
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
        if (time.length > 1) {
            time = time.slice(1); // Remove full string match value
            time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join(''); // return adjusted time or original string
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ActivityDisplayComponent.prototype, "order", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ActivityDisplayComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ActivityDisplayComponent.prototype, "time", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ActivityDisplayComponent.prototype, "notify", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ActivityDisplayComponent.prototype, "modify", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActivityDisplayComponent.prototype, "itinerary", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActivityDisplayComponent.prototype, "showSwap", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActivityDisplayComponent.prototype, "activities", void 0);
    ActivityDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activity-display',
            template: __webpack_require__(/*! ./activity-display.component.html */ "./src/components/activity-display/activity-display.component.html"),
            styles: [__webpack_require__(/*! ./activity-display.component.scss */ "./src/components/activity-display/activity-display.component.scss")]
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], ActivityDisplayComponent);
    return ActivityDisplayComponent;
}());



/***/ }),

/***/ "./src/components/activity/activity.component.html":
/*!*********************************************************!*\
  !*** ./src/components/activity/activity.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!set\">\n<div  class=\"outer-flex\">\n  \n<div *ngIf=\"!edited\" style=\" width:7%; font-size:15px; font-weight:bold;\">\n\n        <img  *ngIf=\"selected\" src=\"../../assets/images/check.png\" class=\"icon\">\n  \n{{timeConvert(date[item.order])}} {{timeOfDay(date[item.order])}}\n</div>\n\n<div *ngIf=\"edited\" style=\" width:7%; font-size:15px; font-weight:bold;\">\n\n    <img  *ngIf=\"selected\" src=\"../../assets/images/check.png\" class=\"icon\">\n\n{{timeConvert(selectedItem.time)}} {{timeOfDay(selectedItem.time)}}\n</div>\n<div style=\"border-top-style:dashed; border-width:thin; border-color:grey; width:91%; align-self:center;\">\n \n</div>\n</div>\n\n\n<div class=\"flex-container\" *ngIf=\"swap || !display\">\n \n  <div *ngIf=\"showImage\" class=\"img-flex\"> \n <img class=\"img-responsive img-res\" src=\"{{selectedItem.img}}\">\n  </div>\n  <div *ngIf=\"!adjust\" class=\"middle-flex\" style=\"width:60%;\">\n      <div style=\"font-size:12.5px;\">\n       {{selectedItem.type}}\n      </div>\n      <div style=\"font-size:20px; font-weight:bold;\">\n       {{selectedItem.name}}\n      </div>\n      <div *ngIf=\"showDescription\" style=\"margin-bottom:2%; font-family: Arial;\"> \n         {{selectedItem.description}}\n      </div>\n      <div style=\"font-size:12.5px; \">\n        {{selectedItem.duration}} Minutes, {{selectedItem.place}}\n      </div>\n     </div>\n  <div *ngIf=\"adjust\" class=\"middle-flex\" style=\"width:60%;\">\n   <div style=\"font-size:12.5px; \">\n    \n    {{selectedItem.type}}\n   </div>\n   <div style=\"font-size:20px;font-weight:bold; \">\n    {{selectedItem.name}}\n   </div>\n   <div style=\"margin-bottom:2%; font-family:Arial;\"> \n     {{selectedItem.description}}\n   </div>\n   <div style=\"font-size:12.5px; \">\n    {{selectedItem.duration}} Minutes, {{selectedItem.place}}\n   </div>\n  </div>\n  <div *ngIf=\"showTools\" style=\"align-self: center;\" class=\"inner-flex\">\n   <div style=\"margin-right:10px\"><div *ngIf=\"!details\"><a href=\"javascript: void(0)\"><img src=\"../../assets/images/info.png\"  (click)=\"toggleDetails()\" class=\"icon\"></a></div>\n   <div *ngIf=\"details\"><a href=\"javascript: void(0)\"><img src=\"../../assets/images/cancel.png\"  (click)=\"toggleDetails()\" class=\"icon\"></a></div>\n   <div style=\"font-weight:bold; font-size:12.5px\">DETAILS</div></div>\n  \n    <div *ngIf='!edited'><div><a href=\"javascript: void(0)\"><img src=\"../../assets/images/undo.png\" (click)=\"toggleSwap(item.order)\" class=\"icon\"></a></div><div style=\"font-weight:bold; font-size:12.5px\">SWAP</div></div>\n    <div *ngIf='edited'><div><a href=\"javascript: void(0)\"><img src=\"../../assets/images/undo.png\" (click)=\"toggleSwap(selectedItem.selection)\" class=\"icon\"></a></div><div style=\"font-weight:bold; font-size:12.5px\">SWAP</div></div>\n  </div>\n</div>\n  <div *ngIf=\"details && swap\" style=\"margin-left:19%; width:60%;\">\n   <div style=\"font-size:17px; font-weight:bold;\">\n     DETAILS\n   </div>\n   <div style=\"margin-top:2%; font-size:13px\">\n      {{selectedItem.details}}\n      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. \n          Aenean commodo ligula eget dolor. Aenean massa. \n          Cum sociis natoque penatibus et magnis dis parturient montes,\n          Aenean massa. \n          Cum sociis natoque penatibus et magnis dis parturient montes,\n          Aenean massa. \n          Cum sociis natoque penatibus et magnis dis parturient montes,</p>\n   </div>\n\n   <div style=\"font-size:17px; font-weight:bold; margin-top:3%\">\n     CURRICULUM CONNECTIONS\n   </div>\n   <div style=\"margin-top:2%; font-size:13px; \">\n   <ul>\n     <li class=\"list\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n     <li class=\"list\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n   </ul>\n  </div>\n  </div>\n\n\n\n  <div class=\"alt-flex\" *ngIf=\"!swap && display\">\n  <div style=\"margin-left:0%; margin-top:1%\">\n    <div class=\"my-row\">\n      <div class=\"row\" >\n    <div class=\"activity-card\"  *ngFor=\"let item of items | async\"> \n        <app-activity-card [item]=\"item\" (newItem)=\"itemChange($event)\" (length)=\"getLength($event)\" (click)=\"toggleSwap(item.order)\"></app-activity-card>\n    </div>\n\n  </div>\n  </div>\n </div>\n \n</div>\n\n\n</div>\n\n\n\n\n\n\n\n\n\n  \n\n\n\n\n\n<div *ngIf=\"set\">\n  \n    <div  class=\"outer-flex\" > \n      \n    \n    \n    <div style=\"margin-left:1%; width:7%; font-size:15px; font-weight:bold;\">\n    \n   \n    \n    {{itinerary.time}}\n    </div>\n    <div style=\"border-top-style:dashed; border-width:thin; border-color:grey; width:90%; align-self:center;\">\n     \n    </div>\n    </div>\n    \n    \n    <div class=\"flex-container\" >\n     \n      <div  class=\"img-flex\"> \n     <img class=\"img-responsive img-res\" src=\"{{itinerary.img}}\">\n      </div>\n      <div  class=\"middle-flex\" style=\"width:60%;\">\n          <div style=\"font-size:12.5px; font-weight:bold;\">\n           \n           {{itinerary.type}}\n          </div>\n          <div style=\"font-size:20px; font-weight:bold;\">\n           {{itinerary.name}}\n          </div>\n          <div  style=\"margin-bottom:2%; font-family:Arial;\"> \n             {{itinerary.description}}\n          </div>\n          <div style=\"font-size:12.5px\">\n            {{itinerary.duration}} Minutes, {{itinerary.place}}\n          </div>\n         </div>\n    \n  <div  style=\"align-self: center;\" class=\"inner-flex\">\n       <div  style=\"margin-right:10px\"><div *ngIf=\"!expand\"><a href=\"javascript: void(0)\"><img src=\"../../assets/images/info.png\"  (click)=\"toggleDetails2()\" class=\"icon\"></a></div>\n       <div *ngIf=\"expand\"><a href=\"javascript: void(0)\"><img src=\"../../assets/images/cancel.png\"  (click)=\"toggleDetails2()\" class=\"icon\"></a></div>\n       <div style=\"font-weight:bold; font-size:12.5px\">DETAILS</div></div>\n      \n        \n      </div>\n    </div>\n      <div *ngIf=\"expand\"  style=\"margin-left:19%; width:60%;\">\n       <div style=\"font-size:17px; font-weight:bold;\">\n         DETAILS\n       </div>\n       <div style=\"margin-top:2%; font-size:13px\">\n          {{itinerary.details}}\n          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. \n              Aenean commodo ligula eget dolor. Aenean massa. \n              Cum sociis natoque penatibus et magnis dis parturient montes,\n              Aenean massa. \n              Cum sociis natoque penatibus et magnis dis parturient montes,\n              Aenean massa. \n              Cum sociis natoque penatibus et magnis dis parturient montes,</p>\n       </div>\n    \n       <div style=\"font-size:17px; font-weight:bold; margin-top:3%\">\n         CURRICULUM CONNECTIONS\n       </div>\n       <div style=\"margin-top:2%; font-size:13px; \">\n       <ul>\n         <li class=\"list\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n         <li class=\"list\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n       </ul>\n      </div>\n      </div> \n    \n    \n    \n      \n    \n\n    </div>\n    \n  \n  \n  \n  "

/***/ }),

/***/ "./src/components/activity/activity.component.scss":
/*!*********************************************************!*\
  !*** ./src/components/activity/activity.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".height {\n  border-style: solid;\n  display: inline-block;\n  border-width: thin;\n  margin-top: 5%; }\n\nimg {\n  max-width: 100%;\n  max-height: 100%; }\n\n.img-resize {\n  height: 300px;\n  width: 90%; }\n\n.img-res {\n  height: 160px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.outer-flex {\n  display: flex;\n  flex-direction: row;\n  margin-top: 20px; }\n\n.flex-container {\n  display: flex;\n  /*  border-top-style: dashed;\r\n    border-color:#E0E0E0; */\n  flex-direction: row;\n  padding-top: 1%;\n  justify-content: flex-start; }\n\n.img-flex {\n  display: flex;\n  width: 18%;\n  margin-right: 1%; }\n\n.middle-flex {\n  display: flex;\n  height: 160px;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-right: 5%; }\n\n.icon {\n  height: 19px; }\n\n.inner-flex {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n\n.main-flex {\n  display: flex;\n  flex-direction: column; }\n\n.list {\n  margin-bottom: 0%; }\n\n.activity-card {\n  height: 260px;\n  width: 33%;\n  font-size: 12px;\n  margin: auto; }\n\n.alt-flex {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n"

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

module.exports = "<div class=\"container-fluid\" style=\"font-family: Arial\">\n  <div style=\"font-weight:bold; margin-top:7%\">\n    <h1>BUILD YOUR OWN ITINERARY</h1>\n  </div>\n  <div style=\"margin-top:5%\">\n      Lorem ipsum dolor sit amet, \n      consectetuer adipiscing elit. \n      Aenean commodo ligula eget dolor.\n       Aenean massa. \n  </div>\n  <div style=\"margin-top:7%\" >\n    <h6>GRADE LEVEL</h6>\n    <form>\n\n      <div class=\"form-check\">\n          <input class=\"form-check-input\" type=\"checkbox\" value=\"Prek-Gr. 2\"id=\"defaultCheck1\">\n          <label class=\"form-check-label\" for=\"defaultCheck1\">\n              Preschool/Kindergaten and Grades 1-2/Cycle 1\n          </label>\n        </div>\n        <div class=\"form-check\">\n          <input class=\"form-check-input\"  type=\"checkbox\" value=\"Gr. 3-5\" id=\"defaultCheck2\" >\n          <label class=\"form-check-label\" for=\"defaultCheck2\">\n              Grades 3-5\n          </label>\n        </div>\n        <div class=\"form-check\">\n            <input class=\"form-check-input\"  type=\"checkbox\" value=\"Gr. 6-8\" id=\"defaultCheck2\">\n            <label class=\"form-check-label\" for=\"defaultCheck2\">\n                Grades 6-8\n            </label>\n          </div>\n    \n \n      </form>\n    </div>\n     \n    <div style=\"margin-top:7%\" >\n      <h6>HALF DAY OR FULL DAY?:</h6>\n      <form>\n          <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\" checked>\n              <label class=\"form-check-label\" for=\"exampleRadios1\">\n               Half Day\n              </label>\n            </div>\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\">\n              <label class=\"form-check-label\" for=\"exampleRadios2\">\n              Full Day\n              </label>\n            </div>\n  \n        </form>\n      </div>\n   \n      \n     <div style=\"margin-top:7%; margin-bottom:2%;\">\n       <h6>Choose your date below:</h6>\n     </div>\n      <div >\n          <ngb-datepicker #d1  [(ngModel)]=\"model1\" #c1=\"ngModel\"></ngb-datepicker>\n      \n    \n       \n       \n        </div>\n    \n       <!--  <div class=\"col-6\">\n            <form class=\"form-inline\">\n              <div class=\"form-group\">\n                <div class=\"input-group\">\n                  <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                         name=\"d2\" #c2=\"ngModel\" [(ngModel)]=\"model2\" ngbDatepicker #d2=\"ngbDatepicker\">\n                  <div class=\"input-group-append\">\n                    <button class=\"btn btn-outline-secondary\" (click)=\"d2.toggle()\" type=\"button\">\n                      <img src=\"img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </form>\n        \n            \n            <button class=\"btn btn-sm btn-outline-primary\" (click)=\"model2 = today\">Select Today</button>\n         \n        \n        \n            \n          </div> -->\n       \n          \n        \n</div>\n"

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



/* const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year; */
var BuildComponent = /** @class */ (function () {
    function BuildComponent(calendar) {
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }
    BuildComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(BuildComponent.prototype, "today", {
        /* onDateSelection(date: NgbDateStruct) {
          if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
          } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
            this.toDate = date;
          } else {
            this.toDate = null;
            this.fromDate = date;
          }
        }
      
        isHovered = date => this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate);
        isInside = date => after(date, this.fromDate) && before(date, this.toDate);
        isFrom = date => equals(date, this.fromDate);
        isTo = date => equals(date, this.toDate); */
        get: function () {
            return new Date();
        },
        enumerable: true,
        configurable: true
    });
    BuildComponent.prototype.setFilter = function () {
        console.log('filter set');
        console.log(this.grades);
        localStorage.setItem('filter', JSON.stringify(this.grades));
    };
    BuildComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-build',
            template: __webpack_require__(/*! ./build.component.html */ "./src/components/build/build.component.html"),
            styles: [__webpack_require__(/*! ./build.component.scss */ "./src/components/build/build.component.scss")],
            providers: [{ provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"], useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateNativeAdapter"] }]
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

module.exports = "\n    <div class=\"card-container\" (click)=\"navigateToDesign()\">\n       <div style=\"position:relative\">\n         <img src=\"{{item.img}}\" alt=\"Random first slide\" class=\"img-responsive img-resize\">\n      <div class=\"text\">\n        <div class=\"text1\">{{item.grades}}, {{item.day}}</div>\n          <div class=text2>{{item.title}}</div>\n          <div class=\"text3\">{{item.timeOfYear}}</div>\n          \n          </div>\n          <div class=\"d-icon\">i</div>\n          <div class=\"details\">Details</div>\n      </div>\n      <div>\n        \n<!--     <div *ngIf=\"view\" class=\"layers\" >\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. \n        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis \n        natoque penatibus et magnis dis parturient montes, nascetur \n        ridiculus mus. Donec quam felis, ultricies nec.\n    </div>\n    <div *ngIf=\"!view\" class=\"layers\" >\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. \n        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis \n        natoque penatibus et magnis dis parturient montes, nascetur \n        ridiculus mus. Donec quam felis, ultricies nec.\n    </div> -->\n    </div>\n    <!-- <div *ngIf=\"view\" class=\"layers link\" >\n      <a href=\"javascript:void(0)\" (click)=\"navigateToDesign()\">VIEW THIS ITINERARY</a>\n     <svg><img src=\"../../assets/images/right-arrow.png\"></svg>\n    </div> -->\n    </div>\n  "

/***/ }),

/***/ "./src/components/card/card.component.scss":
/*!*************************************************!*\
  !*** ./src/components/card/card.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-container {\n  height: 100%;\n  width: 100%;\n  border-width: 1px;\n  cursor: pointer;\n  border-style: solid;\n  border-color: #E0E0E0;\n  background: transparent;\n  background-image: initial;\n  background-position-x: initial;\n  background-position-y: initial;\n  background-size: initial;\n  background-attachment: initial;\n  background-origin: initial;\n  background-clip: initial;\n  background-color: transparent; }\n\n#slideshow {\n  width: 100%; }\n\n.text {\n  position: absolute;\n  margin-left: 2.5%;\n  bottom: 20px;\n  left: 20px;\n  line-height: 100%;\n  max-width: 80%;\n  z-index: 2;\n  color: #fff;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-size: 1.5rem;\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.text1 {\n  font-family: Arial;\n  font-size: 0.8rem; }\n\n.text2 {\n  font-weight: bold; }\n\n.text3 {\n  font-weight: lighter;\n  font-size: 1rem; }\n\n.des {\n  padding-left: 20px;\n  padding-top: 5px;\n  font-family: Arial;\n  font-size: 8; }\n\n.layers {\n  font-family: Arial;\n  text-align: justify;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 5px;\n  padding-bottom: 20px;\n  font-size: 14;\n  margin-top: 2%;\n  color: #4a4a4a;\n  cursor: pointer; }\n\n.link {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-weight: bold;\n  margin-top: 4%;\n  margin-bottom: 2%; }\n\n.img-resize {\n  height: 230px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\na:link {\n  text-decoration: none;\n  color: #4a4a4a; }\n\n.details {\n  position: absolute;\n  bottom: 13px;\n  right: 17px;\n  line-height: 100%;\n  text-decoration: underline;\n  max-width: 80%;\n  color: #fff;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-size: 0.7rem;\n  background-color: rgba(0, 0, 0, 0.2); }\n\n.d-icon {\n  position: absolute;\n  bottom: 33px;\n  right: 25px;\n  color: #fff;\n  border-color: #fff;\n  border-style: solid;\n  font-size: 0.7em;\n  border-width: 2px;\n  padding-top: 0.5%;\n  padding-bottom: 0.5%;\n  padding-left: 2%;\n  padding-right: 2%;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.2); }\n"

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
/* harmony import */ var _models_activityBrief__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/activityBrief */ "./src/models/activityBrief.ts");
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
        this.set = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.titles = [];
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
        localStorage.setItem("grade", JSON.stringify(this.item.grades));
        localStorage.setItem("title", JSON.stringify(this.item.title));
        localStorage.setItem("year", JSON.stringify(this.item.timeOfYear));
        this.item.activities.map(function (activity) {
            _this.titles.push(new _models_activityBrief__WEBPACK_IMPORTED_MODULE_5__["ActivityBrief"](activity.time, activity.name));
            _this.activities.push(new _models_activity__WEBPACK_IMPORTED_MODULE_4__["Activity"](activity.time, 0, activity.name, activity.type, activity.length, activity.description, activity.on, activity.qc, activity.fees, activity.img, activity.ageRange, activity.timeOfYear, activity.timeSlots, activity.order));
        });
        localStorage.setItem("itinerary", JSON.stringify(this.activities));
        localStorage.setItem("titles", JSON.stringify(this.titles));
        this.set.emit(true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CardComponent.prototype, "set", void 0);
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

/***/ "./src/components/details/details.component.html":
/*!*******************************************************!*\
  !*** ./src/components/details/details.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"modal\" class=\"modal\">\n\n    <!-- Modal content -->\n\n \n        \n        <div class=\"hide\" (click)=\"toggleModal()\">Hide Details</div>\n \n\n\n\n    <div class=\"modal-content\">\n     <div class=\"banner\">\n        <img class=\"img-responsive pics\" src=\"{{item.img}}\">  \n        <div class=\"text\">\n          <div class=\"type\">{{item.type}}</div>\n          <div class=\"title\">{{item.name}}</div>\n        </div>\n      </div>\n     \n\n\n      <div class=\"description\">{{item.description}}</div>\n      <div class=\"show\" (click)=\"toggleHide()\">SHOW FULL INFORMATION</div>\n      \n    </div>\n    <div *ngIf=\"hide\" class=\"hidden\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. \n      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,\n       nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. \n      Nulla consequat massa quis enim. Donec pede justo, fringilla vel,\n       aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,\n       Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. \n       Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, \n       eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. \n       Quisque rutrum.\n        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. \n        Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget \n      \n      </div>\n  </div>\n  "

/***/ }),

/***/ "./src/components/details/details.component.scss":
/*!*******************************************************!*\
  !*** ./src/components/details/details.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\n  display: block;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  padding-top: 100px;\n  /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.8);\n  /* Black w/ opacity */ }\n\n/* Modal Content */\n\n.modal-content {\n  margin: auto;\n  background: #4a4a4a;\n  border: 1px solid #888;\n  width: 40%; }\n\n.hide {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-size: 0.9rem;\n  font-weight: bold;\n  background-color: #4a4a4a;\n  margin: auto;\n  padding: 10px;\n  border: 1px solid #888;\n  cursor: pointer;\n  color: white;\n  width: 6%;\n  margin-bottom: 0.5%; }\n\n.banner {\n  position: relative;\n  width: 100%;\n  height: 500px; }\n\n.pics {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  cursor: pointer; }\n\n.description {\n  padding: 20px;\n  font-weight: lighter;\n  color: white;\n  max-width: 60%; }\n\n.close {\n  color: #aaaaaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold; }\n\n.text {\n  position: absolute;\n  bottom: 5%;\n  left: 2%;\n  color: #fff; }\n\n.type {\n  font-family: Arial;\n  font-weight: lighter;\n  font-size: 1rem; }\n\n.title {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-size: 2rem; }\n\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer; }\n\n.show {\n  margin-top: 1%;\n  margin-bottom: 1%;\n  margin-left: 20px;\n  background: red;\n  color: white;\n  padding: 2%;\n  cursor: pointer;\n  width: 25%;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-size: 0.6rem; }\n\n.hidden {\n  background-color: #fff;\n  margin: auto;\n  color: #8a8d8a;\n  width: 40%;\n  padding: 20px; }\n"

/***/ }),

/***/ "./src/components/details/details.component.ts":
/*!*****************************************************!*\
  !*** ./src/components/details/details.component.ts ***!
  \*****************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
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

var DetailsComponent = /** @class */ (function () {
    function DetailsComponent() {
        this.hide = false;
        this.modal = false;
        this.set = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DetailsComponent.prototype.ngOnInit = function () {
    };
    DetailsComponent.prototype.toggleModal = function () {
        if (this.modal == false)
            this.modal = true;
        else {
            this.modal = false;
            this.set.emit(false);
        }
    };
    DetailsComponent.prototype.toggleHide = function () {
        if (this.hide == false)
            this.hide = true;
        else {
            this.hide = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DetailsComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DetailsComponent.prototype, "modal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DetailsComponent.prototype, "set", void 0);
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/components/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/components/details/details.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/components/empty-activity-display/empty-activity-display.component.html":
/*!*************************************************************************************!*\
  !*** ./src/components/empty-activity-display/empty-activity-display.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"flex\">\n      <div class=\"time\">\n      <div  class=\"first1\" ></div>\n    \n      <div class=\"second1\"><span class=\"value\" >+</span></div>\n      \n      </div>\n      \n \n      <div class=\"big-box2\" >\n      <div class=\"img\">\n        <div class=\"new\" (click)=\"change()\">Add Another Time</div>\n      </div>\n      \n      <div class=\"textt\">\n      <div class=\"title1\"></div> \n      <div class=\"bod\" appEllipsis>\n  \n      </div>\n      <div  class=\"bod1\">\n\n          </div>\n          \n          <div  class=\"type\"></div>\n    \n      </div>\n      \n      \n      <div class=\"icon\">\n      <div class=\"info\">\n        <img class=\"img-responsive img-res\" src=\"../assets/images/info2.png\">\n      </div>\n      <div class=\"det\" (click)=\"toggleDet()\">\n      Details\n      </div>    \n          </div>\n      </div>\n      \n      </div>\n\n    \n    \n    \n         "

/***/ }),

/***/ "./src/components/empty-activity-display/empty-activity-display.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/components/empty-activity-display/empty-activity-display.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  max-width: 900px;\n  color: #4a4a4a; }\n\n.time {\n  display: flex;\n  flex-direction: row;\n  width: 10%;\n  height: 35px;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial; }\n\n.big-box {\n  width: 90%;\n  background: #e5e5e5;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin-bottom: 3%; }\n\n.activities {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  width: 50%;\n  margin-top: 2%; }\n\n.pic {\n  position: relative;\n  height: 100px;\n  width: 32%;\n  margin-bottom: 3%;\n  border-style: solid;\n  border-color: grey;\n  border-width: thin; }\n\n.pics {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  cursor: pointer; }\n\n.des {\n  display: flex;\n  flex-direction: column;\n  width: 57%;\n  height: 100px; }\n\n.act-title {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-weight: bold;\n  margin-bottom: 3%;\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.act-des {\n  font-family: Arial;\n  font-weight: lighter;\n  max-width: 85%;\n  height: 74px;\n  color: #8a8d8a;\n  font-size: 0.9rem; }\n\n.type {\n  margin-top: 1%;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-weight: bold; }\n\n.big-box2 {\n  width: 85%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-bottom: 3%; }\n\n.first1 {\n  background-color: #fff;\n  width: 55%;\n  font-size: 0.85rem; }\n\n.value {\n  font-size: 1.5rem;\n  font-weight: lighter;\n  font-family: Arial;\n  margin-left: 11px; }\n\n.second1 {\n  width: 45%;\n  background-color: #e5e5e5; }\n\n.img {\n  border-style: dashed;\n  border-width: 1px;\n  border-color: #8a8d8a;\n  position: relative;\n  height: 150px;\n  width: 200px; }\n\n.new {\n  margin: 17%;\n  text-decoration: underline;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-weight: bold;\n  color: #4a4a4a;\n  font-size: 0.9rem;\n  cursor: pointer; }\n\n.swap-text {\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-weight: bold;\n  cursor: pointer;\n  color: #fff; }\n\n.btext {\n  position: relative;\n  margin-bottom: 1%; }\n\n.img-res {\n  width: 100%; }\n\n.textt {\n  width: 55%;\n  display: flex;\n  flex-direction: column;\n  margin-right: 10px;\n  visibility: hidden; }\n\n.title1 {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-weight: bold;\n  margin-bottom: 1%; }\n\n.bod {\n  font-family: Arial;\n  font-weight: lighter;\n  max-width: 85%;\n  height: 90px;\n  color: #8a8d8a; }\n\n.bod1 {\n  font-family: Arial;\n  font-weight: lighter;\n  max-width: 85%;\n  color: #8a8d8a; }\n\n.icon {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  display: flex;\n  flex-direction: column;\n  margin-top: 2%;\n  visibility: hidden; }\n\n.img-res {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 20px;\n  width: 20px;\n  margin-left: 8px; }\n\n.det {\n  font-size: 0.9rem;\n  text-decoration: underline;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/components/empty-activity-display/empty-activity-display.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/components/empty-activity-display/empty-activity-display.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EmptyActivityDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyActivityDisplayComponent", function() { return EmptyActivityDisplayComponent; });
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

var EmptyActivityDisplayComponent = /** @class */ (function () {
    function EmptyActivityDisplayComponent() {
        this.set = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EmptyActivityDisplayComponent.prototype.ngOnInit = function () {
    };
    EmptyActivityDisplayComponent.prototype.change = function () {
        this.set.emit(true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EmptyActivityDisplayComponent.prototype, "set", void 0);
    EmptyActivityDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-empty-activity-display',
            template: __webpack_require__(/*! ./empty-activity-display.component.html */ "./src/components/empty-activity-display/empty-activity-display.component.html"),
            styles: [__webpack_require__(/*! ./empty-activity-display.component.scss */ "./src/components/empty-activity-display/empty-activity-display.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmptyActivityDisplayComponent);
    return EmptyActivityDisplayComponent;
}());



/***/ }),

/***/ "./src/components/empty-card/empty-card.component.html":
/*!*************************************************************!*\
  !*** ./src/components/empty-card/empty-card.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron card-container\">\n  <div style=\"margin-top:9%; text-align:center;\">\n  <div class=\"content\">\n  <div class=\"title\">BUILD YOUR OWN ITINERARY</div>\n <div class=\"build-text\">\n    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. \n    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis \n    natoque.\n </div>\n <div class=\"my-btn\">\n    <button type=\"button\" class=\"btn btn-danger\" id=\"new-btn\" (click)=\"open(content)\"> BUILD YOUR OWN</button>\n </div>\n</div>\n</div>\n</div>\n\n\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div style=\"width:100%\">\n        <button type=\"button\"  (click)=\"d('Cross click')\" style=\"background-color:black; float:right; height:70px; width:70px; \">\n            <div style=\"color:white; \">\n              x\n            </div>\n            <div style=\"color:white; font-weight:bold; font-size:12px;\">\n              CLOSE\n            </div>\n          </button>\n    <app-build></app-build>\n\n    \n    <div id=footer>\n        <div style=\"margin-bottom:30px;\">\n        <div>\n        <button type=\"button\" class=\"btn btn-danger\" id=\"new-btn\"  (click)=\"d('Cross click')\"  (click)=\"navigateToDesignPage()\"> <div style=\"float:left;\">CONTINUE</div> <div style=\"width:0;height: 0; border-top: 5px solid transparent; border-left: 10px solid white; border-bottom: 5px solid transparent; float:left; margin-left:28px; margin-top:6px;\"></div></button>\n      </div>\n      \n  </div>\n  </div>\n    \n\n    \n  </div>\n  </ng-template>"

/***/ }),

/***/ "./src/components/empty-card/empty-card.component.scss":
/*!*************************************************************!*\
  !*** ./src/components/empty-card/empty-card.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-container {\n  height: 100%;\n  width: 100%;\n  border-color: red;\n  text-align: center;\n  padding: 5.5%;\n  background-color: white;\n  border-width: thick;\n  border-style: dashed;\n  word-wrap: break-word; }\n\n.content {\n  margin-top: 20%; }\n\n.title {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-weight: bold;\n  font-size: 1.25rem; }\n\n.build-text {\n  margin-top: 4px;\n  width: 100%;\n  font-size: 0.9rem; }\n\n.my-btn {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-weight: bold;\n  margin-top: 4%;\n  margin-left: 30%; }\n\n#new-btn {\n  white-space: normal; }\n\n#footer {\n  border-top-color: #E0E0E0;\n  border-top-style: solid;\n  border-top-width: thin;\n  padding: 6%; }\n\n@media only screen and (max-width: 850px) {\n  .my-btn {\n    margin-top: 4%;\n    margin-left: 28%; }\n  #new-btn {\n    white-space: normal; } }\n\n@media only screen and (max-width: 750px) {\n  .my-btn {\n    margin-top: 4%;\n    margin-left: 28%; }\n  #new-btn {\n    white-space: normal; } }\n"

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

module.exports = "<div class=\"img-container\" >\n    <img class=\"logo\"  src=\"../../assets/images/logo.jpg\" (click)=\"navigateToLanding()\"> \n  </div>\n<nav class=\"navbar bg-dark bg my-nav\" >\n  \n<span class=\"nav-text\" >SCHOOL TRIP PLANNER</span>\n      <span *ngIf=\"innerWidth > 1024 && design\" class=\"progress-nav\">\n          <ul class=\"progress-nav__list\">\n            <li class=\"progress-nav__item progress-nav__item--on\" (click)=\"navigateToDesign()\">\n              <span class=\"progress-nav__item-nmbr\" style=\"color:#fff; background:red;\"><i>1</i></span>\n              <span class=\"progress-nav__item-text\" style=\" color:red;\">Design</span>\n            </li>\n            <li class=\"progress-nav__item\" (click)=\"navigateToConfirm()\">\n              <span class=\"progress-nav__item-nmbr\" ><i>2</i></span>\n              <span class=\"progress-nav__item-text\" >Confirm</span>\n            </li>\n            <li class=\"progress-nav__item\" (click)=\"navigateToSubmit()\">\n              <span class=\"progress-nav__item-nmbr\"><i>3</i></span>\n              <span class=\"progress-nav__item-text\">Submit</span>\n            </li>\n          </ul>\n        </span>\n        <span *ngIf=\"innerWidth > 1024 && confirm\" class=\"progress-nav\" >\n          <ul class=\"progress-nav__list\" style=\" background-color:#fff;\">\n            <li class=\"progress-nav__item progress-nav__item--on\" style=\" background-color:#fff;\"  (click)=\"navigateToDesign()\">\n              <span class=\"progress-nav__item-nmbr\" style=\"color:#fff; background:#4a4a4a\"><i>1</i></span>\n              <span class=\"progress-nav__item-text\">Design</span>\n            </li>\n            <li class=\"progress-nav__item\"  (click)=\"navigateToConfirm()\">\n              <span class=\"progress-nav__item-nmbr\" style=\"color:#fff; background:red;\"><i>2</i></span>\n              <span class=\"progress-nav__item-text\" style=\" color:red;\">Confirm</span>\n            </li>\n            <li class=\"progress-nav__item\" (click)=\"navigateToSubmit()\">\n              <span class=\"progress-nav__item-nmbr\"><i>3</i></span>\n              <span class=\"progress-nav__item-text\">Submit</span>\n            </li>\n          </ul>\n        </span>\n        <span *ngIf=\"innerWidth > 1024 && submit\" class=\"progress-nav\">\n          <ul class=\"progress-nav__list\">\n            <li class=\"progress-nav__item progress-nav__item--on\" (click)=\"navigateToDesign()\">\n              <span class=\"progress-nav__item-nmbr\" style=\"color:#fff; background:#4a4a4a\"><i>1</i></span>\n              <span class=\"progress-nav__item-text\">Design</span>\n            </li>\n            <li class=\"progress-nav__item\" (click)=\"navigateToConfirm()\">\n              <span class=\"progress-nav__item-nmbr\"><i>2</i></span>\n              <span class=\"progress-nav__item-text\">Confirm</span>\n            </li>\n            <li class=\"progress-nav__item\" (click)=\"navigateToSubmit()\">\n              <span class=\"progress-nav__item-nmbr\" style=\"color:#fff; background:red;\"><i>3</i></span>\n              <span class=\"progress-nav__item-text\" style=\" color:red;\">Submit</span>\n            </li>\n          </ul>\n        </span>\n        <span class=\"warning\">\n         <div (click)=\"open(content)\">x</div>\n         <div>EXIT</div>\n        </span>\n  </nav>\n\n  <span *ngIf=\"innerWidth < 1024\" class=\"progress-nav\">\n      <ul class=\"progress-nav__list\">\n        <li class=\"progress-nav__item progress-nav__item--on\">\n          <span class=\"progress-nav__item-nmbr\"><i>1</i></span>\n          <span class=\"progress-nav__item-text\">Design</span>\n        </li>\n        <li class=\"progress-nav__item\">\n          <span class=\"progress-nav__item-nmbr\"><i>2</i></span>\n          <span class=\"progress-nav__item-text\">Confirm</span>\n        </li>\n        <li class=\"progress-nav__item\">\n          <span class=\"progress-nav__item-nmbr\"><i>3</i></span>\n          <span class=\"progress-nav__item-text\">Submit</span>\n        </li>\n      </ul>\n    </span>\n\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n      <div style=\"width:100%\">\n          <button type=\"button\"  (click)=\"d('Cross click')\" style=\"background-color:black; float:right; height:70px; width:70px;\">\n              <div style=\"color:white; \">\n                x\n              </div>\n              <div style=\"color:white; font-weight:bold; font-size:12px;\">\n                CLOSE\n              </div>\n            </button>\n      <app-warning></app-warning>\n    </div>\n    </ng-template>\n\n\n\n\n\n\n\n\n  \n      \n      \n      \n      \n "

/***/ }),

/***/ "./src/components/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/components/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".progress-nav {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  display: table;\n  margin-top: 6px;\n  margin-right: 18%;\n  overflow: hidden; }\n\n.progress-nav__item {\n  float: left;\n  display: block;\n  width: 160px;\n  cursor: pointer;\n  height: 50px;\n  padding: 10px 25px 10px 15px;\n  border-radius: 0 50px 50px 0;\n  background: #cacaca;\n  position: relative; }\n\n.progress-nav__item:nth-child(1) {\n    padding-left: 15px;\n    z-index: 3; }\n\n.progress-nav__item:nth-child(2) {\n    background: #e5e5e5;\n    z-index: 2; }\n\n.progress-nav__item:nth-child(3) {\n    z-index: 1; }\n\n.progress-nav__item:nth-child(2):before, .progress-nav__item:nth-child(3):before {\n    display: block;\n    content: '';\n    width: 50px;\n    height: 100%;\n    position: absolute;\n    background: #cacaca;\n    z-index: -1;\n    left: -50px;\n    top: 0; }\n\n.progress-nav__item:nth-child(2):before {\n    background: #e5e5e5; }\n\n.progress-nav__item:nth-child(3):before {\n    background: #cacaca; }\n\n.progress-nav__item-nmbr {\n  width: 30px;\n  background: #fff;\n  border-radius: 100%;\n  /*  color:#fff;\r\n  background:$item_clr_on; */\n  font-weight: bold;\n  display: block;\n  height: 100%;\n  float: left; }\n\n.progress-nav__item-text {\n  float: left;\n  display: block;\n  margin-left: 12px;\n  font-weight: bold;\n  font-size: 14px;\n  position: relative;\n  text-transform: uppercase;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  top: 50%; }\n\n.progress-nav__item-nmbr i {\n  margin: 0 auto;\n  display: table;\n  position: relative;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  top: 50%; }\n\n.progress-nav__item--on {\n  background: #fff;\n  border-radius: 50px;\n  /* .progress-nav__item-nmbr {background:$item_clr_on;}\r\n  .progress-nav__item-nmbr i {color:#fff;} */ }\n\n.bg {\n  padding-right: 0px;\n  height: 80px; }\n\n.logo {\n  height: 30px;\n  width: 30px;\n  cursor: pointer; }\n\n.img-container {\n  padding: 21px;\n  float: left; }\n\n.my-nav {\n  height: 70px;\n  margin-bottom: 1.5%; }\n\n.nav-text {\n  color: white;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-weight: bold;\n  font-size: 1.4rem;\n  float: left; }\n\n.warning {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-weight: bold;\n  background-color: black;\n  color: white;\n  height: 70px;\n  width: 50px;\n  text-align: center;\n  padding-top: 1%; }\n\n@media only screen and (max-width: 1090px) {\n  .progress-nav {\n    font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n    display: table;\n    margin-top: 6px;\n    margin: auto;\n    overflow: hidden; }\n  .progress-nav__item {\n    float: left;\n    display: block;\n    width: 145px;\n    height: 50px;\n    padding: 10px 25px 10px 15px;\n    border-radius: 0 50px 50px 0;\n    background: #cacaca;\n    position: relative; }\n    .progress-nav__item:nth-child(1) {\n      padding-left: 15px;\n      z-index: 3; }\n    .progress-nav__item:nth-child(2) {\n      background: #e5e5e5;\n      z-index: 2; }\n    .progress-nav__item:nth-child(3) {\n      z-index: 1; }\n    .progress-nav__item:nth-child(2):before, .progress-nav__item:nth-child(3):before {\n      display: block;\n      content: '';\n      width: 50px;\n      height: 100%;\n      position: absolute;\n      background: #cacaca;\n      z-index: -1;\n      left: -50px;\n      top: 0; }\n    .progress-nav__item:nth-child(2):before {\n      background: #e5e5e5; }\n    .progress-nav__item:nth-child(3):before {\n      background: #cacaca; }\n  .progress-nav__item-nmbr {\n    width: 30px;\n    background: #fff;\n    border-radius: 100%;\n    font-weight: bold;\n    display: block;\n    height: 100%;\n    float: left; }\n  .progress-nav__item-text {\n    float: left;\n    display: block;\n    margin-left: 12px;\n    font-weight: bold;\n    font-size: 14px;\n    position: relative;\n    text-transform: uppercase;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    top: 50%; }\n  .progress-nav__item-nmbr i {\n    margin: 0 auto;\n    display: table;\n    position: relative;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    top: 50%; }\n  .progress-nav__item--on {\n    background: #fff;\n    color: #e1261c;\n    border-radius: 50px; }\n    .progress-nav__item--on .progress-nav__item-nmbr {\n      background: #e1261c; }\n    .progress-nav__item--on .progress-nav__item-nmbr i {\n      color: #fff; } }\n\n@media only screen and (max-width: 1024px) {\n  .progress-nav {\n    font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n    display: table;\n    margin-top: 6px;\n    margin: auto;\n    overflow: hidden; }\n  .progress-nav__item {\n    float: left;\n    display: block;\n    width: 145px;\n    height: 50px;\n    padding: 10px 25px 10px 15px;\n    border-radius: 0 50px 50px 0;\n    background: #cacaca;\n    position: relative; }\n    .progress-nav__item:nth-child(1) {\n      padding-left: 15px;\n      z-index: 3; }\n    .progress-nav__item:nth-child(2) {\n      background: #e5e5e5;\n      z-index: 2; }\n    .progress-nav__item:nth-child(3) {\n      z-index: 1; }\n    .progress-nav__item:nth-child(2):before, .progress-nav__item:nth-child(3):before {\n      display: block;\n      content: '';\n      width: 50px;\n      height: 100%;\n      position: absolute;\n      background: #cacaca;\n      z-index: -1;\n      left: -50px;\n      top: 0; }\n    .progress-nav__item:nth-child(2):before {\n      background: #e5e5e5; }\n    .progress-nav__item:nth-child(3):before {\n      background: #cacaca; }\n  .progress-nav__item-nmbr {\n    width: 30px;\n    background: #fff;\n    border-radius: 100%;\n    font-weight: bold;\n    display: block;\n    height: 100%;\n    float: left; }\n  .progress-nav__item-text {\n    float: left;\n    display: block;\n    margin-left: 12px;\n    font-weight: bold;\n    font-size: 14px;\n    position: relative;\n    text-transform: uppercase;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    top: 50%; }\n  .progress-nav__item-nmbr i {\n    margin: 0 auto;\n    display: table;\n    position: relative;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    top: 50%; }\n  .progress-nav__item--on {\n    background: #fff;\n    color: #e1261c;\n    border-radius: 50px; }\n    .progress-nav__item--on .progress-nav__item-nmbr {\n      background: #e1261c; }\n    .progress-nav__item--on .progress-nav__item-nmbr i {\n      color: #fff; }\n  .img-container {\n    padding: 0;\n    float: left; } }\n\n@media only screen and (max-width: 900px) {\n  .progress-nav {\n    font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n    display: table;\n    margin-top: 6px;\n    margin: auto;\n    overflow: hidden; }\n  .progress-nav__item {\n    font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n    float: left;\n    display: block;\n    width: 115px;\n    height: 40px;\n    padding: 10px 25px 10px 15px;\n    border-radius: 0 50px 50px 0;\n    background: #cacaca;\n    position: relative; }\n    .progress-nav__item:nth-child(1) {\n      padding-left: 15px;\n      z-index: 3; }\n    .progress-nav__item:nth-child(2) {\n      background: #e5e5e5;\n      z-index: 2; }\n    .progress-nav__item:nth-child(3) {\n      z-index: 1; }\n    .progress-nav__item:nth-child(2):before, .progress-nav__item:nth-child(3):before {\n      display: block;\n      content: '';\n      width: 50px;\n      height: 100%;\n      position: absolute;\n      background: #cacaca;\n      z-index: -1;\n      left: -50px;\n      top: 0; }\n    .progress-nav__item:nth-child(2):before {\n      background: #e5e5e5; }\n    .progress-nav__item:nth-child(3):before {\n      background: #cacaca; }\n  .progress-nav__item-nmbr {\n    font-size: 0.5rem;\n    width: 20px;\n    background: #fff;\n    border-radius: 100%;\n    font-weight: bold;\n    display: block;\n    height: 100%;\n    float: left; }\n  .progress-nav__item-text {\n    float: left;\n    display: block;\n    margin-left: 12px;\n    font-weight: bold;\n    font-size: 0.5rem;\n    position: relative;\n    text-transform: uppercase;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    top: 50%; }\n  .progress-nav__item-nmbr i {\n    margin: 0 auto;\n    display: table;\n    position: relative;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    top: 50%; }\n  .progress-nav__item--on {\n    background: #fff;\n    color: #e1261c;\n    border-radius: 50px; }\n    .progress-nav__item--on .progress-nav__item-nmbr {\n      background: #e1261c; }\n    .progress-nav__item--on .progress-nav__item-nmbr i {\n      color: #fff; }\n  .img-container {\n    padding: 0;\n    float: left; } }\n\n@media only screen and (max-width: 660px) {\n  .progress-nav {\n    font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n    display: table;\n    margin: auto;\n    padding: 0;\n    overflow: hidden; }\n  .progress-nav__item {\n    font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n    float: left;\n    display: block;\n    width: 75px;\n    height: 35px;\n    padding: 10px 5px 10px 15px;\n    border-radius: 0 50px 50px 0;\n    background: #cacaca;\n    position: relative; }\n    .progress-nav__item:nth-child(1) {\n      padding-left: 15px;\n      z-index: 3; }\n    .progress-nav__item:nth-child(2) {\n      background: #e5e5e5;\n      z-index: 2; }\n    .progress-nav__item:nth-child(3) {\n      z-index: 1; }\n    .progress-nav__item:nth-child(2):before, .progress-nav__item:nth-child(3):before {\n      display: block;\n      content: '';\n      width: 50px;\n      height: 100%;\n      position: absolute;\n      background: #cacaca;\n      z-index: -1;\n      left: -50px;\n      top: 0; }\n    .progress-nav__item:nth-child(2):before {\n      background: #e5e5e5; }\n    .progress-nav__item:nth-child(3):before {\n      background: #cacaca; }\n  .progress-nav__item-nmbr {\n    font-size: 0.1rem;\n    width: 15px;\n    background: #fff;\n    border-radius: 100%;\n    font-weight: bold;\n    display: block;\n    height: 100%;\n    float: left;\n    margin: 0; }\n  .progress-nav__item-text {\n    float: left;\n    display: block;\n    margin-left: 8px;\n    font-weight: bold;\n    font-size: 7px;\n    position: relative;\n    text-transform: uppercase;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    top: 50%; }\n  .progress-nav__item-nmbr i {\n    margin: 0 auto;\n    display: table;\n    position: relative;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    top: 50%; }\n  .progress-nav__item--on {\n    background: #fff;\n    color: #e1261c;\n    border-radius: 50px; }\n    .progress-nav__item--on .progress-nav__item-nmbr {\n      background: #e1261c; }\n    .progress-nav__item--on .progress-nav__item-nmbr i {\n      color: #fff; }\n  .img-container {\n    padding: 0;\n    float: left; } }\n\n@media only screen and (max-width: 435px) {\n  .bg {\n    height: 80px; }\n  .logo {\n    height: 20px;\n    width: 20px; }\n  .img-container {\n    padding: 0;\n    float: left; }\n  .navbar {\n    height: 45px; }\n  .nav-text {\n    color: white;\n    font-size: 12px;\n    float: left;\n    font-weight: bold; }\n  .warning {\n    font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n    font-size: 0.8rem;\n    background-color: black;\n    color: white;\n    height: 45px;\n    width: 50px;\n    text-align: center;\n    padding-top: 1%; } }\n\n@media only screen and (max-width: 414px) {\n  .bg {\n    height: 80px; }\n  .logo {\n    height: 20px;\n    width: 20px; }\n  .img-container {\n    padding: 3%;\n    float: left; }\n  .navbar {\n    height: 45px; }\n  .nav-text {\n    color: white;\n    font-size: 12px;\n    float: left;\n    font-weight: bold; } }\n\n@media only screen and (max-width: 375px) {\n  .bg {\n    height: 80px; }\n  .logo {\n    height: 20px;\n    width: 20px; }\n  .img-container {\n    padding: 3%;\n    float: left; }\n  .navbar {\n    height: 45px; }\n  .nav-text {\n    color: white;\n    font-size: 12px;\n    float: left;\n    font-weight: bold; } }\n"

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




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(modalService, router, route) {
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.onResize();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.innerWidth = window.innerWidth;
        this.design = JSON.parse(localStorage.getItem('design'));
        this.confirm = JSON.parse(localStorage.getItem('confirm'));
        this.submit = JSON.parse(localStorage.getItem('submit'));
    };
    HeaderComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        });
    };
    HeaderComponent.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
        console.log(this.innerWidth);
    };
    HeaderComponent.prototype.navigateToLanding = function () {
        localStorage.setItem('edit', JSON.stringify(true));
        this.router.navigateByUrl('LandingPage');
    };
    HeaderComponent.prototype.navigateToDesign = function () {
        localStorage.setItem('edit', JSON.stringify(true));
        this.router.navigateByUrl('DesignPage');
    };
    HeaderComponent.prototype.navigateToConfirm = function () {
        localStorage.setItem('edit', JSON.stringify(true));
        this.router.navigateByUrl('ConfirmPage');
    };
    HeaderComponent.prototype.navigateToSubmit = function () {
        localStorage.setItem('edit', JSON.stringify(true));
        this.router.navigateByUrl('SubmitPage');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "onResize", null);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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

module.exports = "\n  \n  <footer id=\"main-footer\" class=\"en\">\n    <div class=\"hwm-section-wrapper\">\n    <p class=\"slogan h2\">Your Country.<br /> Your History.<br /> Your Museum.</p>\n    <ul class=\"footer-social-media\">\n      <li><a class=\"facebook\" href=\"https://www.facebook.com/CanMusHistory/\" title=\"Facebook\"><svg class=\"icon facebook\"><use xlink:href=\"#facebook\" /></svg>Facebook</a></li>\n      <li><a class=\"twitter\" href=\"https://twitter.com/CanMusHistory\" title=\"Twitter\"><svg class=\"icon twitter\"><use xlink:href=\"#twitter\" /></svg>Twitter</a></li>\n      <li><a class=\"instagram\" href=\"https://www.instagram.com/canmushistory/\" title=\"Instagram\"><svg class=\"icon instagram\"><use xlink:href=\"#instagram\" /></svg>Twitter</a></li>\n    </ul>\n    <footer>\n      <img class=\"canada-wordmark\" src=\"https://www.historymuseum.ca/wp-content/themes/hwm-2015/_images/canada-wordmark.svg\" width=\"100\" height=\"24\" alt=\"Symbol of the Government of Canada\" />\n      <div class=\"outro\">\n      <p class=\"copyright-text\">&copy; Canadian Museum of History</p>\n      <ul class=\"disclaimer-list\">\n      <li><a href=\"https://www.historymuseum.ca/about/privacy-statement/\">Privacy Statement</a></li>\n      <li><a href=\"https://www.historymuseum.ca/about/copyright-and-permissions/\">Copyright</a></li>\n      </ul>\n      </div><!--End .outro-->\n    </footer>\n    </div><!--End .hwm-section-wrapper-->\n  </footer><!--End #main-footer-->\n  "

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

module.exports = "<header id=\"main-header\"class=\"gault\">\n\t\n\t<div class=\"header\">\n\t\t<ul class=\"hwm-bypass\">\n\t<li><a id=\"bypass-main\" href=\"#main-content\">Skip to main content</a></li>\n\t<li><a id=\"bypass-footer\" href=\"#secondary-footer\">Skip to main navigation</a></li>\n</ul>\t\t\n<a href=\"https://alpha.historymuseum.ca\" class=\"main-logo main-logo-en\" title=\"Go to the Home page\">\n\t<img src=\"https://alpha.historymuseum.ca/wp-content/themes/hwm-2015/_images/chm-main-logo.svg\" width=\"300\" height=\"44\" alt=\"Logo of the Canadian Museum of History\" />\n</a><!--End .main-logo-->\n\t\t\n\t\t<a href=\"#menu-handle\" id=\"main-menu-handle\" title=\"Main Menu\">\n\t\t\t<span class=\"text-val\">Main Menu</span>\n\t\t\t<span class=\"handle-bars-icon\">\n\t\t\t\t<b class=\"bar\"></b>\n\t\t\t\t<b class=\"bar\"></b>\n\t\t\t\t<b class=\"bar\"></b>\n\t\t\t</span>\n\t\t</a><!--End #main-menu-handle-->\n\t</div><!--End .header-->\n\t\n\t<nav id=\"main-menu\">\n\t\t<div class=\"form-wrapper\">\n\t\t\t<form>\n\t\t\t\t<input placeholder=\"Search ...\" type=\"text\" />\n\t\t\t\t<div class=\"button-wrapper\">\n\t\t\t\t\t<button>Search</button>\n\t\t\t\t</div><!--End .button-wrapper-->\n\t\t\t</form>\n\t\t</div><!--End .form-wrapper-->\n\t\t\n\t\t<ul>\n\n<span class=\"search-display\">\n\t<form role=\"search\" method=\"get\" class=\"search-form\" action=\"/search/\">\n    \t<label for=\"s\">Search</label>\n\t\t<input class=\"search-input\" type=\"search\" value=\"\" \n\t\tname=\"q\" id=\"s\" placeholder=\"Search...\" autocomplete=\"off\" />\n    \t<div class=\"form-button-wrapper\">\n\t        <svg class=\"search-icon\"><use xlink:href=\"#magnifying-glass\" /></svg>\n\t        <button type=\"submit\">Search</button>\n        </div>\n    </form>\n</span>\n\t<li id=\"menu-item-210\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-210\"><a href=\"https://alpha.historymuseum.ca/visit/\">Visit</a></li>\n<li id=\"menu-item-193\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-193\"><a href=\"https://alpha.historymuseum.ca/exhibitions/\">Exhibitions</a></li>\n<li id=\"menu-item-194\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-194\"><a href=\"https://alpha.historymuseum.ca/learn/\">Learn</a></li>\n<li id=\"menu-item-196\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-196\"><a href=\"https://alpha.historymuseum.ca/shop/\">Shop</a></li>\n<li id=\"menu-item-197\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-197\"><a href=\"https://alpha.historymuseum.ca/support/\">Support</a></li>\n<li id=\"menu-item-195\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-195\"><a href=\"https://alpha.historymuseum.ca/about/\">About</a></li>\n\t<li>\n\t\t<a class=\"icon magnifying-glass\" href=\"#search\" title=\"Search\">\n\t\t\t<svg class=\"icon magnifying-glass\"><use xlink:href=\"#magnifying-glass\" /></svg>Search\n\t\t</a>\n\t</li>\n\t<li><a id=\"language-toggle\" href=\"\" title=\"Français\">Français</a></li>\n</ul>\t</nav><!--End #main-menu-->\n\n</header>"

/***/ }),

/***/ "./src/components/main-header/main-header.component.scss":
/*!***************************************************************!*\
  !*** ./src/components/main-header/main-header.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-header {\n  box-sizing: border-box;\n  background: none;\n  height: 120px;\n  position: relative;\n  padding-left: 40px; }\n"

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

/***/ "./src/components/swap-box/swap-box.component.html":
/*!*********************************************************!*\
  !*** ./src/components/swap-box/swap-box.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"!innerSwap && add\" class=\"activities\">\n  <div *ngIf=\"!check(item.order) && !checkOrder(item.name)\" class=\"pic\">\n     \n    <img class=\"img-responsive pics\" src=\"{{item.img}}\" (click)=\"fixItem(item)\">  \n  </div>\n  <div *ngIf=\"check(item.order) && checkOrder(item.name)\" class=\"pic2\">\n  \n  <img class=\"img-responsive pics2\" src=\"{{item.img}}\" >  \n  <p style=\"position:absolute; top:0; left:0; margin:0; line-height:0\">&#9989;</p>\n  </div>\n  \n  <div *ngIf=\"checkOrder(item.name) && !check(item.order)\" class=\"pic\">\n  \n    <img class=\"img-responsive pics3\" src=\"{{item.img}}\" >  \n    </div>\n    \n\n  <div *ngIf=\"!check(item.order) && !innerSwap && !checkOrder(item.name)\" class=\"des\">\n  <div class=\"act-title\">{{item.name}}</div>\n  <div  class=\"act-des\" appEllipsis>{{item.description}} </div>\n  </div>\n  \n  <div *ngIf=\"check(item.order) || checkOrder(item.name,item.order) \" class=\"des\">\n  <div class=\"act-title2\">{{item.name}}</div>\n  <div  class=\"act-des2\" appEllipsis>{{item.description}} </div>\n  </div>\n  \n  </div>\n\n<div *ngIf=\"!innerSwap && !add\" class=\"activities\">\n<div *ngIf=\"!check(item.order) && !checkOrder(item.name)\" class=\"pic\">\n   \n  <img class=\"img-responsive pics\" src=\"{{item.img}}\" (click)=\"toggleInnerSwap()\">  \n</div>\n<div *ngIf=\"check(item.order) && checkOrder(item.name)\" class=\"pic2\">\n\n<img class=\"img-responsive pics2\" src=\"{{item.img}}\" >  \n<p style=\"position:absolute; top:0; left:0; margin:0; line-height:0\">&#9989;</p>\n</div>\n\n<div *ngIf=\"checkOrder(item.name) && !check(item.order)\" class=\"pic\">\n\n  <img class=\"img-responsive pics3\" src=\"{{item.img}}\" >  \n  </div>\n  \n\n\n<div *ngIf=\"!check(item.order) && !innerSwap && !checkOrder(item.name)\" class=\"des\">\n<div class=\"act-title\">{{item.name}}</div>\n<div  class=\"act-des\" appEllipsis>{{item.description}} </div>\n</div>\n\n<div *ngIf=\"check(item.order) || checkOrder(item.name,item.order) \" class=\"des\">\n<div class=\"act-title2\">{{item.name}}</div>\n<div  class=\"act-des2\" appEllipsis>{{item.description}} </div>\n</div>\n\n</div>\n\n\n\n<div *ngIf=\"innerSwap\" class=\"activities2\">\n    <div *ngIf=\"!check(item.order)\" class=\"newpic\">\n       \n      <img class=\"img-responsive pics\" src=\"{{item.img}}\" (click)=\"toggleInnerSwap()\">  \n    </div>\n    <div *ngIf=\"check(item.order)\" class=\"pic2\">\n    \n    <img class=\"img-responsive pics2\" src=\"{{item.img}}\" >  \n    <p style=\"position:absolute; top:0; left:0; margin:0; line-height:0\">&#9989;</p>\n    </div>\n    \n    <div *ngIf=\"!check(item.order) && innerSwap\" class=\"des2\">\n        <div class=\"des2-box1\">\n          <span class=\"swap-text1\" (click)=\"fixItem(item)\">\n              <svg width=\"20\" height=\"22\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#fff\" fill-rule=\"evenodd\"><path d=\"M12.626 4.511a1.005 1.005 0 0 0 .037 2.01l3.647-.135c.553-.021.985-.484.968-1.036-.002-.036-.002-.036-.004-.046a.488.488 0 0 1 .003.055v-.052l-.134-3.573a1.006 1.006 0 0 0-2.009.075l.049 1.293C11.649.79 6.9 1.092 3.68 4.004A9.443 9.443 0 0 0 .84 13.238a1.005 1.005 0 1 0 1.953-.473 7.433 7.433 0 0 1 2.237-7.27 7.45 7.45 0 0 1 8.537-1.019l-.941.035zm3.652.834v-.024.024zm-.005.041l-3.61.135a.005.005 0 0 1-.005-.005c0-.003.002-.005.005-.005l2.459-.092 1.156-.043c-.001.009-.003.01-.005.01zm-.85-.85a8.444 8.444 0 0 0-11.064.217A8.433 8.433 0 0 0 1.82 13a8.413 8.413 0 0 1 2.531-8.255 8.456 8.456 0 0 1 11.05-.24l.861.714-.13-3.447c.008-.006.141 3.476.141 3.476l-.85-.712zm.858.882l-.003-.042a.34.34 0 0 0 .003.042zM7.542 17.573a1.005 1.005 0 0 0-.179-2.002l-3.598.323c-.553.05-.961.538-.912 1.09l.323 3.598c.046.52.482.916 1 .916.045-.001.045-.001.089-.004.554-.05.962-.538.913-1.091L5.07 19.21A9.45 9.45 0 0 0 10.17 20.7a9.406 9.406 0 0 0 6.33-2.436 9.443 9.443 0 0 0 2.842-9.234 1.005 1.005 0 1 0-1.953.473 7.434 7.434 0 0 1-2.237 7.27 7.399 7.399 0 0 1-4.983 1.918 7.446 7.446 0 0 1-3.759-1.015l1.132-.102zm-3.693-.678c0-.003.002-.005.005-.005l3.598-.323c.003 0 .005.002.005.005a.005.005 0 0 1-.005.005l-2.477.222-1.125.101v-.005zm.846.783a8.424 8.424 0 0 0 5.474 2.012 8.398 8.398 0 0 0 5.654-2.176 8.434 8.434 0 0 0 2.538-8.247 8.414 8.414 0 0 1-2.531 8.254 8.407 8.407 0 0 1-5.66 2.178 8.433 8.433 0 0 1-5.377-1.926l-.923-.763.312 3.482c-.008.006-.327-3.531-.327-3.531l.84.717zM3.85 16.9l-.06.005.065.056-.005-.06z\"/></g></svg>\n          \n          </span>\n          <span class=\"swap-text\" (click)=\"fixItem(item)\">Swap</span>\n            \n            </div>\n        <div  class=\"des2-box2\"><span class=\"detail-text\" (click)=\"toggleModal()\">Details</span></div>\n        </div>\n   </div>\n\n\n<app-details [modal]=\"modal\" [item]=\"item\" (set)=\"setModalFromChild($event)\"></app-details>"

/***/ }),

/***/ "./src/components/swap-box/swap-box.component.scss":
/*!*********************************************************!*\
  !*** ./src/components/swap-box/swap-box.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".activities {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  width: 100%;\n  margin-top: 2%; }\n\n.activities2 {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  width: 100%;\n  background: #fff;\n  padding: 3%; }\n\n.pic {\n  position: relative;\n  height: 100px;\n  width: 32%;\n  border-style: solid;\n  border-color: grey;\n  border-width: thin; }\n\n.newpic {\n  position: relative;\n  height: 100px;\n  width: 28%;\n  border-style: solid;\n  border-color: grey;\n  border-width: thin; }\n\n.pic2 {\n  position: relative;\n  height: 100px;\n  width: 32%;\n  border-style: solid;\n  border-color: #228B22;\n  border-width: 2px; }\n\n.pics {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  cursor: pointer; }\n\n.pics2 {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-style: solid;\n  border-color: #228B22;\n  border-width: 2px;\n  opacity: 0.5; }\n\n.pics3 {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  opacity: 0.5; }\n\n.des {\n  display: flex;\n  flex-direction: column;\n  width: 57%;\n  height: 100px; }\n\n.des2 {\n  display: flex;\n  flex-direction: row;\n  width: 67%;\n  height: 100px; }\n\n.des2-box1 {\n  position: relative;\n  width: 50%;\n  background: red;\n  color: #fff; }\n\n.des2-box2 {\n  position: relative;\n  width: 50%;\n  background: #4a4a4a;\n  color: #fff; }\n\n.swap-text {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-weight: bold;\n  position: absolute;\n  text-decoration: underline;\n  font-size: 0.8rem;\n  top: 55%;\n  left: 33%;\n  cursor: pointer; }\n\n.swap-text1 {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-weight: bold;\n  position: absolute;\n  text-decoration: underline;\n  font-size: 0.8rem;\n  top: 30%;\n  left: 38%;\n  cursor: pointer; }\n\n.detail-text {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-weight: bold;\n  position: absolute;\n  font-size: 0.8rem;\n  text-decoration: underline;\n  top: 43%;\n  left: 30%;\n  cursor: pointer; }\n\n.act-title {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-weight: bold;\n  margin-bottom: 3%;\n  width: 80%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.act-des {\n  font-family: Arial;\n  font-weight: lighter;\n  max-width: 85%;\n  height: 74px;\n  color: #8a8d8a;\n  font-size: 0.9rem; }\n\n.act-title2 {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-weight: bold;\n  margin-bottom: 3%;\n  width: 100%;\n  color: #BEBEBE;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.act-des2 {\n  font-family: Arial;\n  font-weight: lighter;\n  max-width: 85%;\n  height: 74px;\n  color: #BEBEBE;\n  font-size: 0.9rem; }\n"

/***/ }),

/***/ "./src/components/swap-box/swap-box.component.ts":
/*!*******************************************************!*\
  !*** ./src/components/swap-box/swap-box.component.ts ***!
  \*******************************************************/
/*! exports provided: SwapBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapBoxComponent", function() { return SwapBoxComponent; });
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


var SwapBoxComponent = /** @class */ (function () {
    function SwapBoxComponent(modalService) {
        this.modalService = modalService;
        this.modal = false;
        this.innerSwap = false;
        this.swap = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SwapBoxComponent.prototype.ngOnInit = function () {
    };
    SwapBoxComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        });
    };
    SwapBoxComponent.prototype.checkOrder = function (name, order) {
        var act = JSON.parse(localStorage.getItem("itinerary"));
        for (var i = 0; i < (act.length); i++) {
            if (name == act[i].name) {
                return true;
            }
        }
        return false;
    };
    SwapBoxComponent.prototype.check = function (order) {
        if (order == this.ord)
            return true;
        else {
            return false;
        }
    };
    SwapBoxComponent.prototype.fixItem = function (event) {
        this.swap.emit(event);
    };
    SwapBoxComponent.prototype.toggleInnerSwap = function () {
        if (this.innerSwap == false)
            this.innerSwap = true;
        else {
            this.innerSwap = false;
        }
    };
    SwapBoxComponent.prototype.toggleModal = function () {
        if (this.modal == false)
            this.modal = true;
        else {
            this.modal = false;
        }
    };
    SwapBoxComponent.prototype.setModalFromChild = function (event) {
        this.modal = event;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SwapBoxComponent.prototype, "add", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SwapBoxComponent.prototype, "ord", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SwapBoxComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SwapBoxComponent.prototype, "swap", void 0);
    SwapBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-swap-box',
            template: __webpack_require__(/*! ./swap-box.component.html */ "./src/components/swap-box/swap-box.component.html"),
            styles: [__webpack_require__(/*! ./swap-box.component.scss */ "./src/components/swap-box/swap-box.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], SwapBoxComponent);
    return SwapBoxComponent;
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

/***/ "./src/learning-agenda/learning-agenda.module.ts":
/*!*******************************************************!*\
  !*** ./src/learning-agenda/learning-agenda.module.ts ***!
  \*******************************************************/
/*! exports provided: LearningAgendaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningAgendaModule", function() { return LearningAgendaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ngx_ellipsis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ellipsis */ "./node_modules/ngx-ellipsis/fesm5/ngx-ellipsis.js");
/* harmony import */ var angular2_multiline_ellipsis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-multiline-ellipsis */ "./node_modules/angular2-multiline-ellipsis/esm5/angular2-multiline-ellipsis.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/card/card.component */ "./src/components/card/card.component.ts");
/* harmony import */ var _components_empty_card_empty_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/empty-card/empty-card.component */ "./src/components/empty-card/empty-card.component.ts");
/* harmony import */ var _components_build_build_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/build/build.component */ "./src/components/build/build.component.ts");
/* harmony import */ var _components_activity_activity_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/activity/activity.component */ "./src/components/activity/activity.component.ts");
/* harmony import */ var _components_activity_card_activity_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/activity-card/activity-card.component */ "./src/components/activity-card/activity-card.component.ts");
/* harmony import */ var _components_activity_display_activity_display_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/activity-display/activity-display.component */ "./src/components/activity-display/activity-display.component.ts");
/* harmony import */ var _components_empty_activity_display_empty_activity_display_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/empty-activity-display/empty-activity-display.component */ "./src/components/empty-activity-display/empty-activity-display.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/header/header.component */ "./src/components/header/header.component.ts");
/* harmony import */ var _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/confirm/confirm.component */ "./src/components/confirm/confirm.component.ts");
/* harmony import */ var _components_sticky_footer_sticky_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/sticky-footer/sticky-footer.component */ "./src/components/sticky-footer/sticky-footer.component.ts");
/* harmony import */ var _components_confirm_sticker_confirm_sticker_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/confirm-sticker/confirm-sticker.component */ "./src/components/confirm-sticker/confirm-sticker.component.ts");
/* harmony import */ var _components_warning_warning_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/warning/warning.component */ "./src/components/warning/warning.component.ts");
/* harmony import */ var _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/calendar/calendar.component */ "./src/components/calendar/calendar.component.ts");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var _components_details_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/details/details.component */ "./src/components/details/details.component.ts");
/* harmony import */ var _components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/main-header/main-header.component */ "./src/components/main-header/main-header.component.ts");
/* harmony import */ var _components_main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/main-footer/main-footer.component */ "./src/components/main-footer/main-footer.component.ts");
/* harmony import */ var _components_submit_form_submit_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/submit-form/submit-form.component */ "./src/components/submit-form/submit-form.component.ts");
/* harmony import */ var _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../pages/landing-page/landing-page.component */ "./src/pages/landing-page/landing-page.component.ts");
/* harmony import */ var _pages_browse_page_browse_page_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../pages/browse-page/browse-page.component */ "./src/pages/browse-page/browse-page.component.ts");
/* harmony import */ var _pages_confirm_page_confirm_page_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../pages/confirm-page/confirm-page.component */ "./src/pages/confirm-page/confirm-page.component.ts");
/* harmony import */ var _pages_itinerary_page_itinerary_page_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../pages/itinerary-page/itinerary-page.component */ "./src/pages/itinerary-page/itinerary-page.component.ts");
/* harmony import */ var _pages_design_page_design_page_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../pages/design-page/design-page.component */ "./src/pages/design-page/design-page.component.ts");
/* harmony import */ var _pages_submit_page_submit_page_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../pages/submit-page/submit-page.component */ "./src/pages/submit-page/submit-page.component.ts");
/* harmony import */ var _components_swap_box_swap_box_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../components/swap-box/swap-box.component */ "./src/components/swap-box/swap-box.component.ts");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-simple-slideshow */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.es5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































var LearningAgendaModule = /** @class */ (function () {
    function LearningAgendaModule() {
    }
    LearningAgendaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_34__["SlideshowModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                ngx_ellipsis__WEBPACK_IMPORTED_MODULE_4__["EllipsisModule"],
                _app_app_routing_module__WEBPACK_IMPORTED_MODULE_32__["AppRoutingModule"],
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_20__["ClipboardModule"],
                angular2_multiline_ellipsis__WEBPACK_IMPORTED_MODULE_5__["MultilineEllipsisModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_36__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_37__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_37__["ReactiveFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_39__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_35__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_38__["AngularFirestoreModule"]
            ],
            declarations: [
                _app_app_component__WEBPACK_IMPORTED_MODULE_33__["AppComponent"],
                _components_swap_box_swap_box_component__WEBPACK_IMPORTED_MODULE_31__["SwapBoxComponent"],
                _components_empty_card_empty_card_component__WEBPACK_IMPORTED_MODULE_8__["EmptyCardComponent"],
                _components_details_details_component__WEBPACK_IMPORTED_MODULE_21__["DetailsComponent"],
                _components_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"],
                _components_build_build_component__WEBPACK_IMPORTED_MODULE_9__["BuildComponent"],
                _components_activity_activity_component__WEBPACK_IMPORTED_MODULE_10__["ActivityComponent"],
                _components_activity_display_activity_display_component__WEBPACK_IMPORTED_MODULE_12__["ActivityDisplayComponent"],
                _components_empty_activity_display_empty_activity_display_component__WEBPACK_IMPORTED_MODULE_13__["EmptyActivityDisplayComponent"],
                _components_activity_card_activity_card_component__WEBPACK_IMPORTED_MODULE_11__["ActivityCardComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmComponent"],
                _components_sticky_footer_sticky_footer_component__WEBPACK_IMPORTED_MODULE_16__["StickyFooterComponent"],
                _components_confirm_sticker_confirm_sticker_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmStickerComponent"],
                _components_warning_warning_component__WEBPACK_IMPORTED_MODULE_18__["WarningComponent"],
                _components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_22__["MainHeaderComponent"],
                _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_19__["CalendarComponent"],
                _components_main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_23__["MainFooterComponent"],
                _components_submit_form_submit_form_component__WEBPACK_IMPORTED_MODULE_24__["SubmitFormComponent"],
                _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_25__["LandingPageComponent"],
                _pages_browse_page_browse_page_component__WEBPACK_IMPORTED_MODULE_26__["BrowsePageComponent"],
                _pages_design_page_design_page_component__WEBPACK_IMPORTED_MODULE_29__["DesignPageComponent"],
                _pages_confirm_page_confirm_page_component__WEBPACK_IMPORTED_MODULE_27__["ConfirmPageComponent"],
                _pages_submit_page_submit_page_component__WEBPACK_IMPORTED_MODULE_30__["SubmitPageComponent"],
                _pages_itinerary_page_itinerary_page_component__WEBPACK_IMPORTED_MODULE_28__["ItineraryPageComponent"]
            ],
            providers: [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_38__["AngularFirestoreModule"]],
        })
    ], LearningAgendaModule);
    return LearningAgendaModule;
}());



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

/***/ "./src/models/activityBrief.ts":
/*!*************************************!*\
  !*** ./src/models/activityBrief.ts ***!
  \*************************************/
/*! exports provided: ActivityBrief */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityBrief", function() { return ActivityBrief; });
var ActivityBrief = /** @class */ (function () {
    function ActivityBrief(time, name) {
        this.time = time;
        this.name = name;
    }
    return ActivityBrief;
}());



/***/ }),

/***/ "./src/pages/browse-page/browse-page.component.html":
/*!**********************************************************!*\
  !*** ./src/pages/browse-page/browse-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <app-main-header></app-main-header>\n \n<span class=\"plan\">PLAN YOUR VISIT </span><span class=\"arrow-right\"></span>\n<div class=\"h1\"> PLAN A SCHOOL TRIP</div>\n  \n\n  <div class=\"h3\"> \n  <div *ngIf=\"bActive\" class=\"my-btn1\" (click)=\"setBrowse()\">BROWSE</div>\n  <div *ngIf=\"!bActive\" class=\"my-btn\" (click)=\"setBrowse()\">BROWSE</div>\n  <div *ngIf=\"cActive\" class=\"my-btn1\" (click)=\"setCreate()\">CREATE</div>\n  <div *ngIf=\"!cActive\" class=\"my-btn\" (click)=\"setCreate()\">CREATE</div>\n  \n</div>\n\n\n<div class=\"my-container\">\n  <div class=\"my-bg\" >\n    <img src=\"http://res.cloudinary.com/dqhtbev7t/image/upload/v1530731962/IMG2018-0032-0215-Dm.jpg\" class=\"img-resize\"> \n\n  </div>\n  </div>\n\n<!-- <div class=\"text1\">\n<div class=\"text2\" >\n    PLAN YOUR DAY AT THE MUSEUM\n  </div>\n<div class=\"text3\">\n    Lorem ipsum dolor sit amet, mel wisi justo salutandi ut, in blandit tacimates adipiscing mel. Cum et bonorum noluisse. Vel id quem laoreet insolens, \n    , erant dissentiet ea usu, eam in liber alterum. Mel debitis appetere honestatis eu, vel facete discere an. Cum ex unum atqui, habeo eligendi his an\n    <br><br>\n    Get started with our sample iteneraries below or <a class=\"build\" href=\"javascript:void(0)\" (click)=\"open(content)\"> build your own  </a>\n</div>\n</div>\n -->\n\n<!-- <div class=\"card-title\">VIEW OUR ITINERARIES</div> -->\n<div class=\"content\">\n<div *ngIf=\"!set || create\" class=\"side-bar\">\n<div class=\"first\">\n  <div style=\"float:left;margin:4%; font-size:1.5rem\">Filter By</div>\n <div style=\"float:right; background:#8a8d8a; width:17%; text-align:center; padding:5px; margin:4%; color:#fff; font-size:0.7rem; cursor:pointer\" (click)=\"reset()\">Clear All</div>\n</div>\n\n<div>\n<div class=\"selection\">\n  \n  <div class=\"ftext\">\n    GRADE\n  </div>\n  <form>\n  <div class=\"boxes\">\n      <label class=\"lab\">Kindergaten to Grade 2\n          <span class=\"checkmark\"></span>\n          \n        </label>\n        <input [(ngModel)]=\"KinderTo2\" style=\"float:right;\" (change)=\"filterBoolean('KinderTo2',KinderTo2)\" type=\"checkbox\" class=\"cbox\" [ngModelOptions]=\"{standalone: true}\">\n  \n  </div>\n  </form>\n\n  <form>\n  <div class=\"boxes\">\n      <label class=\"lab\"> Grades 3 to 5\n          <span class=\"checkmark\"></span>\n          \n        </label>\n        <input [(ngModel)]=\"Gr3To5\" style=\"float:right;\" (change)=\"filterBoolean1('Gr3To5',Gr3To5)\" type=\"checkbox\" class=\"cbox\" [ngModelOptions]=\"{standalone: true}\">\n  </div>\n  </form>\n\n  <form>\n  <div class=\"boxes\">\n      <label class=\"lab\"> Grades 6 to 8\n          <span class=\"checkmark\"></span>\n          \n        </label>\n        <input [(ngModel)]=\"Gr6To8\" style=\"float:right;\" (change)=\"filterBoolean2('Gr6To8',Gr6To8)\" type=\"checkbox\" class=\"cbox\" [ngModelOptions]=\"{standalone: true}\">\n  </div>\n</form>\n</div>\n\n\n\n<div class=\"selection\">\n  <form>\n  <div class=\"ftext\">\n      TIME OF YEAR\n    </div>\n    <div class=\"boxes\">\n        <label class=\"lab\">October to April\n            <span class=\"checkmark\"></span>\n           \n          </label>\n          <input  [(ngModel)]=\"OctoberToApril\" style=\"float:right;\" (change)=\"filterBoolean3('OctoberToApril',OctoberToApril)\" type=\"checkbox\" class=\"cbox\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  \n  \n    \n    <div class=\"boxes\">\n        <label class=\"lab\">May to June\n            <span class=\"checkmark\"></span>\n            \n          </label>\n          <input [(ngModel)]=\"MayToJune\" style=\"float:right;\" (change)=\"filterBoolean4('MayToJune',MayToJune)\" type=\"checkbox\" class=\"cbox\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    </form>\n  </div>\n\n\n\n\n  <div class=\"selection\">\n  \n    <div class=\"ftext\">\n        LENGTH\n      </div>\n      <form>\n          <div class=\"boxes\">\n              \n              <label class=\"form-check-label\" for=\"exampleRadios1\">\n               Half Day\n              </label>\n              <input style=\"float:right\"[(ngModel)]=\"day\"\n              (change)=\"filterExact('day', day)\" type=\"radio\" name=\"exampleRadios\"  value=\"Half-day\" class=\"rad\">\n            </div>\n            <div class=\"boxes\">\n              \n              <label class=\"form-check-label\" for=\"exampleRadios2\">\n              Full Day\n              </label>\n              <input  style=\"float:right\" [(ngModel)]=\"day\"\n              (change)=\"filterExact('day', day)\"  type=\"radio\" name=\"exampleRadios\" value=\"Full-day\" class=\"rad\">\n     </div>\n        </form>\n    </div>\n    \n \n    \n  \n</div>\n</div>\n\n\n<div *ngIf=\"set && !create\" id=\"print\" class=\"side-bar\" >\n<div class=\"side-title\">\n SCHEDULE\n</div>\n<div *ngFor=\"let itinerary of itineraries\" class=\"brief\" > \n  <span class=\"brief1\">{{itinerary.time}}</span>\n<span class=\"brief2\">{{itinerary.name}}</span>\n</div>\n</div>\n<div *ngIf=\"!set && browse\" class=\"itineraries\">\n \n <div style=\"height:5%; position:relative;\">\n  <div class=\"ti\" >Itineraries</div>\n <!--  <div class=\"my-btn\" (click)=\"open(content)\">\n  Build Your Own\n  </div></div> -->\n  <div class=\"row\" style=\"margin-left:0%;\">\n          \n  \n  <div class=\"margin\" *ngFor=\"let item of filtered| paginate: { itemsPerPage: 4, currentPage: p } \" >\n          <app-card [item]=\"item\"  (set)=\"getSet($event)\"></app-card>\n          </div>\n</div>\n<pagination-controls class=\"pag\" (pageChange)=\"p = $event\"\n                                  directionLinks=\"false\"\n   \n></pagination-controls>\n</div>\n\n  <!-- <div class=\"filter\">\n    <div style=\"font-family:futura-pt, Helvetica Neue, Arial\">\n        <div class=\"row\"  style=\"margin-bottom:2%; margin-left:0.1%\">\n            <div class=\"filtertext\" >FILTER ITINERARIES:</div>\n          <div class=\"input-group\" class=\"grades\">\n                  <select  class=\"custom-select\" id=\"inputGroupSelect04\" style=\"font-weight:bold; height:35px; font-size:13px; background-color:#f7f7f7;\" [(ngModel)]=\"grades\" (change)=\"filterExact('grades', grades)\">\n                      <option [ngValue]=\"undefined\" disabled  selected> Select Your Grade</option>\n                    <option value=\"Kinder to Gr.2\">Kindergaten to Grade 2</option>\n                    <option value=\"Gr 3-5\">Grades 3&ndash;5</option>\n                    <option value=\"Gr 6-8\">Grades 6&ndash;8</option>\n                  </select>\n                </div>\n                <div class=\"input-group\" class=\"date\" >\n                      <select  class=\"custom-select\" id=\"inputGroupSelect04\" style=\"font-weight:bold; height:35px; font-size:13px; background-color:#f7f7f7;\" [(ngModel)]=\"timeOfYear\" (change)=\"filterExact('timeOfYear', timeOfYear)\">\n                          <option [ngValue]=\"undefined\" disabled  selected> Select Time of Year </option>\n                          <option value=\"October-April\">Oct&ndash;Apr</option>\n                          <option value=\"May-June\">May&ndash;Jun</option>\n                        </select>\n                    </div>\n                    <div class=\"input-group\" class=\"day\" >\n                        <select  class=\"custom-select\" id=\"inputGroupSelect04\" style=\"font-weight:bold; height:35px; font-size:13px; background-color:#f7f7f7;\" [(ngModel)]=\"day\" (change)=\"filterExact('day', day)\">\n                            <option [ngValue]=\"undefined\" disabled  selected> Half-Day or Full-Day</option>\n                            <option value=\"Half-day\">Half&ndash;Day</option>\n                            <option value=\"Full-day\">Full&ndash;Day</option>\n                          </select>\n                        </div>\n                        <div class=\"show\">\n                          <button type=\"button\" class=\"btn \" style=\"width:100%; background-color:#8a8d8a; font-size:13px; font-weight:bold; border-color:#D8D8D8; border-width:thin; color:#f7f7f7\" (click)=\"reset()\"> Clear All Filters</button>\n                        </div>\n                      </div>\n                      </div>\n           \n  <div class=\"row\" style=\"margin-left:0%;\">\n          \n  \n  <div class=\"margin\"*ngFor=\"let item of filtered \" >\n          <app-card [item]=\"item\"></app-card>\n          </div>\n\n          <div  class=\"empty-card\" >\n            <app-empty-card></app-empty-card>\n            </div>\n          \n</div>\n\n<nav style=\"margin-bottom:10%\">\n    <ul class=\"pagination pagination-lg\" style=\"margin-left:0\">\n      <li class=\"page-item\" >\n        <a class=\"page-link\" style=\"border-radius:0; color:#e5e5e5; background-color:#4a4a4a\" href=\"#\" tabindex=\"-1\">1</a>\n      </li>\n      <li class=\"page-item\" style=\"border-radius:0\"><a class=\"page-link\" style=\"color:#4a4a4a\" href=\"#\">2</a></li>\n      <li class=\"page-item\" style=\"border-radius:0\" ><a class=\"page-link\" style=\"border-radius:0; color:#4a4a4a\" href=\"#\">3</a></li>\n    </ul>\n  </nav>\n</div> -->\n</div>\n\n\n<div *ngIf=\"set && !create\" class=\"activities\">\n<div class=\"row\">\n  <div class=\"left\" (click)=\"back()\">\n    <div class=\"arrow-left\"></div>\n  </div>\n\n <div class=\"back-title\">Itineraries</div>\n</div>\n  <div style=\"position:relative;\">\n      <img src=\"../../assets/images/photo3.jpeg\" alt=\"Random first slide\" class=\"img-responsive banner\">\n      <div class=\"btext\">\n      <div class=\"btext1\">{{grade}}</div>\n      <div class=\"btext2\">{{title}}</div>\n      <div class=\"btext3\">{{year}}</div>\n      </div>\n      <div *ngIf=\"modified\" class=\"btext4\"> This is a modified version of the <span style=\"font-weight:bold\">{{title}}</span> itinerary</div>\n    </div>\n    <div class=\"link\" >\n\n      <div class=\"urlbox\">\n\n        <div class=\"url\"><span *ngIf=\"!addedPost\">link generated if this version is modfied</span><span *ngIf=\"addedPost\">{{url}}</span></div>\n        \n        <div ><button class=\"url-btn\" ngxClipboard [cbContent]=\"url\">COPY URL</button></div>\n    </div>\n\n\n    <div class=\"printbox\">\n\n      <div>\n     <button class=\"print\" (click)=\"printDiv()\">PRINT</button>  \n      </div>\n      <div style=\"margin-right:13%;margin-left:2%\"><button class=\"download\">DOWNLOAD PDF</button></div>\n    </div>\n    </div>\n<app-activity-display *ngFor=\"let itinerary of itineraries\" [itinerary]=\"itinerary\"  (item)=\"setItem($event)\" (order)=\"emitOrder($event)\" (notify)=\"notice($event)\" (modify)=\"modify($event)\" [showSwap]=\"showSwap\"></app-activity-display>\n    \n<app-empty-activity-display  (set)=\"add($event)\"></app-empty-activity-display>\n\n\n\n        </div>\n\n        <div *ngIf=\"create\" class=\"itineraries2\">\n \n            <div style=\"height:5%; position:relative;\">\n             <div class=\"ti\" >Create Your Own Itinerary</div>\n        \n           </div>\n           </div>\n        \n</div>\n\n\n\n\n\n\n\n</div>\n<div>\n  <app-main-footer></app-main-footer>\n</div>\n\n"

/***/ }),

/***/ "./src/pages/browse-page/browse-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/pages/browse-page/browse-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-container {\n  margin: auto; }\n\n.img-resize {\n  height: 350px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.left {\n  padding-top: 1.5%;\n  padding-bottom: 1.5%;\n  padding-left: 1.5%;\n  padding-right: 1.5%;\n  background-color: #8a8d8a;\n  margin-bottom: 2%;\n  width: 4.5%;\n  border-radius: 50%;\n  cursor: pointer; }\n\n.side-title {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-size: 1.5rem;\n  color: #4a4a4a;\n  margin-left: 2%;\n  margin-bottom: 6%; }\n\n.brief {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 2%;\n  width: 90%; }\n\n.brief1 {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-size: 1rem;\n  color: #8a8d8a;\n  margin-left: 3%;\n  width: 50px; }\n\n.brief2 {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-size: 1rem;\n  color: #4a4a4a;\n  width: 90%;\n  margin-left: 7%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.back-title {\n  float: left;\n  margin-left: 220px;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-size: 1.5rem;\n  color: #4a4a4a; }\n\n.arrow-left {\n  width: 0;\n  height: 0;\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n  border-right: 5px solid #fff;\n  margin: auto; }\n\n.banner {\n  width: 100%;\n  height: 300px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.btext {\n  position: absolute;\n  color: #fff;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  bottom: 23%;\n  left: 3%;\n  font-size: 2rem;\n  background-color: rgba(0, 0, 0, 0.2); }\n\n.btext4 {\n  position: absolute;\n  color: #fff;\n  background: #0099FF;\n  opacity: 0.9;\n  font-style: italic;\n  font-weight: lighter;\n  font-size: 0.8rem;\n  width: 100%;\n  padding: 2%;\n  bottom: 0; }\n\n.btext5 {\n  position: absolute;\n  color: #fff;\n  background: #00ff22;\n  opacity: 0.9;\n  font-style: italic;\n  font-weight: lighter;\n  font-size: 0.8rem;\n  width: 18%;\n  padding: 1%;\n  right: 0;\n  bottom: 53px;\n  cursor: pointer; }\n\n.btext1 {\n  font-family: Arial;\n  font-size: 1rem; }\n\n.btext3 {\n  font-size: 1rem; }\n\n.my-bg1 {\n  position: relative;\n  bottom: 120px;\n  margin-bottom: -120px; }\n\n.my-bg {\n  position: relative;\n  bottom: 120px;\n  z-index: -5;\n  margin-bottom: -120px; }\n\n.h {\n  position: absolute;\n  top: 250px;\n  left: 25%;\n  font-size: 12px;\n  color: #fff;\n  max-width: 80%; }\n\n.plan {\n  position: absolute;\n  top: 250px;\n  left: 25%;\n  font-size: 12px;\n  color: #fff;\n  max-width: 80%;\n  display: inline-block; }\n\n.arrow-right {\n  position: absolute;\n  top: 253px;\n  left: 28%;\n  display: inline-block;\n  width: 10%;\n  height: 0;\n  margin-left: 4%;\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n  border-left: 5px solid white; }\n\n.my-header {\n  position: absolute;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  top: 250px;\n  left: 35%;\n  text-align: center;\n  color: #fff; }\n\n.h1 {\n  position: absolute;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  top: 295px;\n  left: 25%;\n  text-align: center;\n  color: #fff; }\n\n.h2 {\n  margin-bottom: 35%;\n  font-family: Arial;\n  font-weight: normal;\n  font-size: 1.5rem; }\n\n.h3 {\n  position: absolute;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  top: 300px;\n  left: 50%;\n  text-align: center;\n  color: #fff; }\n\n.card-title {\n  color: #4a4a4a;\n  font-weight: bold;\n  font-size: 1.5rem;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial; }\n\n.pag /deep/ .ngx-pagination .current {\n  background: #4a4a4a; }\n\n.pag /deep/ .ngx-pagination li {\n  border-style: solid;\n  border-width: 1px;\n  border-color: #e5e5e5;\n  margin-right: 0px;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial; }\n\n.margin {\n  margin-right: 3%;\n  margin-bottom: 3%;\n  height: 230px;\n  width: 47%;\n  font-size: 13px; }\n\n.pagination-lg {\n  border: none; }\n\n/* .empty-card{\n    height:360px; \n    width:32%;\n    font-size:13px;\n} */\n\n.boxes {\n  width: 90%;\n  margin-bottom: 2px;\n  margin-left: 3%; }\n\n.first {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial; }\n\n.selection {\n  margin-top: 10%; }\n\n.ftext {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-size: 1rem;\n  margin-bottom: 1%;\n  margin-left: 3%;\n  color: #8a8d8a; }\n\n.my-content {\n  padding-bottom: 15px;\n  margin-bottom: 20px; }\n\n.pointer {\n  width: 0;\n  height: 0;\n  border-top: 8px solid transparent;\n  border-left: 12px solid white;\n  border-bottom: 8px solid transparent;\n  float: left;\n  margin-left: 20px;\n  margin-top: 12px; }\n\n.plan1 {\n  float: left;\n  font-size: 12px;\n  font-weight: bold;\n  text-transform: uppercase;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial; }\n\n.plan2 {\n  float: left;\n  font-weight: bold;\n  font-size: 3rem;\n  color: #4a4a4a;\n  text-transform: uppercase;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial; }\n\n.plan3 {\n  font-size: 0.8rem;\n  margin-bottom: 2%;\n  font-weight: bold;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial; }\n\n.text {\n  color: #fff; }\n\ninput[type=checkbox]:checked {\n  background: green; }\n\n.selection {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial; }\n\n.text1 {\n  font-size: 3rem;\n  margin-bottom: 8%;\n  font-weight: bold;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial; }\n\n.text2 {\n  font-size: 1.7rem;\n  margin-bottom: 1%; }\n\n.text3 {\n  position: absolute;\n  top: 20%;\n  left: 22%;\n  max-width: 55%;\n  padding: 15px;\n  text-align: center;\n  margin-bottom: 20px;\n  font-size: 1rem;\n  font-weight: lighter;\n  clear: both;\n  font-family: Arial; }\n\n.content {\n  max-width: 1300px;\n  padding-top: 2%;\n  margin: auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n\n.side-bar {\n  display: flex;\n  flex-direction: column;\n  width: 28%;\n  height: 1500px;\n  border-color: #e5e5e5;\n  border-right-width: 1px;\n  border-style: solid; }\n\n.itineraries {\n  width: 70%;\n  padding: 0.9%; }\n\n.itineraries2 {\n  width: 70%;\n  padding: 0.9%; }\n\n.link {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 70px;\n  margin-bottom: 5%;\n  background-color: #e5e5e5; }\n\n.activities {\n  width: 65%; }\n\n.urlbox {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  width: 54%; }\n\n.url {\n  background: #fff;\n  width: 73%;\n  margin-top: 14px;\n  padding: 3%;\n  height: 45px;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-size: 0.8rem;\n  color: #8a8d8a;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.url-btn {\n  background: red;\n  width: 150%;\n  margin-top: 14px;\n  padding: 3%;\n  height: 45px;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-size: 0.8rem;\n  color: #fff;\n  cursor: pointer; }\n\n.printbox {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  width: 30%; }\n\n.print {\n  background: #4a4a4a;\n  width: 170%;\n  margin-top: 14px;\n  padding: 3%;\n  height: 45px;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-size: 0.8rem;\n  color: #fff;\n  cursor: pointer;\n  margin-right: 2%; }\n\n.download {\n  background: #4a4a4a;\n  width: 130%;\n  margin-top: 14px;\n  padding: 3%;\n  height: 45px;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-size: 0.8rem;\n  color: #fff;\n  cursor: pointer; }\n\n.filter {\n  margin-left: 0%;\n  margin-top: 2%; }\n\n.filtertext {\n  font-weight: bold;\n  margin-top: 8px; }\n\n.filter2 {\n  margin-bottom: 2%;\n  margin-left: 0.1%; }\n\n.grade {\n  font-weight: bold;\n  margin-top: 8px; }\n\n.grades {\n  width: 15%;\n  margin-left: 1%;\n  height: 10px; }\n\n.select {\n  font-weight: bold;\n  font-size: 13px; }\n\n.date {\n  width: 15%;\n  margin-left: 1%; }\n\n.day {\n  width: 15%;\n  margin-left: 1%;\n  height: 10px; }\n\n.show {\n  width: 15%;\n  margin-left: 1%; }\n\n.build {\n  color: red; }\n\n.point {\n  color: #fff; }\n\n.ti {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-size: 2rem;\n  position: relative;\n  color: #4a4a4a; }\n\n.my-btn {\n  background: #4a4a4a;\n  cursor: pointer;\n  display: inline;\n  width: 200px;\n  font-size: 0.8rem;\n  font-weight: bold;\n  padding-left: 50px;\n  padding-right: 50px;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n\n.my-btn1 {\n  background: #fff;\n  width: 200px;\n  cursor: pointer;\n  display: inline;\n  color: #8a8d8a;\n  font-size: 0.8rem;\n  font-weight: bold;\n  padding-left: 50px;\n  padding-right: 50px;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n\n@media only screen and (max-width: 1470px) {\n  .my-container {\n    max-width: 100%;\n    margin: auto; }\n  .card-title {\n    padding: 15px;\n    color: #4a4a4a;\n    font-weight: bold;\n    font-size: 1.5rem;\n    font-family: \"futura-pt\", \"Helvetica Neue\", Arial; }\n  .my-content {\n    padding: 15px;\n    margin-bottom: 20px; }\n  /* .pointer{\n    width:0;\n    height:0; \n    border-top:8px solid transparent; \n    border-left: 12px solid #808080; \n    border-bottom: 8px solid transparent; \n    float:left; \n    margin-left:20px; \n    margin-top:12px;\n    }\n    .plan1{\n    float:left; \n    font-size:12px; \n    font-weight:bold;\n    font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n    }\n    .plan2{\n    float:left; \n    font-weight:bold;\n    font-size:3rem;\n    color:#4a4a4a;\n    font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n    }\n    .plan3{\n    float:left; \n    font-size:25px; \n    font-weight:bold;\n    color:#8a8d8a;\n    font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n    }\n    .text1{\n    color:#4a4a4a; \n    margin-top:2%;\n    padding:15px;\n    }\n    .text2{\n    \n    padding-bottom:0;\n    margin-bottom: 20px;\n    font-size:3rem;\n    font-weight:bold;\n    clear: both;\n    color:#4a4a4a;\n    font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n    }\n    .text3{\n    \n    padding-bottom:0;\n    margin-bottom: 20px;\n    font-size:1rem;\n    font-weight:lighter;\n    clear: both;\n    color:#4a4a4a;\n    font-family: Arial;\n    }\n    .filter{\n        margin-left:1.5%; \n        margin-top:2%;  \n        } */ }\n\n@media only screen and (max-width: 1300px) {\n  /*   \n.grades{\n    width:26%;\n     margin-left:1%;\n }\n .date{\n width:26%; margin-left:1%;\n }\n .day{\n width:26%;margin-left:1%;\n }  \n \n .show{\n    width:12%; \n    margin-left:46%;\n    margin-top:1%;\n    } */ }\n\n@media only screen and (max-width: 1220px) {\n  /*  .margin{\n        margin-bottom:5%;\n        height:380px;\n        width:49%;\n        font-size:13px;\n       \n    }\n\n    .empty-card{\n        height:380px; \n        width:49%;\n        font-size:13px;\n    \n       \n    } */ }\n\n@media only screen and (max-width: 1024px) {\n  /* .plan1{\n        float:left; \n        font-size:12px; \n        font-weight:bold;\n     \n        }\n        .plan2{\n        float:left; \n        font-weight:bold;\n        font-size:1.5rem;\n        color:#4a4a4a;\n    \n        }\n        .plan3{\n        float:left; \n        font-size:1rem; \n        font-weight:bold;\n        color:#8a8d8a;\n      \n        }\n        .pointer{\n            width:0;\n            height:0; \n            border-top:8px solid transparent; \n            border-left: 8px solid #808080; \n            border-bottom: 5px solid transparent; \n            float:left; \n            margin-left:10px; \n            margin-top:6px;\n            }\n       \n        .text2{\n        padding-bottom:0;\n        margin-bottom: 10px;\n        font-size:1.5rem;\n        clear: both;\n        color:#4a4a4a;\n\n        }\n        .text3{\n        padding-bottom:0;\n        margin-bottom: 20px;\n        font-size:1rem;\n        font-weight:lighter;\n        clear: both;\n        color:#4a4a4a;\n     \n        } */ }\n\n@media only screen and (max-width: 1006px) {\n  /* .img-resize{\n        height:250px;\n        width:100%;\n        object-fit:cover;\n      }\n      \n\n    .filtertext{\n        font-weight:bold; \n        margin-top:8px;\n        margin-left:37%;\n        }\n    .grades{\n        width:95%;\n         margin-left:1%;\n         \n     }\n     .date{\n     width:95%; \n     margin-left:1%;\n     margin-top:4%;\n    \n     }\n     .day{\n     width:95%;\n     margin-left:1%;\n     margin-top:1.5%;\n  \n     }  \n     \n     .show{\n        width:95%; \n        margin-left:1%;\n        margin-top:4%;\n  \n        } */ }\n\n@media only screen and (max-width: 1000px) {\n  /*  .margin{\n        margin-bottom:3%;\n        height:380px;\n        width:49%;\n        font-size:13px;\n       \n    }\n\n    .empty-card{\n        height:380px; \n        width:49%;\n        font-size:13px;\n    \n    }\n */ }\n\n@media only screen and (max-width: 850px) {\n  /* .margin{\n        margin-bottom:5%;\n        height:380px;\n        width:49%;\n        font-size:13px;\n       \n    }\n\n    .empty-card{\n        height:380px; \n        width:49%;\n        font-size:13px;\n    \n       \n    }\n    .grades{\n        width:95%;\n         margin-left:1%;\n         \n     }\n     .date{\n     width:95%; \n     margin-left:1%;\n     margin-top:4.2%;\n    \n     }\n     .day{\n     width:95%;\n     margin-left:1%;\n     margin-top:1.5%;\n  \n     }  \n     \n     .show{\n        width:95%; \n        margin-left:1%;\n        margin-top:4%;\n  \n        } */ }\n\n@media only screen and (max-width: 750px) {\n  /*   .margin{\n        margin-bottom:8%;\n        height:380px;\n        width:49%;\n        font-size:13px;\n       \n    }\n\n    .empty-card{\n        height:380px; \n        width:49%;\n        font-size:13px;\n    \n       \n    }\n    .grades{\n        width:95%;\n         margin-left:1%;\n         \n     }\n     .date{\n     width:95%; \n     margin-left:1%;\n     margin-top:5%;\n    \n     }\n     .day{\n     width:95%;\n     margin-left:1%;\n     margin-top:1.5%;\n  \n     }  \n     \n     .show{\n        width:95%; \n        margin-left:1%;\n        margin-top:5%;\n  \n        }\n      */ }\n\n@media only screen and (max-width: 650px) {\n  /*    .margin{\n        margin-bottom:10%;\n        height:380px;\n        width:50%;\n        font-size:13px;\n       \n    }\n\n    .empty-card{\n        height:380px; \n        width:49%;\n        font-size:13px;\n    \n       \n    }\n\n    .grades{\n        width:95%;\n         margin-left:1%;\n         \n     }\n     .date{\n     width:95%; \n     margin-left:1%;\n     margin-top:5.5%;\n    \n     }\n     .day{\n     width:95%;\n     margin-left:1%;\n     margin-top:1.5%;\n  \n     }  \n     \n     .show{\n        width:95%; \n        margin-left:1%;\n        margin-top:5.5%;\n  \n        } */ }\n\n@media only screen and (max-width: 600px) {\n  /* .img-resize{\n        height:200px;\n        width:100%;\n        object-fit:cover;\n      }\n      \n\n    .margin{\n        margin-bottom:8%;\n        height:380px;\n        width:95%;\n        font-size:13px;\n       \n    }\n\n    .empty-card{\n        height:380px; \n        width:95%;\n        font-size:13px;\n        margin-bottom:3%;\n       \n    }\n\n    .filtertext{\n        font-weight:bold; \n        margin-top:8px;\n        margin-left:1%;\n        }\n\n        .grades{\n            width:95%;\n             margin-left:1%;\n             \n         }\n         .date{\n         width:95%; \n         margin-left:1%;\n         margin-top:6%;\n        \n         }\n         .day{\n         width:95%;\n         margin-left:1%;\n         margin-top:1.5%;\n      \n         }  \n         \n         .show{\n            width:95%; \n            margin-left:1%;\n            margin-top:6%;\n      \n            }\n       */ }\n\n/* @media only screen and (max-width: 480px) {\n    .margin{\n        margin-bottom:8%;\n        height:380px;\n        width:98%;\n        font-size:13px;\n       \n    }\n\n    .empty-card{\n        height:380px; \n        width:98%;\n        font-size:13px;\n        margin-bottom:3%;\n       \n    }\n\n    .filtertext{\n        font-weight:bold; \n        margin-top:8px;\n        margin-left:0%;\n        }\n\n        .grades{\n            width:92%;\n             margin-left:1%;\n             \n         }\n         .date{\n         width:92%; \n         margin-left:1%;\n         margin-top:7%;\n        \n         }\n         .day{\n         width:92%;\n         margin-left:1%;\n         margin-top:1.5%;\n      \n         }  \n         \n         .show{\n            width:92%; \n            margin-left:1%;\n            margin-top:7%;\n      \n            }\n      \n    \n  } */\n\n@media only screen and (max-width: 414px) {\n  /* .margin{\n        margin-bottom:12%;\n        height:380px;\n        width:95%;\n        font-size:13px;\n       \n    }\n\n    .plan1{\n        float:left; \n        font-size:12px; \n        font-weight:bold;\n        }\n        .plan2{\n        float:left; \n        margin-left:10px;\n        font-weight:bold; font-size:28px;\n        }\n        .plan3{\n        float:left; \n        font-size:0px; \n        font-weight:bold; \n        color:\"#808080\";\n        }\n\n    .empty-card{\n        height:380px; \n        width:92%;\n        font-size:8px;\n        margin-bottom:8%;\n       \n    }\n\n\n    .text1{\n\n        margin-left:1%; \n        margin-top:2%;\n        }\n        .text2{\n        font-weight:bold; \n        font-size:25px;\n        margin-left:1%; \n        }\n        .text3{\n        font-size:12px; \n        margin-left:1%;\n        width:80%; \n        margin-top:0.8%;\n        \n        }\n\n        .grades{\n            width:92%;\n             margin-left:1%;\n             \n         }\n         .date{\n         width:92%; \n         margin-left:1%;\n         margin-top:9%;\n         \n        \n         }\n         .day{\n         width:92%;\n         margin-left:1%;\n         margin-top:2.7%;\n      \n         }  \n         \n         .show{\n            width:92%; \n            margin-left:1%;\n            margin-top:9%;\n      \n            }\n          \n */ }\n\n@media only screen and (max-width: 375px) {\n  /* .margin{\n        margin-bottom:12%;\n        height:380px;\n        width:95%;\n        font-size:13px;\n       \n    }\n\n    .plan1{\n        float:left; \n        font-size:12px; \n        font-weight:bold;\n        }\n        .plan2{\n        float:left; \n        font-weight:bold; font-size:25px;\n        }\n        .plan3{\n        float:left; \n        font-size:0px; \n        font-weight:bold; \n        color:\"#808080\";\n        }\n\n    .empty-card{\n        height:380px; \n        width:92%;\n        font-size:8px;\n        margin-bottom:8%;\n       \n    }\n\n\n    .text1{\n\n        margin-left:1%;\n        margin-top:2%;\n        }\n        .text2{\n         margin-left:1%; \n        font-weight:bold; \n        font-size:25px;\n        }\n        .text3{\n        margin-left:1%; \n        font-size:12px; \n        width:80%; \n        margin-top:0.8%;\n        \n        }\n\n        .grades{\n            width:92%;\n             margin-left:1%;\n             \n         }\n         .date{\n         width:92%; \n         margin-left:1%;\n         margin-top:9%;\n         \n        \n         }\n         .day{\n         width:92%;\n         margin-left:1%;\n         margin-top:2.2%;\n      \n         }  \n         \n         .show{\n            width:92%; \n            margin-left:1%;\n            margin-top:9%;\n      \n            } */ }\n\n@media only screen and (max-width: 320px) {\n  /* .margin{\n        margin-bottom:12%;\n        height:380px;\n        width:95%;\n        font-size:13px;\n       \n    }\n\n    .plan1{\n        float:left; \n        font-size:12px; \n        font-weight:bold;\n        }\n        .plan2{\n        float:left; \n        font-weight:bold; font-size:25px;\n        }\n        .plan3{\n        float:left; \n        font-size:0px; \n        font-weight:bold; \n        color:\"#808080\";\n        }\n\n    .empty-card{\n        height:380px; \n        width:92%;\n        font-size:8px;\n        margin-bottom:8%;\n       \n    }\n\n\n    .text1{\n\n        margin-left:1%;\n        margin-top:2%;\n        }\n        .text2{\n        font-weight:bold; \n        font-size:25px;\n        margin-left:1%;\n        }\n        .text3{\n        font-size:12px; \n        width:80%; \n        margin-top:0.8%;\n        margin-left:1%;\n        \n        }\n\n        .grades{\n            width:92%;\n            \n             \n         }\n         .date{\n         width:92%; \n         margin-top:9%;\n         \n        \n         }\n         .day{\n         width:92%;\n         margin-top:1.5%;\n      \n         }  \n         \n         .show{\n            width:92%; \n\n            margin-top:9%;\n      \n            } */ }\n"

/***/ }),

/***/ "./src/pages/browse-page/browse-page.component.ts":
/*!********************************************************!*\
  !*** ./src/pages/browse-page/browse-page.component.ts ***!
  \********************************************************/
/*! exports provided: BrowsePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowsePageComponent", function() { return BrowsePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BrowsePageComponent = /** @class */ (function () {
    function BrowsePageComponent(modalService, db, router, changeDetector, route) {
        this.modalService = modalService;
        this.db = db;
        this.router = router;
        this.changeDetector = changeDetector;
        this.route = route;
        this.modified = false;
        this.addedPost = false;
        this.set = false;
        this.create = false;
        this.browse = false;
        this.first = false;
        this.second = false;
        this.third = false;
        this.fourth = false;
        this.fifth = false;
        this.sixth = false;
        this.bActive = false;
        this.cActive = false;
        this.newSet = false;
        this.showSwap = true;
        this.p = 1;
        this.log = '';
        this.filters = {};
        this.filters1 = {};
    }
    BrowsePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        localStorage.clear();
        this.setBrowse();
        this.items = this.db.collection('/itineraries').valueChanges().subscribe(function (items) {
            _this.items = items;
            _this.applyFilters();
        });
        console.log(this.items);
        jquery__WEBPACK_IMPORTED_MODULE_4__('.cbox').prop('checked', false);
        jquery__WEBPACK_IMPORTED_MODULE_4__('.rad').prop('checked', false);
    };
    BrowsePageComponent.prototype.addPost = function () {
        /* this.db.collection('/modified_itineraries').add({'name': this.title, 'description': this.content, 'length': this.length}); */
        this.randomId();
        this.addedPost = true;
        this.url = "http://planning-tool.herokuapp.com/ItineraryPage/" + this.rId;
        this.db.collection('/modified_itineraries').doc(this.rId).set({ 'name': this.title,
            'grade': this.grade,
            'title': this.title,
            'year': this.year,
            'activities': this.itineraries });
    };
    BrowsePageComponent.prototype.randomId = function () {
        // Math.random should be unique because of its seeding algorithm.
        // Convert it to base 36 (numbers + letters), and grab the first 9 characters
        // after the decimal.
        this.rId = Math.random().toString(36).substr(2, 9);
    };
    ;
    BrowsePageComponent.prototype.print = function () {
        window.print();
    };
    BrowsePageComponent.prototype.getSet = function (event) {
        this.set = event;
        this.itineraries = JSON.parse(localStorage.getItem("itinerary"));
        this.grade = JSON.parse(localStorage.getItem("grade"));
        this.title = JSON.parse(localStorage.getItem("title"));
        this.year = JSON.parse(localStorage.getItem("year"));
        this.titles = JSON.parse(localStorage.getItem("titles"));
    };
    BrowsePageComponent.prototype.add = function (event) {
        this.itineraries.push(0);
        localStorage.setItem('itinerary', JSON.stringify(this.itineraries));
        console.log(this.itineraries);
        localStorage.setItem('_set', JSON.stringify(event));
    };
    BrowsePageComponent.prototype.setBrowse = function () {
        this.create = false;
        this.browse = true;
        this.bActive = true;
        this.cActive = false;
    };
    BrowsePageComponent.prototype.setCreate = function () {
        this.create = true;
        this.browse = false;
        this.cActive = true;
        this.bActive = false;
    };
    BrowsePageComponent.prototype.back = function () {
        this.set = false;
        this.changeDetector.detectChanges();
        localStorage.removeItem('itinerary');
    };
    BrowsePageComponent.prototype.setItem = function (event) {
        console.log("set item method fgfdfdfgddgdfgdfg");
        this.itineraries.pop();
        console.log(this.itineraries);
        this.itineraries.push(event);
        localStorage.setItem('itinerary', JSON.stringify(this.itineraries));
    };
    BrowsePageComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        });
    };
    BrowsePageComponent.prototype.emitOrder = function (event) {
        localStorage.setItem('n_e_o', JSON.stringify(event));
    };
    BrowsePageComponent.prototype.notice = function (event) {
        this.itineraries = JSON.parse(localStorage.getItem("itinerary"));
    };
    BrowsePageComponent.prototype.modify = function (event) {
        this.modified = event;
        this.addPost();
    };
    BrowsePageComponent.prototype.printDiv = function () {
        var divToPrint = document.getElementById('print');
        var newWin = window.open('', 'Print-Window');
        newWin.document.open();
        newWin.document.write('<html><body onload="window.print()">' + divToPrint.innerHTML + '</body></html>');
        newWin.document.close();
        setTimeout(function () { newWin.close(); }, 10);
    };
    BrowsePageComponent.prototype.resizeImage = function () {
        var value = false;
        if (screen.width < 1024) {
            value = true;
            return value;
        }
    };
    BrowsePageComponent.prototype.applyFilters = function () {
        console.log('action called');
        var newlyFilter = lodash__WEBPACK_IMPORTED_MODULE_3__["filter"](this.items, lodash__WEBPACK_IMPORTED_MODULE_3__["conforms"](this.filters));
        console.log(newlyFilter);
        this.filtered = newlyFilter;
        /* if (this.filtered === undefined || this.filtered.length == 0) {
          this.filtered = newlyFilter;
          console.log(true)
          console.log(this.filtered)
          console.log(newlyFilter)
      }
      else{
           console.log(false)
    
      newlyFilter.map((elem)=> this.filtered.push(elem));
      console.log(this.filtered)
      console.log(newlyFilter)
      } */
    };
    BrowsePageComponent.prototype.filterExact = function (property, rule) {
        this.sixth = true;
        console.log(this.day);
        if (this.day == "Half-day") {
            console.log("callinghalf");
            this.filtered = this.items.filter(function (elem) { return elem.day == "Half-day"; });
        }
        else {
            console.log("callingfull");
            this.filtered = this.items.filter(function (elem) { return elem.day == "Full-day"; });
        }
    };
    BrowsePageComponent.prototype.filterBoolean = function (property, rule) {
        var _this = this;
        this.first = true;
        if (!rule)
            this.removeFilter(property);
        else {
            if (this.fourth == true || this.fifth == true || this.sixth == true) {
                console.log("external checked");
                // check if an internal checkbox has been selected
                if (this.second == true || this.third == true) {
                    console.log("intenal checked");
                    //go through all the checked boxes and filter
                    if (this.fourth == true) {
                        console.log("logged fourth");
                        if (this.second == true) {
                            var first = this.items.filter(function (elem) { return elem.OctoberToApril == true; });
                            var sec = this.items.filter(function (elem) { return elem.Gr3To5 == true; });
                            var firstFilter = first.filter(function (elem) { return elem.KinderTo2; });
                            var secFilter = sec.filter(function (elem) { return elem.KinderTo2; });
                            if (this.day == "Half-day") {
                                var fil = firstFilter.filter(function (elem) { return elem.day == "Half-day"; });
                                var fils = secFilter.filter(function (elem) { return elem.day == "Half-day"; });
                            }
                            if (this.day == "Full-day") {
                                var fil = firstFilter.filter(function (elem) { return elem.day == "Full-day"; });
                                var fils = secFilter.filter(function (elem) { return elem.day == "Full-day"; });
                            }
                            fil.map(function (elem) { return _this.filtered.push(elem); });
                            fils.map(function (elem) { return _this.filtered.push(elem); });
                        }
                        if (this.third == true) {
                            var first = this.items.filter(function (elem) { return elem.OctoberToApril == true; });
                            var sec = this.items.filter(function (elem) { return elem.Gr6To8 == true; });
                            var firstFilter = first.filter(function (elem) { return elem.KinderTo2; });
                            var secFilter = sec.filter(function (elem) { return elem.KinderTo2; });
                            if (this.day == "Half-day") {
                                var fil1 = firstFilter.filter(function (elem) { return elem.day == "Half-day"; });
                                var fils1 = secFilter.filter(function (elem) { return elem.day == "Half-day"; });
                            }
                            if (this.day == "Full-day") {
                                var fil1 = firstFilter.filter(function (elem) { return elem.day == "Full-day"; });
                                var fils1 = secFilter.filter(function (elem) { return elem.day == "Full-day"; });
                            }
                            fil1.map(function (elem) { return _this.filtered.push(elem); });
                            fils1.map(function (elem) { return _this.filtered.push(elem); });
                        }
                    }
                    if (this.fifth == true) {
                        console.log("logged fifth");
                        if (this.second == true) {
                            var first = this.items.filter(function (elem) { return elem.MayToJune == true; });
                            var sec = this.items.filter(function (elem) { return elem.Gr3To5 == true; });
                            var firstFilter = first.filter(function (elem) { return elem.KinderTo2; });
                            var secFilter = sec.filter(function (elem) { return elem.KinderTo2; });
                            if (this.day == "Half-day") {
                                var fil2 = firstFilter.filter(function (elem) { return elem.day == "Half-day"; });
                                var fils2 = secFilter.filter(function (elem) { return elem.day == "Half-day"; });
                            }
                            if (this.day == "Full-day") {
                                var fil2 = firstFilter.filter(function (elem) { return elem.day == "Full-day"; });
                                var fils2 = secFilter.filter(function (elem) { return elem.day == "Full-day"; });
                            }
                            fil2.map(function (elem) { return _this.filtered.push(elem); });
                            fils2.map(function (elem) { return _this.filtered.push(elem); });
                        }
                        if (this.third == true) {
                            var first = this.items.filter(function (elem) { return elem.MayToJune == true; });
                            var sec = this.items.filter(function (elem) { return elem.Gr6To8 == true; });
                            var firstFilter = first.filter(function (elem) { return elem.KinderTo2; });
                            var secFilter = sec.filter(function (elem) { return elem.KinderTo2; });
                            if (this.day == "Half-day") {
                                var fil3 = firstFilter.filter(function (elem) { return elem.day == "Half-day"; });
                                var fils3 = secFilter.filter(function (elem) { return elem.day == "Half-day"; });
                            }
                            if (this.day == "Full-day") {
                                var fil3 = firstFilter.filter(function (elem) { return elem.day == "Full-day"; });
                                var fils3 = secFilter.filter(function (elem) { return elem.day == "Full-day"; });
                            }
                            fil3.map(function (elem) { return _this.filtered.push(elem); });
                            fils3.map(function (elem) { return _this.filtered.push(elem); });
                        }
                    }
                    /*    if (this.sixth == true){
                         console.log("logged sixth")
                        if (this.second == true){
                          let first = this.items.filter(elem => elem.day == this.day)
                          let sec = this.items.filter(elem => elem.Gr3To5 == true)
                          let firstFilter = first.filter(elem => elem.KinderTo2)
                          let secFilter = sec.filter(elem => elem.KinderTo2)
                       
                          firstFilter.map(elem=>this.filtered.push(elem))
                          secFilter.map(elem=>this.filtered.push(elem))
                         }
                
                
                         if (this.third == true){
                          let first = this.items.filter(elem => elem.day == this.day)
                          let sec = this.items.filter(elem => elem.Gr6To8 == true)
                          let firstFilter = first.filter(elem => elem.KinderTo2)
                          let secFilter = sec.filter(elem => elem.KinderTo2)
                       
                          firstFilter.map(elem=>this.filtered.push(elem))
                          secFilter.map(elem=>this.filtered.push(elem))
                         }
                       }
                       */
                }
                else {
                    console.log("internal not checked");
                    this.filtered = this.filtered.filter(function (elem) { return elem.KinderTo2 == true; });
                }
            }
            else {
                var result = this.items.filter(function (elem) { return elem.KinderTo2 == true; });
                if (this.second == true || this.third == true) {
                    result.map(function (elem) { return _this.filtered.push(elem); });
                }
                else {
                    this.filtered = result;
                }
            }
        }
    };
    BrowsePageComponent.prototype.filterBoolean1 = function (property, rule) {
        var _this = this;
        this.second = true;
        if (!rule)
            this.removeFilter1(property);
        else {
            if (this.fourth == true || this.fifth == true || this.sixth == true) {
                console.log("external checked");
                // check if an internal checkbox has been selected
                if (this.first == true || this.third == true) {
                    console.log("intenal checked");
                    //go through all the checked boxes and filter
                    if (this.fourth == true) {
                        if (this.first == true) {
                            var first = this.items.filter(function (elem) { return elem.OctoberToApril == true; });
                            var sec = this.items.filter(function (elem) { return elem.KinderTo2 == true; });
                            var firstFilter = first.filter(function (elem) { return elem.Gr3To5; });
                            var secFilter = sec.filter(function (elem) { return elem.Gr3To5; });
                            if (this.day == "Half-day") {
                                var fil4 = firstFilter.filter(function (elem) { return elem.day == "Half-day"; });
                                var fils4 = secFilter.filter(function (elem) { return elem.day == "Half-day"; });
                            }
                            if (this.day == "Full-day") {
                                var fil4 = firstFilter.filter(function (elem) { return elem.day == "Full-day"; });
                                var fils4 = secFilter.filter(function (elem) { return elem.day == "Full-day"; });
                            }
                            fil4.map(function (elem) { return _this.filtered.push(elem); });
                            fils4.map(function (elem) { return _this.filtered.push(elem); });
                        }
                        if (this.third == true) {
                            var first = this.items.filter(function (elem) { return elem.OctoberToApril == true; });
                            var sec = this.items.filter(function (elem) { return elem.Gr6To8 == true; });
                            var firstFilter = first.filter(function (elem) { return elem.Gr3To5; });
                            var secFilter = sec.filter(function (elem) { return elem.Gr3To5; });
                            if (this.day == "Half-day") {
                                var fil5 = firstFilter.filter(function (elem) { return elem.day == "Half-day"; });
                                var fils5 = secFilter.filter(function (elem) { return elem.day == "Half-day"; });
                            }
                            if (this.day == "Full-day") {
                                var fil5 = firstFilter.filter(function (elem) { return elem.day == "Full-day"; });
                                var fils5 = secFilter.filter(function (elem) { return elem.day == "Full-day"; });
                            }
                            fil5.map(function (elem) { return _this.filtered.push(elem); });
                            fils5.map(function (elem) { return _this.filtered.push(elem); });
                        }
                    }
                    if (this.fifth == true) {
                        if (this.first == true) {
                            var first = this.items.filter(function (elem) { return elem.MayToJune == true; });
                            var sec = this.items.filter(function (elem) { return elem.KinderTo2 == true; });
                            var firstFilter = first.filter(function (elem) { return elem.Gr3To5; });
                            var secFilter = sec.filter(function (elem) { return elem.Gr3To5; });
                            if (this.day == "Half-day") {
                                var fil6 = firstFilter.filter(function (elem) { return elem.day == "Half-day"; });
                                var fils6 = secFilter.filter(function (elem) { return elem.day == "Half-day"; });
                            }
                            if (this.day == "Full-day") {
                                var fil6 = firstFilter.filter(function (elem) { return elem.day == "Full-day"; });
                                var fils6 = secFilter.filter(function (elem) { return elem.day == "Full-day"; });
                            }
                            fil6.map(function (elem) { return _this.filtered.push(elem); });
                            fils6.map(function (elem) { return _this.filtered.push(elem); });
                        }
                        if (this.third == true) {
                            var first = this.items.filter(function (elem) { return elem.MayToJune == true; });
                            var sec = this.items.filter(function (elem) { return elem.Gr6To8 == true; });
                            var firstFilter = first.filter(function (elem) { return elem.Gr3To5; });
                            var secFilter = sec.filter(function (elem) { return elem.Gr3To5; });
                            if (this.day == "Half-day") {
                                var fil7 = firstFilter.filter(function (elem) { return elem.day == "Half-day"; });
                                var fils7 = secFilter.filter(function (elem) { return elem.day == "Half-day"; });
                            }
                            if (this.day == "Full-day") {
                                var fil7 = firstFilter.filter(function (elem) { return elem.day == "Full-day"; });
                                var fils7 = secFilter.filter(function (elem) { return elem.day == "Full-day"; });
                            }
                            fil7.map(function (elem) { return _this.filtered.push(elem); });
                            fils7.map(function (elem) { return _this.filtered.push(elem); });
                        }
                    }
                    /* if (this.sixth == true){
                     let third = this.items.filter(elem => elem.day == this.day)
             
                     let thirdFilter = third.filter(elem => elem.Gr3To5)
                     thirdFilter.map(elem=>this.filtered.push(elem))
                    } */
                }
                else {
                    console.log("internal not checked");
                    this.filtered = this.filtered.filter(function (elem) { return elem.Gr3To5 == true; });
                }
            }
            else {
                var result = this.items.filter(function (elem) { return elem.Gr3To5 == true; });
                if (this.first == true || this.third == true) {
                    result.map(function (elem) { return _this.filtered.push(elem); });
                }
                else {
                    this.filtered = result;
                }
            }
        }
    };
    BrowsePageComponent.prototype.filterBoolean2 = function (property, rule) {
        var _this = this;
        this.third = true;
        if (!rule)
            this.removeFilter2(property);
        else {
            if (this.fourth == true || this.fifth == true || this.sixth == true) {
                console.log("external checked");
                // check if an internal checkbox has been selected
                if (this.second == true || this.first == true) {
                    console.log("intenal checked");
                    //go through all the checked boxes and filter
                    if (this.fourth == true) {
                        if (this.first == true) {
                            var first = this.items.filter(function (elem) { return elem.OctoberToApril == true; });
                            var sec = this.items.filter(function (elem) { return elem.KinderTo2 == true; });
                            var firstFilter = first.filter(function (elem) { return elem.Gr6To8; });
                            var secFilter = sec.filter(function (elem) { return elem.Gr6To8; });
                            if (this.day == "Half-day") {
                                var fil4 = firstFilter.filter(function (elem) { return elem.day == "Half-day"; });
                                var fils4 = secFilter.filter(function (elem) { return elem.day == "Half-day"; });
                            }
                            if (this.day == "Full-day") {
                                var fil4 = firstFilter.filter(function (elem) { return elem.day == "Full-day"; });
                                var fils4 = secFilter.filter(function (elem) { return elem.day == "Full-day"; });
                            }
                            fil4.map(function (elem) { return _this.filtered.push(elem); });
                            fils4.map(function (elem) { return _this.filtered.push(elem); });
                        }
                        if (this.second == true) {
                            var first = this.items.filter(function (elem) { return elem.OctoberToApril == true; });
                            var sec = this.items.filter(function (elem) { return elem.Gr3To5 == true; });
                            var firstFilter = first.filter(function (elem) { return elem.Gr6To8; });
                            var secFilter = sec.filter(function (elem) { return elem.Gr6To8; });
                            if (this.day == "Half-day") {
                                var fil4 = firstFilter.filter(function (elem) { return elem.day == "Half-day"; });
                                var fils4 = secFilter.filter(function (elem) { return elem.day == "Half-day"; });
                            }
                            if (this.day == "Full-day") {
                                var fil4 = firstFilter.filter(function (elem) { return elem.day == "Full-day"; });
                                var fils4 = secFilter.filter(function (elem) { return elem.day == "Full-day"; });
                            }
                            fil4.map(function (elem) { return _this.filtered.push(elem); });
                            fils4.map(function (elem) { return _this.filtered.push(elem); });
                        }
                    }
                    if (this.fifth == true) {
                        if (this.first == true) {
                            var first = this.items.filter(function (elem) { return elem.MayToJune == true; });
                            var sec = this.items.filter(function (elem) { return elem.KinderTo2 == true; });
                            var firstFilter = first.filter(function (elem) { return elem.Gr6To8; });
                            var secFilter = sec.filter(function (elem) { return elem.Gr6To8; });
                            if (this.day == "Half-day") {
                                var fil4 = firstFilter.filter(function (elem) { return elem.day == "Half-day"; });
                                var fils4 = secFilter.filter(function (elem) { return elem.day == "Half-day"; });
                            }
                            if (this.day == "Full-day") {
                                var fil4 = firstFilter.filter(function (elem) { return elem.day == "Full-day"; });
                                var fils4 = secFilter.filter(function (elem) { return elem.day == "Full-day"; });
                            }
                            fil4.map(function (elem) { return _this.filtered.push(elem); });
                            fils4.map(function (elem) { return _this.filtered.push(elem); });
                        }
                        if (this.second == true) {
                            var first = this.items.filter(function (elem) { return elem.MayToJune == true; });
                            var sec = this.items.filter(function (elem) { return elem.Gr3To5 == true; });
                            var firstFilter = first.filter(function (elem) { return elem.Gr6To8; });
                            var secFilter = sec.filter(function (elem) { return elem.Gr6To8; });
                            if (this.day == "Half-day") {
                                var fil4 = firstFilter.filter(function (elem) { return elem.day == "Half-day"; });
                                var fils4 = secFilter.filter(function (elem) { return elem.day == "Half-day"; });
                            }
                            if (this.day == "Full-day") {
                                var fil4 = firstFilter.filter(function (elem) { return elem.day == "Full-day"; });
                                var fils4 = secFilter.filter(function (elem) { return elem.day == "Full-day"; });
                            }
                            fil4.map(function (elem) { return _this.filtered.push(elem); });
                            fils4.map(function (elem) { return _this.filtered.push(elem); });
                        }
                    }
                    /*
                           if (this.sixth == true){
                            let third = this.items.filter(elem => elem.day == this.day)
                    
                            let thirdFilter = third.filter(elem => elem.Gr6To8)
                            thirdFilter.map(elem=>this.filtered.push(elem))
                           }
                           */
                }
                else {
                    console.log("internal not checked");
                    this.filtered = this.filtered.filter(function (elem) { return elem.Gr6To8 == true; });
                }
            }
            else {
                var result = this.items.filter(function (elem) { return elem.Gr6To8 == true; });
                if (this.first == true || this.second == true) {
                    result.map(function (elem) { return _this.filtered.push(elem); });
                }
                else {
                    this.filtered = result;
                }
            }
        }
    };
    BrowsePageComponent.prototype.filterBoolean3 = function (property, rule) {
        var _this = this;
        this.fourth = true;
        if (!rule)
            this.removeFilter3(property);
        else {
            //check if external has been checked
            if (this.first == true || this.second == true || this.third == true || this.sixth == true) {
                // check if an internal checkbox has been selected
                if (this.fifth == true) {
                    console.log("intenal checked");
                    //go through all the checked boxes and filter
                    if (this.first == true) {
                        var first = this.items.filter(function (elem) { return elem.KinderTo2 == true; });
                        if (this.day == "Half-day") {
                            console.log("fitering full days");
                            var fill1 = first.filter(function (elem) { return elem.day == "Half-day"; });
                            console.log(fill1);
                        }
                        if (this.day == "Full-day") {
                            (console.log("filtering half days"));
                            var fill1 = first.filter(function (elem) { return elem.day == "Full-day"; });
                        }
                    }
                    if (this.second == true) {
                        var second = this.items.filter(function (elem) { return elem.Gr3To5 == true; });
                        if (this.day == "Half-day") {
                            var fill2 = second.filter(function (elem) { return elem.day == "Half-day"; });
                        }
                        if (this.day == "Full-day") {
                            var fill2 = second.filter(function (elem) { return elem.day == "Full-day"; });
                        }
                        fill2.map(function (elem) { return _this.filtered.push(elem); });
                    }
                    if (this.third == true) {
                        var third = this.items.filter(function (elem) { return elem.Gr6To8 == true; });
                        if (this.day == "Half-day") {
                            var fill3 = third.filter(function (elem) { return elem.day == "Half-day"; });
                        }
                        if (this.day == "Full-day") {
                            var fill3 = third.filter(function (elem) { return elem.day == "Full-day"; });
                        }
                        fill3.map(function (elem) { return _this.filtered.push(elem); });
                    }
                    /*  if (this.sixth == true){
                      let third = this.items.filter(elem => elem.day == this.day)
                
                      let thirdFilter = third.filter(elem => elem.MayToJune)
                      thirdFilter.map(elem=>this.filtered.push(elem))
                     }
                 */
                }
                else {
                    this.filtered = this.filtered.filter(function (elem) { return elem.OctoberToApril == true; });
                }
            }
            else {
                var result = this.items.filter(function (elem) { return elem.OctoberToApril == true; });
                if (this.fifth == true) {
                    result.map(function (elem) { return _this.filtered.push(elem); });
                }
                else {
                    this.filtered = result;
                }
            }
        }
    };
    BrowsePageComponent.prototype.filterBoolean4 = function (property, rule) {
        var _this = this;
        this.fifth = true;
        if (!rule)
            this.removeFilter4(property);
        else {
            //check if external has been checked
            if (this.first == true || this.second == true || this.third == true || this.sixth == true) {
                console.log("external checked");
                // check if an internal checkbox has been selected
                if (this.fourth == true) {
                    //go through all the checked boxes and filter
                    if (this.first == true) {
                        var first = this.items.filter(function (elem) { return elem.KinderTo2 == true; });
                        if (this.day == "Half-day") {
                            console.log("fitering full days");
                            var fill1 = first.filter(function (elem) { return elem.day == "Half-day"; });
                            console.log(fill1);
                        }
                        if (this.day == "Full-day") {
                            (console.log("filtering half days"));
                            var fill1 = first.filter(function (elem) { return elem.day == "Full-day"; });
                        }
                    }
                    if (this.second == true) {
                        var second = this.items.filter(function (elem) { return elem.Gr3To5 == true; });
                        if (this.day == "Half-day") {
                            var fill2 = second.filter(function (elem) { return elem.day == "Half-day"; });
                        }
                        if (this.day == "Full-day") {
                            var fill2 = second.filter(function (elem) { return elem.day == "Full-day"; });
                        }
                        fill2.map(function (elem) { return _this.filtered.push(elem); });
                    }
                    if (this.third == true) {
                        var third = this.items.filter(function (elem) { return elem.Gr6To8 == true; });
                        if (this.day == "Half-day") {
                            var fill3 = third.filter(function (elem) { return elem.day == "Half-day"; });
                        }
                        if (this.day == "Full-day") {
                            var fill3 = third.filter(function (elem) { return elem.day == "Full-day"; });
                        }
                        fill3.map(function (elem) { return _this.filtered.push(elem); });
                    }
                    /*  if (this.sixth == true){
                      let third = this.items.filter(elem => elem.day == this.day)
              
                      let thirdFilter = third.filter(elem => elem.OctoberToApril)
                      thirdFilter.map(elem=>this.filtered.push(elem))
                     }
               */
                }
                else {
                    console.log("internal not checked");
                    this.filtered = this.filtered.filter(function (elem) { return elem.MayToJune == true; });
                }
            }
            else {
                var result = this.items.filter(function (elem) { return elem.MayToJune == true; });
                if (this.fourth == true) {
                    result.map(function (elem) { return _this.filtered.push(elem); });
                }
                else {
                    this.filtered = result;
                }
            }
        }
    };
    BrowsePageComponent.prototype.removeFilter = function (property) {
        var _this = this;
        this.first = false;
        if (this.fourth == true || this.fifth == true || this.sixth == true) {
            this.filtered = this.filtered.filter(function (elem) { return elem.KinderTo2 == false; });
            console.log("external checked");
            // check if an internal checkbox has been selected
            if (this.second == true || this.third == true) {
                console.log("intenal checked");
                //go through all the checked boxes and filter
                if (this.fourth == true) {
                    console.log("logged fourth");
                    if (this.second == true) {
                        var first = this.items.filter(function (elem) { return elem.OctoberToApril == true; });
                        var sec = first.filter(function (elem) { return elem.Gr3To5 == true; });
                        var firstFilter = sec.filter(function (elem) { return elem.KinderTo2; });
                        var secFilter = sec.filter(function (elem) { return elem.KinderTo2; });
                        if (this.day == "Half-day") {
                            var fil = firstFilter.filter(function (elem) { return elem.day == "Half-day"; });
                            var fils = secFilter.filter(function (elem) { return elem.day == "Half-day"; });
                        }
                        if (this.day == "Full-day") {
                            var fil = firstFilter.filter(function (elem) { return elem.day == "Full-day"; });
                            var fils = secFilter.filter(function (elem) { return elem.day == "Full-day"; });
                        }
                        fil.map(function (elem) { return _this.filtered.push(elem); });
                    }
                    if (this.third == true) {
                        var first = this.items.filter(function (elem) { return elem.OctoberToApril == true; });
                        var sec = first.filter(function (elem) { return elem.Gr6To8 == true; });
                        var firstFilter = sec.filter(function (elem) { return elem.KinderTo2; });
                        var secFilter = sec.filter(function (elem) { return elem.KinderTo2; });
                        if (this.day == "Half-day") {
                            var fil1 = firstFilter.filter(function (elem) { return elem.day == "Half-day"; });
                            var fils1 = secFilter.filter(function (elem) { return elem.day == "Half-day"; });
                        }
                        if (this.day == "Full-day") {
                            var fil1 = firstFilter.filter(function (elem) { return elem.day == "Full-day"; });
                            var fils1 = secFilter.filter(function (elem) { return elem.day == "Full-day"; });
                        }
                        fil1.map(function (elem) { return _this.filtered.push(elem); });
                    }
                }
                if (this.fifth == true) {
                    console.log("logged fifth");
                    if (this.second == true) {
                        var first = this.items.filter(function (elem) { return elem.MayToJune == true; });
                        var sec = first.filter(function (elem) { return elem.Gr3To5 == true; });
                        var firstFilter = sec.filter(function (elem) { return elem.KinderTo2; });
                        var secFilter = sec.filter(function (elem) { return elem.KinderTo2; });
                        if (this.day == "Half-day") {
                            var fil2 = firstFilter.filter(function (elem) { return elem.day == "Half-day"; });
                        }
                        if (this.day == "Full-day") {
                            var fil2 = firstFilter.filter(function (elem) { return elem.day == "Full-day"; });
                        }
                        fil2.map(function (elem) { return _this.filtered.push(elem); });
                    }
                    if (this.third == true) {
                        var first = this.items.filter(function (elem) { return elem.MayToJune == true; });
                        var sec = first.filter(function (elem) { return elem.Gr6To8 == true; });
                        var firstFilter = sec.filter(function (elem) { return elem.KinderTo2; });
                        var secFilter = sec.filter(function (elem) { return elem.KinderTo2; });
                        if (this.day == "Half-day") {
                            var fil3 = firstFilter.filter(function (elem) { return elem.day == "Half-day"; });
                        }
                        if (this.day == "Full-day") {
                            var fil3 = firstFilter.filter(function (elem) { return elem.day == "Full-day"; });
                        }
                        fil3.map(function (elem) { return _this.filtered.push(elem); });
                    }
                }
                /*    if (this.sixth == true){
                     console.log("logged sixth")
                    if (this.second == true){
                      let first = this.items.filter(elem => elem.day == this.day)
                      let sec = this.items.filter(elem => elem.Gr3To5 == true)
                      let firstFilter = first.filter(elem => elem.KinderTo2)
                      let secFilter = sec.filter(elem => elem.KinderTo2)
                   
                      firstFilter.map(elem=>this.filtered.push(elem))
                      secFilter.map(elem=>this.filtered.push(elem))
                     }
            
            
                     if (this.third == true){
                      let first = this.items.filter(elem => elem.day == this.day)
                      let sec = this.items.filter(elem => elem.Gr6To8 == true)
                      let firstFilter = first.filter(elem => elem.KinderTo2)
                      let secFilter = sec.filter(elem => elem.KinderTo2)
                   
                      firstFilter.map(elem=>this.filtered.push(elem))
                      secFilter.map(elem=>this.filtered.push(elem))
                     }
                   }
                   */
            }
            else {
                console.log("internal not checked");
                console.log(this.day);
                if (this.fourth == true) {
                    var first = this.items.filter(function (elem) { return elem.OctoberToApril == true; });
                    if (this.day == "Half-day") {
                        console.log("fitering full days");
                        var fill1 = first.filter(function (elem) { return elem.day == "Half-day"; });
                        console.log(fill1);
                    }
                    if (this.day == "Full-day") {
                        (console.log("filtering half days"));
                        var fill1 = first.filter(function (elem) { return elem.day == "Full-day"; });
                    }
                    fill1.map(function (elem) { return _this.filtered.push(elem); });
                }
                if (this.fifth == true) {
                    var second = this.items.filter(function (elem) { return elem.MayToJune == true; });
                    if (this.day == "Half-day") {
                        var fill2 = second.filter(function (elem) { return elem.day == "Half-day"; });
                    }
                    if (this.day == "Full-day") {
                        var fill2 = second.filter(function (elem) { return elem.day == "Full-day"; });
                    }
                    fill2.map(function (elem) { return _this.filtered.push(elem); });
                }
                /*  if (this.sixth == true){
                  let second = this.items.filter(elem => elem.day == this.day)
                  second.map(elem=>this.filtered.push(elem))
                 } */
            }
        }
        else {
            if (this.second == false && this.third == false) {
                this.applyFilters();
            }
            else {
                console.log("removetrue");
                console.log(this.filtered);
                this.filtered = this.filtered.filter(function (elem) { return elem.KinderTo2 == false; });
            }
        }
    };
    BrowsePageComponent.prototype.removeFilter1 = function (property) {
        var _this = this;
        this.second = false;
        if (this.fourth == true || this.fifth == true || this.sixth == true) {
            this.filtered = this.filtered.filter(function (elem) { return elem.Gr3To5 == false; });
            console.log("external checked");
            // check if an internal checkbox has been selected
            if (this.first == true || this.third == true) {
                console.log("intenal checked");
                //go through all the checked boxes and filter
                if (this.fourth == true) {
                    if (this.first == true) {
                        console.log("first is checked");
                        var first = this.items.filter(function (elem) { return elem.OctoberToApril == true; });
                        var sec = first.filter(function (elem) { return elem.KinderTo2 == true; });
                        console.log(sec);
                        var firstFilter = sec.filter(function (elem) { return elem.Gr3To5; });
                        var secFilter = sec.filter(function (elem) { return elem.Gr3To5; });
                        if (this.day == "Half-day") {
                            var fil4 = firstFilter.filter(function (elem) { return elem.day == "Half-day"; });
                        }
                        if (this.day == "Full-day") {
                            var fil4 = firstFilter.filter(function (elem) { return elem.day == "Full-day"; });
                        }
                        fil4.map(function (elem) { return _this.filtered.push(elem); });
                    }
                    if (this.third == true) {
                        var first = this.items.filter(function (elem) { return elem.OctoberToApril == true; });
                        var sec = first.filter(function (elem) { return elem.Gr6To8 == true; });
                        var firstFilter = sec.filter(function (elem) { return elem.Gr3To5; });
                        var secFilter = sec.filter(function (elem) { return elem.Gr3To5; });
                        if (this.day == "Half-day") {
                            var fil5 = firstFilter.filter(function (elem) { return elem.day == "Half-day"; });
                        }
                        if (this.day == "Full-day") {
                            var fil5 = firstFilter.filter(function (elem) { return elem.day == "Full-day"; });
                        }
                        fil5.map(function (elem) { return _this.filtered.push(elem); });
                    }
                }
                if (this.fifth == true) {
                    if (this.first == true) {
                        var first = this.items.filter(function (elem) { return elem.MayToJune == true; });
                        var sec = first.filter(function (elem) { return elem.KinderTo2 == true; });
                        var firstFilter = sec.filter(function (elem) { return elem.Gr3To5; });
                        var secFilter = sec.filter(function (elem) { return elem.Gr3To5; });
                        if (this.day == "Half-day") {
                            var fil6 = firstFilter.filter(function (elem) { return elem.day == "Half-day"; });
                        }
                        if (this.day == "Full-day") {
                            var fil6 = firstFilter.filter(function (elem) { return elem.day == "Full-day"; });
                        }
                        fil6.map(function (elem) { return _this.filtered.push(elem); });
                    }
                    if (this.third == true) {
                        var first = this.items.filter(function (elem) { return elem.MayToJune == true; });
                        var sec = first.filter(function (elem) { return elem.Gr6To8 == true; });
                        var firstFilter = sec.filter(function (elem) { return elem.Gr3To5; });
                        var secFilter = sec.filter(function (elem) { return elem.Gr3To5; });
                        if (this.day == "Half-day") {
                            var fil7 = firstFilter.filter(function (elem) { return elem.day == "Half-day"; });
                        }
                        if (this.day == "Full-day") {
                            var fil7 = firstFilter.filter(function (elem) { return elem.day == "Full-day"; });
                        }
                        fil7.map(function (elem) { return _this.filtered.push(elem); });
                    }
                }
                /* if (this.sixth == true){
                 let third = this.items.filter(elem => elem.day == this.day)
         
                 let thirdFilter = third.filter(elem => elem.Gr3To5)
                 thirdFilter.map(elem=>this.filtered.push(elem))
                } */
            }
            else {
                if (this.fourth == true) {
                    var first = this.items.filter(function (elem) { return elem.OctoberToApril == true; });
                    if (this.day == "Half-day") {
                        console.log("fitering full days");
                        var fill1 = first.filter(function (elem) { return elem.day == "Half-day"; });
                        console.log(fill1);
                    }
                    if (this.day == "Full-day") {
                        (console.log("filtering half days"));
                        var fill1 = first.filter(function (elem) { return elem.day == "Full-day"; });
                    }
                    fill1.map(function (elem) { return _this.filtered.push(elem); });
                }
                if (this.fifth == true) {
                    var second = this.items.filter(function (elem) { return elem.MayToJune == true; });
                    if (this.day == "Half-day") {
                        var fill2 = second.filter(function (elem) { return elem.day == "Half-day"; });
                    }
                    if (this.day == "Full-day") {
                        var fill2 = second.filter(function (elem) { return elem.day == "Full-day"; });
                    }
                    fill2.map(function (elem) { return _this.filtered.push(elem); });
                }
                /*
                         if (this.sixth == true){
                          let second = this.items.filter(elem => elem.day == this.day)
                          second.map(elem=>this.filtered.push(elem))
                         } */
            }
        }
        else {
            if (this.first == false && this.third == false) {
                this.applyFilters();
            }
            else {
                console.log("removetrue");
                console.log(this.filtered);
                this.filtered = this.filtered.filter(function (elem) { return elem.Gr3To5 == false; });
            }
        }
    };
    BrowsePageComponent.prototype.removeFilter2 = function (property) {
        var _this = this;
        this.third = false;
        if (this.fourth == true || this.fifth == true || this.sixth == true) {
            this.filtered = this.filtered.filter(function (elem) { return elem.Gr6To8 == false; });
            console.log("external checked");
            // check if an internal checkbox has been selected
            if (this.second == true || this.first == true) {
                console.log("intenal checked");
                //go through all the checked boxes and filter
                if (this.fourth == true) {
                    if (this.first == true) {
                        var first = this.items.filter(function (elem) { return elem.OctoberToApril == true; });
                        var sec = first.filter(function (elem) { return elem.KinderTo2 == true; });
                        var firstFilter = sec.filter(function (elem) { return elem.Gr6To8; });
                        var secFilter = sec.filter(function (elem) { return elem.Gr6To8; });
                        if (this.day == "Half-day") {
                            var fil4 = firstFilter.filter(function (elem) { return elem.day == "Half-day"; });
                            var fils4 = secFilter.filter(function (elem) { return elem.day == "Half-day"; });
                        }
                        if (this.day == "Full-day") {
                            var fil4 = firstFilter.filter(function (elem) { return elem.day == "Full-day"; });
                            var fils4 = secFilter.filter(function (elem) { return elem.day == "Full-day"; });
                        }
                        fil4.map(function (elem) { return _this.filtered.push(elem); });
                    }
                    if (this.second == true) {
                        var first = this.items.filter(function (elem) { return elem.OctoberToApril == true; });
                        var sec = first.filter(function (elem) { return elem.Gr3To5 == true; });
                        var firstFilter = sec.filter(function (elem) { return elem.Gr6To8; });
                        var secFilter = sec.filter(function (elem) { return elem.Gr6To8; });
                        if (this.day == "Half-day") {
                            var fil4 = firstFilter.filter(function (elem) { return elem.day == "Half-day"; });
                            var fils4 = secFilter.filter(function (elem) { return elem.day == "Half-day"; });
                        }
                        if (this.day == "Full-day") {
                            var fil4 = firstFilter.filter(function (elem) { return elem.day == "Full-day"; });
                            var fils4 = secFilter.filter(function (elem) { return elem.day == "Full-day"; });
                        }
                        fil4.map(function (elem) { return _this.filtered.push(elem); });
                    }
                }
                if (this.fifth == true) {
                    if (this.first == true) {
                        var first = this.items.filter(function (elem) { return elem.MayToJune == true; });
                        var sec = first.filter(function (elem) { return elem.KinderTo2 == true; });
                        var firstFilter = sec.filter(function (elem) { return elem.Gr6To8; });
                        var secFilter = sec.filter(function (elem) { return elem.Gr6To8; });
                        if (this.day == "Half-day") {
                            var fil4 = firstFilter.filter(function (elem) { return elem.day == "Half-day"; });
                            var fils4 = secFilter.filter(function (elem) { return elem.day == "Half-day"; });
                        }
                        if (this.day == "Full-day") {
                            var fil4 = firstFilter.filter(function (elem) { return elem.day == "Full-day"; });
                            var fils4 = secFilter.filter(function (elem) { return elem.day == "Full-day"; });
                        }
                        fil4.map(function (elem) { return _this.filtered.push(elem); });
                    }
                    if (this.second == true) {
                        var first = this.items.filter(function (elem) { return elem.MayToJune == true; });
                        var sec = first.filter(function (elem) { return elem.Gr3To5 == true; });
                        var firstFilter = sec.filter(function (elem) { return elem.Gr6To8; });
                        var secFilter = sec.filter(function (elem) { return elem.Gr6To8; });
                        if (this.day == "Half-day") {
                            var fil4 = firstFilter.filter(function (elem) { return elem.day == "Half-day"; });
                            var fils4 = secFilter.filter(function (elem) { return elem.day == "Half-day"; });
                        }
                        if (this.day == "Full-day") {
                            var fil4 = firstFilter.filter(function (elem) { return elem.day == "Full-day"; });
                            var fils4 = secFilter.filter(function (elem) { return elem.day == "Full-day"; });
                        }
                        fil4.map(function (elem) { return _this.filtered.push(elem); });
                    }
                }
                /*
                       if (this.sixth == true){
                        let third = this.items.filter(elem => elem.day == this.day)
                
                        let thirdFilter = third.filter(elem => elem.Gr6To8)
                        thirdFilter.map(elem=>this.filtered.push(elem))
                       }
                       */
            }
            else {
                console.log("internal not checked");
                if (this.fourth == true) {
                    var first = this.items.filter(function (elem) { return elem.OctoberToApril == true; });
                    if (this.day == "Half-day") {
                        console.log("fitering full days");
                        var fill1 = first.filter(function (elem) { return elem.day == "Half-day"; });
                        console.log(fill1);
                    }
                    if (this.day == "Full-day") {
                        (console.log("filtering half days"));
                        var fill1 = first.filter(function (elem) { return elem.day == "Full-day"; });
                    }
                    fill1.map(function (elem) { return _this.filtered.push(elem); });
                }
                if (this.fifth == true) {
                    var second = this.items.filter(function (elem) { return elem.MayToJune == true; });
                    if (this.day == "Half-day") {
                        var fill2 = second.filter(function (elem) { return elem.day == "Half-day"; });
                    }
                    if (this.day == "Full-day") {
                        var fill2 = second.filter(function (elem) { return elem.day == "Full-day"; });
                    }
                    fill2.map(function (elem) { return _this.filtered.push(elem); });
                }
                /*
                         if (this.sixth == true){
                          let second = this.items.filter(elem => elem.day == this.day)
                          second.map(elem=>this.filtered.push(elem))
                         } */
            }
        }
        else {
            if (this.second == false && this.first == false) {
                this.applyFilters();
            }
            else {
                console.log("removetrue");
                console.log(this.filtered);
                this.filtered = this.filtered.filter(function (elem) { return elem.Gr6To8 == false; });
            }
        }
    };
    BrowsePageComponent.prototype.removeFilter3 = function (property) {
        var _this = this;
        this.fourth = false;
        // check if external was selected 
        if (this.first == true || this.second == true || this.third == true || this.sixth == true) {
            this.filtered = this.filtered.filter(function (elem) { return elem.OctoberToApril == false; });
            console.log("external checked");
            // check if an internal checkbox has been selected
            if (this.fifth == true) {
                console.log("intenal checked");
                //go through all the checked boxes and filter
                if (this.first == true) {
                    var first = this.items.filter(function (elem) { return elem.KinderTo2 == true; });
                    if (this.day == "Half-day") {
                        console.log("fitering full days");
                        var fill1 = first.filter(function (elem) { return elem.day == "Half-day"; });
                        console.log(fill1);
                    }
                    if (this.day == "Full-day") {
                        (console.log("filtering half days"));
                        var fill1 = first.filter(function (elem) { return elem.day == "Full-day"; });
                    }
                }
                if (this.second == true) {
                    var second = this.items.filter(function (elem) { return elem.Gr3To5 == true; });
                    if (this.day == "Half-day") {
                        var fill2 = second.filter(function (elem) { return elem.day == "Half-day"; });
                    }
                    if (this.day == "Full-day") {
                        var fill2 = second.filter(function (elem) { return elem.day == "Full-day"; });
                    }
                    fill2.map(function (elem) { return _this.filtered.push(elem); });
                }
                if (this.third == true) {
                    var third = this.items.filter(function (elem) { return elem.Gr6To8 == true; });
                    if (this.day == "Half-day") {
                        var fill3 = third.filter(function (elem) { return elem.day == "Half-day"; });
                    }
                    if (this.day == "Full-day") {
                        var fill3 = third.filter(function (elem) { return elem.day == "Full-day"; });
                    }
                    fill3.map(function (elem) { return _this.filtered.push(elem); });
                }
                /*  if (this.sixth == true){
                  let third = this.items.filter(elem => elem.day == this.day)
            
                  let thirdFilter = third.filter(elem => elem.MayToJune)
                  thirdFilter.map(elem=>this.filtered.push(elem))
                 }
             */
            }
            else {
                console.log("internal not checked");
                if (this.first == true) {
                    var first = this.items.filter(function (elem) { return elem.KinderTo2 == true; });
                    if (this.day == "Half-day") {
                        console.log("fitering full days");
                        var fill5 = first.filter(function (elem) { return elem.day == "Half-day"; });
                        console.log(fill5);
                    }
                    if (this.day == "Full-day") {
                        (console.log("filtering half days"));
                        var fill5 = first.filter(function (elem) { return elem.day == "Full-day"; });
                    }
                    fill5.map(function (elem) { return _this.filtered.push(elem); });
                }
                if (this.second == true) {
                    var second = this.items.filter(function (elem) { return elem.Gr3To5 == true; });
                    if (this.day == "Half-day") {
                        console.log("fitering full days");
                        var fill6 = second.filter(function (elem) { return elem.day == "Half-day"; });
                        console.log(fill6);
                    }
                    if (this.day == "Full-day") {
                        (console.log("filtering half days"));
                        var fill6 = second.filter(function (elem) { return elem.day == "Full-day"; });
                    }
                    fill6.map(function (elem) { return _this.filtered.push(elem); });
                }
                if (this.third == true) {
                    var third = this.items.filter(function (elem) { return elem.Gr6To8 == true; });
                    if (this.day == "Half-day") {
                        console.log("fitering full days");
                        var fill7 = third.filter(function (elem) { return elem.day == "Half-day"; });
                        console.log(fill1);
                    }
                    if (this.day == "Full-day") {
                        (console.log("filtering half days"));
                        var fill7 = third.filter(function (elem) { return elem.day == "Full-day"; });
                    }
                    fill7.map(function (elem) { return _this.filtered.push(elem); });
                }
                /* if (this.sixth == true){
                 let second = this.items.filter(elem => elem.day == this.day)
                 second.map(elem=>this.filtered.push(elem))
                }
          */
            }
        }
        else {
            if (this.fifth == false) {
                this.applyFilters();
            }
            else {
                console.log("removetrue");
                console.log(this.filtered);
                this.filtered = this.filtered.filter(function (elem) { return elem.OctoberToApril == false; });
            }
        }
    };
    BrowsePageComponent.prototype.removeFilter4 = function (property) {
        var _this = this;
        this.fifth = false;
        if (this.first == true || this.second == true || this.third == true || this.sixth == true) {
            this.filtered = this.filtered.filter(function (elem) { return elem.MayToJune == false; });
            // check if an internal checkbox has been selected
            if (this.fourth == true) {
                //go through all the checked boxes and filter
                if (this.first == true) {
                    var first = this.items.filter(function (elem) { return elem.KinderTo2 == true; });
                    if (this.day == "Half-day") {
                        console.log("fitering full days");
                        var fill1 = first.filter(function (elem) { return elem.day == "Half-day"; });
                        console.log(fill1);
                    }
                    if (this.day == "Full-day") {
                        (console.log("filtering half days"));
                        var fill1 = first.filter(function (elem) { return elem.day == "Full-day"; });
                    }
                }
                if (this.second == true) {
                    var second = this.items.filter(function (elem) { return elem.Gr3To5 == true; });
                    if (this.day == "Half-day") {
                        var fill2 = second.filter(function (elem) { return elem.day == "Half-day"; });
                    }
                    if (this.day == "Full-day") {
                        var fill2 = second.filter(function (elem) { return elem.day == "Full-day"; });
                    }
                    fill2.map(function (elem) { return _this.filtered.push(elem); });
                }
                if (this.third == true) {
                    var third = this.items.filter(function (elem) { return elem.Gr6To8 == true; });
                    if (this.day == "Half-day") {
                        var fill3 = third.filter(function (elem) { return elem.day == "Half-day"; });
                    }
                    if (this.day == "Full-day") {
                        var fill3 = third.filter(function (elem) { return elem.day == "Full-day"; });
                    }
                    fill3.map(function (elem) { return _this.filtered.push(elem); });
                }
                /*  if (this.sixth == true){
                  let third = this.items.filter(elem => elem.day == this.day)
          
                  let thirdFilter = third.filter(elem => elem.OctoberToApril)
                  thirdFilter.map(elem=>this.filtered.push(elem))
                 }
           */
            }
            else {
                console.log("internal not checked");
                if (this.first == true) {
                    var first = this.items.filter(function (elem) { return elem.KinderTo2 == true; });
                    if (this.day == "Half-day") {
                        console.log("fitering full days");
                        var fill5 = first.filter(function (elem) { return elem.day == "Half-day"; });
                        console.log(fill5);
                    }
                    if (this.day == "Full-day") {
                        (console.log("filtering half days"));
                        var fill5 = first.filter(function (elem) { return elem.day == "Full-day"; });
                    }
                    fill5.map(function (elem) { return _this.filtered.push(elem); });
                }
                if (this.second == true) {
                    var second = this.items.filter(function (elem) { return elem.Gr3To5 == true; });
                    if (this.day == "Half-day") {
                        console.log("fitering full days");
                        var fill6 = second.filter(function (elem) { return elem.day == "Half-day"; });
                        console.log(fill6);
                    }
                    if (this.day == "Full-day") {
                        (console.log("filtering half days"));
                        var fill6 = second.filter(function (elem) { return elem.day == "Full-day"; });
                    }
                    fill6.map(function (elem) { return _this.filtered.push(elem); });
                }
                if (this.third == true) {
                    var third = this.items.filter(function (elem) { return elem.Gr6To8 == true; });
                    if (this.day == "Half-day") {
                        console.log("fitering full days");
                        var fill7 = third.filter(function (elem) { return elem.day == "Half-day"; });
                        console.log(fill1);
                    }
                    if (this.day == "Full-day") {
                        (console.log("filtering half days"));
                        var fill7 = third.filter(function (elem) { return elem.day == "Full-day"; });
                    }
                    fill7.map(function (elem) { return _this.filtered.push(elem); });
                }
                /*  if (this.sixth == true){
                  let second = this.items.filter(elem => elem.day == this.day)
                  second.map(elem=>this.filtered.push(elem))
                 } */
            }
        }
        else {
            if (this.fourth == false) {
                this.applyFilters();
            }
            else {
                console.log("removetrue");
                console.log(this.filtered);
                this.filtered = this.filtered.filter(function (elem) { return elem.MayToJune == false; });
            }
        }
    };
    /*  filterExact1(property: string, rule: any) {
       this.filters[property] = val => val == rule
       this.applyFilters1()
     }
   
     filterExact2(property: string, rule: any) {
       this.filters[property] = val => val == rule
       this.applyFilters2()
     } */
    BrowsePageComponent.prototype.reset = function () {
        jquery__WEBPACK_IMPORTED_MODULE_4__('.cbox').prop('checked', false);
        jquery__WEBPACK_IMPORTED_MODULE_4__('.rad').prop('checked', false);
        this.removeFilter("day");
        this.removeFilter("KinderTo2");
        this.removeFilter("Gr3To5");
        this.removeFilter("Gr6To8");
        this.first = false;
        this.second = false;
        this.third = false;
        this.fourth = false;
        this.fifth = false;
        this.filtered = this.items;
    };
    BrowsePageComponent.prototype.navigateToDesignPage = function () {
        this.router.navigate(["/DesignPage"]);
    };
    BrowsePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-browse-page',
            template: __webpack_require__(/*! ./browse-page.component.html */ "./src/pages/browse-page/browse-page.component.html"),
            styles: [__webpack_require__(/*! ./browse-page.component.scss */ "./src/pages/browse-page/browse-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], BrowsePageComponent);
    return BrowsePageComponent;
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
        localStorage.setItem('confirm', JSON.stringify(true));
        localStorage.setItem('submit', JSON.stringify(false));
        localStorage.setItem('design', JSON.stringify(false));
        localStorage.setItem('landing', JSON.stringify(false));
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

module.exports = "\n\n\n<div>\n  <app-header></app-header>\n</div>\n\n<div class=\"my-container\">\n  <div class=\"box-margin\">\n <div class=\"mytitle\">\n   DESIGN YOUR ITINERARY\n </div>\n <div class=\"description\">\n   Build your itinerary...your way! Choose from our programs for each timeslot of your visit\n </div>\n </div>\n\n\n<div class=\"pad\">\n<div class=\"sub-header\">\n  FIRST AVE. GRADE 3 CLASS - ITINERARY 1\n</div>\n</div>\n\n<div class=\"box-margin\" >\n  <div  style=\"font-weight:bold; font-size:25px; margin-top:2%;\">\n<span class=\"activity-title\" > \nITINERARY\n</span>\n<span *ngIf=\"!set\" class=\"reset\">\n    <a href=\"javascript:void(0)\" (click)=\"reset()\">Reset</a>\n</span>\n  </div>\n<div *ngIf=\"!set\">\n    <div *ngIf='!isEdit' class=\"activity\">\n        <app-activity *ngFor=\"let item of items | async\" [item]=\"item\" [time]=\"time\" (index)=\"populate($event)\" (activity)=\"getActivity($event)\" [set]=\"set\" (remove)=\"remove($event)\"></app-activity>\n       </div>\n       \n       <div *ngIf='isEdit' class=\"activity\">\n        <app-activity *ngFor=\"let item of items\" [selectedItem]=\"item\" [time]=\"time\"  [swap]='swap' [display]='display' [showTools]='showTools' [edited]='edited' [set]=\"set\" [selected]='selected' (index)=\"populate($event)\" (activity)=\"getActivity($event)\" (remove)=\"remove($event)\"></app-activity>\n       </div>  \n</div>\n<div *ngIf=\"set\">\n    <div *ngIf='!isEdit' class=\"activity\">\n        <app-activity *ngFor=\"let itinerary of itineraries\" [itinerary]=\"itinerary\" [item]=\"item\" [time]=\"time\" (index)=\"populate($event)\" (activity)=\"getActivity($event)\" [set]=\"set\" (remove)=\"remove($event)\"></app-activity>\n       </div>\n       \n       <div *ngIf='isEdit' class=\"activity\">\n        <app-activity *ngFor=\"let itinerary of itineraries\" [itinerary]=\"itinerary\" [selectedItem]=\"item\" [time]=\"time\"  [swap]='swap' [display]='display' [showTools]='showTools' [edited]='edited' [set]=\"set\" [selected]='selected' (index)=\"populate($event)\" (activity)=\"getActivity($event)\" (remove)=\"remove($event)\"></app-activity>\n       </div>  \n</div>\n</div>\n</div>\n<div style=\"width:100%; margin-top:3%;\">\n  <app-sticky-footer [count]=\"count\" [page]=\"page\" [set]=\"set\"></app-sticky-footer>\n</div>"

/***/ }),

/***/ "./src/pages/design-page/design-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/pages/design-page/design-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-container {\n  max-width: 1455px;\n  margin: auto; }\n\n.mytitle {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-weight: bold;\n  font-size: 3rem;\n  color: #4a4a4a; }\n\n.description {\n  font-family: Arial;\n  font-size: 1rem;\n  color: #4a4a4a; }\n\n.box-margin {\n  margin-left: 2.5%; }\n\n.pad {\n  background-color: #e5e5e5;\n  height: 145px;\n  margin-top: 2%;\n  padding: 1.5%; }\n\n.sub-header {\n  background-color: white;\n  font-size: 2rem;\n  color: #4a4a4a;\n  height: 100px;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  padding: 1.5%; }\n\n.activity-title {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-weight: bold;\n  font-size: 25px; }\n\n.activity {\n  width: 100%; }\n\n.reset {\n  font-weight: bold;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-size: 20px;\n  float: right;\n  margin-right: 2%; }\n\n.stick {\n  position: fixed;\n  bottom: 0;\n  width: 100%; }\n\n.bg {\n  height: 90px;\n  border-style: solid; }\n\na:link {\n  text-decoration: none;\n  color: #4a4a4a; }\n\n@media only screen and (max-width: 1470px) {\n  .my-container {\n    max-width: 100%;\n    margin: auto; }\n  .box-margin {\n    margin-left: 2.5%;\n    margin-right: 2.5%; } }\n"

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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
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
        this.filters = {};
    }
    DesignPageComponent.prototype.ngOnInit = function () {
        localStorage.setItem('design', JSON.stringify(true));
        localStorage.setItem('submit', JSON.stringify(false));
        localStorage.setItem('landing', JSON.stringify(false));
        localStorage.setItem('confirm', JSON.stringify(false));
        // retreive the set variable from local storage
        this.set = JSON.parse(localStorage.getItem("set"));
        this.dates[0] = 570;
        // set date number in localstorage
        localStorage.setItem('dates', JSON.stringify(this.dates));
        this.edit = JSON.parse(localStorage.getItem('edit'));
        this.checkEdit();
        this.filterExact('grades', JSON.parse(localStorage.getItem("filter")));
        // load the itinerary from local storage if using pre-defined itinerary
        this.itineraries = JSON.parse(localStorage.getItem("itinerary"));
    };
    DesignPageComponent.prototype.checkEdit = function () {
        var _this = this;
        if (!this.edit) {
            this.items = this.db.collection('/activities', function (ref) { return ref.orderBy('order'); }).snapshotChanges().map(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    console.log(id);
                    _this.applyFilters();
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
    DesignPageComponent.prototype.applyFilters = function () {
        console.log('action called');
        this.filtered = lodash__WEBPACK_IMPORTED_MODULE_4__["filter"](this.items, lodash__WEBPACK_IMPORTED_MODULE_4__["conforms"](this.filters));
    };
    DesignPageComponent.prototype.filterExact = function (property, rule) {
        this.filters[property] = function (val) { return val == rule; };
        this.applyFilters();
    };
    DesignPageComponent.prototype.populate = function (event) {
        this.select = event;
        if (event.order != 0) {
            this.dates[event.order] = this.dates[event.order - 1] + this.duration;
            var next = this.dates[event.order + 1];
            while (next != null) {
                this.dates[event.order + 1] = this.dates[event.order] + this.activities[event.oder + 1].length;
                next = next + 1;
            }
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

/***/ "./src/pages/itinerary-page/itinerary-page.component.html":
/*!****************************************************************!*\
  !*** ./src/pages/itinerary-page/itinerary-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <app-main-header></app-main-header>\n \n<div class=\"my-container\">\n  <div class=\"my-bg\" >\n    <img src=\"http://res.cloudinary.com/dqhtbev7t/image/upload/v1530731962/IMG2018-0032-0215-Dm.jpg\" class=\"img-resize\"> \n\n  </div>\n  </div>\n\n  <div *ngFor=\"let item of items | async\">\n<div *ngIf=\"checkId(item.id)\" class=\"content\">\n\n<div id=\"print\" class=\"side-bar\" >\n<div class=\"side-title\">\n SCHEDULE\n</div>\n<div *ngFor=\"let activity of item.activities\" class=\"brief\" > \n  <span class=\"brief1\">{{activity.time}}</span>\n<span class=\"brief2\">{{activity.name}}</span>\n</div>\n</div>\n\n\n<div class=\"activities\">\n<div class=\"row\">\n  <div class=\"left\" style=\"visibility:hidden\" (click)=\"back()\">\n    <div class=\"arrow-left\"></div>\n  </div>\n\n <div class=\"back-title\">View your Itinerary</div>\n</div>\n  <div style=\"position:relative;\">\n      <img src=\"../../assets/images/photo3.jpeg\" alt=\"Random first slide\" class=\"img-responsive banner\">\n      <div class=\"btext\">\n      <div class=\"btext1\">{{item.grade}}</div>\n      <div class=\"btext2\">{{item.name}}</div>\n      <div class=\"btext3\">{{item.year}}</div>\n      </div>\n      <div class=\"btext4\"> This is a modified version of the <span style=\"font-weight:bold\">{{item.name}}</span> itinerary</div>\n    </div>\n    <div class=\"link\" >\n\n      <div class=\"urlbox\">\n        <div class=\"url\">{{url}}</div>\n        <div ><button class=\"url-btn\" ngxClipboard [cbContent]=\"url\">COPY URL</button></div>\n    </div>\n\n\n    <div class=\"printbox\">\n\n        <div>\n            <button class=\"print\" (click)=\"printDiv()\">PRINT</button>  \n             </div>\n             <div style=\"margin-right:13%;margin-left:2%\"><button class=\"download\">DOWNLOAD PDF</button></div>\n    </div>\n    </div>\n<app-activity-display *ngFor=\"let activity of item.activities\" [itinerary]=\"activity\" [showSwap]=\"showSwap\" ></app-activity-display>\n  \n        </div>\n\n        \n</div>\n</div>\n\n\n\n\n\n\n</div>\n<div>\n  <app-main-footer></app-main-footer>\n</div>\n\n"

/***/ }),

/***/ "./src/pages/itinerary-page/itinerary-page.component.scss":
/*!****************************************************************!*\
  !*** ./src/pages/itinerary-page/itinerary-page.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-container {\n  margin: auto; }\n\n.img-resize {\n  height: 350px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.left {\n  padding-top: 1.5%;\n  padding-bottom: 1.5%;\n  padding-left: 1.5%;\n  padding-right: 1.5%;\n  background-color: #8a8d8a;\n  margin-bottom: 2%;\n  width: 4.5%;\n  border-radius: 50%;\n  cursor: pointer; }\n\n.side-title {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-size: 1.5rem;\n  color: #4a4a4a;\n  margin-left: 2%;\n  margin-bottom: 6%; }\n\n.brief {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 2%;\n  width: 90%; }\n\n.brief1 {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-size: 1rem;\n  color: #8a8d8a;\n  margin-left: 3%;\n  width: 50px; }\n\n.brief2 {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-size: 1rem;\n  color: #4a4a4a;\n  width: 90%;\n  margin-left: 7%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.back-title {\n  float: left;\n  margin-left: 220px;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-size: 1.5rem;\n  color: #4a4a4a; }\n\n.arrow-left {\n  width: 0;\n  height: 0;\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n  border-right: 5px solid #fff;\n  margin: auto; }\n\n.banner {\n  width: 100%;\n  height: 300px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.btext {\n  position: absolute;\n  color: #fff;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  bottom: 23%;\n  left: 3%;\n  font-size: 2rem;\n  background-color: rgba(0, 0, 0, 0.2); }\n\n.btext4 {\n  position: absolute;\n  color: #fff;\n  background: #0099FF;\n  opacity: 0.9;\n  font-style: italic;\n  font-weight: lighter;\n  font-size: 0.8rem;\n  width: 100%;\n  padding: 2%;\n  bottom: 0; }\n\n.btext5 {\n  position: absolute;\n  color: #fff;\n  background: #00ff22;\n  opacity: 0.9;\n  font-style: italic;\n  font-weight: lighter;\n  font-size: 0.8rem;\n  width: 18%;\n  padding: 1%;\n  right: 0;\n  bottom: 53px;\n  cursor: pointer; }\n\n.btext1 {\n  font-family: Arial;\n  font-size: 1rem; }\n\n.btext3 {\n  font-size: 1rem; }\n\n.my-bg1 {\n  position: relative;\n  bottom: 120px;\n  margin-bottom: -120px; }\n\n.my-bg {\n  position: relative;\n  bottom: 120px;\n  z-index: -5;\n  margin-bottom: -120px; }\n\n.h {\n  position: absolute;\n  top: 250px;\n  left: 25%;\n  font-size: 12px;\n  color: #fff;\n  max-width: 80%; }\n\n.plan {\n  position: absolute;\n  top: 250px;\n  left: 25%;\n  font-size: 12px;\n  color: #fff;\n  max-width: 80%;\n  display: inline-block; }\n\n.arrow-right {\n  position: absolute;\n  top: 253px;\n  left: 28%;\n  display: inline-block;\n  width: 10%;\n  height: 0;\n  margin-left: 4%;\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n  border-left: 5px solid white; }\n\n.my-header {\n  position: absolute;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  top: 250px;\n  left: 35%;\n  text-align: center;\n  color: #fff; }\n\n.h1 {\n  position: absolute;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  top: 295px;\n  left: 25%;\n  text-align: center;\n  color: #fff; }\n\n.h2 {\n  margin-bottom: 35%;\n  font-family: Arial;\n  font-weight: normal;\n  font-size: 1.5rem; }\n\n.h3 {\n  position: absolute;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  top: 300px;\n  left: 50%;\n  text-align: center;\n  color: #fff; }\n\n.card-title {\n  color: #4a4a4a;\n  font-weight: bold;\n  font-size: 1.5rem;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial; }\n\n.pag /deep/ .ngx-pagination .current {\n  background: #4a4a4a; }\n\n.pag /deep/ .ngx-pagination li {\n  border-style: solid;\n  border-width: 1px;\n  border-color: #e5e5e5;\n  margin-right: 0px;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial; }\n\n.margin {\n  margin-right: 3%;\n  margin-bottom: 3%;\n  height: 230px;\n  width: 47%;\n  font-size: 13px; }\n\n.pagination-lg {\n  border: none; }\n\n/* .empty-card{\n    height:360px; \n    width:32%;\n    font-size:13px;\n} */\n\n.boxes {\n  width: 90%;\n  margin-bottom: 2px;\n  margin-left: 3%; }\n\n.first {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial; }\n\n.selection {\n  margin-top: 10%; }\n\n.ftext {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-size: 1rem;\n  margin-bottom: 1%;\n  margin-left: 3%;\n  color: #8a8d8a; }\n\n.my-content {\n  padding-bottom: 15px;\n  margin-bottom: 20px; }\n\n.pointer {\n  width: 0;\n  height: 0;\n  border-top: 8px solid transparent;\n  border-left: 12px solid white;\n  border-bottom: 8px solid transparent;\n  float: left;\n  margin-left: 20px;\n  margin-top: 12px; }\n\n.plan1 {\n  float: left;\n  font-size: 12px;\n  font-weight: bold;\n  text-transform: uppercase;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial; }\n\n.plan2 {\n  float: left;\n  font-weight: bold;\n  font-size: 3rem;\n  color: #4a4a4a;\n  text-transform: uppercase;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial; }\n\n.plan3 {\n  font-size: 0.8rem;\n  margin-bottom: 2%;\n  font-weight: bold;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial; }\n\n.text {\n  color: #fff; }\n\ninput[type=checkbox]:checked {\n  background: green; }\n\n.selection {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial; }\n\n.text1 {\n  font-size: 3rem;\n  margin-bottom: 8%;\n  font-weight: bold;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial; }\n\n.text2 {\n  font-size: 1.7rem;\n  margin-bottom: 1%; }\n\n.text3 {\n  position: absolute;\n  top: 20%;\n  left: 22%;\n  max-width: 55%;\n  padding: 15px;\n  text-align: center;\n  margin-bottom: 20px;\n  font-size: 1rem;\n  font-weight: lighter;\n  clear: both;\n  font-family: Arial; }\n\n.content {\n  max-width: 1300px;\n  padding-top: 2%;\n  margin: auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n\n.side-bar {\n  display: flex;\n  flex-direction: column;\n  width: 28%;\n  height: 1500px;\n  border-color: #e5e5e5;\n  border-right-width: 1px;\n  border-style: solid; }\n\n.itineraries {\n  width: 70%;\n  padding: 0.9%; }\n\n.itineraries2 {\n  width: 70%;\n  padding: 0.9%; }\n\n.link {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 70px;\n  margin-bottom: 5%;\n  background-color: #e5e5e5; }\n\n.activities {\n  width: 65%; }\n\n.urlbox {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  width: 54%; }\n\n.url {\n  background: #fff;\n  width: 73%;\n  margin-top: 14px;\n  padding: 3%;\n  height: 45px;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-size: 0.8rem;\n  color: #8a8d8a;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.url-btn {\n  background: red;\n  width: 150%;\n  margin-top: 14px;\n  padding: 3%;\n  height: 45px;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-size: 0.8rem;\n  color: #fff;\n  cursor: pointer; }\n\n.printbox {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  width: 30%; }\n\n.print {\n  background: #4a4a4a;\n  width: 170%;\n  margin-top: 14px;\n  padding: 3%;\n  height: 45px;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-size: 0.8rem;\n  color: #fff;\n  cursor: pointer;\n  margin-right: 2%; }\n\n.download {\n  background: #4a4a4a;\n  width: 130%;\n  margin-top: 14px;\n  padding: 3%;\n  height: 45px;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-size: 0.8rem;\n  color: #fff;\n  cursor: pointer; }\n\n.filter {\n  margin-left: 0%;\n  margin-top: 2%; }\n\n.filtertext {\n  font-weight: bold;\n  margin-top: 8px; }\n\n.filter2 {\n  margin-bottom: 2%;\n  margin-left: 0.1%; }\n\n.grade {\n  font-weight: bold;\n  margin-top: 8px; }\n\n.grades {\n  width: 15%;\n  margin-left: 1%;\n  height: 10px; }\n\n.select {\n  font-weight: bold;\n  font-size: 13px; }\n\n.date {\n  width: 15%;\n  margin-left: 1%; }\n\n.day {\n  width: 15%;\n  margin-left: 1%;\n  height: 10px; }\n\n.show {\n  width: 15%;\n  margin-left: 1%; }\n\n.build {\n  color: red; }\n\n.point {\n  color: #fff; }\n\n.ti {\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  font-size: 2rem;\n  position: relative;\n  color: #4a4a4a; }\n\n.my-btn {\n  background: #4a4a4a;\n  cursor: pointer;\n  display: inline;\n  width: 200px;\n  font-size: 0.8rem;\n  font-weight: bold;\n  padding-left: 50px;\n  padding-right: 50px;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n\n.my-btn1 {\n  background: #fff;\n  width: 200px;\n  cursor: pointer;\n  display: inline;\n  color: #8a8d8a;\n  font-size: 0.8rem;\n  font-weight: bold;\n  padding-left: 50px;\n  padding-right: 50px;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n\n@media only screen and (max-width: 1470px) {\n  .my-container {\n    max-width: 100%;\n    margin: auto; }\n  .card-title {\n    padding: 15px;\n    color: #4a4a4a;\n    font-weight: bold;\n    font-size: 1.5rem;\n    font-family: \"futura-pt\", \"Helvetica Neue\", Arial; }\n  .my-content {\n    padding: 15px;\n    margin-bottom: 20px; }\n  /* .pointer{\n    width:0;\n    height:0; \n    border-top:8px solid transparent; \n    border-left: 12px solid #808080; \n    border-bottom: 8px solid transparent; \n    float:left; \n    margin-left:20px; \n    margin-top:12px;\n    }\n    .plan1{\n    float:left; \n    font-size:12px; \n    font-weight:bold;\n    font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n    }\n    .plan2{\n    float:left; \n    font-weight:bold;\n    font-size:3rem;\n    color:#4a4a4a;\n    font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n    }\n    .plan3{\n    float:left; \n    font-size:25px; \n    font-weight:bold;\n    color:#8a8d8a;\n    font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n    }\n    .text1{\n    color:#4a4a4a; \n    margin-top:2%;\n    padding:15px;\n    }\n    .text2{\n    \n    padding-bottom:0;\n    margin-bottom: 20px;\n    font-size:3rem;\n    font-weight:bold;\n    clear: both;\n    color:#4a4a4a;\n    font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n    }\n    .text3{\n    \n    padding-bottom:0;\n    margin-bottom: 20px;\n    font-size:1rem;\n    font-weight:lighter;\n    clear: both;\n    color:#4a4a4a;\n    font-family: Arial;\n    }\n    .filter{\n        margin-left:1.5%; \n        margin-top:2%;  \n        } */ }\n\n@media only screen and (max-width: 1300px) {\n  /*   \n.grades{\n    width:26%;\n     margin-left:1%;\n }\n .date{\n width:26%; margin-left:1%;\n }\n .day{\n width:26%;margin-left:1%;\n }  \n \n .show{\n    width:12%; \n    margin-left:46%;\n    margin-top:1%;\n    } */ }\n\n@media only screen and (max-width: 1220px) {\n  /*  .margin{\n        margin-bottom:5%;\n        height:380px;\n        width:49%;\n        font-size:13px;\n       \n    }\n\n    .empty-card{\n        height:380px; \n        width:49%;\n        font-size:13px;\n    \n       \n    } */ }\n\n@media only screen and (max-width: 1024px) {\n  /* .plan1{\n        float:left; \n        font-size:12px; \n        font-weight:bold;\n     \n        }\n        .plan2{\n        float:left; \n        font-weight:bold;\n        font-size:1.5rem;\n        color:#4a4a4a;\n    \n        }\n        .plan3{\n        float:left; \n        font-size:1rem; \n        font-weight:bold;\n        color:#8a8d8a;\n      \n        }\n        .pointer{\n            width:0;\n            height:0; \n            border-top:8px solid transparent; \n            border-left: 8px solid #808080; \n            border-bottom: 5px solid transparent; \n            float:left; \n            margin-left:10px; \n            margin-top:6px;\n            }\n       \n        .text2{\n        padding-bottom:0;\n        margin-bottom: 10px;\n        font-size:1.5rem;\n        clear: both;\n        color:#4a4a4a;\n\n        }\n        .text3{\n        padding-bottom:0;\n        margin-bottom: 20px;\n        font-size:1rem;\n        font-weight:lighter;\n        clear: both;\n        color:#4a4a4a;\n     \n        } */ }\n\n@media only screen and (max-width: 1006px) {\n  /* .img-resize{\n        height:250px;\n        width:100%;\n        object-fit:cover;\n      }\n      \n\n    .filtertext{\n        font-weight:bold; \n        margin-top:8px;\n        margin-left:37%;\n        }\n    .grades{\n        width:95%;\n         margin-left:1%;\n         \n     }\n     .date{\n     width:95%; \n     margin-left:1%;\n     margin-top:4%;\n    \n     }\n     .day{\n     width:95%;\n     margin-left:1%;\n     margin-top:1.5%;\n  \n     }  \n     \n     .show{\n        width:95%; \n        margin-left:1%;\n        margin-top:4%;\n  \n        } */ }\n\n@media only screen and (max-width: 1000px) {\n  /*  .margin{\n        margin-bottom:3%;\n        height:380px;\n        width:49%;\n        font-size:13px;\n       \n    }\n\n    .empty-card{\n        height:380px; \n        width:49%;\n        font-size:13px;\n    \n    }\n */ }\n\n@media only screen and (max-width: 850px) {\n  /* .margin{\n        margin-bottom:5%;\n        height:380px;\n        width:49%;\n        font-size:13px;\n       \n    }\n\n    .empty-card{\n        height:380px; \n        width:49%;\n        font-size:13px;\n    \n       \n    }\n    .grades{\n        width:95%;\n         margin-left:1%;\n         \n     }\n     .date{\n     width:95%; \n     margin-left:1%;\n     margin-top:4.2%;\n    \n     }\n     .day{\n     width:95%;\n     margin-left:1%;\n     margin-top:1.5%;\n  \n     }  \n     \n     .show{\n        width:95%; \n        margin-left:1%;\n        margin-top:4%;\n  \n        } */ }\n\n@media only screen and (max-width: 750px) {\n  /*   .margin{\n        margin-bottom:8%;\n        height:380px;\n        width:49%;\n        font-size:13px;\n       \n    }\n\n    .empty-card{\n        height:380px; \n        width:49%;\n        font-size:13px;\n    \n       \n    }\n    .grades{\n        width:95%;\n         margin-left:1%;\n         \n     }\n     .date{\n     width:95%; \n     margin-left:1%;\n     margin-top:5%;\n    \n     }\n     .day{\n     width:95%;\n     margin-left:1%;\n     margin-top:1.5%;\n  \n     }  \n     \n     .show{\n        width:95%; \n        margin-left:1%;\n        margin-top:5%;\n  \n        }\n      */ }\n\n@media only screen and (max-width: 650px) {\n  /*    .margin{\n        margin-bottom:10%;\n        height:380px;\n        width:50%;\n        font-size:13px;\n       \n    }\n\n    .empty-card{\n        height:380px; \n        width:49%;\n        font-size:13px;\n    \n       \n    }\n\n    .grades{\n        width:95%;\n         margin-left:1%;\n         \n     }\n     .date{\n     width:95%; \n     margin-left:1%;\n     margin-top:5.5%;\n    \n     }\n     .day{\n     width:95%;\n     margin-left:1%;\n     margin-top:1.5%;\n  \n     }  \n     \n     .show{\n        width:95%; \n        margin-left:1%;\n        margin-top:5.5%;\n  \n        } */ }\n\n@media only screen and (max-width: 600px) {\n  /* .img-resize{\n        height:200px;\n        width:100%;\n        object-fit:cover;\n      }\n      \n\n    .margin{\n        margin-bottom:8%;\n        height:380px;\n        width:95%;\n        font-size:13px;\n       \n    }\n\n    .empty-card{\n        height:380px; \n        width:95%;\n        font-size:13px;\n        margin-bottom:3%;\n       \n    }\n\n    .filtertext{\n        font-weight:bold; \n        margin-top:8px;\n        margin-left:1%;\n        }\n\n        .grades{\n            width:95%;\n             margin-left:1%;\n             \n         }\n         .date{\n         width:95%; \n         margin-left:1%;\n         margin-top:6%;\n        \n         }\n         .day{\n         width:95%;\n         margin-left:1%;\n         margin-top:1.5%;\n      \n         }  \n         \n         .show{\n            width:95%; \n            margin-left:1%;\n            margin-top:6%;\n      \n            }\n       */ }\n\n/* @media only screen and (max-width: 480px) {\n    .margin{\n        margin-bottom:8%;\n        height:380px;\n        width:98%;\n        font-size:13px;\n       \n    }\n\n    .empty-card{\n        height:380px; \n        width:98%;\n        font-size:13px;\n        margin-bottom:3%;\n       \n    }\n\n    .filtertext{\n        font-weight:bold; \n        margin-top:8px;\n        margin-left:0%;\n        }\n\n        .grades{\n            width:92%;\n             margin-left:1%;\n             \n         }\n         .date{\n         width:92%; \n         margin-left:1%;\n         margin-top:7%;\n        \n         }\n         .day{\n         width:92%;\n         margin-left:1%;\n         margin-top:1.5%;\n      \n         }  \n         \n         .show{\n            width:92%; \n            margin-left:1%;\n            margin-top:7%;\n      \n            }\n      \n    \n  } */\n\n@media only screen and (max-width: 414px) {\n  /* .margin{\n        margin-bottom:12%;\n        height:380px;\n        width:95%;\n        font-size:13px;\n       \n    }\n\n    .plan1{\n        float:left; \n        font-size:12px; \n        font-weight:bold;\n        }\n        .plan2{\n        float:left; \n        margin-left:10px;\n        font-weight:bold; font-size:28px;\n        }\n        .plan3{\n        float:left; \n        font-size:0px; \n        font-weight:bold; \n        color:\"#808080\";\n        }\n\n    .empty-card{\n        height:380px; \n        width:92%;\n        font-size:8px;\n        margin-bottom:8%;\n       \n    }\n\n\n    .text1{\n\n        margin-left:1%; \n        margin-top:2%;\n        }\n        .text2{\n        font-weight:bold; \n        font-size:25px;\n        margin-left:1%; \n        }\n        .text3{\n        font-size:12px; \n        margin-left:1%;\n        width:80%; \n        margin-top:0.8%;\n        \n        }\n\n        .grades{\n            width:92%;\n             margin-left:1%;\n             \n         }\n         .date{\n         width:92%; \n         margin-left:1%;\n         margin-top:9%;\n         \n        \n         }\n         .day{\n         width:92%;\n         margin-left:1%;\n         margin-top:2.7%;\n      \n         }  \n         \n         .show{\n            width:92%; \n            margin-left:1%;\n            margin-top:9%;\n      \n            }\n          \n */ }\n\n@media only screen and (max-width: 375px) {\n  /* .margin{\n        margin-bottom:12%;\n        height:380px;\n        width:95%;\n        font-size:13px;\n       \n    }\n\n    .plan1{\n        float:left; \n        font-size:12px; \n        font-weight:bold;\n        }\n        .plan2{\n        float:left; \n        font-weight:bold; font-size:25px;\n        }\n        .plan3{\n        float:left; \n        font-size:0px; \n        font-weight:bold; \n        color:\"#808080\";\n        }\n\n    .empty-card{\n        height:380px; \n        width:92%;\n        font-size:8px;\n        margin-bottom:8%;\n       \n    }\n\n\n    .text1{\n\n        margin-left:1%;\n        margin-top:2%;\n        }\n        .text2{\n         margin-left:1%; \n        font-weight:bold; \n        font-size:25px;\n        }\n        .text3{\n        margin-left:1%; \n        font-size:12px; \n        width:80%; \n        margin-top:0.8%;\n        \n        }\n\n        .grades{\n            width:92%;\n             margin-left:1%;\n             \n         }\n         .date{\n         width:92%; \n         margin-left:1%;\n         margin-top:9%;\n         \n        \n         }\n         .day{\n         width:92%;\n         margin-left:1%;\n         margin-top:2.2%;\n      \n         }  \n         \n         .show{\n            width:92%; \n            margin-left:1%;\n            margin-top:9%;\n      \n            } */ }\n\n@media only screen and (max-width: 320px) {\n  /* .margin{\n        margin-bottom:12%;\n        height:380px;\n        width:95%;\n        font-size:13px;\n       \n    }\n\n    .plan1{\n        float:left; \n        font-size:12px; \n        font-weight:bold;\n        }\n        .plan2{\n        float:left; \n        font-weight:bold; font-size:25px;\n        }\n        .plan3{\n        float:left; \n        font-size:0px; \n        font-weight:bold; \n        color:\"#808080\";\n        }\n\n    .empty-card{\n        height:380px; \n        width:92%;\n        font-size:8px;\n        margin-bottom:8%;\n       \n    }\n\n\n    .text1{\n\n        margin-left:1%;\n        margin-top:2%;\n        }\n        .text2{\n        font-weight:bold; \n        font-size:25px;\n        margin-left:1%;\n        }\n        .text3{\n        font-size:12px; \n        width:80%; \n        margin-top:0.8%;\n        margin-left:1%;\n        \n        }\n\n        .grades{\n            width:92%;\n            \n             \n         }\n         .date{\n         width:92%; \n         margin-top:9%;\n         \n        \n         }\n         .day{\n         width:92%;\n         margin-top:1.5%;\n      \n         }  \n         \n         .show{\n            width:92%; \n\n            margin-top:9%;\n      \n            } */ }\n"

/***/ }),

/***/ "./src/pages/itinerary-page/itinerary-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/pages/itinerary-page/itinerary-page.component.ts ***!
  \**************************************************************/
/*! exports provided: ItineraryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItineraryPageComponent", function() { return ItineraryPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
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



var ItineraryPageComponent = /** @class */ (function () {
    function ItineraryPageComponent(router, route, db) {
        this.router = router;
        this.route = route;
        this.db = db;
    }
    ItineraryPageComponent.prototype.ngOnInit = function () {
        this.rId = this.route.snapshot.params['id'];
        console.log(this.rId);
        this.items = this.db.collection('/modified_itineraries').snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
        this.url = "http://planning-tool.herokuapp.com/ItineraryPage/" + this.rId;
    };
    ItineraryPageComponent.prototype.checkId = function (id) {
        if (id == this.rId) {
            return true;
        }
        else {
            return false;
        }
    };
    ItineraryPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-itinerary-page',
            template: __webpack_require__(/*! ./itinerary-page.component.html */ "./src/pages/itinerary-page/itinerary-page.component.html"),
            styles: [__webpack_require__(/*! ./itinerary-page.component.scss */ "./src/pages/itinerary-page/itinerary-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], ItineraryPageComponent);
    return ItineraryPageComponent;
}());



/***/ }),

/***/ "./src/pages/landing-page/landing-page.component.html":
/*!************************************************************!*\
  !*** ./src/pages/landing-page/landing-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <app-main-header></app-main-header>\n  <div class=\"my-header\"><div class=\"h1\"> PLAN A SCHOOL TRIP</div>\n  \n  <div class=\"h2\"> PLAN YOUR DAY AT THE MUSEUM</div>\n  <div class=\"h3\"> <div class=\"my-btn\" (click)=\"navigateToBrowsePage()\">BROWSE ITINERARIES</div><div class=\"my-btn\">CREATE YOUR OWN</div></div>\n\n</div>\n\n<div class=\"my-container\">\n  <div class=\"my-bg\" >\n    <img src=\"http://res.cloudinary.com/dqhtbev7t/image/upload/v1530731962/IMG2018-0032-0215-Dm.jpg\" class=\"img-resize\"> \n\n\n  \n  \n  </div>\n\n\n\n  </div>\n  \n</div>\n<div>\n  <app-main-footer></app-main-footer>\n</div>\n\n\n \n\n"

/***/ }),

/***/ "./src/pages/landing-page/landing-page.component.scss":
/*!************************************************************!*\
  !*** ./src/pages/landing-page/landing-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-container {\n  margin: auto; }\n\n.img-resize {\n  height: 850px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.my-bg {\n  position: relative;\n  bottom: 120px;\n  z-index: -5;\n  margin-bottom: -120px; }\n\n.my-header {\n  position: absolute;\n  font-family: \"futura-pt\", \"Helvetica Neue\", Arial;\n  top: 250px;\n  left: 35%;\n  text-align: center;\n  color: #fff; }\n\n.h1 {\n  margin-bottom: 10%;\n  font-size: 3rem;\n  cursor: pointer; }\n\n.h2 {\n  margin-bottom: 35%;\n  font-family: Arial;\n  font-weight: normal;\n  font-size: 1.5rem; }\n\n.my-btn {\n  background: red;\n  cursor: pointer;\n  display: inline;\n  margin: 5px;\n  font-size: 0.7rem;\n  font-weight: bold;\n  padding: 2.5%; }\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
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
    function LandingPageComponent(modalService, db, router, route) {
        this.modalService = modalService;
        this.db = db;
        this.router = router;
        this.route = route;
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent.prototype.navigateToBrowsePage = function () {
        this.router.navigate(["/BrowsePage"]);
    };
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/pages/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.scss */ "./src/pages/landing-page/landing-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
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

module.exports = "<div>\n  <app-header></app-header>\n</div>\n\n<div class=\"container-fluid\">\n  <div style=\"margin-left:2%; margin-top:2%;\">\n <div style=\" font-weight:bold; font-size:50px;\">\n   SUBMIT YOUR ITINERARY\n </div>\n <div style=\"font-size:17px; width:55%\">\n  <span style=\"color:red\">IMPORTANT: This is NOT a reservation.</span>\n  Submit your itenerary to the Museum call centre here, and \n  we will review and contact you within XX hours to follow up and confirm your booking\n </div>\n </div>\n</div>\n\n<div style=\"margin-top:3%;\">\n  <app-submit-form></app-submit-form>\n</div>\n\n<div>\n  <app-sticky-footer></app-sticky-footer>\n</div>"

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
        localStorage.setItem('submit', JSON.stringify(true));
        localStorage.setItem('landing', JSON.stringify(false));
        localStorage.setItem('design', JSON.stringify(false));
        localStorage.setItem('confirm', JSON.stringify(false));
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