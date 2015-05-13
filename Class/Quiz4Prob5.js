

function Toyota (make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Toyota.prototype.carInfo = function(){
  console.log('Make-' + this.make
    + ' Model-' + this.model
    + ' Year-' + this.year);
  };
Toyota.prototype.carMaint = function(miles){
  if (miles>3000) {
      console.log('Your car needs a oil change');
    }
}
function Truck(drive, bedSize, make) {
  this.drive = drive;
  this.bedSize = bedSize;
  this.make = make;
}

Truck.prototype.warranty = function(miles){
  if (miles > 25000) {
    console.log('Your ' + this.make +
    ' warranty is close to expiring at 30k miles');
  }
}

function Suv(seats, sunroof, year) {
  this.seats = seats;
  this.sunroof = sunroof;
  this.year = year;
}

Truck.prototype = Object.create(Toyota.prototype);

Truck.prototype.carInfo = function(){
  console.log('Make-' + this.make
    + ' Drive-' + this.drive
    + ' Bed Size-' + this.bedSize);
}

Truck.prototype.carMaint = function(miles){
  if (miles>2500) {
    console.log('Your '+ this.make +' needs a oil change')
    };
}
Suv.prototype.make = 'Toyota';

Suv.prototype.warranty = function(miles){
  if (miles > 25000) {
    console.log('Your ' + this.make +
    ' warranty is close to expiring at 30k miles');
  }
}

var camery = new Toyota('Toyota', 'Camery', 2015);
var tacoma = new Truck('4wd', 'long', 'Tacoma');
var runner4 = new Suv(6, 'yes', 2015);

camery.carInfo();
tacoma.carInfo();
tacoma.carMaint(5000);
runner4.warranty(26000);

