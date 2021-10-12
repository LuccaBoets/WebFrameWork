//#region Oefenen met functies
function macht(x) {
    return x * x;
}

console.log(macht(2))

function stringList(tekst: string, count: number) {
    var list: string[] = [];

    for (let index = 0; index < count; index++) {
        list.push(tekst);
    }

    return list;
}

console.log(stringList("test", 2))

var splitFunction = (tekst: string, separator = "-") => {
    return tekst.split(separator)
}

console.log(splitFunction("hallo-World-Lucca"))

function Arrayify(...tekst: string[]) {
    return tekst;
}

console.log(Arrayify("1", "2", "3", "test"))

//#endregion

//#region Gestructureerde mededeling 

function gestructureerdeMededeling(jaar: number = 0, klantNr: number = 0, bestelNummer: number = 0, separator = "/", decorator = "+++") {

    var jaarString = validate(jaar, 3)
    var klantNrString = validate(klantNr, 4)
    var bestelNummerString = validate(bestelNummer, 3)

    console.log(Number(`${jaarString}${klantNrString}${bestelNummerString}`))
    var checksum = Number(`${jaarString}${klantNrString}${bestelNummerString}`) % 97;

    return `${decorator}${jaarString}${separator}${klantNrString}${separator}${bestelNummerString}${checksum}${decorator}`
}

function validate(val: number, size: number) {

    var temp: string = String(val);

    if (temp.length > size) {
        temp = temp.substring(temp.length - size);
    } else if (temp.length < size) {

        var count = size - temp.length;
        for (let index = 0; index < count; index++) {
            temp = "0" + temp
        }
    }

    return temp;
}

console.log(gestructureerdeMededeling(2017, 123, 1))
console.log(gestructureerdeMededeling(17, 123, 1))
console.log(gestructureerdeMededeling(2017))

 //#endregion