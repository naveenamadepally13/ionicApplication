(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"gridBack\">\n<ion-grid>\n  <ion-row justify-content-center>\n    <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n      <div text-center>\n        <h4>Login Form</h4>\n      </div>\n      <div padding>\n        <ion-item>\n          <ion-input type=\"text\" placeholder=\"Email Address\" [(ngModel)]=\"emailAddress\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\"></ion-input>\n        </ion-item>\n      </div>\n\n      <div padding>\n        <ion-button size=\"large\" href=\"/touchid\" expand=\"block\" (click)=\"login()\">Login</ion-button>\n      </div>\n      <div padding text-center>\n        <a href=\"registration\">Don't have an account yet? Register</a>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  width: 100%;\n  height: 100%;\n  background: #dfdfdf; }\n\nion-row {\n  height: 100%; }\n\nion-col {\n  border: 1px solid #488aff;\n  background: #fff; }\n\nion-button {\n  font-weight: 300; }\n\n.gridBack {\n  background: linear-gradient(to bottom right, #33ccff, #ff99cc); }\n\n@media (min-width: 240px) and (max-width: 768px) {\n  ion-grid {\n    background: none; }\n  ion-col {\n    border: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWhhbmF2Z2FsZS9Eb2N1bWVudHMvR2l0SHViL2lvbmljQXBwbGljYXRpb24vc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxXQUFVO0VBQ1YsWUFKYztFQUtkLG1CQUFtQixFQUFBOztBQUlyQjtFQUNFLFlBVmMsRUFBQTs7QUFhaEI7RUFDRSx5QkFBeUI7RUFDekIsZ0JBaEJnQixFQUFBOztBQW1CbEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSw4REFBOEQsRUFBQTs7QUFHaEU7RUFDRTtJQUNFLGdCQUFnQixFQUFBO0VBRWxCO0lBQ0UsWUFBWSxFQUFBLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtbG9naW4ge1xuXG59XG5cbiR3aGl0ZS1jb2xvcjogI2ZmZjtcbiRoZWlnaHQxMDA6IDEwMCU7XG5cbmlvbi1ncmlkIHtcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OiAkaGVpZ2h0MTAwO1xuICBiYWNrZ3JvdW5kOiAjZGZkZmRmO1xuXG59XG5cbmlvbi1yb3cge1xuICBoZWlnaHQ6ICRoZWlnaHQxMDA7XG59XG5cbmlvbi1jb2wge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDg4YWZmO1xuICBiYWNrZ3JvdW5kOiAkd2hpdGUtY29sb3I7XG59XG5cbmlvbi1idXR0b24ge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uZ3JpZEJhY2sge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMzNjY2ZmLCAjZmY5OWNjKTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDI0MHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgaW9uLWdyaWQge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gIH1cbiAgaW9uLWNvbCB7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginPage = /** @class */ (function () {
    function LoginPage(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.storage.get('EmailAddress').then(function (data) { return _this.emailValue = data; });
        this.storage.get('Password').then(function (data) { return _this.passwordValue = data; });
        if (this.emailValue === this.emailAddress && this.passwordValue === this.password) {
            this.router.navigateByUrl('/registration');
        }
    };
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map