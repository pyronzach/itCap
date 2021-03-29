"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var React = require("react");
var ReactDOM = require("react-dom");
var header_1 = require("./header");
Object.defineProperty(exports, "Header", { enumerable: true, get: function () { return header_1.Header; } });
ReactDOM.render(React.createElement("div", null,
    React.createElement(header_1.Header, null),
    React.createElement("p", null, "This is a paragraph"),
    React.createElement("a", { href: "#" }, "Click Me")), document.querySelector('#root'));
