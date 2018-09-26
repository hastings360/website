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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\"About page\" styling*/\n#oregon-coast-bg{\n\tbackground: #a3a3a3 url('oregon-coast.jpg') no-repeat center center;\n  min-height: 100vh;\n  height: auto;\n  padding-bottom: 10px;\n  background-size: cover;\n  padding-top: 85px;\n}\n#about-container{\n  background-color: #99baddb3;\n  border-radius: 10px;\n}\n#about-info{\n\tpadding: 10px;\n}\n#about-info img{\n\tfloat: left;\n\tmargin: 0 20px 20px 0;\n}\n#about-info p{\n\tfont-size: 1.5em;\n}\n#about-container h2{\n  text-align: center;\n}\n#blog{\n  width: 100%;\n  min-height: 600px;\n}\n@media screen and (max-width: 767px){\n\t#oregon-coast-bg{\n\t\tbackground-position: 1% 35%;\n\t}\n\th1{\n\t\tfont-size: 1.7em;\n\t}\n\t#about-info p{\n\t\tfont-size: 1.2em;\n\t}\n}\n@media screen and (max-width: 575px){\n  #oregon-coast-bg{\n    background-image: url('oregon-coast-mobile.jpg');\n    background-position: bottom right;\n  }\n}\n@media screen and (max-width: 479px){\n\th1{\n\t\tfont-size: 1.5em;\n\t}\n\t#about-info p{\n\t\tfont-size: 1em;\n\t}\n}\n@media screen and (max-width: 350px){\n\t#about-info img{\n\t\tfloat: none;\n\t}\n}\n"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<title>About</title>\n<app-header-small></app-header-small>\n\n<div class=\"image-bg\" id=\"oregon-coast-bg\">\n\n\t<div class=\"container\">\n\t\t<div class=\"row\" id=\"about-container\">\n\n      <section id=\"about-info\" class=\"col-md-6\">\n\t\t\t\t<img src=\"../../assets/imgs/profile_pic.jpg\" alt=\"Profile picture of Larry Hastings\" />\n\n\t\t\t\t<h1>About Me</h1>\n\t\t\t\t<p>I am passionate about web development and learning more each day by\n\t\t\t\t\tcreating new and inventive online tools.</p>\n\t\t\t\t<p>Taking photos is one of my hobbies, and being able to choose from my own stock images plays an important part\n\t\t\t\t\tin my applcation development.</p>\n\t\t\t\t<p>I have worked in tech for a long time and have both masters' and bachelors' degrees\n\t\t\t\t\tfocusing on computer networking, infrastructure, and web deployment.  MEAN.JS is my choice stack to develop in,\n\t\t\t\t\tbut I also have some experience with PHP, C# and .NET.  Feel free to <a href=\"#contact\">contact</a> me about anything.</p>\n\t\t\t\t<p>Thanks for visiting!</p>\n      </section>\n\n      <aside class=\"col-md-6\">\n        <h2>Blog</h2>\n\t\t\t  <iframe id=\"blog\" title=\"wordpress-blog\" src=\"https://hastingslweb2.wordpress.com/\"></iframe>\n      </aside>\n\t\t</div>\n\t</div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _relax_workspace_relax_workspace_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./relax-workspace/relax-workspace.component */ "./src/app/relax-workspace/relax-workspace.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], data: { title: 'Larry Hastings' } },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"], data: { title: 'Contact' } },
    { path: 'portfolio', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioComponent"], data: { title: 'Portfolio' } },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], data: { title: 'About' } },
    { path: 'relax-workspace', component: _relax_workspace_relax_workspace_component__WEBPACK_IMPORTED_MODULE_5__["RelaxWorkspaceComponent"], data: { title: 'Relax and Work' } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid{\n    padding: 0;\n    margin: 0;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Routed Views-->\n<div class=\"container-fluid\">\n    <router-outlet></router-outlet>\n</div>\n<div class=\"container-fluid\">\n    <app-footer></app-footer>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
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
    function AppComponent(titleService) {
        this.titleService = titleService;
    }
    AppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _header_small_header_small_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header-small/header-small.component */ "./src/app/header-small/header-small.component.ts");
/* harmony import */ var _relax_workspace_relax_workspace_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./relax-workspace/relax-workspace.component */ "./src/app/relax-workspace/relax-workspace.component.ts");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./calculator/calculator.component */ "./src/app/calculator/calculator.component.ts");
/* harmony import */ var _checklist_checklist_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./checklist/checklist.component */ "./src/app/checklist/checklist.component.ts");
/* harmony import */ var _music_music_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./music/music.component */ "./src/app/music/music.component.ts");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./logo/logo.component */ "./src/app/logo/logo.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_10__["PortfolioComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                _header_small_header_small_component__WEBPACK_IMPORTED_MODULE_12__["HeaderSmallComponent"],
                _relax_workspace_relax_workspace_component__WEBPACK_IMPORTED_MODULE_13__["RelaxWorkspaceComponent"],
                _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_14__["CalculatorComponent"],
                _checklist_checklist_component__WEBPACK_IMPORTED_MODULE_15__["ChecklistComponent"],
                _music_music_component__WEBPACK_IMPORTED_MODULE_16__["MusicComponent"],
                _logo_logo_component__WEBPACK_IMPORTED_MODULE_17__["LogoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/calculator/calculator.component.css":
/*!*****************************************************!*\
  !*** ./src/app/calculator/calculator.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\"Calculator page\" styling*/\n#calc{\n\tborder: solid;\n\tborder-color: #99badd;\n\theight: 293px;\n\twidth: 268px;\n\tborder-radius: 10px;\n\t-webkit-user-select: none;\n\t   -moz-user-select: none;\n\t    -ms-user-select: none;\n\t        user-select: none;\n}\n#calc-window{\n\tborder-radius: 5px 5px 0 0;\n\tmargin: 5px;\n\tpadding-left: 5px;\n\tpadding-right: 5px;\n\tcolor: white;\n\theight: 50px;\n\tfont-size: 30px;\n\toverflow-x: auto;\n\toverflow-y: hidden;\n\ttext-align: right;\n}\n#calc-operators{\n\tfloat: right;\n\twidth: 30%;\n\theight: 230px;\n\tborder: solid;\n\tborder-width: 1px;\n\tborder-color: #99badd;\n\tborder-radius: 0 0 10px 0;\n\ttext-align: center;\n}\n.operator-button{\n\tmargin: 12%;\n\tborder: solid;\n\tborder-color: white;\n\twidth: 40px;\n\theight: 24px;\n\ttext-align: center;\n\tdisplay: inline-block;\n\tcursor: pointer;\n}\n.operator-button:active{\n\tbox-shadow: 0 0 0 2px #99badd inset;\n}\n.operator-button p{\n\tmargin: auto;\n\tpadding-top: 2%;\n\tpadding-bottom: 2%;\n\tcolor: white;\n}\n.operator-button p:active{\n\tcolor: red;\n}\n#calc-numbers{\n\twidth: 70%;\n\ttext-align: center;\n\tcolor: white;\n}\n.number-button{\n\tmargin: 5%;\n\tborder: solid;\n\tborder-color: white;\n\twidth: 38px;\n\theight: 38px;\n\ttext-align: center;\n\tdisplay: inline-block;\n\tcursor: pointer;\n}\n.number-button:active{\n\tbox-shadow: 0 0 0 2px #99badd inset;\n}\n.number-button p{\n\tmargin: auto;\n\tpadding-top: 35%;\n\tpadding-bottom: 35%;\n}\n.number-button p:hover{\n\tcolor: red;\n}\n"

/***/ }),

/***/ "./src/app/calculator/calculator.component.html":
/*!******************************************************!*\
  !*** ./src/app/calculator/calculator.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id='calc'>\n\t\t\t\n\t\t\t<div id='calc-window'></div>\n\t\t\t\n\t\t\t<div><!-- Calculator button container -->\n\t\t\t\t<div id='calc-operators'>\n\t\t\t\t\t<div id='multiplication' class='operator-button'><p>X</p></div>\n\t\t\t\t\t<div id='divide' class='operator-button'><p>/</p></div>\n\t\t\t\t\t<div id='plus' class='operator-button'><p>+</p></div>\n\t\t\t\t\t<div id='minus' class='operator-button'><p>-</p></div>\n\t\t\t\t\t<div id='equals' class='operator-button'><p>=</p></div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div id='calc-numbers'>\n\t\t\t\t\t<div id='one' class='number-button'><p>1</p></div>\n\t\t\t\t\t<div id='two' class='number-button'><p>2</p></div>\n\t\t\t\t\t<div id='three' class='number-button'><p>3</p></div>\n\t\t\t\t\t<div id='four' class='number-button'><p>4</p></div>\n\t\t\t\t\t<div id='five' class='number-button'><p>5</p></div>\n\t\t\t\t\t<div id='six' class='number-button'><p>6</p></div>\n\t\t\t\t\t<div id='seven' class='number-button'><p>7</p></div>\n\t\t\t\t\t<div id='eight' class='number-button'><p>8</p></div>\n\t\t\t\t\t<div id='nine' class='number-button'><p>9</p></div>\n\t\t\t\t\t<div id='clear' class='number-button'><p>C</p></div>\n\t\t\t\t\t<div id='zero' class='number-button'><p>0</p></div>\n\t\t\t\t\t<div id='decimal' class='number-button'><p>.</p></div>\n\t\t\t\t</div>\n\t\t\t</div>\n</section><!-- end mid-container -->\n"

/***/ }),

/***/ "./src/app/calculator/calculator.component.ts":
/*!****************************************************!*\
  !*** ./src/app/calculator/calculator.component.ts ***!
  \****************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalculatorComponent = /** @class */ (function () {
    function CalculatorComponent() {
    }
    CalculatorComponent.prototype.ngAfterViewInit = function () {
        var display = '0';
        //Adds and sorts values to the display variable
        function addToDisplay(x) {
            if (display === '0') {
                display = x;
            }
            else if ((display + x).match(/[*\/\+-][*\/\+-]/)) {
                return;
            }
            else {
                display = display + x;
            }
            ;
            var y = document.getElementById('calc-window');
            y.innerHTML = display;
        }
        ;
        //Computes variables in display using the 'math' package
        function equalCompute() {
            if ((display.slice(-1)).match(/[*\/\+-]/)) {
                display = display.slice(0, -1);
            }
            ;
            var x = math.eval(display);
            document.getElementById('calc-window').innerHTML = math.round(x, 2); //*displays result
            x = math.round(x, 2);
            display = x;
        }
        ;
        //Clears the window and sets the display variable to 0
        function clearCompute() {
            document.getElementById('calc-window').innerHTML = '0';
            display = '0';
        }
        ;
        //Button click handlers
        document.getElementById('one').onclick = function () { addToDisplay('1'); };
        document.getElementById('two').onclick = function () { addToDisplay('2'); };
        document.getElementById('three').onclick = function () { addToDisplay('3'); };
        document.getElementById('four').onclick = function () { addToDisplay('4'); };
        document.getElementById('five').onclick = function () { addToDisplay('5'); };
        document.getElementById('six').onclick = function () { addToDisplay('6'); };
        document.getElementById('seven').onclick = function () { addToDisplay('7'); };
        document.getElementById('eight').onclick = function () { addToDisplay('8'); };
        document.getElementById('nine').onclick = function () { addToDisplay('9'); };
        document.getElementById('zero').onclick = function () { addToDisplay('0'); };
        document.getElementById('decimal').onclick = function () { addToDisplay('.'); };
        document.getElementById('clear').onclick = function () { clearCompute(); };
        document.getElementById('multiplication').onclick = function () { addToDisplay('*'); };
        document.getElementById('divide').onclick = function () { addToDisplay('/'); };
        document.getElementById('plus').onclick = function () { addToDisplay('+'); };
        document.getElementById('minus').onclick = function () { addToDisplay('-'); };
        document.getElementById('equals').onclick = function () { equalCompute(); };
        document.getElementById('calc-window').innerHTML = display; //Initially sets window to display variable '0'
    };
    CalculatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calculator',
            template: __webpack_require__(/*! ./calculator.component.html */ "./src/app/calculator/calculator.component.html"),
            styles: [__webpack_require__(/*! ./calculator.component.css */ "./src/app/calculator/calculator.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CalculatorComponent);
    return CalculatorComponent;
}());



/***/ }),

/***/ "./src/app/checklist/checklist.component.css":
/*!***************************************************!*\
  !*** ./src/app/checklist/checklist.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checklist-container{\n\twidth: 100%;\n\tmargin: 20px auto auto auto;\n\t-webkit-user-select: none;\n\t   -moz-user-select: none;\n\t    -ms-user-select: none;\n\t        user-select: none;\n}\n.checklist{\n\tmargin: 0;\n\tpadding: 10px;\n\twidth: 100%;\n\theight: auto;\n\ttext-align: center;\n\tborder-style: solid;\n\tborder-radius: 15px;\n\tbox-shadow: -5px -5px 5px #99badd;\n}\n.instruction{\n\ttext-align: left;\n\tmargin-top: 20px;\n\tmargin-bottom: 0px;\n\tpadding: 0;\n\tcolor: #99badd;\n}\n.checklist-items{\n\tmargin-top: 40px;\n\ttext-align: left;\n\twidth: 90%;\n\tlist-style-type: none;\n\tpadding-left: 0;\n\tfont-size: 20px;\n\tcolor: white;\n\tcursor: pointer;\n}\n.checklist-items li:before{\n\tmargin-right: 20px;\n\tcontent: url('data:image/png;base64,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');\n\theight: 10px;\n}\n.limit-text{\n\tcolor: #99badd;\n\tfont-size: 11px;\n}\n.limit{\n\tcolor: white;\n}\n.input{\n\twidth: 70%;\n}\n.add{\n\twidth: 25%;\n\theight: 27px;\n\tpadding-top: 2px;\n}\n\n\n"

/***/ }),

/***/ "./src/app/checklist/checklist.component.html":
/*!****************************************************!*\
  !*** ./src/app/checklist/checklist.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class='checklist-container'>\n\t<form class='checklist'>\n\t\t\n\t\t<div>\n\t\t<p class='limit-text'>Character Count Limit: <span class='limit'>40</span></p>\n\t\t<input class='input' placeholder=\"Add checklist items here!\" cols='100'>\n\t\t<input class='btn btn-primary add' type=\"button\" value=\"Add\">\n\t\t</div>\n\t\t\n\t\t<p class='instruction'>Double-Click to Clear Item</p>\n\t\t\n\t\t<ul class='checklist-items'>\n\t\t</ul>\n\t\t\n\t</form>\n\t\n</section>\n"

/***/ }),

/***/ "./src/app/checklist/checklist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/checklist/checklist.component.ts ***!
  \**************************************************/
/*! exports provided: ChecklistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistComponent", function() { return ChecklistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChecklistComponent = /** @class */ (function () {
    function ChecklistComponent() {
    }
    ChecklistComponent.prototype.ngAfterViewInit = function () {
        var main = function () {
            /*To clear '.input' upon reload*/
            $('.input').val('');
            /*To disable '.btn' upon load/reload*/
            $('.btn').addClass('disabled');
            $('.btn').click(function () {
                var input = $('.input').val();
                if (input.length > 0 && input.length < 41) {
                    $('<li>').text(input).appendTo('.checklist-items');
                    $('.input').val('');
                    $('.limit').text('40');
                    $('.btn').addClass('disabled');
                }
                else {
                    return;
                }
            });
            $('.input').keyup(function () {
                var limitUse = $(this).val().length;
                var limitCount = 40 - limitUse;
                $('.limit').text(limitCount);
                if (limitCount == 40 || limitCount < 0) {
                    $('.btn').addClass('disabled');
                }
                else {
                    $('.btn').removeClass('disabled');
                }
                ;
            });
            $('ul').on('dblclick', 'li', function () {
                $(this).remove();
            });
        };
        $(document).ready(main);
    };
    ChecklistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checklist',
            template: __webpack_require__(/*! ./checklist.component.html */ "./src/app/checklist/checklist.component.html"),
            styles: [__webpack_require__(/*! ./checklist.component.css */ "./src/app/checklist/checklist.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], ChecklistComponent);
    return ChecklistComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Need a background pic for page and possibly one for message*/\nh1{\n\tcolor: #99badd;\n\ttext-shadow: 1px 1px 0 #838383;\n\tfont-weight: bold;\n}\n#contact-message{\n    border-radius: 40px;\n    margin-top: 100px;\n    margin-bottom: 20px;\n    padding: 20px;\n}\n#contact-message p{\n    font-size: 20px;\n}\n#contact-bg{\n    -webkit-clip-path: polygon(0 0, 100% 0, 100% 63%, 92% 70%, 70% 70%, 82% 91%, 57% 70%, 8% 70%, 0 63%);\n            clip-path: polygon(0 0, 100% 0, 100% 63%, 92% 70%, 70% 70%, 82% 91%, 57% 70%, 8% 70%, 0 63%);\n    -moz-clip-path: polygon(0 0, 100% 0, 100% 63%, 92% 70%, 70% 70%, 82% 91%, 57% 70%, 8% 70%, 0 63%);\n    border-radius: 10px 10px;\n    background: #99badd url('oregon_waves.jpg') no-repeat top;\n    height: auto;\n    min-height: 650px;\n    padding: 40px;\n}\n#contact-submit{\n    background: none;\n    border: 2px #99badd solid;\n    position: absolute;\n    width: 80px;\n    left: 50%;\n    margin-left: -40px;\n    outline: none;\n}\n#contact-submit:hover{\n    border-color: white;\n}\n#contact-submit:active{\n    box-shadow: 0 0 2px 4px #99badd;\n}\ntextarea{\n    resize: none;\n}\n.error-message{\n    color: maroon;\n    font-size: 14px;\n}\n.error{\n    border-color: maroon !important;\n}\n/*after-send actionable items*/\n.mail-message{\n    position: absolute;\n    left: 10%;\n    top: 0;\n    width: 80%;\n    height: 70%;\n    background-image: url('oregon_waves.jpg');\n    font-size: 30px;\n    border-radius: 50%;\n    box-shadow: 0 0 400px 150px #99badd;\n    padding: 170px 100px;\n    text-shadow: 1px 1px 0 white,\n\t\t\t\t-1px -1px 0 white,\n\t\t\t\t1px -1px 0 white,\n\t\t\t\t-1px 1px 0 white,\n\t\t\t\t0px 1px 0 white,\n\t\t\t\t1px 0px 0 white,\n\t\t\t\t0px -1px 0 white,\n\t\t\t\t-1px 0px 0 white;\n}\n.mail-message a{\n    text-decoration: none;\n    color: white;\n    font-size: 20px;\n    text-shadow: 1px 1px 0 #99badd,\n\t\t\t\t-1px -1px 0 #99badd,\n\t\t\t\t1px -1px 0 #99badd,\n\t\t\t\t-1px 1px 0 #99badd,\n\t\t\t\t0px 1px 0 #99badd,\n\t\t\t\t1px 0px 0 #99badd,\n\t\t\t\t0px -1px 0 #99badd,\n\t\t\t\t-1px 0px 0 #99badd;\n}\n.mail-message a:hover{\n    color: #99badd;\n    text-shadow: 1px 1px 0 white,\n\t\t\t\t-1px -1px 0 white,\n\t\t\t\t1px -1px 0 white,\n\t\t\t\t-1px 1px 0 white,\n\t\t\t\t0px 1px 0 white,\n\t\t\t\t1px 0px 0 white,\n\t\t\t\t0px -1px 0 white,\n\t\t\t\t-1px 0px 0 white;\n}\n@media screen and (max-width: 767px){\n    #contact-message p{\n        font-size: 16px;\n    }\n}\n@media screen and (max-width: 502px){\n    .mail-message{\n        font-size: 20px;\n        padding: 170px 50px;\n    }\n    #contact-message p{\n      font-size: 12px;\n  }\n}\n"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header-small></app-header-small>\n  <section class=\"row\">\n\n    <div id=\"contact-message\" class=\"col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0\">\n      <h1>Contact Me</h1>\n      <p>Thank you for visiting my site.  Please use the contact form below to get in touch with me.  Be assured, if you are legitimate in your inquiry, I will promptly make contact with you using the supplied email.  Have a wonderful day!</p>\n    </div>\n  </section>\n  <section class=\"row\">\n    <div id=\"contact-bg\" class=\"col-md-6 col-md-offset-3\">\n      <form id=\"contact-form\"\n      [formGroup]=\"contactForm\"\n      (ngSubmit)=\"onSubmit(contactForm.value)\"\n      >\n        <div class=\"form-group\">\n          <label for=\"name-input\">Name:</label>\n          <input type=\"text\" class=\"form-control\" [formControl]=\"contactForm.controls['name']\" [class.error]=\"!contactForm.controls['name'].valid\">\n          <div class=\"error-message\" *ngIf=\"!contactForm.controls['name'].valid\">Please type your full name</div>\n\n          <label for=\"email-input\">Email:</label>\n          <input type=\"email\" class=\"form-control\" [formControl]=\"contactForm.controls['email']\" [class.error]=\"!contactForm.controls['email'].valid\">\n          <div class=\"error-message\" *ngIf=\"!contactForm.controls['email'].valid\">Please provide a valid email (email@something.com)</div>\n          <label for=\"phone-input\">Phone:</label>\n          <input type=\"tel\" class=\"form-control\" [formControl]=\"contactForm.controls['phone']\" [class.error]=\"!contactForm.controls['phone'].valid\">\n          <div class=\"error-message\" *ngIf=\"!contactForm.controls['phone'].valid\">Please provide a valid phone number (111-222-3333)</div>\n\n          <label for=\"message\">Message:</label>\n          <textarea type=\"text\" class=\"form-control\" rows=\"2\" cols=\"50\" [formControl]=\"contactForm.controls['message']\" [class.error]=\"!contactForm.controls['message'].valid\"></textarea>\n          <div class=\"error-message\" *ngIf=\"!contactForm.controls['message'].valid\">Tell me what you need</div>\n        </div>\n        <button type=\"submit\" id=\"contact-submit\" class=\"btn\" *ngIf=\"contactForm.valid\"><strong>Send</strong></button>\n      </form>\n      <!--splash page for email sent-->\n      <div *ngIf=\"received\" class=\"mail-message img-responsive\">\n        <p>Thank you for sending me your information.  <br>I will be in touch soon!</p>\n        <a href=\"/home\">Back to home page</a>\n      </div>\n      <!--splash page for email sent-->\n      <div *ngIf=\"error\" class=\"mail-message img-responsive\">\n        <p>There seems to be an issue with the email server.  Please try again soon.</p>\n        <a href=\"/home\">Back to home page</a>\n      </div>\n    </div>\n  </section>\n\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = /** @class */ (function () {
    function ContactComponent(fb, http) {
        this.http = http;
        this.received = false;
        this.error = false;
        this.contactForm = fb.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)])],
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/\w+@\w+/)])],
            'phone': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/[[\D]?\d[\D]?/)])],
            'message': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)])],
        });
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.onSubmit = function (x) {
        var _this = this;
        this.http.post("/api/contact-form", x).subscribe(function (res) {
            console.log("email sent successfully");
            _this.received = true;
        }, function (err) {
            console.log(err);
            _this.error = true;
        }, function () {
            return null;
        }
        /*if(res.statusText = "OK"){
          return this.received = true;
        }else{
          return this.emailError = true;
        }*/
        );
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*#push{\n\tclear: both;\n\theight: 100px;\n}*/\n\n.footer-top-line{\n\tborder-top-style: groove;\n\tmargin-right: 20%;\n\tmargin-left: 20%;\n\tmargin-bottom: 10px;\n}\n\nfooter{\n\tclear: both;\n\tfont-size: 1.5em;\n\ttext-align: center;\n}\n\nfooter p{\n\tmargin-top: 10px;\n\tfont-size: 0.5em;\n\tcolor: black;\n}\n\n/* main navigation links*/\n\n.main-nav a{\n\tdisplay: inline-block;\n\ttext-align: center;\n\twidth: 125px;\n\tcolor: #99badd;\n\ttext-shadow: 1px 1px 0 #838383;\n\t\t\t\t\n}\n\n.main-nav a:hover{\n\ttext-decoration: none;\n\tcolor: red;\n}\n\n@media only screen and (max-width: 650px){\n\t.main-nav a{\n\t\twidth: 85px;\n\t\tfont-size: 0.9em;\n\t}\n}\n\n@media only screen and (max-width: 450px){\n\t.main-nav a{\n\t\twidth: 60px;\n\t\tfont-size: 0.7em;\n\t}\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- footer -->\n<footer>\n    <hr class=\"footer-top-line\">\n    <nav class='main-nav'>\n        <a [routerLink]=\"['/home']\">Home</a>\n\t\t<a [routerLink]=\"['/about']\">About</a>\n\t\t<a [routerLink]=\"['/portfolio']\">Portfolio</a>\n\t\t<a href='../../assets/docs/web-dev-resume.pdf' target='_blank'>R&egrave;sum&egrave;</a>\n    </nav>\n    <p>Larry Hastings</p>\n    <app-logo></app-logo>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header-small/header-small.component.css":
/*!*********************************************************!*\
  !*** ./src/app/header-small/header-small.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header{\n    position: absolute;\n    z-index: 1;\n}\nnav{\n    margin: 10px 0 0 30px;\n    padding: 10px 5px 0 5px;\n}\n.nav-pop-out{\n    border: thin solid black;\n    border-radius: 20px;\n}\nbutton:active{\n    background-color: white;\n}\n#menu-button{\n    width: 59px;\n    height: 60px;\n    border-radius: 100%;\n    box-shadow: 0 0 50px 5px darkgray;\n    background-color: #99badd;\n    outline: none;\n    padding: 3px;\n    margin: 0 19px 0 19px;\n    z-index: 2;\n}\n#menu-button:active{\n    background-color: white;\n}\n#inner-button{\n    width: 50px;\n    height: 50px;\n    border-radius: 100%;\n    border-style: solid #99badd;\n    background-color: white;\n    padding-top: 16px;\n    text-align: center;\n    font: 1em impact;\n}\n#nav-list{\n    list-style: none;\n    padding: 0;\n    margin-top: 5px;\n}\n#nav-list a{\n    color: #99badd;\n    font-size: 20px;\n    text-decoration: none;\n}\n#nav-list a:hover{\n    color: red;\n}\n#nav-list button{\n    width: 100px;\n    margin-bottom: 3px;\n    padding: 2px;\n}\n#nav-list button:active{\n    outline: none;\n}"

/***/ }),

/***/ "./src/app/header-small/header-small.component.html":
/*!**********************************************************!*\
  !*** ./src/app/header-small/header-small.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='row'>\n  <header>\n    <nav id='nav-pop'>\n      <button id='menu-button'><div id='inner-button'>Menu</div></button>\n      <ul id='nav-list' class='hide'>\n        <li><a [routerLink]=\"['/home']\"><button>Home</button></a></li>\n        <li><a [routerLink]=\"['/about']\"><button>About</button></a></li>\n        <li><a [routerLink]=\"['/portfolio']\"><button>Portfolio</button></a></li>\n        <li><a href='../../assets/docs/web-dev-resume.pdf' target=\"_blank\"><button>R&egrave;sum&egrave;</button></a></li>\n        <li><a [routerLink]=\"['/contact']\"><button>Contact</button></a></li>\n      </ul>\n    </nav>\n  </header>\n</div>\n\n"

/***/ }),

/***/ "./src/app/header-small/header-small.component.ts":
/*!********************************************************!*\
  !*** ./src/app/header-small/header-small.component.ts ***!
  \********************************************************/
/*! exports provided: HeaderSmallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSmallComponent", function() { return HeaderSmallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderSmallComponent = /** @class */ (function () {
    function HeaderSmallComponent() {
    }
    HeaderSmallComponent.prototype.ngAfterViewInit = function () {
        $('#menu-button').click(function () {
            $('#nav-list').toggleClass('hide');
            $('#nav-pop').toggleClass('nav-pop-out');
        });
    };
    HeaderSmallComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-small',
            template: __webpack_require__(/*! ./header-small.component.html */ "./src/app/header-small/header-small.component.html"),
            styles: [__webpack_require__(/*! ./header-small.component.css */ "./src/app/header-small/header-small.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderSmallComponent);
    return HeaderSmallComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*contains header, name, and contact-resume*/\n.strap{\n\tbackground-image: url('strap_pic.jpg');\n\tbackground-position: bottom;\n\tbackground-color: gray;\n\tbackground-repeat: no-repeat;\n\tpadding-top: 10px;\n\tpadding-bottom: 120px;\n\tbackground-size: cover;\n\ttext-align: center;\n\tcolor: #99badd;\n\tborder-radius: 0 !important;\n}\n.strap a{\n\tcolor: #99badd;\n\ttext-shadow: 1px 1px 0 #3b3b3b,\n\t\t\t\t-1px -1px 0 #3b3b3b,\n\t\t\t\t1px -1px 0 #3b3b3b,\n\t\t\t\t-1px 1px 0 #3b3b3b,\n\t\t\t\t0px 1px 0 #3b3b3b,\n\t\t\t\t1px 0px 0 #3b3b3b,\n\t\t\t\t0px -1px 0 #3b3b3b,\n\t\t\t\t-1px 0px 0 #3b3b3b;\n}\n.strap a:hover{\n\ttext-decoration: none;\n\tcolor: red;\n}\n/* main navigation links*/\n.main-nav a{\n\tdisplay: inline-block;\n\ttext-align: center;\n\twidth: 125px;\n\tfont-size: 1.5em;\n\tcolor: #99badd;\n\ttext-shadow: 1px 1px 0 #3b3b3b,\n\t\t\t\t-1px -1px 0 #3b3b3b,\n\t\t\t\t1px -1px 0 #3b3b3b,\n\t\t\t\t-1px 1px 0 #3b3b3b,\n\t\t\t\t0px 1px 0 #3b3b3b,\n\t\t\t\t1px 0px 0 #3b3b3b,\n\t\t\t\t0px -1px 0 #3b3b3b,\n\t\t\t\t-1px 0px 0 #3b3b3b;\n}\n/*description, name, etc..*/\n#my-info{\n\ttext-align: center;\n\tmargin-top: 60px;\n}\n#my-name{\n\tfont-size: 3em\n}\n/*contact*/\n#my-contact-link{\n\tfont-size: 1.7em;\n\tborder: solid;\n\tborder-color: #99badd;\n\tborder-radius: 15px 50px 15px 50px;\n\tmargin-right: 40%;\n\tmargin-left: 40%;\n}\n@media only screen and (max-width: 650px){\n\t.main-nav a{\n\t\twidth: 85px;\n\t\tfont-size: 1.2em;\n\t}\n\t.strap{\n\t\theight: 280px;\n\t}\n\t#my-contact-link{\n\t\tmargin: 0 30% 0 30%;\n\t}\n}\n@media only screen and (max-width: 450px){\n\t.main-nav a{\n\t\twidth: 60px;\n\t\tfont-size: 1em;\n\t}\n\t\n\t#my-contact-link{\n\t\tmargin: 0 30% 0 30%;\n\t\tfont-size: 1.3em;\n\t}\n\t#my-job{\n\t\tfont-size: 1.5em;\n\t}\n\t#my-name{\n\t\tfont-size: 2em;\n\t}\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- header, contains nav bar and contact info -->\n<header class='jumbotron strap'>\n\t<nav class='main-nav'>\n\t\t<a [routerLink]=\"['/home']\">Home</a>\n\t\t<a [routerLink]=\"['/about']\">About</a>\n\t\t<a [routerLink]=\"['/portfolio']\">Portfolio</a>\n\t\t<a href='../../assets/docs/web-dev-resume.pdf' target='_blank'>R&egrave;sum&egrave;</a>\n\t</nav>\n\t<!-- contact info -->\n\t<div id='my-info'>\n\t\t<p id='my-job'>Web Developer</p>\n\t\t<h1 id='my-name'>Larry Hastings</h1>\n\t\t<div id='my-contact-link'>\n\t\t\t<a [routerLink]=\"['/contact']\">Contact</a>\n\t\t</div>\n\t</div>\n</header>\n\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
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
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Blog styling*/\n.mark-row img{\n    border-radius: 20px;\n}\n.message{\n    height: 360px;\n    position: relative;\n}\n.message h2{\n    font-size: 5em;\n}\n.top-left{\n    position: absolute;\n    top:0;\n    left: 0;\n}\n.bottom-right{\n    position: absolute;\n    bottom:0;\n    right: 0;\n}\n@media screen and (max-width: 1198px){\n    .message{\n        height: 295px;\n    }\n}\n@media screen and (max-width: 990px){\n    .message{\n        height: 221px;\n    }\n    .message h2{\n        font-size: 3em;\n    }\n}\n@media screen and (max-width: 766px){\n    .bottom-right{\n        top:0;\n        right:0;\n    }\n}\n@media screen and (max-width: 600px){\n    .message{\n        height: 170px;\n    }\n}\n@media screen and (max-width: 500px){\n    .message{\n        height: 135px;\n    }\n    .message h2{\n        font-size: 2em;\n    }\n}\n@media screen and (max-width: 400px){\n    .message{\n        height: 100px;\n    }\n}\n@media screen and (max-width: 300px){\n    .message{\n        height: 74px;\n    }\n}\n/*iframe{\n    width: 97%;\n    height: 500px;\n}\n.floating-words{\n    text-align: center;\n}\n.floating-words button{\n    display: inline-block;\n    border: 1px black solid;\n    border-radius: 5px 5px 5px 5px;\n    box-shadow: 0px 0px 10px #aaff6d;\n    margin: 10px 8px 8px 10px;\n    padding: 4px;\n    background: none;\n    font-size: 1.5em;\n    outline: none;\n}\n.floating-words button:active{\n    box-shadow: 0px 0px 20px #aaff6d inset;\n}\n\n#description-container{\n    max-width: 400px;\n    min-height: 184px;\n    margin: 0 auto;\n    background: url(\"../../assets/imgs/lightbulb.png\") no-repeat center;\n    margin-top: -50px;\n    padding-top: 50px;\n}\n\n.description{\n    font-size: 0px;\n}\n.desc-trans{\n    transition: border 5s ease;\n    transition: font 2s ease;\n    font: 1.5em de-walpergens-pica;\n    border: thin solid #99badd;\n    border-radius: 30px;\n    padding: 10px 10px 10px 24px;\n}\n\n@media only screen and (max-width: 991px){\n    .floating-words button{\n        font-size: 1.2em;\n    }\n    iframe{\n        height: 300px;\n    }\n}\n@media only screen and (max-width: 650px){\n    .floating-words button{\n        font-size: 0.8em;\n        margin: 5px 3px 5px 3px;\n        padding: 2px;\n    }\n    #description-container{\n        max-width: 300px;\n    }\n    .desc-trans{\n        font-size: 1em;\n    }\n}*/"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<title>Larry Hastings</title>\n<app-header></app-header>\n<div class=\"container\" id=\"marketing\">\n\t<section class=\"row mark-row\">\n\t\t<div class=\"col-sm-4 col-sm-offset-0 col-xs-4 col-xs-offset-2\">\n\t\t\t<img class=\"img-responsive\" src=\"../../assets/imgs/paper-writing-utensils.jpg\" alt=\"Paper and writing utensils\" />\n\t\t</div>\n\t\t<div class=\"col-sm-2 col-xs-4 message\">\n\t\t\t<h2 class=\"top-left\">Plan</h2>\n\t\t</div>\n\t\t<div class=\"col-sm-2 col-sm-offset-0 col-xs-4 col-xs-offset-2 message\">\n\t\t\t<h2 class=\"bottom-right\">Build</h2>\n\t\t</div>\n\t\t<div class=\"col-sm-4 col-xs-4\">\n\t\t\t<img  class=\"img-responsive\" src=\"../../assets/imgs/paper-writing-utensils.jpg\" alt=\"Paper and writing utensils\" />\n\t\t</div>\n\t</section>\n</div>\t\n\n<!--<section class=\"left-home col-md-8 col-md-offset-0 col-xs-12\">\n\t\t<div class=\"floating-words clearfix\">\n\t\t\t<button (click)='descDisplay(\"#0\")'>Performance Optimization</button>\n\t\t\t<button (click)='descDisplay(\"#1\")'>User Interface (UI)</button>\n\t\t\t<button (click)='descDisplay(\"#2\")'>Browser Compatability</button>\n\t\t\t<button (click)='descDisplay(\"#3\")'>Mobile Friendly</button>\n\t\t\t<button (click)='descDisplay(\"#4\")'>AngularJS</button>\n\t\t\t<button (click)='descDisplay(\"#5\")'>NodeJS</button>\n\t\t\t<button (click)='descDisplay(\"#7\")'>Linux</button>\n\t\t\t<button (click)='descDisplay(\"#8\")'>Red Hat</button>\n\t\t\t<button (click)='descDisplay(\"#9\")'>NGINX</button>\n\t\t\t<button (click)='descDisplay(\"#10\")'>MongoDB</button>\n\t\t\t<button (click)='descDisplay(\"#11\")'>User Experience (UX)</button>\n\t\t</div>\n\t\t<div class=\"floating-words clearfix\">\n\t\t\t<button (click)='descDisplay(\"#12\")'>Cloud Hosting</button>\n\t\t\t<button (click)='descDisplay(\"#13\")'>Web Governance</button>\n\t\t\t<button (click)='descDisplay(\"#14\")'>Website Management</button>\n\t\t</div>\n\t\t\n\t\t<div class=\"floating-words clearfix\">\n\t\t\t<button (click)='descDisplay(\"#15\")'>Analytics</button>\n\t\t\t<button (click)='descDisplay(\"#16\")'>Database</button>\n\t\t</div>\n\t\t<div class=\"floating-words clearfix\">\n\t\t\t<button (click)='descDisplay(\"#17\")'>SEO</button>\n\t\t</div>\n\n\n\t\t<div id=\"description-container\" class=\"clearfix\">\t\t\n\t\t\t\t<div id=\"0\" class=\"description\">Implementing techniques and/or standards to increase overall website speed for delivering content</div>\n\t\t\t\t<div id=\"1\" class=\"description\">User Interface is the mechanism or mechanisms that enable the end-user to navigate, interact, and utilize the website</div>\n\t\t\t\t<div id=\"2\" class=\"description\">We all use different browsers, and each browser renders content differently.  Browser compatability is a concept referrring to the cross-functionality of a website when viewed through different browsers such as chrome, internet explorer and firefox</div>\n\t\t\t\t<div id=\"3\" class=\"description\">Mobile device use is growing each year, so content must now be delivered in a fashion that is focused more on rendering content for smaller screens.  Mobile friendly means a website adapts to these smaller sizes affectively</div>\n\t\t\t\t<div id=\"4\" class=\"description\">AngularJS is a front-end JavaScript framework used for managing browser loaded content</div>\n\t\t\t\t<div id=\"5\" class=\"description\">NodeJS is an open-source server-side programming language used to securely communicate and distribute information between the front-end browser and a web-server</div>\n\t\t\t\t\n\t\t\t\t<div id=\"7\" class=\"description\">Linux is a free and open-source operating system kernel, that has many versions, used widely by web developers because of its low cost and adaptability</div>\n\t\t\t\t<div id=\"8\" class=\"description\">The specific flavor of Linux I like to currently use is Red Hat.  This is a robust, secure enterprise version of Linux, and has a lot of support</div>\n\t\t\t\t<div id=\"9\" class=\"description\">NGINX is the actual software used to securely serve web pages.  I use it because it is minimalistic and adaptable</div>\n\t\t\t\t<div id=\"10\" class=\"description\">MongoDB is a NoSQL database used to store, compare, and retrieve various data and corresponding content</div>\n\t\t\t\t<div id=\"11\" class=\"description\">User experience is the design, flow, and presentation of the website content.  This is closely related to User Interface</div>\n\t\t\t\t<div id=\"12\" class=\"description\">As opposed to managing your own server, cloud hosting allows a website owner to rent similar resources from a third party, who provide services such as networking, security, redundancy, emergency failover, and much more</div>\n\t\t\t\t<div id=\"13\" class=\"description\">This term refers to establishing and maintaining policies, standards, and guidelines for web content and the managemenet thereof</div>\n\t\t\t\t<div id=\"14\" class=\"description\">Website management is the actual work done to build, update, and otherwise maintain the content of a website</div>\n\t\t\t\t<div id=\"15\" class=\"description\">Analytics is a term used for the act of tracking usage statistics such as page visits or number of users in order to ascertain the performance and/or success of a given goal</div>\n\t\t\t\t<div id=\"16\" class=\"description\">For some websites, the database is the key element as it can contain valuable information.  Think of a database as a library, but with a speed of light mechanism for finding the books you need quickly and accurately</div>\n\t\t\t\t<div id=\"17\" class=\"description\">Search Engine Optimization is the art or methodology of creating a site that is easily indexible by search engines.  This is accomplished within the code itself, but will make a website easier to find when using Google search, Bing, and others</div>\n\t\t</div>\n\t</section>-->\n\n\t<!--<section class=\"col-md-4 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-12\">\n\t\t\t<h2>Blog</h2>\n\t\t\t<iframe title=\"wordpress-blog\" src=\"https://hastingslweb2.wordpress.com/\"></iframe>\n\t\t</aside>\n\t</section>-->\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.descDisplay = function (x) {
        this.toggleCurrent(this.lastVisible);
        this.currentVisible = x;
        this.toggleCurrent(this.currentVisible);
        this.lastVisible = x;
    };
    HomeComponent.prototype.toggleCurrent = function (y) {
        switch (y) {
            case "#0":
                $('#0').toggleClass('desc-trans');
                break;
            case "#1":
                $('#1').toggleClass('desc-trans');
                break;
            case "#2":
                $('#2').toggleClass('desc-trans');
                break;
            case "#3":
                $('#3').toggleClass('desc-trans');
                break;
            case "#4":
                $('#4').toggleClass('desc-trans');
                break;
            case "#5":
                $('#5').toggleClass('desc-trans');
                break;
            case "#7":
                $('#7').toggleClass('desc-trans');
                break;
            case "#8":
                $('#8').toggleClass('desc-trans');
                break;
            case "#9":
                $('#9').toggleClass('desc-trans');
                break;
            case "#10":
                $('#10').toggleClass('desc-trans');
                break;
            case "#11":
                $('#11').toggleClass('desc-trans');
                break;
            case "#12":
                $('#12').toggleClass('desc-trans');
                break;
            case "#13":
                $('#13').toggleClass('desc-trans');
                break;
            case "#14":
                $('#14').toggleClass('desc-trans');
                break;
            case "#15":
                $('#15').toggleClass('desc-trans');
                break;
            case "#16":
                $('#16').toggleClass('desc-trans');
                break;
            case "#17":
                $('#17').toggleClass('desc-trans');
                break;
            default:
                break;
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/logo/logo.component.css":
/*!*****************************************!*\
  !*** ./src/app/logo/logo.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#logos{\n    margin-left: 10px;\n}\n#logos a:hover{\n    text-decoration: none;\n}"

/***/ }),

/***/ "./src/app/logo/logo.component.html":
/*!******************************************!*\
  !*** ./src/app/logo/logo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"logos\">\n<a id=\"lh-logo\" href=\"../home\">\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"29px\" height=\"29px\" viewBox=\"0 0 29 29\" enable-background=\"new 0 0 29 29\" xml:space=\"preserve\">\n<image overflow=\"visible\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAABGdBTUEAALGPC/xhBQAAAAFzUkdC\nAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAb9QTFRF\npc7ppM7ppM3pps/px+Hx1+n11un11uj11ej1zOPyqNDqzeTzwN3wttftwd3wyuLy4e/36vP69vr9\n/v///////P3+7/b75PD40OXzqdDq0ub05vH57vb7+Pv9+fz+7PX64u/4w97wt9jt3u336fP59fr8\n6PL5xd/wstXs+vz9/f7/vdvvrNLrp8/pq9Hqtdbt1ej0+fz9qtHqps7p+vz+8ff7yeLysdTsqM/q\n3+332+v25/L5xuDx3Oz2vNru0+f0r9Pr2Or1zuTz9/r9+/3+vdvu9/v9rdLr8Pb75fH46PP5udnu\n0ebz9Pn8utnuyeHxwd3v/f7+x+DxwN3v3ez28Pf7rtPrtdft4e738vj8sNTr3+736fP6qtDqu9ru\ny+Pyv9zvzeTyuNjtyOHx7fX68/j82uv2p8/qtNbswNzv/v7/vNvuxd/x1Of0tNbt1Oj09fn8xt/x\nzePyvtzv7PT64u/3rNLq6/T64O73y+Lywt7ws9bsxN7ws9Xsr9Tr2er1vtvvxN/wwt3w2On1sNTs\nt9ft+fv9/P7+yeHy2er2z+Xz5fD44/D49fr9o83p0ubz0eXz3e33sdXs4e/44e74dunCngAAAAFi\nS0dEFJLfyTUAAAAJcEhZcwAACxMAAAsTAQCanBgAAASUSURBVGje7VjtXxNHEL7d9IicRWxymAQS\nOV4SU/MCyQWIBEPEFAqIbbQJJvWtiBRorZbSEkpbsfWlVfti0z+4sLMnSfZm+ezvd883Ms/s7M7O\nPjOHojhw4MCBAwcOHLx7IFSADUskEcxEWj1d76kd7hNN6FA7NWF97aTacaKV9T7fX5e7xd+tnmoL\n0H36A49Xf4ueMz6/GCDQ2xcMHZH0s/3GAA8wODTsOTJ4w5FzonfU/yG3nzdicZdtJhPJkdEezkqp\ng2mz6XjR3gy3jI1PZO0S7LrACZNpqmCggRxff0ppZVHzIlg8+fYbsBjTQAgWiILDHAKWKvqfBMsl\nzJV0AGGGStZXsj5GutwlsMgosxQ/wvxdpxlhtksWgMx9zFjzYg3w0MG5Y1wXArID0MWzjHVFPMDE\nErNcRF2vQhWMEmmATyAPMSEA/bTESvQalgDaCU/guvQKzM8Yq1wRt+GGDC9j/okbjFCtSU8wd4ax\nPhffSfomswzfwq6gUGUEIyHN0G3I4x0xQ12zzOJGXe/CE/1CmiE6A69sRQxwj0lN6RTmT+CZZRal\nARIGY60mBQu/nKUJLMNcAlbjsvVJ7T5jrYkWfjm+LzHXdQ/i2pKHDZbHzSkxQ18Vmb8fLdKpTeb6\ntTRD5AHI2TdiAD+8jzzqPwmu69IiDUQYKyI+dm0efR+A+Coj5KQ6YeXxobAKjT5iliETcbV0Ylqu\nE9+yPJYGElobEufOM/9u9Aq2QCe+k16BsgYdbzsnAF5paBDVie+h2Ul7jfLDqi7HThLxJDXYQd0l\nW58upuAxhgRkjmlmvL71XblOgN6mfozutSGqQu5+QnXiASYxzXDVuU4I85cJShz+GdWJiDyFsIvC\nGKYTv0CG+zTElY5cZoTHsvUVuo/qBFfiXuwA9BqT2s0ncp3ohXliRGzH08cVOejEo6i0SLka2LQs\nrsR4kceD2CjSvE2uBmLLIntheZFbOnFFXqQDTA1Kv4pX8IQpiN6J6sSMdCSzzv0btCybPD6GIkeb\nIe+DiNQmapC59A6Wx+S2vBmSp9AHh2xTSGPljcOd0WchJI905TmzTKLJvf6CEcZtT6gZITas0t+h\nFPfFAN068j6sE8BUHHpm+1m20QPvk4/tNqXIvys861iAwDDoRNoueHwBxnlrarghzGWkUsb6KN/j\nMoxkf9ha/d7nTAFpHqaGLXSeeHiMTnjv2ZyQbszyl0tfQiu4is0TL9ChmY9kxdsigexXLQXjOhEU\nS1F7xSz3nyInsFKYEXoBDeweSECGBaYjME9cEKYGy4JL9UAJqqy76fOcHHz5a7HXh5btZFOG9Evi\nNkFj9Tq2/i0fb9h/+lcKaS2bzWqBZCWa35oHgRo9ZP21V+bLmK0RCI3xD/CcZlvlZkEtWSOBNzXW\nP5zLLdzc6S+Hi/zH4sHDotlF/nGsh3YriaNz0kTtzpJF/HtCa/tyPkj/P/Vq0z8Q7BCco8vuvtTb\nvzerPtUaL++qr5eO3L3hyJuZ1p5L/n1jNOpSNHZNmm8Y/zX9YjSsUh03WtwbDWOtIm1ZDhw4cODA\ngQMHDt5N/A9YKftW+72diwAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAl\ndEVYdGRhdGU6Y3JlYXRlADIwMTctMTItMDNUMTU6MDU6MTYtMDU6MDAPT1dgAAAAJXRFWHRkYXRl\nOm1vZGlmeQAyMDE3LTEyLTAzVDE1OjA1OjE2LTA1OjAwfhLv3AAAAABJRU5ErkJggg==\">\n</image>\n</svg>\n</a>\n<a id=\"linkedIn-logo\" href=\"https://www.linkedin.com/in/larry-hastings-90b36537/\" target=\"_blank\">\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"50px\" height=\"29px\" viewBox=\"-2 0 40 29\" enable-background=\"new 0 0 40 29\" xml:space=\"preserve\">\n<image overflow=\"hidden\" width=\"40\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAA2CAYAAACY0PQ8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ\nbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp\nbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6\neD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0\nNTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo\ndHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw\ndGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv\nIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS\nZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD\ncmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFu\nY2VJRD0ieG1wLmlpZDowOTlBNzAxMTFDN0MxMUUyQjkxNEY3RUNEMkY1ODRBRCIgeG1wTU06RG9j\ndW1lbnRJRD0ieG1wLmRpZDowOTlBNzAxMjFDN0MxMUUyQjkxNEY3RUNEMkY1ODRBRCI+IDx4bXBN\nTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkRBRDFBREMwMUM3QjExRTJC\nOTE0RjdFQ0QyRjU4NEFEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA5OUE3MDEwMUM3QzEx\nRTJCOTE0RjdFQ0QyRjU4NEFEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4\nbXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+or8+WwAAAn1JREFUeNrsmztIA0EQhudCBG3iq1CD\nEBEsVFAhjYVgBCuJkBSWojaWYqedKS2vTmO0tTBFtLKIoGATfIA2giYgEQs12iSgsO6ciRya3Lm+\nkpvdH5a77O0V82UeOxuiMcZAW94JAYDOhw+crQwfi2x1Ii7ykgZL2whgC2gpLALCVfQAahKyyUUg\nBMrJJwpBeikICsKb3F9ZFOpvg8h4Dwx2eIzPJzdPENm9gPjZrRyegMZvTfvfAaDwHudiUwP0IaAH\nrHAIlTTj7zTWkIYQsQAgssbREMwh8JM1qjo4HQJWAduO5SFPG4K+n7bPCbxUkoYQS13DOh+VhM9i\nFs/J5ITZzVOY48McGniPc/iMgvA8gVFMdmx1QlPV4bd7h79WV3MDBLpbjWtJucILHGefIHl5V30I\n3K2s42l5R+gd8/ohrwf0YB+MdrdUXP/IYej7V6AfpCGXf6a1WZrlfcfRwoglAFRjvdvoX9JLYwY0\nMhAQwJpgB4owkvPD0NRQ53wIGPf6ZN+33kUQerDX+RCuuFujMd8Vtu/mBCptAxXqb6cFARuwvct7\nY2Al+IoCNsnUMfsENDi0kfq0D8AjO3R5Kw398hlG1TwhED0suxHCfgS9wko+CjkBu0/cDVZS/Px/\nT7GrAiFp801bASIDIV1jp1E1WSJzhWcZwuFOhUOtSUFQEBQEBaEmeof/lqZpXn4JfphOMMaybpkA\ncIOjH+bn+UjI4gkGADTaNJcqzUmXE9Dwokf4pcsJ5hAoeYK01aGcJ8gCIYEeYE6MphyRkOYHWelL\nZPGbz/JLVO0Y1bZZQbCFkCFoV0YUwiJBCEI2uYr/FQoT8Qi0ISz6R7BXAQYAwCHpg1jOjIAAAAAA\nSUVORK5CYII=\" transform=\"matrix(1 0 0 1 0.5 0)\">\n</image>\n</svg>\n\n</a>\n<a id=\"upwork-logo\" href=\"https://www.upwork.com/o/profiles/users/_~0189c0090602248d8f/\" target=\"_blank\">\n\t<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"29px\" height=\"29px\" viewBox=\"0 0 29 29\" enable-background=\"new 0 0 29 29\" xml:space=\"preserve\">\n<image overflow=\"visible\" enable-background=\"new    \" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ\nbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp\nbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6\neD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0\nNTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo\ndHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw\ndGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv\nIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS\nZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD\ncmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFu\nY2VJRD0ieG1wLmlpZDoxMEE4MEM3OTNGMzcxMUU4OEY0Q0JGMDZCQjkzNTA5MCIgeG1wTU06RG9j\ndW1lbnRJRD0ieG1wLmRpZDoxMEE4MEM3QTNGMzcxMUU4OEY0Q0JGMDZCQjkzNTA5MCI+IDx4bXBN\nTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjEwQTgwQzc3M0YzNzExRTg4\nRjRDQkYwNkJCOTM1MDkwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEwQTgwQzc4M0YzNzEx\nRTg4RjRDQkYwNkJCOTM1MDkwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4\nbXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+0u2LvQAAB31JREFUeNrsWnlsFGUU/83s7NU9uu3S\n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\">\n</image>\n</svg>\n</a>\n</div>"

/***/ }),

/***/ "./src/app/logo/logo.component.ts":
/*!****************************************!*\
  !*** ./src/app/logo/logo.component.ts ***!
  \****************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    LogoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logo',
            template: __webpack_require__(/*! ./logo.component.html */ "./src/app/logo/logo.component.html"),
            styles: [__webpack_require__(/*! ./logo.component.css */ "./src/app/logo/logo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/music/music.component.css":
/*!*******************************************!*\
  !*** ./src/app/music/music.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".music{\n    position: absolute;\n    z-index: 1;\n    right: 0;\n    margin: 10px 10px 0 0;\n    cursor: pointer;\n}\n.music p{\n    text-align: right;\n    color: white;\n    font-size: 24px;\n}\n.music p:hover{\n    color: red;\n}\n.music a:hover{\n    text-decoration: none;\n}"

/***/ }),

/***/ "./src/app/music/music.component.html":
/*!********************************************!*\
  !*** ./src/app/music/music.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='music'>\n    <a href=\"https://www.pandora.com\" target=\"_blank\"><p>pandora</p></a>\n    <a href=\"https://open.spotify.com\" target=\"_blank\"><p>spotify</p></a>\n</div>\n"

/***/ }),

/***/ "./src/app/music/music.component.ts":
/*!******************************************!*\
  !*** ./src/app/music/music.component.ts ***!
  \******************************************/
/*! exports provided: MusicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicComponent", function() { return MusicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MusicComponent = /** @class */ (function () {
    function MusicComponent() {
    }
    MusicComponent.prototype.ngAfterViewInit = function () { };
    MusicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-music',
            template: __webpack_require__(/*! ./music.component.html */ "./src/app/music/music.component.html"),
            styles: [__webpack_require__(/*! ./music.component.css */ "./src/app/music/music.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MusicComponent);
    return MusicComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.css":
/*!***************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#new-heights-bg{\n    background: #a3a3a3 url('pigeon-atop-skyscraper.jpeg') no-repeat 80% 80%;\n}\n#marketing-message{\n    position: absolute;\n    top: 25%;\n    margin-left: 20%;\n}\n#marketing-message p{\n    font-size: 2em;\n    color: #fff;\n    text-shadow: 1px 1px 0 #000;\n}\n#marketing-message label{\n    font-size: 1.7em;\n    padding-left: 20px;\n    text-align: center;\n}\n#marketing-message ul{\n    list-style: none;\n    font-size: 1.3em;\n    margin-left: 20px;\n    padding: 5px;\n    background-color: #99badd92;\n    width: 85%;\n    border-radius: 10px;\n}\n#contact{\n    font-size: 1.5em !important;\n    color: #fff;\n}\n#contact a{\n    color: #00ad34;\n    text-decoration: none;\n    font-size: 1.5em;\n    font-weight: bold;\n}\n#contact a:hover{\n    color: red;\n}\nh1{\n    margin-bottom: 1em;\n    color: #99badd;\n    font-weight: bold;\n}\n.item{\n    padding-left: 2em;\n    padding-right: 2em;\n    padding-bottom: 1em;\n}\n.item-link:hover{\n    text-decoration: none;\n    cursor: pointer;\n}\n.item-link:hover img{\n    box-shadow: 0 0 2px 1px #f44242,0 0 30px 15px #d3d3d3;\n}\nimg{\n    box-shadow: 0 0 30px 15px #d3d3d3;\n}\n.half-circle{\n    border-radius: 0 0 50% 50%;\n}\nh2{\n    color: white;\n    text-shadow:\n        1px 1px 0 #000,\n        -1px -1px 0 #000,\n        1px -1px 0 #000,\n        -1px 1px 0 #000,\n        0 1px 0 #000,\n        1px 0 0 #000,\n        0 -1px 0 #000,\n        -1px 0 0 #000;\n    text-align: center;\n    margin-top: -4em;\n    margin-bottom: 4em;\n}\np{\n    font-size: 1.3em;\n}\n.cms-help{\n    background-color: #99badd;\n}\n.cms-help p{\n    font-size: 1em;\n}\n.cms-help a{\n    font-size: 2em;\n    color: #99badd;\n    background-color: #dfdbdb;\n    padding: 0.2em;\n    border-radius: 5px;\n}\n.cms-help a:hover{\n    text-decoration: none;\n    color: #000000;\n    border: 1px solid #000000;\n}\n.upwork{\n    background-color: #38a0009c;\n    padding: 1em;\n}\n@media screen and (max-width: 1200px){\n    h2{\n        font-size: 1.9em;\n    }\n}\n@media screen and (max-width: 767px){\n    #new-heights-bg{\n        background-position: 73% 70% !important;\n    }\n    #marketing-message{\n        margin-left: 5%;\n    }\n    #marketing-message p{\n        font-size: 1.7em;\n    }\n    #marketing-message label{\n        font-size: 1.4em;\n    }\n    #marketing-message ul{\n        font-size: 1.2em;\n    }\n    #contact{\n        font-size: 1.2em !important;\n    }\n}\n@media screen and (max-width: 575px){\n    h2{\n        font-size: 1.5em;\n    }\n    p{\n        font-size: 1em;\n    }\n    #new-heights-bg{\n      background-image: url('pigeon-atop-skyscraper-mobile.jpeg');\n    }\n}\n@media screen and (max-width: 400px){\n    h2{\n        font-size: 1.3em;\n    }\n\n}\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<title>Portfolio</title>\n<app-header-small></app-header-small>\n<div id=\"new-heights-bg\" class=\"image-bg\">\n    <section id=\"marketing-message\">\n        <p>Take your website to new heights!</p>\n        <label>Specialties</label>\n        <ul>\n            <li>Angular Web Apps</li>\n            <li>Web Consulting</li>\n            <li>Plan, Build, &amp; Optimize your Website</li>\n        </ul>\n        <p id='contact'><a [routerLink]=\"['/contact']\">Contact</a> me now to schedule a meeting.</p>\n    </section>\n</div>\n\n<section id=\"top\" class='container portfolio-container'>\n    <h1>Portfolio</h1>\n    <div class=\"row\">\n        <div class=\"item col-md-4 col-sm-6 col-sm-offset-0 col-xs-8 col-xs-offset-2\" *ngFor=\"let item of items\">\n            <a href=\"{{item.link}}\" class=\"item-link\" target=\"_blank\">\n                <img class=\"{{item.shapeClass}} img-responsive\" src=\"{{item.imageUrl}}\" alt=\"{{item.name}}\" />\n                <h2>{{item.name}}</h2>\n            </a>\n            <p>{{item.description}}</p>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"cms-help col-xs-12\">\n            <h3>Need help with Wordpress or another CMS?</h3>\n            <p>I can get you up and running, edit a current setup, or act as a consultant.</p>\n        </div>\n        <div class=\"upwork col-xs-12\">\n            <h3>You can also find me on Upwork, a freelance for hire site: <a href=\"https://www.upwork.com/o/profiles/users/_~0189c0090602248d8f/\" target=\"_blank\">Go to My Profile</a></h3>\n        </div>\n    </div>\n</section>\n  \n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
        this.items = [
            {
                name: 'Photo Repository',
                imageUrl: '../../assets/imgs/photos.jpg',
                description: 'Simple, but powerful photo repository using the MEAN stack, NGINX, Red Hat, Bootstrap and hosted on Amazon.',
                shapeClass: 'half-circle',
                link: 'https://photos.larry-hastings.com'
            },
            {
                name: 'Small Business',
                imageUrl: '../../assets/imgs/store-front.jpg',
                description: 'A single page website template for any small business that needs a web presence quickly and affordably.  This is Bootstrap 4 at work on top of Angular.JS.  It could be expanded upon or left as is.',
                shapeClass: 'img-circle',
                link: 'https://store-front.larry-hastings.com'
            },
            {
                name: "Lulu's Recipes",
                imageUrl: '../../assets/imgs/lulu-portfolio.jpg',
                description: 'An Angular.JS app for recipe sharing named after my aunt Lulu!!. On the backend, this uses MongoDB, Express.JS, Node.JS, and a NGINX web server hosted on Red Hat Linux in the AWS cloud.',
                shapeClass: 'square',
                link: 'https://lulus-recipes.larry-hastings.com'
            },
            {
                name: 'Relaxing Workspace',
                imageUrl: '../../assets/imgs/curacao_beach.jpg',
                description: 'This is basically just a background wallpaper screen for a desktop or laptop. It has a jQuery checklist, a vanilla JavaScript calculator using Math.JS, and links for pandora and spotify for ease.',
                shapeClass: 'half-circle',
                link: '/relax-workspace'
            }
        ];
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());

var Item = /** @class */ (function () {
    function Item() {
    }
    return Item;
}());


/***/ }),

/***/ "./src/app/relax-workspace/relax-workspace.component.css":
/*!***************************************************************!*\
  !*** ./src/app/relax-workspace/relax-workspace.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background{\n    background: #ffffe6 url('woodBeach.jpg') no-repeat center;\n    background-size: cover;\n    height: 100vh;\n    width: 100%;\n    position: relative;\n}\n.gadget-container{\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    padding-bottom: 20px;\n}\n.left-gadget{\n    max-height: 300px;\n    overflow-y: scroll;\n    margin-bottom: 20px;\n}\n::-webkit-scrollbar{\n    width: 0px;\n}\n@media screen and (max-width: 480px){\n    .gadget-container{\n        margin-top: 100px;\n        bottom: auto;\n    }\n    .background{\n        height: 150vh;\n    }\n\n}\n"

/***/ }),

/***/ "./src/app/relax-workspace/relax-workspace.component.html":
/*!****************************************************************!*\
  !*** ./src/app/relax-workspace/relax-workspace.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<title>Relax and Work</title>\n<app-header-small></app-header-small>\n<div class=\"background container-fluid\">\n    <app-music></app-music>\n    <section class=\"gadget-container row\">\n        <div class='col-sm-6'>\n            <div class=\"left-gadget col-md-10 col-md-offset-0 col-xs-10 col-xs-offset-1\"><app-checklist></app-checklist></div>\n        </div>\n        <div class='col-sm-6'>\n            <div class=\"right-gadget col-lg-3 col-lg-offset-6 col-md-4 col-md-offset-5 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1\"><app-calculator></app-calculator></div>\n        </div>\n    </section>\n</div>\n\n"

/***/ }),

/***/ "./src/app/relax-workspace/relax-workspace.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/relax-workspace/relax-workspace.component.ts ***!
  \**************************************************************/
/*! exports provided: RelaxWorkspaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelaxWorkspaceComponent", function() { return RelaxWorkspaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RelaxWorkspaceComponent = /** @class */ (function () {
    function RelaxWorkspaceComponent() {
    }
    RelaxWorkspaceComponent.prototype.ngOnInit = function () {
    };
    RelaxWorkspaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-relax-workspace',
            template: __webpack_require__(/*! ./relax-workspace.component.html */ "./src/app/relax-workspace/relax-workspace.component.html"),
            styles: [__webpack_require__(/*! ./relax-workspace.component.css */ "./src/app/relax-workspace/relax-workspace.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RelaxWorkspaceComponent);
    return RelaxWorkspaceComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/larry/Documents/Web_Sites/website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map