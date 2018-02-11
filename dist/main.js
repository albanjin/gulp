"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// albanjin 

var Point = function () {
    function Point(x, y) {
        _classCallCheck(this, Point);

        this.x = x;
        this.y = y;
    }

    _createClass(Point, null, [{
        key: "distance",
        value: function distance(a, b) {
            var dx = a.x - b.x;
            var dy = a.y - b.y;

            return Math.hypot(dx, dy);
        }
    }]);

    return Point;
}();

var p1 = new Point(5, 5);
var p2 = new Point(10, 10);
console.log(Point.distance(p1, p2));
var jin = ["arr"];