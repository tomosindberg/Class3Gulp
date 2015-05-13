/////////------------Quiz 4 Problem 4------------------

function Cars (make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Cars.prototype.carInfo = function(){
  console.log('Make-' + this.make
    + ' Model-' + this.model
    + ' Year-' + this.year);
  };

var wrx2015 = new Cars('Subaru', 'WRX', 2015);
var bmw2014 = new Cars('BMW', 'M4', 2014);

wrx2015.carInfo();
