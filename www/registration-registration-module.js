(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-registration-module"],{

/***/ "./src/app/registration/registration.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/registration/registration.module.ts ***!
  \*****************************************************/
/*! exports provided: RegistrationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function() { return RegistrationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registration.page */ "./src/app/registration/registration.page.ts");







var routes = [
    {
        path: '',
        component: _registration_page__WEBPACK_IMPORTED_MODULE_6__["RegistrationPage"]
    }
];
var RegistrationPageModule = /** @class */ (function () {
    function RegistrationPageModule() {
    }
    RegistrationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_6__["RegistrationPage"]]
        })
    ], RegistrationPageModule);
    return RegistrationPageModule;
}());



/***/ }),

/***/ "./src/app/registration/registration.page.html":
/*!*****************************************************!*\
  !*** ./src/app/registration/registration.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"gridBack\">\n<ion-grid>\n    <ion-row justify-content-center>\n      <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n        <div text-center>\n          <h4>Registration Form</h4>\n        </div>\n        <div padding>\n          <ion-item>\n            <ion-input type=\"text\" placeholder=\"First Name\" [(ngModel)]=\"firstName\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type=\"text\" placeholder=\"Last Name\" [(ngModel)]=\"lastName\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type=\"text\" placeholder=\"Email Address\" [(ngModel)]=\"emailAdress\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type=\"password\"  placeholder=\"Confirm Password\" [(ngModel)]=\"confirmPassword\"></ion-input>\n          </ion-item>\n        </div>\n\n        <div padding>\n          <ion-button size=\"large\"  type=\"submit\" expand=\"block\" (click)=\"register()\">Regsiter</ion-button>\n        </div>\n\n        <div padding text-center>\n          <a href=\"login\">Already have account? Login</a>\n        </div>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/registration/registration.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/registration/registration.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  width: 100%;\n  height: 100%;\n  background: #dfdfdf; }\n\nion-row {\n  height: 100%; }\n\nion-col {\n  border: 1px solid #488aff;\n  background: #fff; }\n\nion-button {\n  font-weight: 300; }\n\n.gridBack {\n  background: linear-gradient(to bottom right, #33ccff, #ff99cc); }\n\n@media (min-width: 240px) and (max-width: 768px) {\n  ion-grid {\n    background: none; }\n  ion-col {\n    border: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWhhbmF2Z2FsZS9Eb2N1bWVudHMvR2l0SHViL2lvbmljQXBwbGljYXRpb24vc3JjL2FwcC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLFdBQVU7RUFDVixZQUpjO0VBS2QsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsWUFUYyxFQUFBOztBQVloQjtFQUNFLHlCQUF5QjtFQUN6QixnQkFmZ0IsRUFBQTs7QUFrQmxCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsOERBQThELEVBQUE7O0FBR2hFO0VBQ0U7SUFDRSxnQkFBZ0IsRUFBQTtFQUVsQjtJQUNFLFlBQVksRUFBQSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtbG9naW4ge1xuXG59XG5cbiR3aGl0ZS1jb2xvcjogI2ZmZjtcbiRoZWlnaHQxMDA6IDEwMCU7XG5cbmlvbi1ncmlkIHtcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OiAkaGVpZ2h0MTAwO1xuICBiYWNrZ3JvdW5kOiAjZGZkZmRmO1xufVxuXG5pb24tcm93IHtcbiAgaGVpZ2h0OiAkaGVpZ2h0MTAwO1xufVxuXG5pb24tY29sIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ4OGFmZjtcbiAgYmFja2dyb3VuZDogJHdoaXRlLWNvbG9yO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmdyaWRCYWNrIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzMzY2NmZiwgI2ZmOTljYyk7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAyNDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGlvbi1ncmlkIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICB9XG4gIGlvbi1jb2wge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/registration/registration.page.ts":
/*!***************************************************!*\
  !*** ./src/app/registration/registration.page.ts ***!
  \***************************************************/
/*! exports provided: RegistrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPage", function() { return RegistrationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegistrationPage = /** @class */ (function () {
    function RegistrationPage(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    RegistrationPage.prototype.register = function () {
        var _this = this;
        this.storage.get('EmailAddress').then(function (data) { return _this.emailValue = data; });
        if (this.emailValue !== this.emailAdress) {
            this.storage.set('EmailAdress', this.emailAdress);
            this.storage.set('Password', this.password);
            this.storage.set('FirstName', this.firstName);
            this.storage.set('LastName', this.lastName);
            this.router.navigateByUrl('/login');
        }
    };
    RegistrationPage.prototype.ngOnInit = function () {
    };
    RegistrationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.page.html */ "./src/app/registration/registration.page.html"),
            styles: [__webpack_require__(/*! ./registration.page.scss */ "./src/app/registration/registration.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegistrationPage);
    return RegistrationPage;
}());



/***/ })

}]);
//# sourceMappingURL=registration-registration-module.js.map