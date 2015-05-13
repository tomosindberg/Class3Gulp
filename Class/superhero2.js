class Superhero{
  constructor(cape, city, nemisis ){
    this.cape = cape;
    this.city = city;
    this.nemisis = nemisis;
  }

  saveTheDay(){
    return ['hero with cape of',this.cape,
      'saves', this.city, 'from',
      this.nemisis].join(' ');
  }
}

class Sidekick extends Superhero{
  constructor(cape, superhero) {
    super(cape, superhero.city, superhero.nemisis);
    this.superhero = superhero;
  }
  saveTheDay(){
  return "I helped" + super.saveTheDay(this);
  }
  sayCachePhrase(){
    return 'I love' + this.superhero.cape;
  }
}
Sidekick.prototype = Object.create(Superhero.prototype);
Sidekick.prototype.constructor = Sidekick;

Sidekick.prototype.saveTheDay=function(){
  return 'I helped ' + Superhero.prototype.saveTheDay.call(this);
}

Sidekick.prototype.sayCachePhrase = function(){
  return 'I love ' + this.superhero.cape;
}

//var superman = new Superhero('red', 'ny', 'lex luther');
//var batman = new Superhero('black', 'gotham', 'joker');
var bikewoman = new Superhero('blue', 'portland' , 'car');
var beerboy = new Sidekick('green', bikewoman);
//console.log('city' in batman);  //does batman have a city object

console.log(bikewoman.saveTheDay());
console.log(beerboy.saveTheDay());
console.log(beerboy.sayCachePhrase());

//console.log(bikewoman.saveTheDay() === batman.saveTheDay());
//console.log(bikewoman.saveTheDay());
