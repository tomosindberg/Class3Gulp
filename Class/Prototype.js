// function Player(name, hitpoints){
//   this.name = name;
//   this.hitpoints = 100;
//   this.attack = function attack(opponent){
//     opponent.hitpoints -= 10;
//     console.log(this.name+' just hit '
//       + opponent.name);
//   }
// }

// var p1 = new Player('Conan');
// var p2 = new Player('hercules');

// p1.attack(p2)
// console.log(p2.name + ' has ' + p2.hitpoints +
//   ' hit points left');
// Player.prototype.heal = function heal(targetPlayer){
//   targetPlayer.hitpoints += 5;
// };

// p1.heal(p2);
// console.log(p2.name + ' has ' + p2.hitpoints +
//   ' hit points left');

// Player.prototype.energy = 200;
// console.log(p1.energy);

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


/*
function parentClass(){
  this.parentProperty1 = 'Hola';
  this.parentMethod1 = function parentMethod1(arg1){
    return arg1 + ' Parent method 1 return data...';
  }
}

function childClass(){
  this.childProperty1 = 'Adios';
  this.childMethod1 = function childMethod1(arg1){
    return arg1 + ' Child method 1 return data...';
  }
}

childClass.prototype = new parentClass();

var instance1 = new childClass();
console.log(instance1.parentMethod1('result: '));
console.log(instance1.childMethod1('result: '));
console.log(instance1.parentProperty1);
console.log(instance1.childProperty1);

childClass.prototype.parentMethod1 = function parentMethod1(arg1){
  return arg1 = ' I have overridden Parent method 1';
}
console.log(instance1.parentMethod1('result: '));

*//////////////////////////////


/* ///////------------------------------
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
*//////////////------------------
















