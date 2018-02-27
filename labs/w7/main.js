function Koala(name, age) {
  this.name = name;
  this.age = age;
  this.type = "Koala";
  this.image = "images/koala.png";
}

function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.type = "Dog";
  this.image = "images/dog.png";
}

function Whale(name, age) {
  this.name = name;
  this.age = age;
  this.type = "Whale";
  this.image = "images/whale.png";
}


var animals = [new Koala(), new Dog(), new Whale()];

var animalNames = ["Ben", "Sally", "Angela", "Ally", "Arly", "Vicky", "Shannon", "dog"];

function generateRandomIndex(maxIndex)
{
    return Math.floor(Math.random() * maxIndex);
}

function generateRandomName()
{
    return animalNames[generateRandomIndex(animalNames.length)];
}

function generateRandomAge()
{
    return Math.floor(Math.random() * 10);
}

function generateRandomAnimal()
{
    var randomAnimal = animals[generateRandomIndex(animals.length)]
    if (randomAnimal instanceof Koala )
        return new Koala(generateRandomName(), generateRandomAge());
    if (randomAnimal instanceof Dog )
        return new Dog(generateRandomName(), generateRandomAge());
    if (randomAnimal instanceof Whale )
        return new Whale(generateRandomName(), generateRandomAge());
}


$(document).ready(function() {

  // generate a random animal when the document opens
  var animal = generateRandomAnimal();
  // update the page based on the animal properties
  $("#animal-properties").text(animal.name + "  " + animal.age + "years old");
  $("#animal-img").attr("src", animal.image);

});

