/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	

	var stayTogether = (new Date("2016/09/03 21:58:00")).getTime();
	var $timer = $('#timer h2');
	var $targets = $('.next-timer');
	$targets.each(function(index, el) {
		var date = (new Date($(this).data('date'))).getTime();
		var now = (new Date()).getTime();
		var temp = date - now;
		days = Math.floor(temp/(24*3600*1000));
		temp = temp%(24*3600*1000);
		$(this).text('还有:' + days + '天');
	});

	function reTime(){
		var now = (new Date()).getTime();
		var temp = now - stayTogether,
		days, hours, minutes, seconds, answer = '';
		days = Math.floor(temp/(24*3600*1000));
		days < 10 ? days = '0' + days : null;
		temp = temp%(24*3600*1000);
		hours = Math.floor(temp/(3600*1000));
		hours < 10 ? hours = '0' + hours : null;
		temp = temp%(3600*1000);
		minutes = Math.floor(temp/(60*1000));
		minutes < 10 ? minutes = '0' + minutes : null;
		temp = temp%(60*1000);
		seconds = Math.floor(temp/1000);
		seconds < 10 ? seconds = '0' + seconds : null;

		answer += days + '天' + hours + '时' + minutes + '分' + seconds + '秒';
		$timer.html(answer);
	}
	reTime();
	var intervalTime = setInterval(reTime, 1000);

/***/ }
/******/ ]);