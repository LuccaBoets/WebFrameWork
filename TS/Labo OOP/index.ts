interface IGestructureerdeMededeling {
    jaar: string;
    klantNr: string;
    bestelNummer: string;

    toString();

  }

export class GestructureerdeMededeling implements IGestructureerdeMededeling  {
    jaar: string;
    klantNr: string;
    bestelNummer: string;
    static decorator : string = "+++";
    static separator : string = "/";
    //private _checkSum: number;
   
    constructor(jaar: number = 0, klantNr: number = 0, bestelNummer: number = 0) {
      this.jaar = this.validate(jaar, 3);
      this.klantNr = this.validate(klantNr, 4);
      this.bestelNummer = this.validate(bestelNummer, 3);
    }

    getCheckSum() {
        return Number(`${this.jaar}${this.klantNr}${this.bestelNummer}`) % 97;
    }


    validate(val: number, size: number) {

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

    public toString = () : string => {
        return `${GestructureerdeMededeling.decorator}${this.jaar}${GestructureerdeMededeling.separator}${this.klantNr}${GestructureerdeMededeling.separator}${this.bestelNummer}${this.getCheckSum()}${GestructureerdeMededeling.decorator}`
    }
   
  }
   
//   let greeter = new GestructureerdeMededeling(2017, 123, 1);

//   console.log(greeter.toString())