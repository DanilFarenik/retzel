(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\js\p49anEx\My-Shop\src\main.ts */"zUnb");


/***/ }),

/***/ "9NvV":
/*!*****************************************!*\
  !*** ./src/app/service/http.service.ts ***!
  \*****************************************/
/*! exports provided: HTTPService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPService", function() { return HTTPService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class HTTPService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:3000';
        this.products = [];
    }
    getPraducts() {
        return this.http.get(this.url + '/card');
    }
    postOrder(data) {
        return this.http.post(this.url + "/order", data);
    }
    getComment() {
        return this.http.get(this.url + "/comment");
    }
    postComment(comm) {
        return this.http.post(this.url + "/postComment", comm);
    }
}
HTTPService.ɵfac = function HTTPService_Factory(t) { return new (t || HTTPService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HTTPService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HTTPService, factory: HTTPService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HTTPService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DUM2":
/*!********************************************************!*\
  !*** ./src/app/new-comments/new-comments.component.ts ***!
  \********************************************************/
/*! exports provided: NewCommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCommentsComponent", function() { return NewCommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_cookies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/cookies.service */ "Zp2r");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function NewCommentsComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0414\u043E\u0432\u0436\u0438\u043D\u0430 \u0456\u043C\u0435\u043D\u0456 \u043F\u043E\u0432\u0438\u043D\u043D\u0430 \u0431\u0443\u0442\u0438 \u0432\u0456\u0434 3 \u0434\u043E 20 \u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewCommentsComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0414\u043E\u0432\u0436\u0438\u043D\u0430 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u044F \u043F\u043E\u0432\u0438\u043D\u043D\u0430 \u0431\u0443\u0442\u0438 \u0432\u0456\u0434 20 \u0434\u043E 500 \u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NewCommentsComponent {
    constructor(cookieService) {
        var _a;
        this.cookieService = cookieService;
        this.setComment = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.name = (_a = this.cookieService.cookie.name) !== null && _a !== void 0 ? _a : "";
        this.text = "";
        this.nameError = false;
        this.textError = false;
    }
    ngOnInit() {
    }
    validator() {
        this.nameError = false;
        this.textError = false;
        if (this.name.length < 4 || this.name.length > 20) {
            this.nameError = true;
        }
        if (this.text.length < 20 || this.text.length > 500) {
            this.textError = true;
        }
        if (this.nameError || this.textError)
            return;
        this.setComment.emit({
            name: this.name,
            text: this.text,
            date: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
        });
    }
}
NewCommentsComponent.ɵfac = function NewCommentsComponent_Factory(t) { return new (t || NewCommentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_cookies_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"])); };
NewCommentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewCommentsComponent, selectors: [["app-new-comments"]], outputs: { setComment: "setComment" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_service_cookies_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]])], decls: 9, vars: 4, consts: [[1, "new"], [1, "new__title"], ["minlength", "3", "maxlength", "20", "placeholder", "\u0418\u043C\u044F", "type", "text", 1, "new__name", 3, "ngModel", "ngModelChange"], ["class", "new__error", 4, "ngIf"], ["minlength", "20", "maxlength", "500", 1, "new__comments", 3, "ngModel", "ngModelChange"], [1, "new__submit", 3, "click"], [1, "new__error"]], template: function NewCommentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0456");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewCommentsComponent_Template_input_ngModelChange_3_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NewCommentsComponent_p_4_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewCommentsComponent_Template_textarea_ngModelChange_5_listener($event) { return ctx.text = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NewCommentsComponent_p_6_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewCommentsComponent_Template_button_click_7_listener() { return ctx.validator(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nameError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.textError);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".new[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  padding: 40px 10px 0px 10px;\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  max-width: 700px;\n}\n.new__title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 24px;\n  color: #ff9900;\n}\n.new__name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  border: none;\n  border-bottom: 1px solid #ff9900;\n  padding: 5px;\n  margin: 20px 0px;\n  max-width: 300px;\n}\n.new__comments[_ngcontent-%COMP%] {\n  resize: none;\n  border-radius: 3px;\n  border: 1px solid #ff9900;\n  height: 200px;\n  padding: 10px;\n  font-size: 18px;\n}\n.new__submit[_ngcontent-%COMP%] {\n  border: 1px solid #ff9900;\n  border-radius: 4px;\n  padding: 10px;\n  margin: 20px auto;\n  background-color: #f5f5f5;\n}\n.new__error[_ngcontent-%COMP%] {\n  color: #ff0000;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5ldy1jb21tZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLGlDQUFBO0VBRUksMkJBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7QUFGSjtBQUlJO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBRUEsY0FBQTtBQUhSO0FBTUM7RUFDQyxlQUFBO0VBQ00sWUFBQTtFQUNBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFMUjtBQVFDO0VBQ08sWUFBQTtFQUVBLGtCQUFBO0VBQ0EseUJBQUE7RUFFQSxhQUFBO0VBQ04sYUFBQTtFQUVBLGVBQUE7QUFURjtBQVlDO0VBQ0MseUJBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxpQkFBQTtFQUVBLHlCQUFBO0FBWkY7QUFlQztFQUNDLGNBQUE7RUFDQSxhQUFBO0FBYkYiLCJmaWxlIjoibmV3LWNvbW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldyB7XHJcbmZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHJcbiAgICBwYWRkaW5nOiA0MHB4IDEwcHggMHB4IDEwcHg7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxuXHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcblxyXG4gICAgICAgIGNvbG9yOiAjZmY5OTAwO1xyXG5cdH1cclxuXHJcblx0Jl9fbmFtZSB7XHJcblx0XHRmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmY5OTAwO1xyXG4gICAgICBcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG5cdH1cclxuXHJcblx0Jl9fY29tbWVudHMge1xyXG4gICAgICAgIHJlc2l6ZTogbm9uZTtcclxuXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjk5MDA7XHJcblxyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcblx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdFx0XHJcblx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0fVxyXG5cdFxyXG5cdCZfX3N1Ym1pdHtcclxuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNmZjk5MDA7XHJcblx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG5cdFx0cGFkZGluZzogMTBweDtcclxuXHRcdG1hcmdpbjogMjBweCBhdXRvO1xyXG5cclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcblx0fVxyXG5cclxuXHQmX19lcnJvcntcclxuXHRcdGNvbG9yOiAjZmYwMDAwO1xyXG5cdFx0cGFkZGluZzogMTBweDtcclxuXHR9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewCommentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-comments',
                templateUrl: './new-comments.component.html',
                styleUrls: ['./new-comments.component.scss'],
                providers: [_service_cookies_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]]
            }]
    }], function () { return [{ type: _service_cookies_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] }]; }, { setComment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "FxbT":
/*!**********************************************************!*\
  !*** ./src/app/special-order/special-order.component.ts ***!
  \**********************************************************/
/*! exports provided: SpecialOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialOrderComponent", function() { return SpecialOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/http.service */ "9NvV");
/* harmony import */ var _basket_form_basket_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../basket-form/basket-form.component */ "Kswc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function SpecialOrderComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u0440\u043E\u0431\u043B\u0435\u043C\u0438 \u0437 \u0434\u043E\u0441\u0442\u0443\u043F\u043E\u043C \u0434\u043E \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438, \u0430\u043B\u0435 \u043F\u0435\u0440\u0435\u0434 \u0446\u0438\u043C \u0437\u0431\u0435\u0440\u0435\u0436\u0456\u0442\u044C \u0442\u0435\u043A\u0441\u0442 \u0441\u043F\u0435\u0446\u0437\u0430\u043A\u0430\u0437\u0443 !!!!!!!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SpecialOrderComponent {
    constructor(HTTPService) {
        this.HTTPService = HTTPService;
        this.flagError = false;
    }
    ngOnInit() {
    }
    sendingData(event) {
        let arr = [event];
        this.HTTPService.postOrder(arr).subscribe(res => {
            this.flagError = false;
            console.log(res);
        }, error => {
            this.flagError = true;
        });
    }
}
SpecialOrderComponent.ɵfac = function SpecialOrderComponent_Factory(t) { return new (t || SpecialOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HTTPService"])); };
SpecialOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpecialOrderComponent, selectors: [["app-special-order"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HTTPService"]])], decls: 5, vars: 2, consts: [[1, "order"], [1, "order__form", 3, "setings", "data"], [1, "order__text"], ["class", "oeder__error-list", 4, "ngIf"], [1, "oeder__error-list"]], template: function SpecialOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-basket-form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("data", function SpecialOrderComponent_Template_app_basket_form_data_1_listener($event) { return ctx.sendingData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0443\u0432\u0430\u0436\u043D\u043E \u043E\u043F\u0438\u0448\u0456\u0442\u044C \u0442\u0435 \u0449\u043E \u0432\u0438 \u0445\u043E\u0442\u0456\u043B\u0438 \u0449\u043E\u0431 \u0432\u0430\u043C \u043F\u0440\u0438\u0433\u043E\u0442\u0443\u0432\u0430\u043B\u0438. \u041C\u0438 \u0437\u0430\u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443\u0435\u043C\u043E \u0432\u0430\u043C \u0437\u0430 \u0443\u0442\u043E\u0447\u043D\u0435\u043D\u044F\u043C \u0446\u0456\u043D\u0438 \u0442\u0430 \u0441\u0430\u043C\u043E\u0433\u043E \u0441\u043C\u0430\u043A\u043E\u043B\u0438\u043A\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SpecialOrderComponent_p_4_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("setings", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flagError);
    } }, directives: [_basket_form_basket_form_component__WEBPACK_IMPORTED_MODULE_2__["BasketFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".order[_ngcontent-%COMP%] {\n  padding: 20px 0px;\n}\n.order__text[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.order__error-list[_ngcontent-%COMP%] {\n  color: #ff0000;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNwZWNpYWwtb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKO0FBQ0M7RUFDTyxhQUFBO0FBQ1I7QUFFSTtFQUNJLGNBQUE7RUFFQSxhQUFBO0FBRFIiLCJmaWxlIjoic3BlY2lhbC1vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcmRlciB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxuXHJcblx0Jl9fdGV4dCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJl9fZXJyb3ItbGlzdHtcclxuICAgICAgICBjb2xvcjogI2ZmMDAwMDtcclxuICAgICAgICBcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpecialOrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-special-order',
                templateUrl: './special-order.component.html',
                styleUrls: ['./special-order.component.scss'],
                providers: [_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HTTPService"]]
            }]
    }], function () { return [{ type: _service_http_service__WEBPACK_IMPORTED_MODULE_1__["HTTPService"] }]; }, null); })();


/***/ }),

/***/ "ITxa":
/*!****************************************************!*\
  !*** ./src/app/error-list/error-list.component.ts ***!
  \****************************************************/
/*! exports provided: ErrorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorListComponent", function() { return ErrorListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ErrorListComponent {
    constructor() {
        this.errorMessege = {
            title: '404',
            body: 'ERROR'
        };
    }
}
ErrorListComponent.ɵfac = function ErrorListComponent_Factory(t) { return new (t || ErrorListComponent)(); };
ErrorListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorListComponent, selectors: [["app-error-list"]], inputs: { errorMessege: "errorMessege" }, decls: 5, vars: 2, consts: [[1, "error"], [1, "error__title"], [1, "error__body"]], template: function ErrorListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMessege.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMessege.body);
    } }, styles: [".error[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.error__title[_ngcontent-%COMP%] {\n  font-size: 42px;\n  color: #ff0000;\n}\n.error__body[_ngcontent-%COMP%] {\n  margin: 20px;\n  color: #ff0000;\n  font-size: 24px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVycm9yLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKO0FBQ0k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUNSO0FBRUM7RUFDTyxZQUFBO0VBRUEsY0FBQTtFQUVBLGVBQUE7RUFDQSxpQkFBQTtBQUZSIiwiZmlsZSI6ImVycm9yLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3Ige1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICAgICAgY29sb3I6ICNmZjAwMDA7XHJcblx0fVxyXG5cclxuXHQmX19ib2R5IHtcclxuICAgICAgICBtYXJnaW46IDIwcHg7XHJcblxyXG4gICAgICAgIGNvbG9yOiNmZjAwMDA7XHJcblxyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error-list',
                templateUrl: './error-list.component.html',
                styleUrls: ['./error-list.component.scss']
            }]
    }], null, { errorMessege: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Kswc":
/*!******************************************************!*\
  !*** ./src/app/basket-form/basket-form.component.ts ***!
  \******************************************************/
/*! exports provided: BasketFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketFormComponent", function() { return BasketFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_cookies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/cookies.service */ "Zp2r");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function BasketFormComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0406\u043C'\u044F \u043D\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BasketFormComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435 \u043D\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BasketFormComponent_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u043D\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BasketFormComponent_p_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email \u043D\u0435 \u0432\u0430\u043B\u0438\u0434\u0435\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BasketFormComponent_p_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F \u0437\u0430\u043D\u0430\u0434\u0442\u043E \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u0430\u0431\u043E \u043D\u0435 \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0435! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BasketFormComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "textarea", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r10.textError);
} }
const _c0 = function (a0) { return { display: a0 }; };
class BasketFormComponent {
    constructor(cookieService) {
        var _a, _b, _c, _d;
        this.cookieService = cookieService;
        this.data = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.setings = false;
        this.textError = '';
        this.mapName = {
            firstName: "Ім'я: ",
            lastName: "Прізвище: ",
            tel: "Телефон: ",
            email: "Email: ",
            text: "Текст замовлення: "
        };
        this.mapError = {
            minlength: "невідповідае min Size; ",
            maxlength: "невідповідае max Size; ",
            required: "поле обов'язкове для введення; ",
            pattern: "некоректно задано значення; "
        };
        this.cookie = this.cookieService.cookie;
        this.firstNameValue = (_a = this.cookie.firstName) !== null && _a !== void 0 ? _a : '';
        this.lastNameValue = (_b = this.cookie.lastName) !== null && _b !== void 0 ? _b : '';
        this.telValue = (_c = this.cookie.tel) !== null && _c !== void 0 ? _c : '';
        this.emailValue = (_d = this.cookie.email) !== null && _d !== void 0 ? _d : '';
        this.textValue = '';
        this.flagError = false;
    }
    validator(...checkError) {
        this.textError = '';
        if (!this.setings) {
            checkError = checkError.filter(item => item.name != "text");
        }
        for (let item of checkError) {
            if (item.errors) {
                this.textError += this.mapName[item.name];
                for (let err in item.errors) {
                    this.textError += this.mapError[err];
                }
                this.textError += `\n`;
                this.flagError = true;
            }
        }
        if (!this.flagError) {
            let parameters = {
                firstName: this.firstNameValue,
                lastName: this.lastNameValue,
                tel: this.telValue,
                email: this.emailValue
            };
            this.cookieService.setCookieData(parameters);
            if (this.textValue) {
                parameters["text"] = this.textValue;
            }
            this.data.emit(parameters);
        }
    }
    valTel(event) {
        let { value } = event.target;
        if (value.length === 3 || value.length === 7) {
            event.target.value += "-";
        }
        if (!"1234567890".includes(value[value.length - 1]) || value.length > 12) {
            event.target.value = value.slice(0, value.length - 1);
            this.telValue = value.slice(0, value.length - 1);
        }
        ;
    }
}
BasketFormComponent.ɵfac = function BasketFormComponent_Factory(t) { return new (t || BasketFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_cookies_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"])); };
BasketFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BasketFormComponent, selectors: [["app-basket-form"]], inputs: { setings: "setings" }, outputs: { data: "data" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_service_cookies_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]])], decls: 35, vars: 14, consts: [[1, "form"], [1, "form__box", "form__box_ferst"], [1, "form__form-group"], ["for", "firstName", 1, "form__title"], ["ngModel", "", "required", "", "name", "firstName", "id", "firstName", "type", "text", "minlength", "4", "maxlength", "15", 3, "ngModel", "ngModelChange"], ["firstName", "ngModel"], ["class", "form__error", 4, "ngIf"], ["for", "lastName", 1, "form__title"], ["id", "lastName", "type", "text", "ngModel", "", "name", "lastName", "required", "", "minlength", "4", "maxlength", "15", 3, "ngModel", "ngModelChange"], ["lastName", "ngModel"], ["for", "tel", 1, "form__title"], ["id", "tel", "type", "tel", "pattern", "^[0-9]{3}-[0-9]{3}-[0-9]+$", "minlength", "12", "ngModel", "", "name", "tel", "required", "", "placeholder", "xxx-xxx-xxxx", 3, "ngModel", "ngModelChange", "input"], ["tel", "ngModel"], ["for", "email", 1, "form__title"], ["id", "email", "type", "email", "ngModel", "", "name", "email", "required", "", "maxlength", "30", "minlength", "4", "pattern", "^(([^<>()\\[\\]\\.,;:\\s@\\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@(([^<>()[\\]\\.,;:\\s@\\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\\"]{2,})$", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], [1, "form__box", "form__box_last", 3, "ngStyle"], [1, "form__form-group", "form__form-group"], ["placeholder", "\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u043E \u043E\u043F\u0438\u0441\u0430\u0442\u0438 \u0431\u0430\u0436\u0430\u043D\u0443, \u0432\u0438\u043F\u0456\u0447\u043A\u0443 \u0430\u0431\u043E \u0432\u0438\u0440\u0456\u0431 \u0437 \u0442\u0456\u0441\u0442\u0430, \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0434\u0435\u0442\u0430\u043B\u044C\u043D\u043E \u043E\u043F\u0438\u0448\u0456\u0442\u044C \u0431\u0430\u0436\u0430\u043D\u0438\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442.", "id", "text", "ngModel", "", "name", "text", "required", "", "minlength", "10", 1, "form__text", 3, "ngModel", "ngModelChange"], ["text", "ngModel"], [1, "form__box", "form__box_full"], [1, "form__submit", 3, "click"], ["class", "form__full-error", 4, "ngIf"], [1, "form__error"], [1, "form__full-error"], ["disabled", "", 1, "form__error-list", 3, "value"]], template: function BasketFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0406\u043C'\u044F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BasketFormComponent_Template_input_ngModelChange_5_listener($event) { return ctx.firstNameValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BasketFormComponent_p_7_Template, 2, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BasketFormComponent_Template_input_ngModelChange_11_listener($event) { return ctx.lastNameValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BasketFormComponent_p_13_Template, 2, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BasketFormComponent_Template_input_ngModelChange_17_listener($event) { return ctx.telValue = $event; })("input", function BasketFormComponent_Template_input_input_17_listener($event) { return ctx.valTel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, BasketFormComponent_p_19_Template, 2, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BasketFormComponent_Template_input_ngModelChange_23_listener($event) { return ctx.emailValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, BasketFormComponent_p_25_Template, 2, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "textarea", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BasketFormComponent_Template_textarea_ngModelChange_28_listener($event) { return ctx.textValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, BasketFormComponent_p_30_Template, 2, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasketFormComponent_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29); return ctx.validator(_r0, _r2, _r4, _r6, _r8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, BasketFormComponent_div_34_Template, 2, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.firstNameValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.touched && !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lastNameValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.touched && !_r2.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.telValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.touched && !_r4.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.touched && !_r6.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.setings ? "block" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.textValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.touched && !_r8.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.textError);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: [".form[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  width: calc(100% - 20px);\n  padding: 0 10px;\n  margin: auto;\n  text-align: left;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n.form__text[_ngcontent-%COMP%] {\n  resize: none;\n  width: calc(100% - 20px);\n  height: 210px;\n  margin: 10px 0;\n}\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form__text[_ngcontent-%COMP%] {\n  background-color: #e5e5e5;\n  border: none;\n  border-radius: 3px;\n  padding: 10px;\n}\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover, .form__text[_ngcontent-%COMP%]:hover {\n  border: 1px solid;\n  padding: 9px;\n}\n.form__title[_ngcontent-%COMP%] {\n  line-height: 32px;\n}\n.form__box[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n.form__box_ferst[_ngcontent-%COMP%] {\n  width: 280px;\n  margin: auto 0;\n  text-align: center;\n}\n.form__box_last[_ngcontent-%COMP%] {\n  flex-basis: calc(100% - 380px);\n  min-width: 260px;\n  max-width: 550px;\n}\n.form__box_full[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n.form__form-group[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  margin: 20px 0;\n}\n.form__error[_ngcontent-%COMP%] {\n  margin: 3px;\n  font-size: 14px;\n  color: red;\n  text-align: left;\n}\n.form__submit[_ngcontent-%COMP%] {\n  border: 1px #f5f5f5 solid;\n  border-radius: 5px;\n  background-color: #ff9900;\n  padding: 10px;\n  width: 150px;\n  margin: 5px auto;\n}\n.form__full-error[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #ff0000;\n  width: 100%;\n  margin: 0 auto;\n}\n.form__error-list[_ngcontent-%COMP%] {\n  color: #FF0000;\n  background-color: #e5e5e5;\n  border: none;\n  margin: 0 auto;\n  resize: none;\n  height: 100px;\n  width: 320px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJhc2tldC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFESjtBQUdJO0VBQ0ksWUFBQTtFQUVBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFGUjtBQUtJO0VBRUkseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0FBTFI7QUFRSTtFQUVJLGlCQUFBO0VBQ0EsWUFBQTtBQVBSO0FBVUk7RUFDSSxpQkFBQTtBQVJSO0FBV0k7RUFDSSxXQUFBO0FBVFI7QUFXUTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFUWjtBQVlRO0VBQ0ksOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBVlo7QUFhUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQVhaO0FBZUM7RUFDTyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBRUEsY0FBQTtBQWRSO0FBaUJJO0VBQ0ksV0FBQTtFQUVBLGVBQUE7RUFFQSxVQUFBO0VBQ0EsZ0JBQUE7QUFqQlI7QUFvQkM7RUFDTyx5QkFBQTtFQUNBLGtCQUFBO0VBRUEseUJBQUE7RUFFQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBcEJSO0FBdUJJO0VBQ0kscUJBQUE7RUFFQSxjQUFBO0VBQ0EsV0FBQTtFQUVBLGNBQUE7QUF2QlI7QUEwQkk7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBRUEsY0FBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsWUFBQTtBQTFCUiIsImZpbGUiOiJiYXNrZXQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtIHtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAmX190ZXh0e1xyXG4gICAgICAgIHJlc2l6ZTogbm9uZTtcclxuXHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgICAgIGhlaWdodDogMjEwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQsXHJcbiAgICAmX190ZXh0e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dDpob3ZlcixcclxuICAgICZfX3RleHQ6aG92ZXJ7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgICAgcGFkZGluZzogOXB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RpdGxle1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4IDtcclxuICAgIH1cclxuXHJcbiAgICAmX19ib3h7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcblxyXG4gICAgICAgICZfZmVyc3R7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyODBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfbGFzdHtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogY2FsYygxMDAlIC0gMzgwcHgpO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDI2MHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9mdWxse1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblx0Jl9fZm9ybS1ncm91cCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICBtYXJnaW46IDIwcHggMDtcclxuICAgIH1cclxuXHJcbiAgICAmX19lcnJvcntcclxuICAgICAgICBtYXJnaW46IDNweDtcclxuXHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcblxyXG5cdCZfX3N1Ym1pdCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggI2Y1ZjVmNSBzb2xpZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjk5MDA7XHJcblxyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICB9XHJcbiAgICBcclxuICAgICZfX2Z1bGwtZXJyb3J7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgICAgICBjb2xvcjogI2ZmMDAwMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAmX19lcnJvci1saXN0e1xyXG4gICAgICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICByZXNpemU6IG5vbmU7XHJcblxyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasketFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-basket-form',
                templateUrl: './basket-form.component.html',
                styleUrls: ['./basket-form.component.scss'],
                providers: [_service_cookies_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]]
            }]
    }], function () { return [{ type: _service_cookies_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], setings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Nr4/":
/*!******************************************************!*\
  !*** ./src/app/basket-item/basket-item.component.ts ***!
  \******************************************************/
/*! exports provided: BasketItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketItemComponent", function() { return BasketItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




class BasketItemComponent {
    constructor() {
        this.reSize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    validator(target) {
        if (parseInt(target.value) < this.product.minSize || !parseInt(target.value)) {
            target.value = this.product.minSize;
            this.product.size = this.product.minSize;
        }
        else if (parseInt(target.value) > 99) {
            target.value = 99;
            this.product.size = 99;
        }
        this.reSize.emit();
    }
    post() {
        if (this.product.size > 99) {
            this.product.size = 99;
        }
        this.reSize.emit();
    }
    remuveItem() {
        if (confirm("Вы точно хотите удалить данный заказ?")) {
            localStorage.removeItem(this.product.name);
            this.deleteItem.emit(this.product.name);
        }
    }
}
BasketItemComponent.ɵfac = function BasketItemComponent_Factory(t) { return new (t || BasketItemComponent)(); };
BasketItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BasketItemComponent, selectors: [["app-basket-item"]], inputs: { product: "product" }, outputs: { reSize: "reSize", deleteItem: "deleteItem" }, decls: 12, vars: 8, consts: [[1, "item"], [1, "item__td", "item__td_title"], [1, "item__box"], [1, "item__delete", 3, "click"], ["type", "number", 1, "item__input", 3, "ngModel", "blur", "input", "ngModelChange"], [1, "item__td"]], template: function BasketItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasketItemComponent_Template_button_click_5_listener() { return ctx.remuveItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function BasketItemComponent_Template_input_blur_7_listener($event) { return ctx.validator($event.target); })("input", function BasketItemComponent_Template_input_input_7_listener() { return ctx.post(); })("ngModelChange", function BasketItemComponent_Template_input_ngModelChange_7_listener($event) { return ctx.product.size = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](11, 3, ctx.product.price * ctx.product.size, "UAH", "symbol-narrow", "0.0"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: [".item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  justify-content: space-around;\n  width: 100%;\n  text-align: center;\n}\n.item__input[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 50px;\n}\n.item__delete[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  padding: 0px;\n  height: 20px;\n  width: 20px;\n  border: 1px solid #f5f5f5;\n  border-radius: 3px;\n  background-color: #ff9900;\n  color: #f5f5f5;\n}\n.item__td[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: center;\n  width: 100px;\n  line-height: 20px;\n}\n.item__td_sum[_ngcontent-%COMP%] {\n  min-width: 50px;\n}\n.item__box[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 90px;\n}\n@media (min-width: 520px) {\n  .item__td_title[_ngcontent-%COMP%] {\n    min-width: 200px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJhc2tldC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSw2QkFBQTtFQUVBLFdBQUE7RUFDQSxrQkFBQTtBQUFKO0FBR0M7RUFDTyxZQUFBO0VBQ0EsV0FBQTtBQURSO0FBSUk7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFFQSx5QkFBQTtFQUNBLGNBQUE7QUFKUjtBQU9JO0VBQ0kscUJBQUE7RUFFQSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxpQkFBQTtBQVBSO0FBU1E7RUFDSSxlQUFBO0FBUFo7QUFXSTtFQUNJLGtCQUFBO0VBRUEsV0FBQTtBQVZSO0FBY0E7RUFDSTtJQUNJLGdCQUFBO0VBWE47QUFDRiIsImZpbGUiOiJiYXNrZXQtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG5cclxuXHQmX19pbnB1dCB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmX19kZWxldGV7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuXHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Y1ZjVmNTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjk5MDA7XHJcbiAgICAgICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGR7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuXHJcbiAgICAgICAgJl9zdW17XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYm94e1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6NTIwcHgpe1xyXG4gICAgLml0ZW1fX3RkX3RpdGxle1xyXG4gICAgICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasketItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-basket-item',
                templateUrl: './basket-item.component.html',
                styleUrls: ['./basket-item.component.scss']
            }]
    }], null, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], reSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], deleteItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "RspL":
/*!********************************************************!*\
  !*** ./src/app/product-page/product-page.component.ts ***!
  \********************************************************/
/*! exports provided: ProductPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageComponent", function() { return ProductPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/products.service */ "a1aN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ProductPageComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
class ProductPageComponent {
    constructor(ProductsService) {
        this.ProductsService = ProductsService;
        this.exit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.size = 0;
        this.errorMessage = "";
        this.flag = false;
        this.flagBlur = false;
    }
    exitEvent(e) {
        if (e.target.localName == "section")
            this.exit.emit(null);
    }
    validator() {
        if (this.size < this.product.minSize || this.size > 99) {
            this.errorList();
        }
        else if (this.flagBlur) {
            localStorage.setItem(this.product.title, JSON.stringify({
                price: this.product.price,
                size: this.size,
                minSize: this.product.minSize
            }));
            this.ProductsService.newProduct({
                name: this.product.title,
                price: this.product.price,
                size: this.size,
                minSize: this.product.minSize
            });
            this.exit.emit();
        }
    }
    errorList() {
        this.flagBlur = false;
        this.flag = true;
        this.errorMessage = `
				Даний розмір замовлення недоступний!!!
				Мінімальний розмір замовлення ${this.product.minSize}, максимальний 99
			`;
    }
    inputValid(e) {
        if (+e.target.value < this.product.minSize || +e.target.value > 99) {
            this.errorList();
        }
        else {
            this.flagBlur = true;
        }
    }
}
ProductPageComponent.ɵfac = function ProductPageComponent_Factory(t) { return new (t || ProductPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"])); };
ProductPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductPageComponent, selectors: [["app-product-page"]], inputs: { product: "product" }, outputs: { exit: "exit" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_service_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]])], decls: 16, vars: 12, consts: [[1, "section-product-page", 3, "click"], [1, "section-product-page__window"], [1, "section-product-page__title"], [1, "section-product-page__img", 3, "src"], [1, "section-product-page__text"], [1, "section-product-page__box"], [1, "section-product-page__btn", 3, "click"], ["type", "number", "max", "99", 1, "section-product-page__input", 3, "value", "min", "ngModel", "blur", "ngModelChange"], [1, "section-product-page__price"], ["class", "section-product-page__error", 4, "ngIf"], [1, "section-product-page__error"]], template: function ProductPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductPageComponent_Template_section_click_0_listener($event) { return ctx.exitEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductPageComponent_Template_button_click_9_listener() { return ctx.validator(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0414\u043E\u0434\u0430\u0442\u0438 \u0432 \u043A\u043E\u0448\u0438\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ProductPageComponent_Template_input_blur_11_listener($event) { return ctx.inputValid($event); })("ngModelChange", function ProductPageComponent_Template_input_ngModelChange_11_listener($event) { return ctx.size = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProductPageComponent_p_15_Template, 2, 1, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.product.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.product.minSize)("min", ctx.product.minSize)("ngModel", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](14, 8, ctx.product.price * (ctx.size || ctx.product.minSize), "UAH", "symbol-narrow"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flag);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: [".section-product-page[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.254);\n  width: 100%;\n  min-width: 320px;\n  height: 100%;\n  z-index: 99999999;\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  font-family: \"Roboto\", sans-serif;\n  text-align: center;\n}\n.section-product-page__window[_ngcontent-%COMP%] {\n  display: inline-block;\n  background-color: #f5f5f5;\n  text-align: center;\n  margin: 40px;\n  padding: 10px;\n  height: auto;\n  overflow-y: auto;\n}\n.section-product-page__title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  color: #ff9900;\n  margin-top: 25px;\n}\n.section-product-page__img[_ngcontent-%COMP%] {\n  margin: 10px;\n  width: 100%;\n  max-width: 250px;\n  height: 250px;\n  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.474);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  object-fit: cover;\n}\n.section-product-page__text[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 400px;\n  vertical-align: top;\n  margin: 15px 5px;\n  text-align: left;\n  line-height: 22px;\n}\n.section-product-page__btn[_ngcontent-%COMP%] {\n  transition: 0.5s ease-in;\n  padding: 10px;\n  background-color: #ff9900;\n  border: 1px solid #f5f5f5;\n  border-radius: 5px;\n  color: #f5f5f5;\n}\n.section-product-page__btn[_ngcontent-%COMP%]:hover {\n  border: 1px solid #ff9900;\n  background-color: #ffffff;\n  color: #ff9900;\n}\n.section-product-page__input[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 50px;\n  margin-left: 15px;\n}\n.section-product-page__error[_ngcontent-%COMP%] {\n  margin: 10px;\n  margin-bottom: 20px;\n  color: #ff0000;\n}\n.section-product-page__price[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.section-product-page[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #999999;\n}\n.section-product-page[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  box-shadow: inset 1px 1px 10px #f3faf7;\n}\n.section-product-page[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #ff9900;\n}\n.section-product-page[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-button {\n  display: none;\n}\n.section-product-page[_ngcontent-%COMP%]::after {\n  content: \"x\";\n  width: 25px;\n  height: 25px;\n  text-align: center;\n  line-height: 20px;\n  border-radius: 3px;\n  font-size: 32px;\n  position: absolute;\n  top: 45px;\n  right: calc(50vw - 12.5px);\n  background-color: #ff9900;\n  color: #f5f5f5;\n}\n@media (max-width: 500px) {\n  .section-product-page__window[_ngcontent-%COMP%] {\n    height: 100vh;\n    margin: 0;\n  }\n  .section-product-page__title[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n\n  .section-product-page[_ngcontent-%COMP%]::after {\n    top: 20px;\n    right: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2R1Y3QtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNDQUFBO0VBRUEsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLGlCQUFBO0VBRUEsZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxpQ0FBQTtFQUVBLGtCQUFBO0FBSko7QUFNQztFQUNPLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0FBTlI7QUFTQztFQUNPLHlCQUFBO0VBRUEsY0FBQTtFQUVBLGdCQUFBO0FBVFI7QUFZQztFQUNPLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBRUEsNkNBQUE7RUFFQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFFQSxpQkFBQTtBQWJSO0FBZ0JDO0VBQ08scUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBRUEsZ0JBQUE7RUFFQSxnQkFBQTtFQUNBLGlCQUFBO0FBaEJSO0FBbUJJO0VBQ0ksd0JBQUE7RUFFQSxhQUFBO0VBQ0EseUJBQUE7RUFFQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQW5CUjtBQXNCSTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBcEJSO0FBdUJJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQXJCUjtBQXdCSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUF0QlI7QUF5Qkk7RUFDSSxZQUFBO0FBdkJSO0FBMEJJO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FBeEJSO0FBMkJJO0VBQ0ksbUJBQUE7RUFDQSxzQ0FBQTtBQXpCUjtBQTRCSTtFQUNJLHlCQUFBO0FBMUJSO0FBNkJJO0VBQ0ksYUFBQTtBQTNCUjtBQStCQTtFQUNJLFlBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtFQUVBLHlCQUFBO0VBQ0EsY0FBQTtBQWhDSjtBQW1DQTtFQUVRO0lBQ0ksYUFBQTtJQUNBLFNBQUE7RUFqQ1Y7RUFvQ007SUFDSSxnQkFBQTtFQWxDVjs7RUFzQ0U7SUFDSSxTQUFBO0lBQ0EsV0FBQTtFQW5DTjtBQUNGIiwiZmlsZSI6InByb2R1Y3QtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLXByb2R1Y3QtcGFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjU0KTtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMzIwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgei1pbmRleDogOTk5OTk5OTk7XHJcblxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG5cdFx0XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuXHQmX193aW5kb3cge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgbWFyZ2luOiA0MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG5cclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cdH1cclxuXHJcblx0Jl9fdGl0bGUge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG4gICAgICAgIGNvbG9yOiAjZmY5OTAwO1xyXG5cclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG5cdH1cclxuXHJcblx0Jl9faW1nIHtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG5cclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjQ3NCk7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cdH1cclxuXHJcblx0Jl9fdGV4dCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuXHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDVweDtcclxuXHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJl9fYnRue1xyXG4gICAgICAgIHRyYW5zaXRpb246IC41cyBlYXNlLWluO1xyXG5cclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjk5MDA7XHJcblxyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNWY1ZjU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjZjVmNWY1O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2J0bjpob3ZlcntcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmY5OTAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgY29sb3I6ICNmZjk5MDA7XHJcbiAgICB9XHJcblxyXG4gICAgJl9faW5wdXR7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2Vycm9ye1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmYwMDAwO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3ByaWNle1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xyXG4gICAgfVxyXG5cclxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAxMHB4ICNmM2ZhZjc7XHJcbiAgICB9XHJcblxyXG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTkwMDtcclxuICAgIH1cclxuXHJcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLnNlY3Rpb24tcHJvZHVjdC1wYWdlOjphZnRlcntcclxuICAgIGNvbnRlbnQ6IFwieFwiO1xyXG5cclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDo0NXB4O1xyXG4gICAgcmlnaHQ6IGNhbGMoNTB2dyAtIDEyLjVweCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTkwMDtcclxuICAgIGNvbG9yOiAjZjVmNWY1O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo1MDBweCl7XHJcbiAgICAuc2VjdGlvbi1wcm9kdWN0LXBhZ2Uge1xyXG4gICAgICAgICZfX3dpbmRvdyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDo1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VjdGlvbi1wcm9kdWN0LXBhZ2U6OmFmdGVyIHtcclxuICAgICAgICB0b3A6IDIwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-page',
                templateUrl: './product-page.component.html',
                styleUrls: ['./product-page.component.scss'],
                providers: [_service_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]]
            }]
    }], function () { return [{ type: _service_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"] }]; }, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], exit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");





class AppComponent {
    constructor() {
        this.title = 'My-Shop';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "main-sections"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".main-sections[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 40px - 108px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msc0NBQUE7QUFDRCIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1zZWN0aW9uc3tcclxuXHRtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDBweCAtIDEwOHB4KTsgXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "WuYC":
/*!********************************************!*\
  !*** ./src/app/basket/basket.component.ts ***!
  \********************************************/
/*! exports provided: BasketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketComponent", function() { return BasketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/http.service */ "9NvV");
/* harmony import */ var _service_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/products.service */ "a1aN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _basket_form_basket_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../basket-form/basket-form.component */ "Kswc");
/* harmony import */ var _basket_item_basket_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../basket-item/basket-item.component */ "Nr4/");









function BasketComponent_app_basket_item_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-basket-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteItem", function BasketComponent_app_basket_item_9_Template_app_basket_item_deleteItem_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.delete($event); })("reSize", function BasketComponent_app_basket_item_9_Template_app_basket_item_reSize_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.fullCost(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", p_r3);
} }
function BasketComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u0430 \u0434\u0430\u043D\u0438\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043A\u043E\u0448\u0438\u043A \u043F\u043E\u0440\u043E\u0436\u043D\u0456\u0439");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BasketComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u0438 \u0437 \u0434\u043E\u0441\u0442\u0443\u043F\u0430\u043C \u0434\u043E \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0441\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class BasketComponent {
    constructor(HTTPService, ProductsService) {
        this.HTTPService = HTTPService;
        this.ProductsService = ProductsService;
        this.cost = 0;
        this.flag = false;
        this.flagErrorSend = false;
    }
    ngOnInit() {
        this.fullCost();
        if (!this.ProductsService.products.length) {
            this.flag = true;
        }
    }
    fullCost() {
        this.cost = 0;
        for (let item of this.ProductsService.products) {
            this.cost += item.size * item.price;
        }
    }
    delete(event) {
        this.ProductsService.delete(event);
    }
    ngOnChanges(changes) {
        this.fullCost();
        if (this.ProductsService.products.length) {
            this.flag = false;
        }
        else {
            this.flag = true;
        }
    }
    sendingData(event) {
        if (!this.flag) {
            let dataSend = [event, this.ProductsService.products];
            this.HTTPService.postOrder(dataSend).subscribe((res) => {
                this.flagErrorSend = false;
            }, error => {
                this.flagErrorSend = true;
            });
        }
        else {
            alert("Карзина пуста");
        }
    }
}
BasketComponent.ɵfac = function BasketComponent_Factory(t) { return new (t || BasketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HTTPService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"])); };
BasketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BasketComponent, selectors: [["app-basket"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HTTPService"], _service_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 17, vars: 9, consts: [[1, "basket"], [1, "basket__table"], [1, "basket__item", "basket__item_header"], [1, "basket__title"], ["class", "basket__item", 3, "product", "deleteItem", "reSize", 4, "ngFor", "ngForOf"], ["class", "basket__empty", 4, "ngIf"], [1, "basket__item"], [1, "basket__form", 3, "data"], ["class", "basket__error", 4, "ngIf"], [1, "basket__item", 3, "product", "deleteItem", "reSize"], [1, "basket__empty"], [1, "basket__error"]], template: function BasketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041D\u0430\u0437\u0432\u0430 \u0442\u043E\u0432\u0430\u0440\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "C\u0443\u043C\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BasketComponent_app_basket_item_9_Template, 1, 1, "app-basket-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BasketComponent_p_10_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-basket-form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("data", function BasketComponent_Template_app_basket_form_data_15_listener($event) { return ctx.sendingData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BasketComponent_p_16_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ProductsService.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u041F\u043E\u0432\u043D\u0430 \u0441\u0443\u043C\u0430: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](14, 4, ctx.cost, "UAH", "symbol-narrow", "0.0"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flagErrorSend);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _basket_form_basket_form_component__WEBPACK_IMPORTED_MODULE_4__["BasketFormComponent"], _basket_item_basket_item_component__WEBPACK_IMPORTED_MODULE_5__["BasketItemComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: [".basket[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  padding: 10px;\n  padding-top: 50px;\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n}\n.basket__empty[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.basket__table[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  max-width: 1000px;\n  width: calc(100% - 20px);\n  padding: 10px;\n  border: 1px solid #ff9900;\n  border-radius: 20px;\n}\n.basket__item[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 5px;\n  display: flex;\n  justify-content: space-around;\n}\n.basket__title[_ngcontent-%COMP%] {\n  width: 100px;\n  margin: 5px;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n.basket__form[_ngcontent-%COMP%] {\n  color: #000;\n}\n.basket__error[_ngcontent-%COMP%] {\n  color: #ff0000;\n  text-align: center;\n  padding: 10px;\n}\n@media (max-width: 830px) {\n  .basket[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media (min-width: 520px) {\n  .basket__title[_ngcontent-%COMP%]:nth-child(1) {\n    min-width: 200px;\n  }\n}\n@media (max-width: 430px) {\n  .basket[_ngcontent-%COMP%] {\n    margin: 30px 0;\n    padding: 0;\n  }\n  .basket__table[_ngcontent-%COMP%] {\n    width: 100wv;\n    overflow: hidden;\n    border-radius: 0px;\n    border: none;\n    padding: 3px;\n  }\n  .basket__item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin: 10px 0;\n  }\n  .basket__item_header[_ngcontent-%COMP%] {\n    display: inline-flex;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  .basket__title[_ngcontent-%COMP%] {\n    margin: 3px;\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJhc2tldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlDQUFBO0VBRUEsYUFBQTtFQUNBLGlCQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUdJO0VBQ0ksa0JBQUE7QUFEUjtBQUlJO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFFQSx5QkFBQTtFQUNBLG1CQUFBO0FBSlI7QUFPQztFQUNPLGtCQUFBO0VBRUEsV0FBQTtFQUVBLGFBQUE7RUFDQSw2QkFBQTtBQVBSO0FBVUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUVBLHlCQUFBO0VBQ0EsaUJBQUE7QUFUUjtBQVlJO0VBQ0ksV0FBQTtBQVZSO0FBYUk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBWFI7QUFlQTtFQUNJO0lBQ0ksc0JBQUE7RUFaTjtBQUNGO0FBZ0JBO0VBQ0k7SUFDSSxnQkFBQTtFQWROO0FBQ0Y7QUFpQkE7RUFDSTtJQUNJLGNBQUE7SUFDQSxVQUFBO0VBZk47RUFpQkc7SUFDRixZQUFBO0lBRUEsZ0JBQUE7SUFFTSxrQkFBQTtJQUNOLFlBQUE7SUFFQSxZQUFBO0VBbEJEO0VBcUJBO0lBQ0Msc0JBQUE7SUFFQSxjQUFBO0VBcEJEO0VBc0JDO0lBQ0Msb0JBQUE7SUFDQSxtQkFBQTtJQUNBLDhCQUFBO0VBcEJGO0VBd0JHO0lBQ0YsV0FBQTtJQUNBLGVBQUE7RUF0QkQ7QUFDRiIsImZpbGUiOiJiYXNrZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFza2V0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICAmX19lbXB0eXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGFibGUge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjk5MDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIH1cclxuXHJcblx0Jl9faXRlbSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICBtYXJnaW46IDVweDtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJl9fdGl0bGV7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fZm9ybXtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgIH1cclxuXHJcbiAgICAmX19lcnJvcntcclxuICAgICAgICBjb2xvcjogI2ZmMDAwMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6ODMwcHgpe1xyXG4gICAgLmJhc2tldCB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6NTIwcHgpe1xyXG4gICAgLmJhc2tldF9fdGl0bGU6bnRoLWNoaWxkKDEpe1xyXG4gICAgICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjQzMHB4KXtcclxuICAgIC5iYXNrZXQge1xyXG4gICAgICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgXHQmX190YWJsZSB7XHJcblx0XHRcdHdpZHRoOiAxMDB3djtcclxuXHJcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgXHRcdGJvcmRlci1yYWRpdXM6IDBweDtcclxuXHRcdFx0Ym9yZGVyOiBub25lO1xyXG5cclxuXHRcdFx0cGFkZGluZzogM3B4O1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQmX19pdGVtIHtcdFxyXG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuXHRcdFx0bWFyZ2luOiAxMHB4IDA7XHJcblxyXG5cdFx0XHQmX2hlYWRlcntcclxuXHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuICAgIFx0Jl9fdGl0bGV7XHJcblx0XHRcdG1hcmdpbjogM3B4O1xyXG5cdFx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHR9XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasketComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-basket',
                templateUrl: './basket.component.html',
                styleUrls: ['./basket.component.scss'],
                providers: [_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HTTPService"], _service_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]]
            }]
    }], function () { return [{ type: _service_http_service__WEBPACK_IMPORTED_MODULE_1__["HTTPService"] }, { type: _service_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }]; }, null); })();


/***/ }),

/***/ "YIaO":
/*!*************************************!*\
  !*** ./src/app/pipe/searhc.pipe.ts ***!
  \*************************************/
/*! exports provided: SeathcPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeathcPipe", function() { return SeathcPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SeathcPipe {
    transform(products, value) {
        if (value == undefined || value == '') {
            return products;
        }
        else {
            let tmp = products.filter(product => {
                return product.title.toLowerCase().includes(value.toLowerCase());
            });
            return tmp || [{}];
        }
    }
}
SeathcPipe.ɵfac = function SeathcPipe_Factory(t) { return new (t || SeathcPipe)(); };
SeathcPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "search", type: SeathcPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeathcPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "search",
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _title_title_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./title/title.component */ "mnrT");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./card/card.component */ "mJ8H");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products/products.component */ "ziXE");
/* harmony import */ var _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-page/product-page.component */ "RspL");
/* harmony import */ var _error_list_error_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./error-list/error-list.component */ "ITxa");
/* harmony import */ var _basket_basket_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./basket/basket.component */ "WuYC");
/* harmony import */ var _basket_item_basket_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./basket-item/basket-item.component */ "Nr4/");
/* harmony import */ var _basket_form_basket_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./basket-form/basket-form.component */ "Kswc");
/* harmony import */ var _special_order_special_order_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./special-order/special-order.component */ "FxbT");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./comments/comments.component */ "f1Oy");
/* harmony import */ var _new_comments_new_comments_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./new-comments/new-comments.component */ "DUM2");
/* harmony import */ var _show_comment_show_comment_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./show-comment/show-comment.component */ "ZZGg");
/* harmony import */ var _pipe_searhc_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipe/searhc.pipe */ "YIaO");






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _title_title_component__WEBPACK_IMPORTED_MODULE_7__["TitleComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_9__["CardComponent"],
        _products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"],
        _pipe_searhc_pipe__WEBPACK_IMPORTED_MODULE_20__["SeathcPipe"],
        _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_11__["ProductPageComponent"],
        _error_list_error_list_component__WEBPACK_IMPORTED_MODULE_12__["ErrorListComponent"],
        _basket_basket_component__WEBPACK_IMPORTED_MODULE_13__["BasketComponent"],
        _basket_item_basket_item_component__WEBPACK_IMPORTED_MODULE_14__["BasketItemComponent"],
        _basket_form_basket_form_component__WEBPACK_IMPORTED_MODULE_15__["BasketFormComponent"],
        _special_order_special_order_component__WEBPACK_IMPORTED_MODULE_16__["SpecialOrderComponent"],
        _comments_comments_component__WEBPACK_IMPORTED_MODULE_17__["CommentsComponent"],
        _new_comments_new_comments_component__WEBPACK_IMPORTED_MODULE_18__["NewCommentsComponent"],
        _show_comment_show_comment_component__WEBPACK_IMPORTED_MODULE_19__["ShowCommentComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _title_title_component__WEBPACK_IMPORTED_MODULE_7__["TitleComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                    _card_card_component__WEBPACK_IMPORTED_MODULE_9__["CardComponent"],
                    _products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"],
                    _pipe_searhc_pipe__WEBPACK_IMPORTED_MODULE_20__["SeathcPipe"],
                    _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_11__["ProductPageComponent"],
                    _error_list_error_list_component__WEBPACK_IMPORTED_MODULE_12__["ErrorListComponent"],
                    _basket_basket_component__WEBPACK_IMPORTED_MODULE_13__["BasketComponent"],
                    _basket_item_basket_item_component__WEBPACK_IMPORTED_MODULE_14__["BasketItemComponent"],
                    _basket_form_basket_form_component__WEBPACK_IMPORTED_MODULE_15__["BasketFormComponent"],
                    _special_order_special_order_component__WEBPACK_IMPORTED_MODULE_16__["SpecialOrderComponent"],
                    _comments_comments_component__WEBPACK_IMPORTED_MODULE_17__["CommentsComponent"],
                    _new_comments_new_comments_component__WEBPACK_IMPORTED_MODULE_18__["NewCommentsComponent"],
                    _show_comment_show_comment_component__WEBPACK_IMPORTED_MODULE_19__["ShowCommentComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZZGg":
/*!********************************************************!*\
  !*** ./src/app/show-comment/show-comment.component.ts ***!
  \********************************************************/
/*! exports provided: ShowCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowCommentComponent", function() { return ShowCommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class ShowCommentComponent {
    constructor() { }
    ngOnInit() {
    }
}
ShowCommentComponent.ɵfac = function ShowCommentComponent_Factory(t) { return new (t || ShowCommentComponent)(); };
ShowCommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowCommentComponent, selectors: [["app-show-comment"]], inputs: { comm: "comm" }, decls: 9, vars: 5, consts: [[1, "show"], [1, "show__box"], [1, "show__title"], [1, "show__date"], [1, "show__text"]], template: function ShowCommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.comm.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, ctx.comm.date));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.comm.text);
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".show[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  padding: 10px;\n  max-width: 700px;\n  margin: 10px auto;\n  border-left: 5px #ff9900 solid;\n}\n.show__box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.show__title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 24px;\n}\n.show__text[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding: 10px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNob3ctY29tbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGlDQUFBO0VBRUcsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSw4QkFBQTtBQURKO0FBSUM7RUFDTyxhQUFBO0VBRUEsOEJBQUE7QUFIUjtBQU1DO0VBQ08seUJBQUE7RUFDQSxlQUFBO0FBSlI7QUFPQztFQUNPLGdCQUFBO0VBRUEsaUJBQUE7QUFOUiIsImZpbGUiOiJzaG93LWNvbW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvdyB7XHJcblx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcblxyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCAjZmY5OTAwIHNvbGlkO1xyXG5cclxuXHJcblx0Jl9fYm94IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0fVxyXG5cclxuXHQmX190aXRsZSB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcblx0fVxyXG5cclxuXHQmX190ZXh0IHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuXHR9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowCommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-show-comment',
                templateUrl: './show-comment.component.html',
                styleUrls: ['./show-comment.component.scss']
            }]
    }], function () { return []; }, { comm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Zp2r":
/*!********************************************!*\
  !*** ./src/app/service/cookies.service.ts ***!
  \********************************************/
/*! exports provided: CookieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return CookieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CookieService {
    constructor() {
        this.cookie = this.getCookieData(document.cookie.split(";").map(elem => {
            return elem.trim().split("=");
        }));
    }
    getCookieData(cook) {
        let obj = {};
        for (let c of cook)
            obj[c[0]] = c[1];
        return obj;
    }
    setCookieData(obj) {
        var _a, _b, _c, _d;
        document.cookie = `firstName=${(_a = obj.firstName) !== null && _a !== void 0 ? _a : ''}`;
        document.cookie = `lastName=${(_b = obj.lastName) !== null && _b !== void 0 ? _b : ''}`;
        document.cookie = `tel=${(_c = obj.tel.slice(0, 12)) !== null && _c !== void 0 ? _c : ''}`;
        document.cookie = `email=${(_d = obj.email) !== null && _d !== void 0 ? _d : ''}`;
    }
}
CookieService.ɵfac = function CookieService_Factory(t) { return new (t || CookieService)(); };
CookieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CookieService, factory: CookieService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CookieService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "a1aN":
/*!*********************************************!*\
  !*** ./src/app/service/products.service.ts ***!
  \*********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProductsService {
    constructor() {
        this.products = this.handlerLocalStorage();
    }
    handlerLocalStorage() {
        let data = [];
        for (let item in localStorage) {
            try {
                if (typeof localStorage[item] == "string") {
                    let tmp = JSON.parse(localStorage[item]);
                    tmp["name"] = item;
                    data.push(tmp);
                }
            }
            catch (_a) { }
        }
        return data;
    }
    newProduct(event) {
        let flag = true;
        this.products.forEach(item => {
            console.log(item.name, event.name);
            if (item.name == event.name) {
                flag = false;
            }
        });
        if (event && flag)
            this.products = [...this.products, event];
    }
    delete(event) {
        this.products = this.products.filter((item) => event != item.name);
    }
}
ProductsService.ɵfac = function ProductsService_Factory(t) { return new (t || ProductsService)(); };
ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductsService, factory: ProductsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "f1Oy":
/*!************************************************!*\
  !*** ./src/app/comments/comments.component.ts ***!
  \************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/http.service */ "9NvV");
/* harmony import */ var _new_comments_new_comments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../new-comments/new-comments.component */ "DUM2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _show_comment_show_comment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../show-comment/show-comment.component */ "ZZGg");







function CommentsComponent_div_2_app_show_comment_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-show-comment", 6);
} if (rf & 2) {
    const comment_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("comm", comment_r5);
} }
function CommentsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommentsComponent_div_2_app_show_comment_1_Template, 1, 1, "app-show-comment", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.comments);
} }
function CommentsComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u0440\u043E\u0431\u043B\u0435\u043C\u0438 \u0437 \u0434\u043E\u0441\u0442\u0443\u043F\u043E\u043C \u0434\u043E \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u0421\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443 !!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CommentsComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u0430 \u0434\u0430\u043D\u0438\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043D\u0435\u043C\u0430\u0454 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0456\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CommentsComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.comments = [];
        this.flagError = false;
    }
    ngOnInit() {
        this.httpService.getComment().subscribe(res => {
            for (let item of res) {
                this.comments.push(item);
            }
            this.flagError = false;
        }, err => {
            this.flagError = true;
        });
    }
    pushComment(data) {
        this.httpService.postComment(data).subscribe(res => {
            this.comments.push(data);
            this.flagError = false;
        }, err => {
            this.flagError = true;
        });
    }
}
CommentsComponent.ɵfac = function CommentsComponent_Factory(t) { return new (t || CommentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HTTPService"])); };
CommentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentsComponent, selectors: [["app-comments"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HTTPService"]])], decls: 6, vars: 3, consts: [[1, "comments"], [3, "setComment"], [4, "ngIf", "ngIfElse"], ["class", "errorServer", 4, "ngIf"], ["noComment", ""], [3, "comm", 4, "ngFor", "ngForOf"], [3, "comm"], [1, "errorServer"], [1, "error"]], template: function CommentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-new-comments", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("setComment", function CommentsComponent_Template_app_new_comments_setComment_1_listener($event) { return ctx.pushComment($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CommentsComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CommentsComponent_p_3_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CommentsComponent_ng_template_4_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.comments.length != 0)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flagError);
    } }, directives: [_new_comments_new_comments_component__WEBPACK_IMPORTED_MODULE_2__["NewCommentsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _show_comment_show_comment_component__WEBPACK_IMPORTED_MODULE_4__["ShowCommentComponent"]], styles: [".error[_ngcontent-%COMP%], .errorServer[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  color: #ff9900;\n  font-size: 24px;\n  text-transform: uppercase;\n  text-align: center;\n  padding: 10px;\n}\n\n.errorServer[_ngcontent-%COMP%] {\n  color: #ff0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbW1lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVDLGlDQUFBO0VBRUcsY0FBQTtFQUVBLGVBQUE7RUFFQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUZKOztBQUtBO0VBQ0ksY0FBQTtBQUZKIiwiZmlsZSI6ImNvbW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLFxyXG4uZXJyb3JTZXJ2ZXJ7XHJcblx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cclxuICAgIGNvbG9yOiAjZmY5OTAwO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmVycm9yU2VydmVye1xyXG4gICAgY29sb3I6ICNmZjAwMDA7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comments',
                templateUrl: './comments.component.html',
                styleUrls: ['./comments.component.scss'],
                providers: [_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HTTPService"]]
            }]
    }], function () { return [{ type: _service_http_service__WEBPACK_IMPORTED_MODULE_1__["HTTPService"] }]; }, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function (a0, a1) { return { fontSize: a0, lineHeight: a1 }; };
const _c1 = function (a0, a1) { return { height: a0, margin: a1 }; };
const _c2 = function (a0, a1, a2) { return { transform: a0, maxHeight: a1, lineHeight: a2 }; };
class HeaderComponent {
    constructor() {
        this.flag = window.innerWidth > 700;
        this.dynamicHeigthB = "";
        this.dynamicHeigthL = "";
        this.dynamicMarginB = "";
        this.dynamicFontSizeL = "";
    }
    onResize(event) {
        if (event.target.innerWidth > 700) {
            this.flag = true;
        }
        else {
            this.flag = false;
        }
    }
    onScroll() {
        let y = window.scrollY;
        if (y < 100) {
            this.dynamicHeigthB = `${40 - (y * 0.1)}px`;
            this.dynamicHeigthL = `${70 - (y * 0.3)}px`;
            this.dynamicMarginB = `${13 - (y * 0.08)}px ${13 + (y * 0.2)}px`;
            this.dynamicFontSizeL = `${46 - (y * 0.09)}px`;
        }
        else {
            let y = 100;
            this.dynamicHeigthB = `30px`;
            this.dynamicHeigthL = `40px`;
            this.dynamicMarginB = `5px 32px`;
            this.dynamicFontSizeL = `37px`;
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function HeaderComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("scroll", function HeaderComponent_scroll_HostBindingHandler() { return ctx.onScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 28, vars: 13, consts: [[1, "header"], [1, "header__logo", 3, "ngStyle"], [1, "header__burger", "burger", 3, "ngStyle", "click"], [1, "burger__line"], [1, "header__nav"], [1, "nav", 3, "ngStyle"], ["routerLink", "/", "routerLinkActive", "nav__item_active", 1, "nav__item"], ["routerLink", "/basket", "routerLinkActive", "nav__item_active", 1, "nav__item"], ["routerLink", "/order", "routerLinkActive", "nav__item_active", 1, "nav__item"], ["routerLink", "/products", "routerLinkActive", "nav__item_active", 1, "nav__item"], ["routerLink", "/comments", "routerLinkActive", "nav__item_active", 1, "nav__item"], [1, "plug"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "retzel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_6_listener() { return ctx.flag = !ctx.flag; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0433\u043E\u043B\u043E\u0432\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u043A\u043E\u0448\u0438\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0441\u043F\u0435\u0446 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0456");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx.dynamicFontSizeL, ctx.dynamicHeigthL));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c1, ctx.dynamicHeigthB, ctx.dynamicMarginB));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](9, _c2, ctx.flag ? "scale(1, 1)" : "scale(1, 0)", ctx.flag ? "" : "0px", ctx.dynamicHeigthL));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.header[_ngcontent-%COMP%] {\n  z-index: 9999999;\n  position: fixed;\n  top: 0;\n  min-width: 320px;\n  width: 100%;\n  background-color: #1b1c1d;\n  display: flex;\n  justify-content: space-around;\n}\n\n.header__logo[_ngcontent-%COMP%] {\n  transition: 0.5s ease-in;\n  display: flex;\n  justify-content: center;\n  font-size: 46px;\n  line-height: 70px;\n  color: #f5f5f5;\n}\n\n.header__logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ff9900;\n}\n\n.nav[_ngcontent-%COMP%] {\n  transition: 0.5s ease-in;\n  text-align: center;\n  display: inline-flex;\n  line-height: 70px;\n}\n\n.nav__item[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #1b1c1d;\n}\n\n.nav__item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  height: 100%;\n  padding: 10px;\n}\n\n.nav__item_active[_ngcontent-%COMP%] {\n  background-color: #ff9900;\n}\n\n.nav__item[_ngcontent-%COMP%]:hover {\n  background-color: #ff9900;\n  transition: 0.5s ease-in;\n}\n\n.burger[_ngcontent-%COMP%] {\n  display: none;\n  transition: 0.5s ease-in;\n  width: 55px;\n  height: 40px;\n  border: 1px solid;\n  margin: 13px;\n  border-radius: 10px;\n  justify-content: space-around;\n  flex-direction: column;\n}\n\n.burger__line[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  height: 3px;\n  width: 60%;\n  border-radius: 4px;\n  background-color: #f5f5f5;\n}\n\n.burger[_ngcontent-%COMP%]:hover {\n  color: black;\n  background-color: #ff9900;\n}\n\n@media (max-width: 750px) {\n  .burger[_ngcontent-%COMP%] {\n    display: inline-flex;\n  }\n\n  .header[_ngcontent-%COMP%] {\n    text-align: center;\n    display: block;\n  }\n\n  .nav[_ngcontent-%COMP%] {\n    background-color: #fff;\n    display: block;\n    perspective: 300;\n    transform-origin: top;\n    transform: scale(1, 0);\n    max-height: 0px;\n  }\n}\n\n.plug[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNDLGlDQUFBO0FBRkQ7O0FBS0E7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBRUEsZ0JBQUE7RUFDQSxXQUFBO0VBRUEseUJBZmM7RUFpQmQsYUFBQTtFQUNBLDZCQUFBO0FBTEQ7O0FBT0M7RUFDQyx3QkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUVBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7QUFSRjs7QUFVRTtFQUFLLGNBOUJXO0FBdUJsQjs7QUFVQTtFQUNDLHdCQUFBO0VBRUEsa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBUkQ7O0FBVUM7RUFFQyxrQkFBQTtFQUNBLHlCQTVDYTtBQW1DZjs7QUFXRTtFQUNDLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFUSDs7QUFZRTtFQUNDLHlCQXBEZTtBQTBDbEI7O0FBY0M7RUFDQyx5QkF6RGdCO0VBMERoQix3QkFBQTtBQVpGOztBQWdCQTtFQUNDLGFBQUE7RUFFQSx3QkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBRUEsbUJBQUE7RUFFQSw2QkFBQTtFQUNBLHNCQUFBO0FBakJEOztBQW9CQztFQUNDLGNBQUE7RUFFQSxXQUFBO0VBQ0EsVUFBQTtFQUVBLGtCQUFBO0VBRUEseUJBQUE7QUFyQkY7O0FBMkJBO0VBQ0MsWUFBQTtFQUNBLHlCQTlGaUI7QUFzRWxCOztBQTJCQTtFQUNDO0lBQ0Msb0JBQUE7RUF4QkE7O0VBMkJEO0lBQ0Msa0JBQUE7SUFDQSxjQUFBO0VBeEJBOztFQTJCRDtJQUNDLHNCQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBRUEscUJBQUE7SUFDQSxzQkFBQTtJQUNBLGVBQUE7RUF6QkE7QUFDRjs7QUE0QkE7RUFDQyxZQUFBO0VBQ0EsV0FBQTtBQTFCRCIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3JIZWFkZXIgOiAjMWIxYzFkO1xyXG4kc2hhZGUtb2YteWVsbG93OiAjZmY5OTAwO1xyXG5cclxuKntcclxuXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG5cdHotaW5kZXg6IDk5OTk5OTk7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMDtcclxuXHJcblx0bWluLXdpZHRoOiAzMjBweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiRjb2xvckhlYWRlcjtcclxuXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcblx0Jl9fbG9nbyB7XHJcblx0XHR0cmFuc2l0aW9uOiAuNXMgZWFzZS1pbjtcclxuXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG5cdFx0Zm9udC1zaXplOiA0NnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDcwcHg7XHJcblxyXG5cdFx0Y29sb3I6ICNmNWY1ZjU7XHJcblxyXG5cdFx0c3Bhbntjb2xvcjokc2hhZGUtb2YteWVsbG93fVxyXG5cdH1cclxufVxyXG4ubmF2IHtcclxuXHR0cmFuc2l0aW9uOiAuNXMgZWFzZS1pbjtcclxuXHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG5cdGxpbmUtaGVpZ2h0OiA3MHB4O1xyXG5cclxuXHQmX19pdGVtIHtcclxuXHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JIZWFkZXI7XHJcblx0XHRcclxuXHRcdGF7XHJcblx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0cGFkZGluZzogIDEwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0Jl9hY3RpdmUge1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiRzaGFkZS1vZi15ZWxsb3c7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdCZfX2l0ZW06aG92ZXIge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjokc2hhZGUtb2YteWVsbG93O1xyXG5cdFx0dHJhbnNpdGlvbjogLjVzIGVhc2UtaW47XHJcblx0fVxyXG59XHJcblxyXG4uYnVyZ2VyIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG5cclxuXHR0cmFuc2l0aW9uOiAuNXMgZWFzZS1pbjtcclxuXHJcblx0d2lkdGg6IDU1cHg7XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkO1xyXG5cdG1hcmdpbjogMTNweDtcclxuXHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcclxuXHJcblx0Jl9fbGluZSB7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHJcblx0XHRoZWlnaHQ6IDNweDtcclxuXHRcdHdpZHRoOiA2MCU7XHJcblxyXG5cdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcblxyXG5cdFx0XHJcblx0fVxyXG59XHJcblxyXG4uYnVyZ2VyOmhvdmVye1xyXG5cdGNvbG9yOiBibGFjaztcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkc2hhZGUtb2YteWVsbG93O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo3NTBweCl7XHJcblx0LmJ1cmdlciB7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuXHR9XHJcblxyXG5cdC5oZWFkZXIge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0fVxyXG5cclxuXHQubmF2IHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdHBlcnNwZWN0aXZlOiAzMDA7XHJcblx0XHRcclxuXHRcdHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuXHRcdHRyYW5zZm9ybTogc2NhbGUoMSwgMCk7XHJcblx0XHRtYXgtaGVpZ2h0OiAwcHg7XHJcblx0XHRcclxuXHR9XHJcbn1cclxuLnBsdWd7XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], null, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }], onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll']
        }] }); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 13, vars: 0, consts: [[1, "footer"], [1, "footer__box"], [1, "footer__text", "footer__text_heading"], [1, "footer__text"], [1, "footer__text_heading"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "email: lfybk.ua@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "tel: +380 734 11 7094");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0420\u043E\u0437\u0440\u043E\u0431\u043D\u0438\u043A \u0441\u0430\u0439\u0442\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ": VaRenDan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  background-color: #1b1c1d;\n  color: #f5f5f5;\n  font-family: \"Roboto\", sans-serif;\n  display: flex;\n  justify-content: space-around;\n}\n.footer__text[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.footer__text_heading[_ngcontent-%COMP%] {\n  color: #ff9900;\n}\n@media (max-width: 470px) {\n  .footer[_ngcontent-%COMP%] {\n    display: block;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUVILGlDQUFBO0VBRUcsYUFBQTtFQUVBLDZCQUFBO0FBRko7QUFJSTtFQUNJLGFBQUE7QUFGUjtBQUlRO0VBQ0ksY0FBQTtBQUZaO0FBUUE7RUFDSTtJQUNJLGNBQUE7SUFDQSxrQkFBQTtFQUxOO0FBQ0YiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxYzFkO1xyXG4gICAgY29sb3I6ICNmNWY1ZjU7XHJcblxyXG5cdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuICAgICZfX3RleHR7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICAgICAgJl9oZWFkaW5neyBcclxuICAgICAgICAgICAgY29sb3I6ICNmZjk5MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NDcwcHgpe1xyXG4gICAgLmZvb3RlciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "mJ8H":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { backgroundImage: a0 }; };
class CardComponent {
    getUrlImag(image) {
        return `url("${image}")`;
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { product: "product" }, decls: 9, vars: 5, consts: [[1, "card", 3, "ngStyle"], [1, "card__content"], [1, "card__box"], [1, "card__title"], [1, "card__price"], [1, "card__btn"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0412 \u043A\u043E\u0448\u0438\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.getUrlImag(ctx.product.img)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.product.price, " UAH");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".card[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  width: 250px;\n  height: 250px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n.card__content[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.6);\n  text-align: center;\n  height: 0px;\n  transition: 0.5s ease-in;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.card__title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.card__title[_ngcontent-%COMP%], .card__price[_ngcontent-%COMP%] {\n  color: #f5f5f5;\n  font-size: 18px;\n  margin: 10px;\n}\n.card__btn[_ngcontent-%COMP%] {\n  width: 150px;\n  padding: 10px;\n  margin: 15px auto;\n  border: solid 1px #f5f5f5;\n  border-radius: 5px;\n  color: #f5f5f5;\n  background-color: #ff9900;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 18px;\n  transition: ease-in 0.5s;\n}\n.card__btn[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n  color: #ff9900;\n}\n.card[_ngcontent-%COMP%]:hover    > div[_ngcontent-%COMP%] {\n  height: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxpQ0FBQTtFQUVHLFlBQUE7RUFDQSxhQUFBO0VBRUEsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FBREo7QUFHQztFQUNJLG9DQUFBO0VBRUcsa0JBQUE7RUFFQSxXQUFBO0VBRUEsd0JBQUE7RUFFQSxnQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBTlI7QUFTQztFQUNPLHlCQUFBO0FBUFI7QUFVSTtFQUVJLGNBQUE7RUFDQSxlQUFBO0VBRUEsWUFBQTtBQVZSO0FBYUM7RUFDTyxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBRUEseUJBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7RUFDQSx5QkFBQTtFQUVBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBRUEsd0JBQUE7QUFmUjtBQWlCSTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQWZSO0FBbUJBO0VBQ0ksYUFBQTtBQWhCSiIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG5cdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG5cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxuXHQmX19jb250ZW50IHtcclxuICAgIFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG5cclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGhlaWdodDogMHB4O1xyXG5cclxuICAgICAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZS1pbjtcclxuXHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcblx0Jl9fdGl0bGUge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGl0bGUsXHJcbiAgICAmX19wcmljZSB7XHJcbiAgICAgICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG5cclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcblx0fVxyXG5cclxuXHQmX19idG4ge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMTVweCBhdXRvO1xyXG5cclxuICAgICAgICBib3JkZXI6c29saWQgMXB4ICNmNWY1ZjU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgICAgICBjb2xvcjogI2Y1ZjVmNTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5OTAwO1xyXG5cclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbiAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbiAuNXM7XHJcbiAgICB9XHJcbiAgICAmX19idG46aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O1xyXG4gICAgICAgIGNvbG9yOiNmZjk5MDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyPmRpdiB7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss']
            }]
    }], null, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "mnrT":
/*!******************************************!*\
  !*** ./src/app/title/title.component.ts ***!
  \******************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TitleComponent {
}
TitleComponent.ɵfac = function TitleComponent_Factory(t) { return new (t || TitleComponent)(); };
TitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TitleComponent, selectors: [["app-title"]], decls: 6, vars: 0, consts: [[1, "header-section"], [1, "header-section__box"], [1, "header-section__title"], [1, "header-section__text"]], template: function TitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "BAKED FRESH DAILY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "WE ARE EXCITED TO COOK FOR YOU TODAY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".header-section[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 40px);\n  background-image: url('banner.jpg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  text-transform: uppercase;\n}\n.header-section__title[_ngcontent-%COMP%] {\n  color: #f5f5f5;\n  font-size: 40px;\n}\n.header-section__box[_ngcontent-%COMP%] {\n  position: relative;\n  top: calc(100vh - 40px - 50%);\n  text-align: center;\n}\n.header-section__text[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-weight: bold;\n  color: #ff9900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRpdGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0MsV0FBQTtFQUNBLDBCQUFBO0VBRUEsbUNBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFFQSx5QkFBQTtBQUxEO0FBT0M7RUFDQyxjQUFBO0VBQ0EsZUFBQTtBQUxGO0FBUUM7RUFDQyxrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFORjtBQVNDO0VBQ0MsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBM0JnQjtBQW9CbEIiLCJmaWxlIjoidGl0bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJGNvbG9ySGVhZGVyIDogIzFiMWMxZDtcclxuJHNoYWRlLW9mLXllbGxvdzogI2ZmOTkwMDtcclxuXHJcbi5oZWFkZXItc2VjdGlvbiB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDBweCk7XHJcblx0XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2Jhbm5lci5qcGdcIik7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG5cclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuXHQmX190aXRsZSB7XHJcblx0XHRjb2xvcjogI2Y1ZjVmNTtcclxuXHRcdGZvbnQtc2l6ZTogNDBweDtcclxuXHR9XHJcblxyXG5cdCZfX2JveHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHRvcDogY2FsYygxMDB2aCAtIDQwcHggLSA1MCUpO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0Jl9fdGV4dCB7XHJcblx0XHRtYXJnaW4tdG9wOjIwcHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdGNvbG9yOiAkc2hhZGUtb2YteWVsbG93IDtcclxuXHR9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-title',
                templateUrl: './title.component.html',
                styleUrls: ['./title.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _basket_basket_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basket/basket.component */ "WuYC");
/* harmony import */ var _title_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./title/title.component */ "mnrT");
/* harmony import */ var _special_order_special_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./special-order/special-order.component */ "FxbT");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/products.component */ "ziXE");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comments/comments.component */ "f1Oy");









const routes = [
    { path: '', component: _title_title_component__WEBPACK_IMPORTED_MODULE_3__["TitleComponent"] },
    { path: 'basket', component: _basket_basket_component__WEBPACK_IMPORTED_MODULE_2__["BasketComponent"] },
    { path: "order", component: _special_order_special_order_component__WEBPACK_IMPORTED_MODULE_4__["SpecialOrderComponent"] },
    { path: "products", component: _products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"] },
    { path: "comments", component: _comments_comments_component__WEBPACK_IMPORTED_MODULE_6__["CommentsComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();
const routingComponents = [
    _title_title_component__WEBPACK_IMPORTED_MODULE_3__["TitleComponent"],
    _basket_basket_component__WEBPACK_IMPORTED_MODULE_2__["BasketComponent"],
    _special_order_special_order_component__WEBPACK_IMPORTED_MODULE_4__["SpecialOrderComponent"],
    _products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"],
    _comments_comments_component__WEBPACK_IMPORTED_MODULE_6__["CommentsComponent"]
];


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "ziXE":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/http.service */ "9NvV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product-page/product-page.component */ "RspL");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../card/card.component */ "mJ8H");
/* harmony import */ var _error_list_error_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../error-list/error-list.component */ "ITxa");
/* harmony import */ var _pipe_searhc_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipe/searhc.pipe */ "YIaO");










function ProductsComponent_app_product_page_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-product-page", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("exit", function ProductsComponent_app_product_page_3_Template_app_product_page_exit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.flag = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", ctx_r0.productPage);
} }
function ProductsComponent_div_4_app_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_div_4_app_card_1_Template_app_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const p_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.open(p_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", p_r7);
} }
function ProductsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsComponent_div_4_app_card_1_Template, 1, 1, "app-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r1.products, ctx_r1.searchstr));
} }
function ProductsComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-error-list", 10);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorMessege", ctx_r3.errorHttpMes);
} }
class ProductsComponent {
    constructor(HTTPService) {
        this.HTTPService = HTTPService;
        this.searchstr = "";
        this.productPage = [];
        this.flag = false;
        this.errorFlag = true;
        this.errorHttpMes = {
            title: '402',
            body: 'Проблема доступу до сервера!!'
        };
    }
    ngOnInit() {
        this.HTTPService.getPraducts().subscribe(products => {
            this.products = products;
            console.log(products);
        }, (error) => {
            this.errorFlag = false;
        });
    }
    open(p) {
        this.flag = true;
        this.productPage = p;
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HTTPService"])); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HTTPService"]])], decls: 7, vars: 4, consts: [[1, "section-products"], ["type", "text", "placeholder", "Search", 1, "section-products__input", 3, "ngModel", "ngModelChange"], [1, "section-products__container"], [3, "product", "exit", 4, "ngIf"], ["class", "section-products__box", 4, "ngIf", "ngIfElse"], ["errorBlock", ""], [3, "product", "exit"], [1, "section-products__box"], ["class", "section-products__item", 3, "product", "click", 4, "ngFor", "ngForOf"], [1, "section-products__item", 3, "product", "click"], [3, "errorMessege"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductsComponent_Template_input_ngModelChange_1_listener($event) { return ctx.searchstr = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductsComponent_app_product_page_3_Template, 1, 1, "app-product-page", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductsComponent_div_4_Template, 3, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductsComponent_ng_template_5_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchstr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorFlag)("ngIfElse", _r2);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_4__["ProductPageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"], _error_list_error_list_component__WEBPACK_IMPORTED_MODULE_6__["ErrorListComponent"]], pipes: [_pipe_searhc_pipe__WEBPACK_IMPORTED_MODULE_7__["SeathcPipe"]], styles: [".section-products__input[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 40px 30px;\n  max-width: 290px;\n  width: calc(100% - 80px);\n  border: none;\n  border-bottom: solid 1px #ff9900;\n  font-size: 24px;\n}\n.section-products__box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.section-products__container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n.section-products__item[_ngcontent-%COMP%] {\n  margin: 10px;\n  box-shadow: 0px 0px 25px #cccccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdDO0VBQ0Msa0JBQUE7RUFFQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFFTSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBSlI7QUFPQztFQUNDLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBTEY7QUFRQztFQUNDLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFORjtBQVVDO0VBQ0MsWUFBQTtFQUNBLGdDQUFBO0FBUkYiLCJmaWxlIjoicHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1wcm9kdWN0cyB7XHJcblxyXG5cclxuXHQmX19pbnB1dCB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG5cdFx0bWFyZ2luOiA0MHB4IDMwcHg7XHJcblx0XHRtYXgtd2lkdGg6IDI5MHB4O1xyXG5cdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xyXG5cclxuICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2ZmOTkwMDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcblx0fVxyXG5cclxuXHQmX19ib3h7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblxyXG5cdCZfX2NvbnRhaW5lciB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0fVxyXG5cclxuXHJcblx0Jl9faXRlbSB7XHJcblx0XHRtYXJnaW46IDEwcHg7XHJcblx0XHRib3gtc2hhZG93OiAwcHggMHB4IDI1cHggI2NjY2NjYztcclxuXHR9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products',
                templateUrl: './products.component.html',
                styleUrls: ['./products.component.scss'],
                providers: [_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HTTPService"]]
            }]
    }], function () { return [{ type: _service_http_service__WEBPACK_IMPORTED_MODULE_1__["HTTPService"] }]; }, null); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map