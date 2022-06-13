window.Document = class Document {
  static test1(x){
    return x + 1; 
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
