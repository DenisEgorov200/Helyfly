/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/photo-slider.js":
/*!***************************************!*\
  !*** ./src/assets/js/photo-slider.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("new Swiper('.photo__slider', {\r\n\r\n    slidesPerView: 1,\r\n\r\n    centeredSlides: true,\r\n\r\n    loop: true,\r\n\r\n    spaceBetween: 30,\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/photo-slider.js?");

/***/ }),

/***/ "./src/assets/js/show-more.js":
/*!************************************!*\
  !*** ./src/assets/js/show-more.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// // const showMore = document.querySelector('.photo__more');\r\n// // const photoLength = document.querySelectorAll('.gallery__item').length;\r\n// // let items = 8;\r\n\r\n// // showMore.addEventListener('click', function() {\r\n// //     items += 4;\r\n// //     const array = Array.from(document.querySelector('.gallery').children);\r\n// //     const visItems = array.slice(0, items);\r\n\r\n// //     visItems.forEach(el => el.classList.add('is-visible'));\r\n\r\n// //     if (visItems.length === photoLength) {\r\n// //         visItems.forEach(el => el.classList.remove('is-visible'));\r\n// //     }\r\n// // });\r\n\r\n// const showMore = document.querySelector('.photo__more');\r\n// const photoLength = document.querySelectorAll('.gallery__item');\r\n// const arrowImg = document.querySelectorAll('.photo__img')\r\n// console.log(arrowImg);\r\n// let items = 8;\r\n\r\n// showMore.addEventListener('click', function() {\r\n//     for (let i = items; i < items + 4; i++) {\r\n//         if (photoLength[i]) {\r\n//             photoLength[i].style.display = 'block';\r\n//         }\r\n//     }\r\n//     items += 4;\r\n//     if (items === photoLength.length) {\r\n//         // event.target.style.display = 'none'\r\n//         showMore.style.display = 'none'\r\n//     }\r\n// });\n\n//# sourceURL=webpack:///./src/assets/js/show-more.js?");

/***/ }),

/***/ "./src/assets/js/yandex-map.js":
/*!*************************************!*\
  !*** ./src/assets/js/yandex-map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("ymaps.ready(init);\r\nfunction init(){\r\n    let myMap = new ymaps.Map(\"map\", {\r\n        center: [55.75749303, 37.61569861],\r\n        zoom: 14\r\n    });\r\n\r\n            // Создаём макет содержимого.\r\n            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(\r\n                '<div style=\"color: #FFFFFF; font-weight: bold;\">$[properties.iconContent]</div>'\r\n            ),\r\n    \r\n            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {\r\n                hintContent: 'Встречаемся тут',\r\n                balloonContent: 'Встречаемся тут'\r\n            }, {\r\n                // Опции.\r\n                // Необходимо указать данный тип макета.\r\n                iconLayout: 'default#image',\r\n                // Своё изображение иконки метки.\r\n                iconImageHref: './assets/images/icon/map-point.png',\r\n                // Размеры метки.\r\n                iconImageSize: [50, 60],\r\n                // Смещение левого верхнего угла иконки относительно\r\n                // её \"ножки\" (точки привязки).\r\n                iconImageOffset: [-5, -38]\r\n            }),\r\n    \r\n        myMap.geoObjects\r\n            .add(myPlacemark)\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/yandex-map.js?");

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/photo-slider.js ./src/assets/js/show-more.js ./src/assets/js/yandex-map.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\www\\helyfly\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\n__webpack_require__(/*! C:\\www\\helyfly\\src\\assets\\js\\photo-slider.js */\"./src/assets/js/photo-slider.js\");\n__webpack_require__(/*! C:\\www\\helyfly\\src\\assets\\js\\show-more.js */\"./src/assets/js/show-more.js\");\nmodule.exports = __webpack_require__(/*! C:\\www\\helyfly\\src\\assets\\js\\yandex-map.js */\"./src/assets/js/yandex-map.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/photo-slider.js_./src/assets/js/show-more.js_./src/assets/js/yandex-map.js?");

/***/ })

/******/ });