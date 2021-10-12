//#region Oefenen met functies
function macht(x) {
    return x * x;
}
console.log(macht(2));
function stringList(tekst, count) {
    var list = [];
    for (var index = 0; index < count; index++) {
        list.push(tekst);
    }
    return list;
}
console.log(stringList("test", 2));
var splitFunction = function (tekst, separator) {
    if (separator === void 0) { separator = "-"; }
    return tekst.split(separator);
};
console.log(splitFunction("hallo-World-Lucca"));
function Arrayify() {
    var tekst = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        tekst[_i] = arguments[_i];
    }
    return tekst;
}
console.log(Arrayify("1", "2", "3", "test"));
//#endregion
//#region Gestructureerde mededeling 
function gestructureerdeMededeling(jaar, klantNr, bestelNummer, separator, decorator) {
    if (jaar === void 0) { jaar = 0; }
    if (klantNr === void 0) { klantNr = 0; }
    if (bestelNummer === void 0) { bestelNummer = 0; }
    if (separator === void 0) { separator = "/"; }
    if (decorator === void 0) { decorator = "+++"; }
    var jaarString = validate(jaar, 3);
    var klantNrString = validate(klantNr, 4);
    var bestelNummerString = validate(bestelNummer, 3);
    console.log(Number("" + jaarString + klantNrString + bestelNummerString));
    var checksum = Number("" + jaarString + klantNrString + bestelNummerString) % 97;
    return "" + decorator + jaarString + separator + klantNrString + separator + bestelNummerString + checksum + decorator;
}
function validate(val, size) {
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
}
console.log(gestructureerdeMededeling(2017, 123, 1));
console.log(gestructureerdeMededeling(17, 123, 1));
console.log(gestructureerdeMededeling(2017));
//#endregion
