(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/welcome.component.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/welcome.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n        <div class=\"card-header\">\r\n          {{pageTitle}}\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"container-fluid\">\r\n            <div class=\"text-center\">\r\n              <img src=\"./assets/images/logo.jpg\"\r\n                   class=\"img-responsive center-block\"\r\n                   style=\"max-height:300px;padding-bottom:50px\" />\r\n            </div>\r\n      \r\n            <div class=\"text-center\">Developed by:</div>\r\n            <div class=\"text-center\">\r\n              <h3>Sukhber</h3>\r\n            </div>\r\n      \r\n            <div class=\"text-center\">@sukhber</div>\r\n            <div class=\"text-center\">\r\n              <a href=\"https://github.com/sukhber\">www.github.com/sukhber</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/product-detail.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/product-detail.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'card' *ngIf = 'product'>\n    <div class = 'card-header'>\n        {{ pageTitle + ': ' + product.productName}}\n    </div>\n    <div class = 'card-body'> \n        <div class = 'row'>\n            <div class = 'col-md-8'>\n\n                <div class = 'row'>\n                    <div class = 'col-md-4'>Name: </div>\n                    <div class = 'col-md-8'>{{ product.productName }}</div>\n                </div>\n\n                <div class = 'row'>\n                        <div class = 'col-md-4'>Code: </div>\n                        <div class = 'col-md-8'>{{ product.productCode | lowercase | convertToSpaces : '-' }}</div>\n                </div>\n\n                <div class = 'row'>\n                        <div class = 'col-md-4'>Description: </div>\n                        <div class = 'col-md-8'>{{ product.description }}</div>\n                </div>\n\n                <div class = 'row'>\n                        <div class = 'col-md-4'>Availability: </div>\n                        <div class = 'col-md-8'>{{ product.releaseDate }}</div>\n                </div>\n\n                <div class = 'row'>\n                        <div class = 'col-md-4'>Price: </div>\n                        <div class = 'col-md-8'>{{ product.price | currency : USD : symbol : '1.2-2' }}</div>\n                </div>\n\n                <div class = 'row'>\n                        <div class = 'col-md-4'>5 Star Rating: </div>\n                        <div class = 'col-md-8'><pm-star [rating] = 'product.starRating'></pm-star></div>\n                </div>\n\n            </div>\n            <div class = 'col-md-4'>\n                <img class = 'center-block img-responsive'\n                    [style.width.px] = '200'\n                    [style.margin.px] = '2'\n                    [src] = 'product.imageUrl'\n                    [title] = 'product.productName'>\n            </div>\n        </div>\n    </div>\n    <div class = 'card-footer'>\n        <button class = 'btn btn-outline-secondary' (click) = 'onBack()' style = 'width: 80px'> \n            <i class = 'fa fa-chevron-left'></i>\n            Back\n        </button>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/product-list.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/product-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='card'>\n    <div class='card-header'>\n        <span>{{pageTitle}}</span>\n        <span class='rating-message'>{{ratingMessage}}</span>\n    </div>\n    <div class='card-body'>\n        <div class='row'>\n            <div class='col-md-2'>Filter by:</div>\n            <div class='col-md-3'>\n                <select [(ngModel)] = 'filterOption'>\n                    <option value = 'all'></option>\n                    <option value = 'name'>Product Name</option>\n                    <option value = 'code'>Code</option>\n                    <option value = 'availableDate'>Available Date</option>\n                    <option value = 'price'>Price</option>\n                    <option value = 'rating'>Rating</option>\n                </select>\n            </div>\n            <div class='col-md-4'>\n                <input type='text' [(ngModel)] = 'listFilter'/>\n            </div>\n        </div>\n        <div class='row'>\n            <div class='col-md-6'>\n                <h4>Filtered by: {{ filterOption | titlecase }}</h4>\n            </div>\n        </div>\n        <div class='table-responsive'>\n            <table class='table'>\n                <thead>\n                    <tr>\n                        <th>\n                            <button class='btn btn-primary' (click) = 'toggleImage()'>\n                                {{ buttonText }} \n                            </button>\n                        </th>\n                        <th>Product</th>\n                        <th>Code</th>\n                        <th>Available</th>\n                        <th>Price</th>\n                        <th>5 Star Rating</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor = 'let product of filteredProducts'>\n                        <td> \n                            <img *ngIf = 'showImage'\n                                [src] = 'product.imageUrl' \n                                [style.width.px] = 'imageWidth'\n                                [style.margin.px] = 'imageMargin' />\n                        </td>\n                        <td>\n                            <a [routerLink] = \"['/products', product.productId]\">\n                                {{ product.productName }}\n                            </a>\n                        </td>\n                        <td>{{ product.productCode | lowercase | convertToSpaces : '-' }}</td>\n                        <td>{{ product.releaseDate }}</td>\n                        <td>{{ product.price | currency : USD : symbol : '1.2-2' }}</td>\n                        <td><pm-star [rating] = 'product.starRating' (ratingClicked) = 'onRatingClicked($event)'></pm-star></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/star.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/star.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div \r\n    class='crop' \r\n    [style.width.px] = 'starWidth' \r\n    [title] = 'rating' \r\n    (click) = 'onClick()' >\r\n    <div style = \"width: 75px\">\r\n        <span class=\"fa fa-star\"></span>\r\n        <span class=\"fa fa-star\"></span>\r\n        <span class=\"fa fa-star\"></span>\r\n        <span class=\"fa fa-star\"></span>\r\n        <span class=\"fa fa-star\"></span>\r\n    </div>\r\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/welcome.component */ "./src/app/home/welcome.component.ts");




var routes = [
    { path: 'welcome', component: _home_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pageTitle = 'Acme Product Management';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pm-root',
            template: "\n    <nav class = 'navbar navbar-expand navbar-light bg-light'>\n      <a class = 'navbar-brand'>{{pageTitle}}</a>\n      <ul class = 'nav nav-pills'>\n        <li><a class = 'nav-link' [routerLink] = \"['/welcome']\">Home</a></li>\n        <li><a class = 'nav-link btn btn-primary' [routerLink] = \"['/products']\">Product List</a></li>\n      </ul>\n    </nav>\n    <div class = 'container'>\n      <router-outlet></router-outlet>\n    </div>\n  "
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _home_welcome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/welcome.component */ "./src/app/home/welcome.component.ts");
/* harmony import */ var _products_product_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products/product.module */ "./src/app/products/product.module.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _products_product_module__WEBPACK_IMPORTED_MODULE_7__["ProductModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/welcome.component.ts":
/*!*******************************************!*\
  !*** ./src/app/home/welcome.component.ts ***!
  \*******************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
        this.pageTitle = 'Welcome';
    }
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/welcome.component.html")
        })
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/products/product-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/products/product-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/products/product-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/products/product-detail.component.ts ***!
  \******************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.service */ "./src/app/products/product.service.ts");




var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(route, router, productService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.pageTitle = 'Product Detail';
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var param = +this.route.snapshot.paramMap.get('id');
        if (param) {
            var id = +param;
            this.getProduct(id);
        }
    };
    ProductDetailComponent.prototype.getProduct = function (id) {
        var _this = this;
        this.productService.getProduct(id).subscribe({
            next: function (product) { return _this.product = product; },
            error: function (err) { return _this.errorMessage = err; }
        });
    };
    ProductDetailComponent.prototype.onBack = function () {
        this.router.navigate(['/products']);
    };
    ;
    ProductDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }
    ]; };
    ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./product-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/products/product-detail.component.css")]
        })
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/products/product-detail.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/products/product-detail.guard.ts ***!
  \**************************************************/
/*! exports provided: ProductDetailGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailGuard", function() { return ProductDetailGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ProductDetailGuard = /** @class */ (function () {
    function ProductDetailGuard(router) {
        this.router = router;
    }
    ProductDetailGuard.prototype.canActivate = function (next, state) {
        var id = +next.url[1].path;
        if (isNaN(id) || id < 1) {
            alert('Invalid Product Id');
            this.router.navigate(['/products']);
            return false;
        }
        ;
        return true;
    };
    ProductDetailGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ProductDetailGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ProductDetailGuard);
    return ProductDetailGuard;
}());



/***/ }),

/***/ "./src/app/products/product-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/products/product-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rating-message {\r\n    color: #ff0000;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmF0aW5nLW1lc3NhZ2Uge1xyXG4gICAgY29sb3I6ICNmZjAwMDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/products/product-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/products/product-list.component.ts ***!
  \****************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.service */ "./src/app/products/product.service.ts");



var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService) {
        this.productService = productService;
        this.pageTitle = 'Product List ';
        this.imageWidth = 60;
        this.imageMargin = 5;
        this.showImage = true;
        this.buttonText = 'Hide Image';
        this.filterOption = 'all';
        this.listFilter = '';
    }
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
        this.buttonText = this.showImage ? 'Hide Image' : 'Show Image';
    };
    ;
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().subscribe({
            next: function (products) {
                _this.products = products;
            },
            error: function (err) {
                _this.errorMessage = err;
            }
        });
    };
    ;
    ;
    Object.defineProperty(ProductListComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        set: function (value) {
            this._listFilter = value;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(ProductListComponent.prototype, "filteredProducts", {
        get: function () {
            var _this = this;
            if (this.filterOption === 'all') {
                this._filteredProducts = this.products;
            }
            else if (this.filterOption === 'name') {
                this._filteredProducts = this.products.filter(function (product) { return product.productName.toLocaleLowerCase().indexOf(_this.listFilter.toLocaleLowerCase()) !== -1; });
            }
            else if (this.filterOption === 'code') {
                this._filteredProducts = this.products.filter(function (product) { return product.productCode.toLocaleLowerCase().indexOf(_this.listFilter.toLocaleLowerCase()) !== -1; });
            }
            else if (this.filterOption === 'availableDate') {
                this._filteredProducts = this.products.filter(function (product) { return product.releaseDate.toLocaleLowerCase().indexOf(_this.listFilter.toLocaleLowerCase()) !== -1; });
            }
            else if (this.filterOption === 'price') {
                this._filteredProducts = this.products.filter(function (product) { return product.price.toLocaleString().indexOf(_this.listFilter) !== -1; });
            }
            else if (this.filterOption === 'rating') {
                this._filteredProducts = this.products.filter(function (product) { return product.starRating.toLocaleString().indexOf(_this.listFilter) !== -1; });
            }
            return this._filteredProducts;
        },
        set: function (value) {
            this._filteredProducts = value;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ProductListComponent.prototype.onRatingClicked = function (message) {
        this.ratingMessage = message;
    };
    ;
    ProductListComponent.ctorParameters = function () { return [
        { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
    ]; };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/products/product-list.component.css")]
        })
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/products/product-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/products/product-routing.module.ts ***!
  \****************************************************/
/*! exports provided: ProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function() { return ProductRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-list.component */ "./src/app/products/product-list.component.ts");
/* harmony import */ var _product_detail_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-detail.guard */ "./src/app/products/product-detail.guard.ts");
/* harmony import */ var _product_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-detail.component */ "./src/app/products/product-detail.component.ts");







var routes = [
    { path: 'products', component: _product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"] },
    { path: 'products/:id',
        canActivate: [_product_detail_guard__WEBPACK_IMPORTED_MODULE_5__["ProductDetailGuard"]],
        component: _product_detail_component__WEBPACK_IMPORTED_MODULE_6__["ProductDetailComponent"] }
];
var ProductRoutingModule = /** @class */ (function () {
    function ProductRoutingModule() {
    }
    ProductRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], ProductRoutingModule);
    return ProductRoutingModule;
}());



/***/ }),

/***/ "./src/app/products/product.module.ts":
/*!********************************************!*\
  !*** ./src/app/products/product.module.ts ***!
  \********************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list.component */ "./src/app/products/product-list.component.ts");
/* harmony import */ var _shared_convert_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/convert-to-spaces.pipe */ "./src/app/shared/convert-to-spaces.pipe.ts");
/* harmony import */ var _product_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-detail.component */ "./src/app/products/product-detail.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-routing.module */ "./src/app/products/product-routing.module.ts");







var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"], _shared_convert_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_3__["ConvertToSpacesPipe"], _product_detail_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailComponent"]],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _product_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProductRoutingModule"]
            ]
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/products/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/products/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.productUrl = 'api/products/product.json';
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get(this.productUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ;
    ProductService.prototype.getProduct = function (id) {
        return this.getProducts()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (products) { return products.find(function (p) { return p.productId === id; }); }));
    };
    ;
    ;
    ProductService.prototype.handleError = function (err) {
        var errorMessage = '';
        //client-side or network error handling
        if (err.error instanceof ErrorEvent) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        //server-side error handling
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    ;
    ProductService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/shared/convert-to-spaces.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/convert-to-spaces.pipe.ts ***!
  \**************************************************/
/*! exports provided: ConvertToSpacesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertToSpacesPipe", function() { return ConvertToSpacesPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConvertToSpacesPipe = /** @class */ (function () {
    function ConvertToSpacesPipe() {
    }
    ConvertToSpacesPipe.prototype.transform = function (value, character) {
        return value.replace(character, ' ');
    };
    ;
    ConvertToSpacesPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'convertToSpaces'
        })
    ], ConvertToSpacesPipe);
    return ConvertToSpacesPipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _star_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./star.component */ "./src/app/shared/star.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_star_component__WEBPACK_IMPORTED_MODULE_3__["StarComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _star_component__WEBPACK_IMPORTED_MODULE_3__["StarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/star.component.css":
/*!*******************************************!*\
  !*** ./src/app/shared/star.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crop {\r\n    overflow: hidden;\r\n}\r\ndiv {\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N0YXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zdGFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JvcCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbmRpdiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/star.component.ts":
/*!******************************************!*\
  !*** ./src/app/shared/star.component.ts ***!
  \******************************************/
/*! exports provided: StarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarComponent", function() { return StarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var StarComponent = /** @class */ (function () {
    function StarComponent() {
        this.ratingClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    StarComponent.prototype.ngOnChanges = function () {
        this.starWidth = this.rating * 75 / 5;
    };
    ;
    StarComponent.prototype.onClick = function () {
        this.ratingClicked.emit("The star rating " + this.rating + " was clicked");
    };
    ;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], StarComponent.prototype, "rating", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], StarComponent.prototype, "ratingClicked", void 0);
    StarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pm-star',
            template: __webpack_require__(/*! raw-loader!./star.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/star.component.html"),
            styles: [__webpack_require__(/*! ./star.component.css */ "./src/app/shared/star.component.css")]
        })
    ], StarComponent);
    return StarComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\AcmeProductManagement\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map