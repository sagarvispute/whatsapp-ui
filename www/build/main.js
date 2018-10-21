webpackJsonp([8],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CameraPage = (function () {
    function CameraPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CameraPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad CameraPage');
    };
    return CameraPage;
}());
CameraPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-camera',template:/*ion-inline-start:"F:\@app\@git\whatsapp-ui\src\pages\camera\camera.html"*/'Camera page'/*ion-inline-end:"F:\@app\@git\whatsapp-ui\src\pages\camera\camera.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], CameraPage);

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_data_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatsPage = (function () {
    function ChatsPage(navCtrl, navParams, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = data;
        this.contactlist = this.service.contacts;
    }
    ChatsPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad ChatsPage');
    };
    ChatsPage.prototype.detail = function (e) {
        console.log('clickde' + e);
    };
    ChatsPage.prototype.viewPic = function (id) {
        this.service.contactChatDetailPage(id);
    };
    ChatsPage.prototype.chatDetail = function (id) {
        this.service.contactDPPage(id);
    };
    return ChatsPage;
}());
ChatsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chats',template:/*ion-inline-start:"F:\@app\@git\whatsapp-ui\src\pages\chats\chats.html"*/'<ion-list class="scrollable-list">\n\n  <ion-item *ngFor="let contact of contactlist">\n\n    <ion-thumbnail item-start>\n\n      <div class="round-img" (click)="viewPic(contact.id)">\n\n        <img src="https://en.bidaway.com/img/no_image_user_profile.png">\n\n      </div>\n\n    </ion-thumbnail>\n\n    <div (click)="chatDetail(contact.id)">\n\n      <h2>{{contact.name}}</h2>\n\n      <!--<p>Rohit: just posted a...</p>-->\n\n      <p>{{contact.number}}</p>\n\n      <div class="list-info" item-end>\n\n        <span>7:42 PM</span>\n\n        <div><span class="badge">1</span></div>\n\n      </div>\n\n    </div>\n\n  </ion-item>\n\n\n\n  <!--<ion-item>\n\n    <ion-thumbnail item-start>\n\n      <div class="round-img">\n\n        <img src="../../assets/images/picture.jpg">\n\n      </div>\n\n    </ion-thumbnail>\n\n    <h2>Collage Mates</h2>\n\n    <p>Avinash: My message </p>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n      <div class="round-img">\n\n        <img src="../../assets/images/picture.jpg">\n\n      </div>\n\n    </ion-thumbnail>\n\n    <h2>Ghostbusters</h2>\n\n    <p>Ivan Reitman • 1984</p>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n        <div class="round-img">\n\n          <img src="../../assets/images/picture.jpg">\n\n        </div>\n\n    </ion-thumbnail>\n\n    <h2>Batman</h2>\n\n    <p>Tim Burton • 1988</p>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n      <div class="round-img">\n\n        <img src="../../assets/images/picture.jpg">\n\n      </div>\n\n    </ion-thumbnail>\n\n    <h2>Back to the Future</h2>\n\n    <p>Robert Zemeckis • 1985</p>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n      <div class="round-img">\n\n        <img src="../../assets/images/picture.jpg">\n\n      </div>\n\n    </ion-thumbnail>\n\n    <h2>The Empire Strikes Back</h2>\n\n    <p>Irvin Kershner • 1980</p>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n      <div class="round-img">\n\n        <img src="../../assets/images/picture.jpg">\n\n      </div>\n\n    </ion-thumbnail>\n\n    <h2>The Terminator</h2>\n\n    <p>James Cameron • 1984</p>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n      <div class="round-img">\n\n        <img src="../../assets/images/picture.jpg">\n\n      </div>\n\n    </ion-thumbnail>\n\n    <h2>BV Katta </h2>\n\n    <p>Rohit: just posted a...</p>\n\n    <div class="list-info" item-end>\n\n      <span>7:42 PM</span>\n\n      <div><span class="badge">1</span></div>\n\n    </div>\n\n  </ion-item>\n\n  \n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n      <div class="round-img">\n\n        <img src="../../assets/images/picture.jpg">\n\n      </div>\n\n    </ion-thumbnail>\n\n    <h2>Collage Mates</h2>\n\n    <p>Avinash: My message </p>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n      <div class="round-img">\n\n        <img src="../../assets/images/picture.jpg">\n\n      </div>\n\n    </ion-thumbnail>\n\n    <h2>Ghostbusters</h2>\n\n    <p>Ivan Reitman • 1984</p>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n        <div class="round-img">\n\n          <img src="../../assets/images/picture.jpg">\n\n        </div>\n\n    </ion-thumbnail>\n\n    <h2>Batman</h2>\n\n    <p>Tim Burton • 1988</p>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n      <div class="round-img">\n\n        <img src="../../assets/images/picture.jpg">\n\n      </div>\n\n    </ion-thumbnail>\n\n    <h2>Back to the Future</h2>\n\n    <p>Robert Zemeckis • 1985</p>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n      <div class="round-img">\n\n        <img src="../../assets/images/picture.jpg">\n\n      </div>\n\n    </ion-thumbnail>\n\n    <h2>The Empire Strikes Back</h2>\n\n    <p>Irvin Kershner • 1980</p>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n      <div class="round-img">\n\n        <img src="../../assets/images/picture.jpg">\n\n      </div>\n\n    </ion-thumbnail>\n\n    <h2>The Terminator</h2>\n\n    <p>James Cameron • 1984</p>\n\n  </ion-item>-->\n\n</ion-list>'/*ion-inline-end:"F:\@app\@git\whatsapp-ui\src\pages\chats\chats.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_data_service__["a" /* dataService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_data_service__["a" /* dataService */]])
], ChatsPage);

//# sourceMappingURL=chats.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatusPage = (function () {
    function StatusPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StatusPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad StatusPage');
    };
    return StatusPage;
}());
StatusPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-status',template:/*ion-inline-start:"F:\@app\@git\whatsapp-ui\src\pages\status\status.html"*/'<ion-list class="scrollable-list" item-end>\n\n  <ion-item class="status-button">\n\n    <ion-thumbnail item-start>\n\n        <ion-icon name="add-circle"></ion-icon>\n\n    </ion-thumbnail>\n\n    <h2>My Status</h2>\n\n    <p>Tap to add satus update</p>\n\n  </ion-item>\n\n\n\n  <ion-list-header>\n\n    Recent updates\n\n  </ion-list-header>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n      <div class="round-img">\n\n        <img src="https://en.bidaway.com/img/no_image_user_profile.png">\n\n      </div>\n\n    </ion-thumbnail>\n\n    <h2>Rohit Pillai</h2>\n\n    <p>(2) Just Now</p>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n      <div class="round-img">\n\n        <img src="https://en.bidaway.com/img/no_image_user_profile.png">\n\n      </div>\n\n    </ion-thumbnail>\n\n    <h2>Shashank</h2>\n\n    <p>Today, 6:27 PM</p>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n      <div class="round-img">\n\n        <img src="https://en.bidaway.com/img/no_image_user_profile.png">\n\n      </div>\n\n    </ion-thumbnail>\n\n    <h2>Shashank</h2>\n\n    <p>Today, 7:00 PM</p>\n\n  </ion-item>\n\n\n\n  <ion-list-header>\n\n    Viewed updates\n\n  </ion-list-header>\n\n  \n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n      <div class="round-img">\n\n        <img src="https://en.bidaway.com/img/no_image_user_profile.png">\n\n      </div>\n\n    </ion-thumbnail>\n\n    <h2>Rohit Pillai</h2>\n\n    <p>(2) Just Now</p>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n      <div class="round-img">\n\n        <img src="https://en.bidaway.com/img/no_image_user_profile.png">\n\n      </div>\n\n    </ion-thumbnail>\n\n    <h2>Shashank</h2>\n\n    <p>Today, 6:27 PM</p>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n      <div class="round-img">\n\n        <img src="https://en.bidaway.com/img/no_image_user_profile.png">\n\n      </div>\n\n    </ion-thumbnail>\n\n    <h2>Shashank</h2>\n\n    <p>Today, 7:00 PM</p>\n\n  </ion-item>\n\n</ion-list>'/*ion-inline-end:"F:\@app\@git\whatsapp-ui\src\pages\status\status.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], StatusPage);

//# sourceMappingURL=status.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { ChatsPage } from '../chats/chats';
//import { StatusPage } from '../status/status';
//import { CallsPage } from '../calls/calls';
var SearchPage = (function () {
    function SearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pagerParameter = navParams.get('pagePara');
    }
    SearchPage.prototype.ionViewDidLoad = function () {
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"F:\@app\@git\whatsapp-ui\src\pages\search\search.html"*/'<!--\n\n  Generated template for the SearchPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <!--<ion-title>search</ion-title>-->\n\n    <ion-searchbar (ionInput)="getItems($event)"  [(ngModel)]="listitme" ></ion-searchbar>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <page-chats *ngIf="pagerParameter==1"></page-chats>\n\n  <page-status *ngIf="pagerParameter==2"></page-status>\n\n  <page-calls *ngIf="pagerParameter==3"></page-calls>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\@app\@git\whatsapp-ui\src\pages\search\search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"F:\@app\@git\whatsapp-ui\src\pages\settings\settings.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>settings</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list class="scrollable-list">\n\n    <ion-item no-lines>\n\n      <ion-thumbnail item-start>\n\n        <div class="round-img">\n\n          <img src="http://www.pagdandilab.in/images/team/sagar.jpg">\n\n        </div>\n\n      </ion-thumbnail>\n\n      <h2>Saggy Designer</h2>\n\n      <p>Lorem Ipsum is simply dummy text of the asdas...</p>\n\n    </ion-item>\n\n\n\n    <div class="setting-list">\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <ion-icon name="md-key"></ion-icon>\n\n        </ion-thumbnail>\n\n        <h2>Account</h2>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <ion-icon name="md-chatboxes"></ion-icon>\n\n        </ion-thumbnail>\n\n        <h2>Chats</h2>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <ion-icon name="md-notifications"></ion-icon>\n\n        </ion-thumbnail>\n\n        <h2>Notifications</h2>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <ion-icon name="md-pie"></ion-icon>\n\n        </ion-thumbnail>\n\n        <h2>Data usage</h2>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <ion-icon name="md-people"></ion-icon>\n\n        </ion-thumbnail>\n\n        <h2>Contacts</h2>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <ion-icon name="md-help"></ion-icon>\n\n        </ion-thumbnail>\n\n        <h2>Help</h2>\n\n      </ion-item>\n\n    </div>\n\n  </ion-list> \n\n</ion-content>\n\n'/*ion-inline-end:"F:\@app\@git\whatsapp-ui\src\pages\settings\settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddStatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AddStatusPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AddStatusPage = (function () {
    function AddStatusPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddStatusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddStatusPage');
    };
    return AddStatusPage;
}());
AddStatusPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-status',template:/*ion-inline-start:"F:\@app\@git\whatsapp-ui\src\pages\add-status\add-status.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>add-status</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  Add status on this profile\n\n</ion-content>\n\n'/*ion-inline-end:"F:\@app\@git\whatsapp-ui\src\pages\add-status\add-status.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], AddStatusPage);

//# sourceMappingURL=add-status.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatDetailPage = (function () {
    function ChatDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatDetailPage');
    };
    return ChatDetailPage;
}());
ChatDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chat-detail',template:/*ion-inline-start:"F:\@app\@git\whatsapp-ui\src\pages\chat-detail\chat-detail.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>chat-detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\@app\@git\whatsapp-ui\src\pages\chat-detail\chat-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], ChatDetailPage);

//# sourceMappingURL=chat-detail.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-status/add-status.module": [
		296,
		7
	],
	"../pages/camera/camera.module": [
		291,
		6
	],
	"../pages/chat-detail/chat-detail.module": [
		297,
		5
	],
	"../pages/chats/chats.module": [
		292,
		4
	],
	"../pages/search/search.module": [
		294,
		3
	],
	"../pages/settings/settings.module": [
		295,
		2
	],
	"../pages/status/status.module": [
		293,
		1
	],
	"../pages/view-pic/view-pic.module": [
		298,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic2_super_tabs__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__camera_camera__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chats_chats__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__status_status__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__calls_calls__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_popup_popup__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_search__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__settings_settings__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__add_call_add_call__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__add_chat_add_chat__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__add_status_add_status__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__chat_detail_chat_detail__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
 //AfterViewInit













var HomePage = (function () {
    function HomePage(navCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.camera = __WEBPACK_IMPORTED_MODULE_3__camera_camera__["a" /* CameraPage */];
        this.chats = __WEBPACK_IMPORTED_MODULE_4__chats_chats__["a" /* ChatsPage */];
        this.status = __WEBPACK_IMPORTED_MODULE_5__status_status__["a" /* StatusPage */];
        this.calls = __WEBPACK_IMPORTED_MODULE_6__calls_calls__["a" /* CallsPage */];
        this.slideIndex = 1;
        this.optList = [
            {
                name: 'New group',
                link: 'new-group'
            }, {
                name: 'New broadcast',
                link: 'new-group'
            }, {
                name: 'WhatsApp Web',
                link: 'new-group'
            }, {
                name: 'Starred messages',
                link: 'new-group'
            }, {
                name: 'Settings',
                link: 'new-group'
            }
        ];
    }
    HomePage.prototype.presentPopover = function () {
        var self = this;
        var indexCnt = this.superTabs.selectedTabIndex;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__components_popup_popup__["a" /* popupPage */], {
            page: indexCnt,
            list: this.optList,
            ac: function () {
                self.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__settings_settings__["a" /* SettingsPage */]);
            },
            showConfirm: function () {
                popover.dismiss();
            }
        });
        popover.present({
            ev: indexCnt
        });
        self.popoverVar = popover;
    };
    HomePage.prototype.slideToIndex = function (index) {
        this.superTabs.slideTo(index);
    };
    HomePage.prototype.pageSearch = function (ev) {
        this.searchData(this.superTabs.selectedTabIndex);
    };
    HomePage.prototype.searchData = function (e) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__search_search__["a" /* SearchPage */], { pagePara: e });
    };
    HomePage.prototype.onTabSelect = function (ev) {
        this.slideIndex = ev.index;
        console.log('Index: ' + ev.index, 'Unique ID: ' + ev.id);
        if (ev.index == 2) {
            this.optList = [
                {
                    name: 'Status privacy',
                    link: 'new-group'
                }, {
                    name: 'Settings',
                    link: 'new-group'
                }
            ];
        }
        else if (ev.index == 3) {
            this.optList = [
                {
                    name: 'Clear call log',
                    link: 'new-group'
                }, {
                    name: 'Settings',
                    link: 'new-group'
                }
            ];
        }
        console.log('Tab change');
    };
    HomePage.prototype.addChat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__add_chat_add_chat__["a" /* AddChatPage */]);
        console.log(0);
    };
    HomePage.prototype.addStatus = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__add_status_add_status__["a" /* AddStatusPage */]);
    };
    HomePage.prototype.addCall = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__add_call_add_call__["a" /* AddCallPage */]);
    };
    HomePage.prototype.chatDetailPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__chat_detail_chat_detail__["a" /* ChatDetailPage */]);
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic2_super_tabs__["a" /* SuperTabs */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic2_super_tabs__["a" /* SuperTabs */])
], HomePage.prototype, "superTabs", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"F:\@app\@git\whatsapp-ui\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>WhatsApp</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button clear large (click)="pageSearch($event)"><ion-icon name="search"></ion-icon></button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button clear icon-only large (click)="presentPopover($event)"><ion-icon name="more"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <super-tabs toolbarColor="light" selectedTabIndex="1" indicatorColor="light" toolbarBackground="secondary" (tabSelect)="onTabSelect($event)">\n\n    <super-tab [root]="camera" title="" icon="camera"></super-tab>\n\n    <super-tab [root]="chats" title="CHATS"></super-tab>\n\n    <super-tab [root]="status" title="STATUS"></super-tab>\n\n    <super-tab [root]="calls" title="CALLS"></super-tab>\n\n  </super-tabs>\n\n  \n\n  <ion-fab right bottom>\n\n    <!--<button ion-fab color="secondary" (click)="addChat()"><ion-icon name="md-chatboxes"></ion-icon></button>-->\n\n    <button ion-fab color="secondary" (click)="addChat()" *ngIf="slideIndex == 1"><ion-icon name="md-chatboxes"></ion-icon></button>\n\n    <button ion-fab color="secondary" (click)="addStatus()" *ngIf="slideIndex == 2"><ion-icon name="md-add-circle"></ion-icon></button>\n\n    <button ion-fab color="secondary" (click)="addCall()" *ngIf="slideIndex == 3"><ion-icon name="md-call"></ion-icon></button>\n\n  </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\@app\@git\whatsapp-ui\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* PopoverController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_data_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CallsPage = (function () {
    function CallsPage(navCtrl, navParams, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = data;
        this.contactlist = this.service.contacts;
    }
    CallsPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad CallsPage');
    };
    return CallsPage;
}());
CallsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-calls',template:/*ion-inline-start:"F:\@app\@git\whatsapp-ui\src\pages\calls\calls.html"*/'<ion-list class="scrollable-list">\n\n    <ion-item *ngFor="let contact of contactlist">\n\n      <ion-thumbnail item-start>\n\n        <div class="round-img">\n\n          <img src="https://en.bidaway.com/img/no_image_user_profile.png">\n\n        </div>\n\n      </ion-thumbnail>\n\n      <h2>{{contact.name}}</h2>\n\n      <p><ion-icon name="ios-trending-up"></ion-icon> (2) Just Now</p>\n\n      <button ion-button clear item-end large><ion-icon name="md-call"></ion-icon></button>\n\n    </ion-item>\n\n  \n\n    <!--<ion-item>\n\n        <ion-thumbnail item-start>\n\n          <div class="round-img">\n\n            <img src="../../assets/images/picture.jpg">\n\n          </div>\n\n        </ion-thumbnail>\n\n        <h2>Rohit Pillai</h2>\n\n        <p><ion-icon name="ios-trending-down"></ion-icon> (2) Just Now</p>\n\n        <button ion-button clear item-end large><ion-icon name="md-call"></ion-icon></button>\n\n      </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <div class="round-img">\n\n          <img src="../../assets/images/picture.jpg">\n\n        </div>\n\n      </ion-thumbnail>\n\n      <h2>Rohit Pillai</h2>\n\n      <p><ion-icon name="ios-trending-down"></ion-icon> (2) Just Now</p>\n\n      <button ion-button clear item-end large><ion-icon name="md-call"></ion-icon></button>\n\n    </ion-item>-->\n\n  </ion-list>'/*ion-inline-end:"F:\@app\@git\whatsapp-ui\src\pages\calls\calls.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_data_service__["a" /* dataService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_data_service__["a" /* dataService */]])
], CallsPage);

//# sourceMappingURL=calls.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_popup_popup__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_data_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddCallPage = (function () {
    function AddCallPage(navCtrl, navParams, data, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.toggled = false;
        this.CompSearch = '';
        this.optList = [
            {
                name: 'Invite a friend',
                link: 'new-group'
            }, {
                name: 'Contacts',
                link: 'new-group'
            }, {
                name: 'Refresh',
                link: 'new-group'
            }, {
                name: 'Help',
                link: 'new-group'
            }
        ];
        this.service = data;
        this.contactlist = this.service.contacts;
        this.toggled = false;
    }
    AddCallPage.prototype.toggle = function () {
        this.toggled = this.toggled ? false : true;
        this.CompSearch = '';
    };
    AddCallPage.prototype.closeSearch = function () { this.toggle(); };
    AddCallPage.prototype.presentPopover = function (myEvent) {
        var self = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_popup_popup__["a" /* popupPage */], {
            list: this.optList,
            ac: function () {
            },
            showConfirm: function () {
                popover.dismiss();
            }
        });
        popover.present({
            ev: myEvent
        });
        self.popoverVar = popover;
    };
    AddCallPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddCallPage');
    };
    return AddCallPage;
}());
AddCallPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-call',template:/*ion-inline-start:"F:\@app\@git\whatsapp-ui\src\pages\add-call\add-call.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Select Contact</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button clear large *ngIf="!toggled" (click)="toggle()"><ion-icon name="search"></ion-icon></button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button clear large (click)="addChat($event)"><ion-icon name="md-person-add"></ion-icon></button>\n\n    </ion-buttons>\n\n    <button ion-button clear *ngIf="toggled" large class="closeSearch" (click)="closeSearch($event)"><ion-icon name="arrow-back"></ion-icon></button>\n\n    <ion-searchbar *ngIf="toggled" class="ComponentSearch" [(ngModel)]="CompSearch" (ionInput)="searchThis($event)" (ionCancel)="cancelSearch($event)" (ionClear) = "cancelSearch($event)" [showCancelButton]="true">\n\n    </ion-searchbar>\n\n    <ion-buttons end>\n\n      <button ion-button clear icon-only large (click)="presentPopover($event)"><ion-icon name="more"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list class="scrollable-list">\n\n    <ion-item *ngFor="let contact of contactlist">\n\n      <ion-thumbnail item-start>\n\n        <div class="round-img">\n\n          <img src="https://en.bidaway.com/img/no_image_user_profile.png">\n\n        </div>\n\n      </ion-thumbnail>\n\n      <h2>{{contact.name}}</h2>\n\n      <p>Mobile</p>\n\n      <button ion-button clear item-end large><ion-icon name="md-call"></ion-icon></button>\n\n      <button ion-button clear item-end large><ion-icon name="md-videocam"></ion-icon></button>\n\n    </ion-item>\n\n\n\n    <!--<ion-item>\n\n      <ion-thumbnail item-start>\n\n        <div class="round-img">\n\n          <img src="https://en.bidaway.com/img/no_image_user_profile.png">\n\n        </div>\n\n      </ion-thumbnail>\n\n      <h2>Sai Kumar</h2>\n\n      <p>Mobile</p>\n\n      <button ion-button clear item-end large><ion-icon name="md-call"></ion-icon></button>\n\n      <button ion-button clear item-end large><ion-icon name="md-videocam"></ion-icon></button>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <div class="round-img">\n\n          <img src="https://en.bidaway.com/img/no_image_user_profile.png">\n\n        </div>\n\n      </ion-thumbnail>\n\n      <h2>Sai Kumar</h2>\n\n      <p>Mobile</p>\n\n      <button ion-button clear item-end large><ion-icon name="md-call"></ion-icon></button>\n\n      <button ion-button clear item-end large><ion-icon name="md-videocam"></ion-icon></button>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <div class="round-img">\n\n          <img src="https://en.bidaway.com/img/no_image_user_profile.png">\n\n        </div>\n\n      </ion-thumbnail>\n\n      <h2>Sai Kumar</h2>\n\n      <p>Mobile</p>\n\n      <button ion-button clear item-end large><ion-icon name="md-call"></ion-icon></button>\n\n      <button ion-button clear item-end large><ion-icon name="md-videocam"></ion-icon></button>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <div class="round-img">\n\n          <img src="https://en.bidaway.com/img/no_image_user_profile.png">\n\n        </div>\n\n      </ion-thumbnail>\n\n      <h2>Sai Kumar</h2>\n\n      <p>Mobile</p>\n\n      <button ion-button clear item-end large><ion-icon name="md-call"></ion-icon></button>\n\n      <button ion-button clear item-end large><ion-icon name="md-videocam"></ion-icon></button>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <div class="round-img">\n\n          <img src="https://en.bidaway.com/img/no_image_user_profile.png">\n\n        </div>\n\n      </ion-thumbnail>\n\n      <h2>Sai Kumar</h2>\n\n      <p>Mobile</p>\n\n      <button ion-button clear item-end large><ion-icon name="md-call"></ion-icon></button>\n\n      <button ion-button clear item-end large><ion-icon name="md-videocam"></ion-icon></button>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <div class="round-img">\n\n          <img src="https://en.bidaway.com/img/no_image_user_profile.png">\n\n        </div>\n\n      </ion-thumbnail>\n\n      <h2>Sai Kumar</h2>\n\n      <p>Mobile</p>\n\n      <button ion-button clear item-end large><ion-icon name="md-call"></ion-icon></button>\n\n      <button ion-button clear item-end large><ion-icon name="md-videocam"></ion-icon></button>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <div class="round-img">\n\n          <img src="https://en.bidaway.com/img/no_image_user_profile.png">\n\n        </div>\n\n      </ion-thumbnail>\n\n      <h2>Sai Kumar</h2>\n\n      <p>Mobile</p>\n\n      <button ion-button clear item-end large><ion-icon name="md-call"></ion-icon></button>\n\n      <button ion-button clear item-end large><ion-icon name="md-videocam"></ion-icon></button>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <div class="round-img">\n\n          <img src="https://en.bidaway.com/img/no_image_user_profile.png">\n\n        </div>\n\n      </ion-thumbnail>\n\n      <h2>Sai Kumar</h2>\n\n      <p>Mobile</p>\n\n      <button ion-button clear item-end large><ion-icon name="md-call"></ion-icon></button>\n\n      <button ion-button clear item-end large><ion-icon name="md-videocam"></ion-icon></button>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <div class="round-img">\n\n          <img src="https://en.bidaway.com/img/no_image_user_profile.png">\n\n        </div>\n\n      </ion-thumbnail>\n\n      <h2>Sai Kumar</h2>\n\n      <p>Mobile</p>\n\n      <button ion-button clear item-end large><ion-icon name="md-call"></ion-icon></button>\n\n      <button ion-button clear item-end large><ion-icon name="md-videocam"></ion-icon></button>\n\n    </ion-item>-->\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\@app\@git\whatsapp-ui\src\pages\add-call\add-call.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__app_data_service__["a" /* dataService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__app_data_service__["a" /* dataService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* PopoverController */]])
], AddCallPage);

//# sourceMappingURL=add-call.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_popup_popup__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_data_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddChatPage = (function () {
    function AddChatPage(navCtrl, navParams, data, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.toggled = false;
        this.CompSearch = '';
        this.optList = [
            {
                name: 'Invite a friend',
                link: 'new-group'
            }, {
                name: 'Contacts',
                link: 'new-group'
            }, {
                name: 'Refresh',
                link: 'new-group'
            }, {
                name: 'Help',
                link: 'new-group'
            }
        ];
        this.service = data;
        this.contactlist = this.service.contacts;
        this.toggled = false;
    }
    AddChatPage.prototype.toggle = function () {
        this.toggled = this.toggled ? false : true;
        this.CompSearch = '';
    };
    AddChatPage.prototype.closeSearch = function () { this.toggle(); };
    AddChatPage.prototype.presentPopover = function (myEvent) {
        var self = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_popup_popup__["a" /* popupPage */], {
            list: this.optList,
            ac: function () {
            },
            showConfirm: function () {
                popover.dismiss();
            }
        });
        popover.present({
            ev: myEvent
        });
        self.popoverVar = popover;
    };
    AddChatPage.prototype.addChat = function (n) { };
    AddChatPage.prototype.searchContact = function (n) { };
    AddChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddChatPage');
    };
    return AddChatPage;
}());
AddChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-chat',template:/*ion-inline-start:"F:\@app\@git\whatsapp-ui\src\pages\add-chat\add-chat.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <ion-title>Select Contact chat</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button clear large *ngIf="!toggled" (click)="toggle()"><ion-icon name="search"></ion-icon></button>\n\n      </ion-buttons>\n\n      <ion-buttons end>\n\n        <button ion-button clear large (click)="addChat($event)"><ion-icon name="md-person-add"></ion-icon></button>\n\n      </ion-buttons>\n\n      <button ion-button clear *ngIf="toggled" large class="closeSearch" (click)="closeSearch($event)"><ion-icon name="arrow-back"></ion-icon></button>\n\n      <ion-searchbar *ngIf="toggled" class="ComponentSearch" [(ngModel)]="CompSearch" (ionInput)="searchThis($event)" (ionCancel)="cancelSearch($event)" (ionClear) = "cancelSearch($event)" [showCancelButton]="true">\n\n      </ion-searchbar>\n\n      <ion-buttons end>\n\n        <button ion-button clear icon-only large (click)="presentPopover($event)"><ion-icon name="more"></ion-icon></button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-list class="scrollable-list">\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <ion-icon name="md-person-add"></ion-icon>\n\n        </ion-thumbnail>\n\n        <h2>New group</h2>\n\n      </ion-item>\n\n\n\n      <ion-item *ngFor="let contact of contactlist">\n\n        <ion-thumbnail item-start>\n\n          <div class="round-img">\n\n            <img src="https://en.bidaway.com/img/no_image_user_profile.png">\n\n          </div>\n\n        </ion-thumbnail>\n\n        <h2>{{contact.name}}</h2>\n\n        <p>Mobile</p>\n\n        <span item-end>\n\n            Mobile\n\n        </span>\n\n      </ion-item>\n\n\n\n      <!--<ion-item>\n\n        <ion-thumbnail item-start>\n\n          <div class="round-img">\n\n            <img src="../../assets/images/picture.jpg">\n\n          </div>\n\n        </ion-thumbnail>\n\n        <h2>Sai Kumar</h2>\n\n        <p>Mobile</p>\n\n        <span item-end>\n\n            Mobile\n\n        </span>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <div class="round-img">\n\n            <img src="../../assets/images/picture.jpg">\n\n          </div>\n\n        </ion-thumbnail>\n\n        <h2>Sai Kumar</h2>\n\n        <p>Mobile</p>\n\n        <span item-end>\n\n            Mobile\n\n        </span>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <div class="round-img">\n\n            <img src="../../assets/images/picture.jpg">\n\n          </div>\n\n        </ion-thumbnail>\n\n        <h2>Sai Kumar</h2>\n\n        <p>Mobile</p>\n\n        <span item-end>\n\n            Mobile\n\n        </span>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <div class="round-img">\n\n            <img src="../../assets/images/picture.jpg">\n\n          </div>\n\n        </ion-thumbnail>\n\n        <h2>Sai Kumar</h2>\n\n        <p>Mobile</p>\n\n        <span item-end>\n\n            Mobile\n\n        </span>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <div class="round-img">\n\n            <img src="../../assets/images/picture.jpg">\n\n          </div>\n\n        </ion-thumbnail>\n\n        <h2>Sai Kumar</h2>\n\n        <p>Mobile</p>\n\n        <span item-end>\n\n            Mobile\n\n        </span>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <div class="round-img">\n\n            <img src="../../assets/images/picture.jpg">\n\n          </div>\n\n        </ion-thumbnail>\n\n        <h2>Sai Kumar</h2>\n\n        <p>Mobile</p>\n\n        <span item-end>\n\n            Mobile\n\n        </span>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <div class="round-img">\n\n            <img src="../../assets/images/picture.jpg">\n\n          </div>\n\n        </ion-thumbnail>\n\n        <h2>Sai Kumar</h2>\n\n        <p>Mobile</p>\n\n        <span item-end>\n\n            Mobile\n\n        </span>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <div class="round-img">\n\n            <img src="../../assets/images/picture.jpg">\n\n          </div>\n\n        </ion-thumbnail>\n\n        <h2>Sai Kumar</h2>\n\n        <p>Mobile</p>\n\n        <span item-end>\n\n            Mobile\n\n        </span>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <div class="round-img">\n\n            <img src="../../assets/images/picture.jpg">\n\n          </div>\n\n        </ion-thumbnail>\n\n        <h2>Sai Kumar</h2>\n\n        <p>Mobile</p>\n\n        <span item-end>\n\n            Mobile\n\n        </span>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <div class="round-img">\n\n            <img src="../../assets/images/picture.jpg">\n\n          </div>\n\n        </ion-thumbnail>\n\n        <h2>Sai Kumar</h2>\n\n        <p>Mobile</p>\n\n        <span item-end>\n\n            Mobile\n\n        </span>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <div class="round-img">\n\n            <img src="../../assets/images/picture.jpg">\n\n          </div>\n\n        </ion-thumbnail>\n\n        <h2>Sai Kumar</h2>\n\n        <p>Mobile</p>\n\n        <span item-end>\n\n            Mobile\n\n        </span>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <div class="round-img">\n\n            <img src="../../assets/images/picture.jpg">\n\n          </div>\n\n        </ion-thumbnail>\n\n        <h2>Sai Kumar</h2>\n\n        <p>Mobile</p>\n\n        <span item-end>\n\n            Mobile\n\n        </span>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <div class="round-img">\n\n            <img src="../../assets/images/picture.jpg">\n\n          </div>\n\n        </ion-thumbnail>\n\n        <h2>Sai Kumar</h2>\n\n        <p>Mobile</p>\n\n        <span item-end>\n\n            Mobile\n\n        </span>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <div class="round-img">\n\n            <img src="../../assets/images/picture.jpg">\n\n          </div>\n\n        </ion-thumbnail>\n\n        <h2>Sai Kumar</h2>\n\n        <p>Mobile</p>\n\n        <span item-end>\n\n            Mobile\n\n        </span>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <div class="round-img">\n\n            <img src="../../assets/images/picture.jpg">\n\n          </div>\n\n        </ion-thumbnail>\n\n        <h2>Sai Kumar</h2>\n\n        <p>Mobile</p>\n\n        <span item-end>\n\n            Mobile\n\n        </span>\n\n      </ion-item>-->\n\n    </ion-list>\n\n  </ion-content>\n\n'/*ion-inline-end:"F:\@app\@git\whatsapp-ui\src\pages\add-chat\add-chat.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__app_data_service__["a" /* dataService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__app_data_service__["a" /* dataService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* PopoverController */]])
], AddChatPage);

//# sourceMappingURL=add-chat.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return viewPicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var viewPicPage = (function () {
    function viewPicPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    viewPicPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad CameraPage');
    };
    return viewPicPage;
}());
viewPicPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'view-pic',template:/*ion-inline-start:"F:\@app\@git\whatsapp-ui\src\pages\view-pic\view-pic.html"*/'<ion-header>\n\n    \n\n      <ion-navbar>\n\n        <ion-title>view pic</ion-title>\n\n      </ion-navbar>\n\n    \n\n    </ion-header>\n\n    \n\n    \n\n    <ion-content padding>\n\n    \n\n    </ion-content>\n\n    '/*ion-inline-end:"F:\@app\@git\whatsapp-ui\src\pages\view-pic\view-pic.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], viewPicPage);

//# sourceMappingURL=view-pic.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic2_super_tabs__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_camera_camera__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_chats_chats__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_status_status__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_calls_calls__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_popup_popup__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_search_search__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_add_call_add_call__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_add_chat_add_chat__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_add_status_add_status__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_chat_detail_chat_detail__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_view_pic_view_pic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__data_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















//services

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_5__pages_camera_camera__["a" /* CameraPage */], __WEBPACK_IMPORTED_MODULE_6__pages_chats_chats__["a" /* ChatsPage */], __WEBPACK_IMPORTED_MODULE_7__pages_status_status__["a" /* StatusPage */], __WEBPACK_IMPORTED_MODULE_8__pages_calls_calls__["a" /* CallsPage */], __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_10__components_popup_popup__["a" /* popupPage */], __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */], __WEBPACK_IMPORTED_MODULE_14__pages_search_search__["a" /* SearchPage */], __WEBPACK_IMPORTED_MODULE_15__pages_add_call_add_call__["a" /* AddCallPage */], __WEBPACK_IMPORTED_MODULE_16__pages_add_chat_add_chat__["a" /* AddChatPage */], __WEBPACK_IMPORTED_MODULE_17__pages_add_status_add_status__["a" /* AddStatusPage */], __WEBPACK_IMPORTED_MODULE_18__pages_chat_detail_chat_detail__["a" /* ChatDetailPage */], __WEBPACK_IMPORTED_MODULE_19__pages_view_pic_view_pic__["a" /* viewPicPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/camera/camera.module#CameraPageModule', name: 'CameraPage', segment: 'camera', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chats/chats.module#ChatsPageModule', name: 'ChatsPage', segment: 'chats', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/status/status.module#StatusPageModule', name: 'StatusPage', segment: 'status', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-status/add-status.module#AddStatusPageModule', name: 'AddStatusPage', segment: 'add-status', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat-detail/chat-detail.module#ChatDetailPageModule', name: 'ChatDetailPage', segment: 'chat-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/view-pic/view-pic.module#CameraPageModule', name: 'viewPicPage', segment: 'view-pic', priority: 'low', defaultHistory: [] }
                ]
            }), __WEBPACK_IMPORTED_MODULE_4_ionic2_super_tabs__["b" /* SuperTabsModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_5__pages_camera_camera__["a" /* CameraPage */], __WEBPACK_IMPORTED_MODULE_6__pages_chats_chats__["a" /* ChatsPage */], __WEBPACK_IMPORTED_MODULE_7__pages_status_status__["a" /* StatusPage */], __WEBPACK_IMPORTED_MODULE_8__pages_calls_calls__["a" /* CallsPage */], __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_10__components_popup_popup__["a" /* popupPage */], __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */], __WEBPACK_IMPORTED_MODULE_14__pages_search_search__["a" /* SearchPage */], __WEBPACK_IMPORTED_MODULE_15__pages_add_call_add_call__["a" /* AddCallPage */], __WEBPACK_IMPORTED_MODULE_16__pages_add_chat_add_chat__["a" /* AddChatPage */], __WEBPACK_IMPORTED_MODULE_17__pages_add_status_add_status__["a" /* AddStatusPage */], __WEBPACK_IMPORTED_MODULE_18__pages_chat_detail_chat_detail__["a" /* ChatDetailPage */], __WEBPACK_IMPORTED_MODULE_19__pages_view_pic_view_pic__["a" /* viewPicPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */], { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicErrorHandler */] }, __WEBPACK_IMPORTED_MODULE_20__data_service__["a" /* dataService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"F:\@app\@git\whatsapp-ui\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"F:\@app\@git\whatsapp-ui\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var dataService = (function () {
    function dataService(navCtrl) {
        this.navCtrl = navCtrl;
        this.contacts = [
            {
                id: 1,
                name: "Sagar vispute",
                image: "",
                status: "this is the status",
                mobile: 8805448155
            },
            {
                id: 2,
                name: "Ranjit khairnar",
                image: "",
                status: "this is the status",
                mobile: 7588241092
            },
            {
                id: 3,
                name: "Rohit Pillai",
                image: "",
                status: "this is the status",
                mobile: 7896547896
            },
            {
                id: 4,
                name: "Rashmi Shinde",
                image: "",
                status: "this is the status",
                mobile: 88654587987
            },
            {
                id: 5,
                name: "Harshal thakare",
                image: "",
                status: "this is the status",
                mobile: 778898784587
            },
            {
                id: 6,
                name: "vishal bhardvaj",
                image: "",
                status: "this is the status",
                mobile: 8899898874
            },
            {
                id: 7,
                name: "swilton disoza",
                image: "",
                status: "this is the status",
                mobile: 7878989874
            },
            {
                id: 8,
                name: "rahul gandhi",
                image: "",
                status: "this is the status",
                mobile: 9987987874
            },
            {
                id: 9,
                name: "Bhushan patil",
                image: "",
                status: "this is the status",
                mobile: 9898789654
            },
            {
                id: 10,
                name: "Ashish patil",
                image: "",
                status: "this is the status",
                mobile: 8978945632
            }
        ];
    }
    dataService.prototype.getContacts = function () {
        return this.contacts;
    };
    return dataService;
}());
dataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */]])
], dataService);

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return popupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var popupPage = (function () {
    function popupPage(navCtrl, params, viewCtrl) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.notify = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.param = params.get('page');
        //this.setting = params.get('ac');
        this.close = params.get('close');
        this.optionList = params.get('list');
        //console.log(this.optionList);
    }
    Object.defineProperty(popupPage, "parameters", {
        get: function () {
            return [[__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]], [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]], [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]]];
        },
        enumerable: true,
        configurable: true
    });
    return popupPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], popupPage.prototype, "notify", void 0);
popupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'popup',template:/*ion-inline-start:"F:\@app\@git\whatsapp-ui\src\components\popup\popup.html"*/'<!--<ion-list *ngIf="param == 1">\n\n    <ion-item class="item-borderless"><button ion-button clear icon-only block>New group</button></ion-item>\n\n    <ion-item class="item-borderless"><button ion-button clear icon-only block>New broadcast</button></ion-item>\n\n    <ion-item class="item-borderless"><button ion-button clear icon-only block>WhatsApp Web</button></ion-item>\n\n    <ion-item class="item-borderless"><button ion-button clear icon-only block>Starred messages</button></ion-item>\n\n    <ion-item class="item-borderless"><button ion-button clear icon-only block (click)="showSettingsPage()">Settings</button></ion-item>\n\n</ion-list>\n\n\n\n<ion-list *ngIf="param == 2">\n\n    <ion-item class="item-borderless"><button ion-button clear icon-only block>Status privacy</button></ion-item>\n\n    <ion-item class="item-borderless"><button ion-button clear icon-only block (click)="showSettingsPage()">Settings</button></ion-item>\n\n</ion-list>\n\n\n\n<ion-list *ngIf="param == 3">\n\n    <ion-item class="item-borderless"><button ion-button clear icon-only block>Clear call log</button></ion-item>\n\n    <ion-item class="item-borderless"><button ion-button clear icon-only block (click)="showSettingsPage()">Settings</button></ion-item>\n\n</ion-list>-->\n\n\n\n<ion-list>\n\n  <ion-item class="item-borderless" *ngFor="let option of optionList" ><button ion-button clear icon-only block>{{option.name}}</button></ion-item>\n\n</ion-list>\n\n'/*ion-inline-end:"F:\@app\@git\whatsapp-ui\src\components\popup\popup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
], popupPage);

//# sourceMappingURL=popup.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.js.map