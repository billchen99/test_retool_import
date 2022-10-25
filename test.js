window.Document = class Document {
  static test1(x){
    return x + 2; 
  }
}

window.Shipment = class Shipment {
  static all = []
  static add_shipments (num) {
    return num + 1;
  }
  
  getNum(){
    return this.SHIPMENT_ID;
  }
  constructor (shipment){
  	this.SHIPMENT_ID = shipment.id;
  }
}

window.HELPERS = class HELPERS {
    static convertDateTimeToMountainTime(date) {
        const options = {
            year: 'numeric', month: 'short', day: 'numeric',
            hour: 'numeric', minute: 'numeric',
            timeZoneName: 'short',
            hour12: true,
            timeZone: 'America/Denver'
        };
        const convertedDate = new Date(date);
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(convertedDate);
        return (formattedDate) ? formattedDate : '---';
    }
}
