///////////------------
// function Cars (make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }

// Cars.prototype.carInfo = function(){
//   console.log('Make-' + this.make
//     + ' Model-' + this.model
//     + ' Year-' + this.year);
//   };

// var wrx2015 = new Cars('Subaru', 'WRX', 2015);
// var bmw2014 = new Cars('BMW', 'M4', 2014);

// wrx2015.carInfo();
// //////////------------------

// function Cars (make, model, year) {
//   this.make = make;
//   this.model = 'model';
//   this.year = year;
//   this.carInfo = function(){
//     console.log('Make-' + this.make
//       + '  Model-' + this.model
//       + '  Year-' + this.year
//       + '  oil-' + this.oil);
//   };
// }
// function Maint(miles, schedule){
//   this.miles = miles;
//   this.schedule = schedule;
// }

// Maint.prototype = new Cars();
// var foo= new Maint();
// console.log(foo.model);

// Cars.prototype.miles = 0;
// Cars.prototype.oil = function(){
//     if (this.oil>3000) {
//       console.log('Your car needs a oil change')
//     };
// };
// var wrx2015 = new Cars('Subaru', 'WRX', 2015);
// var bmw2014 = new Cars('BMW', 'M4', 2014);

// bmw2014.oil = 3000;

// bmw2014.carInfo();
// bmw2014.oil;
// Maint.prototype = new Cars();

// console.log('BMWWWWW' + bmw2014.schedule);

// console.log(wrx2015.year);
////-------------------
/*
Okay, so now you have one class that you created in question #2.
Create at least two subclasses of that class.  Each subclass
should take at least two arguments, and have at least two properties
on the prototype - one of which is a method.  Also, have each of your
subclasses override at least one property of the parent class.
Make sure you link those subclasses' prototypes to the parent class.
If you're feeling particularly spunky, make one of your subclasses a
subclass of the other. (For example: say your parent class was Cat.
One subclass could be Kitten, and a subclass of Kitten could be SiameseKitten.)
And, if you want more practice with callbacks, feel free to have
one (or more) of your methods take a function as an argument.
*/

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


//console.log(Truck.make + ' ' + Truck.drive);
