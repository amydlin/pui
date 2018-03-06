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

  // get the savedAnimal in local storage if one exists
  var animal = JSON.parse(localStorage.getItem("savedAnimal"));

  //use a boolean to keep track of whether you have saved an animal
  var hasSavedAnimal = false;

  //check if the saved animal exists in local storage
  if (animal === null) 
  {
    //if there is no saved animal, the button should display the Save Animal text
    $("#button-storage").text("Save Animal");

    //if there is no saved animal, we generate one
    animal = generateRandomAnimal();
  } 
  else 
  {
    //if there is a saved animal, the button should display Clear Animal text
    $("#button-storage").text("Clear Animal");

    //change the boolean to note that this animal has been saved
    hasSavedAnimal = true;
  }

  // update the page based on the animal properties
  $("#animal-properties").text(animal.name + "  " + animal.age + "years old");
  $("#animal-img").attr("src", animal.image);


  $("#button-storage").click(function() {
    //when we are clearing the animal
    if (hasSavedAnimal) 
    {
      // clear the animal from the local storage
      localStorage.removeItem("savedAnimal");

      // if this button was clicked, hide button and show message to user
      $("#button-storage").css("display", "none");
      $("#button-action-text").text("Cleared!");
      $("#button-action-text").css("display", "block");
    } 
    //when we are saving the animal
    else 
    {
      // save the animal to the local storage
      localStorage.setItem("savedAnimal", JSON.stringify(animal));

      // if this button was clicked, hide button and show message to user
      $("#button-storage").css("display", "none");
      $("#button-action-text").text("Saved!");
      $("#button-action-text").css("display", "block");
    }
  });

});