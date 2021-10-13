"use strict";
exports.__esModule = true;
exports.GestructureerdeMededeling = void 0;
var GestructureerdeMededeling = /** @class */ (function () {
    //private _checkSum: number;
    function GestructureerdeMededeling(jaar, klantNr, bestelNummer) {
        var _this = this;
        if (jaar === void 0) { jaar = 0; }
        if (klantNr === void 0) { klantNr = 0; }
        if (bestelNummer === void 0) { bestelNummer = 0; }
        this.toString = function () {
            return "" + GestructureerdeMededeling.decorator + _this.jaar + GestructureerdeMededeling.separator + _this.klantNr + GestructureerdeMededeling.separator + _this.bestelNummer + _this.getCheckSum() + GestructureerdeMededeling.decorator;
        };
        this.jaar = this.validate(jaar, 3);
        this.klantNr = this.validate(klantNr, 4);
        this.bestelNummer = this.validate(bestelNummer, 3);
    }
    GestructureerdeMededeling.prototype.getCheckSum = function () {
        return Number("" + this.jaar + this.klantNr + this.bestelNummer) % 97;
    };
    GestructureerdeMededeling.prototype.validate = function (val, size) {
        var temp = String(val);
        if (temp.length > size) {
            temp = temp.substring(temp.length - size);
        }
        else if (temp.length < size) {
            var count = size - temp.length;
            for (var index = 0; index < count; index++) {
                temp = "0" + temp;
            }
        }
        return temp;
    };
    GestructureerdeMededeling.decorator = "+++";
    GestructureerdeMededeling.separator = "/";
    return GestructureerdeMededeling;
}());
exports.GestructureerdeMededeling = GestructureerdeMededeling;
//   let greeter = new GestructureerdeMededeling(2017, 123, 1);
//   console.log(greeter.toString())
