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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/config/webpack.config.dev.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/webpack.config.dev.js":
/*!******************************************!*\
  !*** ./src/config/webpack.config.dev.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports = {\n  entry: './src/index.tsx',\n  output: {\n    filename: 'bundle.js',\n    path: __dirname + '/dist',\n  },\n\n  // Enable sourcemaps for debugging webpack's output.\n  devtool: 'source-map',\n\n  resolve: {\n    // Add '.ts' and '.tsx' as resolvable extensions.\n    extensions: ['.ts', '.tsx', '.js', '.json'],\n  },\n\n  module: {\n    rules: [\n      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.\n      {test: /\\.tsx?$/, loader: 'awesome-typescript-loader'},\n\n      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.\n      {enforce: 'pre', test: /\\.js$/, loader: 'source-map-loader'},\n    ],\n  },\n\n  // When importing a module whose path matches one of the following, just\n  // assume a corresponding global variable exists and use that instead.\n  // This is important because it allows us to avoid bundling all of our\n  // dependencies, which allows browsers to cache those libraries between builds.\n  externals: {\n    react: 'React',\n    'react-dom': 'ReactDOM',\n  },\n};\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL3dlYnBhY2suY29uZmlnLmRldi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb25maWcvd2VicGFjay5jb25maWcuZGV2LmpzPzE0NmYiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGVudHJ5OiAnLi9zcmMvaW5kZXgudHN4JyxcbiAgb3V0cHV0OiB7XG4gICAgZmlsZW5hbWU6ICdidW5kbGUuanMnLFxuICAgIHBhdGg6IF9fZGlybmFtZSArICcvZGlzdCcsXG4gIH0sXG5cbiAgLy8gRW5hYmxlIHNvdXJjZW1hcHMgZm9yIGRlYnVnZ2luZyB3ZWJwYWNrJ3Mgb3V0cHV0LlxuICBkZXZ0b29sOiAnc291cmNlLW1hcCcsXG5cbiAgcmVzb2x2ZToge1xuICAgIC8vIEFkZCAnLnRzJyBhbmQgJy50c3gnIGFzIHJlc29sdmFibGUgZXh0ZW5zaW9ucy5cbiAgICBleHRlbnNpb25zOiBbJy50cycsICcudHN4JywgJy5qcycsICcuanNvbiddLFxuICB9LFxuXG4gIG1vZHVsZToge1xuICAgIHJ1bGVzOiBbXG4gICAgICAvLyBBbGwgZmlsZXMgd2l0aCBhICcudHMnIG9yICcudHN4JyBleHRlbnNpb24gd2lsbCBiZSBoYW5kbGVkIGJ5ICdhd2Vzb21lLXR5cGVzY3JpcHQtbG9hZGVyJy5cbiAgICAgIHt0ZXN0OiAvXFwudHN4PyQvLCBsb2FkZXI6ICdhd2Vzb21lLXR5cGVzY3JpcHQtbG9hZGVyJ30sXG5cbiAgICAgIC8vIEFsbCBvdXRwdXQgJy5qcycgZmlsZXMgd2lsbCBoYXZlIGFueSBzb3VyY2VtYXBzIHJlLXByb2Nlc3NlZCBieSAnc291cmNlLW1hcC1sb2FkZXInLlxuICAgICAge2VuZm9yY2U6ICdwcmUnLCB0ZXN0OiAvXFwuanMkLywgbG9hZGVyOiAnc291cmNlLW1hcC1sb2FkZXInfSxcbiAgICBdLFxuICB9LFxuXG4gIC8vIFdoZW4gaW1wb3J0aW5nIGEgbW9kdWxlIHdob3NlIHBhdGggbWF0Y2hlcyBvbmUgb2YgdGhlIGZvbGxvd2luZywganVzdFxuICAvLyBhc3N1bWUgYSBjb3JyZXNwb25kaW5nIGdsb2JhbCB2YXJpYWJsZSBleGlzdHMgYW5kIHVzZSB0aGF0IGluc3RlYWQuXG4gIC8vIFRoaXMgaXMgaW1wb3J0YW50IGJlY2F1c2UgaXQgYWxsb3dzIHVzIHRvIGF2b2lkIGJ1bmRsaW5nIGFsbCBvZiBvdXJcbiAgLy8gZGVwZW5kZW5jaWVzLCB3aGljaCBhbGxvd3MgYnJvd3NlcnMgdG8gY2FjaGUgdGhvc2UgbGlicmFyaWVzIGJldHdlZW4gYnVpbGRzLlxuICBleHRlcm5hbHM6IHtcbiAgICByZWFjdDogJ1JlYWN0JyxcbiAgICAncmVhY3QtZG9tJzogJ1JlYWN0RE9NJyxcbiAgfSxcbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/config/webpack.config.dev.js\n");

/***/ })

/******/ });