
//COMM644
//Brad Bridge Assignment 4

//Practice with JavaScript OOP Concepts (20 points)

//Within a new web page, create the following applications. Remember to comment out every application once //you’ve finished with that step. Be sure to place all of your JavaScript code within an external script file:

/* DONE
//1.Create a namespace called Animal. Then, define two sub classes from the namespace, one called Cat and //another called Dog. 

var ANIMAL = ANIMAL || {};
ANIMAL.Dog = function(type, color) {
    this._type = type;
    this._color = color;
    this._object = "dog";
    this.getInfo = function(){
        return color + ' ' + type + ' dog';
    } 
}
ANIMAL.Cat = function(type, color) {
    this._type = type;
    this._color = color;
    this._object = "cat";
    this.getInfo = function() {
        return color + ' ' + type + ' cat';
    }
}
*/

/* DONE
//2.Abandon the use of namespaces and start over. Now, create two classes, one called Cat and another called //Dog. The Cat class should be created using literal notation and the Dog class should be created using //constructor notation.

//Cat class using literal notation
var cat = {
    type: "siamese",
    color: "brown",
    getInfo: function () {
        return this.color + ' ' + this.type + ' cat';
    }
}
//Dog class using constructor notation
function Dog(){
    var type  = "bulldog";
    var color = "black";
    this.getInfo = function(){
        return color + ' ' + type + ' dog';
    }  
}
var dog = new Dog();
*/

/* DONE
//3.Create a new instance of the Cat class. Directly underneath, create a new instance of the Dog class.

//Cat class using literal object create notation...
var cat = {
    type: "siamese",
    color: "brown",
    getInfo: function () {
        return this.color + ' ' + this.type + ' cat';
    }
}
var dog = new Dog("bulldog", "brown");
*/

/* DONE
//4.Start over and now create a new class using constructor notation called Animal. When a new instance of
// the Animal class is created, the message “The Animal has been created” should be displayed in the console 
// window.
Animal = function(type, color) {
    document.write("A animal has been created");
    this._type = type;
    this._color = color;
    this._object = "ANIMAL";
    this.getInfo = function(){
        return color + ' ' + type + ' ANIMAL';
    } 
}
var animal = new Animal();
*/

/* DONE
//5.Now, change the above code so that it uses constructor notation instead. The class should accept a //parameter and that value is what should be displayed in the console window. The message should be passed as //an argument into the constructor at the moment that the Animal class is instantiated.
var Animal = function(color) {
    var _type = "animal";
    var _color = color;
    window.console.log("Object is a "+_color + ' ' + _type);
}
var animal = new Animal("black");
*/

/* DONE     
//6.Start over and now create a new class using constructor notation called Animal. Define five properties //within your class including type, breed, color, height, and length. These properties will be set in the //constructor so you’ll need to pass in parameters into the function’s constructor, set the properties, and //then pass in the actual arguments during the object’s instantiation. 
var Animal = function(type, breed, color, height, length) {
    var type = type;
    var breed = breed;
    var color = color;
    var height = height;
    var length = length;
    this.getInfo = function(){
        return (type + " is " + breed + " " + color + ' ' + height + " high " + length + " long.");
    } 
}
var dog = new Animal("dog","boxer","black","24 inches","48 inches");
*/

/* DONE 
//7.Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a //total of 5 properties displayed in a list within the console window.
var Animal = function(type, breed, color, height, length) {
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length; 
}
var dog = new Animal("dog","boxer","black","24 inches","48 inches");

for(var property in dog){
    document.write(property + ': ' + dog[property] +"<br>");
}
*/

/* DONE
//8.Now, create a public method called speak. Within the speak method you will use a conditional to check the //type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The //<color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.
var Animal = function(type, color) {
    this.type = type;
    this.color = color;
}
Animal.prototype.speak = function() {
    if (this.type == "dog"){
       return("The "+this.color+" dog is barking!");
    }else { 
       return("The "+this.color+" cat is meowing!");
    }
};
var dog = new Animal("dog","brown");
var cat = new Animal("cat","black");

window.console.log(dog.speak());
window.console.log(cat.speak());
*/ 

/* DONE
//9.Now, convert all of your properties to private properties. Then, create a private method called //checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, //return cat. Then, create a public method called speak that returns the value of the checkType() method. The //console window should now display “The <animal type> has made a noise!”
var Animal = function(type, breed, color, height, length) {
    var type = type;
    var breed = breed;
    var color = color;
    var height = height;
    var length = length;
    getInfo = function(){
        return (type + " is " + breed + " " + color + ' ' + height + " high " + length + " long.");
    } 
    this.checkType = function() {
       if (type == "dog"){
          return("Dog");
       }else { 
          return("Cat");
       }
    }
};
Animal.prototype.speak = function(type) {
       window.console.log("The " + type + " has made a noise");    
};

var dog = new Animal("dog","boxer","brown","12in","22in");
var cat = new Animal("cat","siamese","grey","8in","14in");    
    
var sType = dog.checkType();
dog.speak(sType);
var sType = cat.checkType();
cat.speak(sType);         
*/
    
/* DONE  
//10.Create your own String method called findWords() that inherits from the native String Object. This //method should find all instances of a specific word within a provided paragraph of text. It should then
//alert out to the user the number of times that word was found in the paragraph.
String.prototype.findWords = function(word, para){
    var nCount = 0;
    var sWord = word;
    var sPara = para;
 
    var re = new RegExp(sWord, 'gi');
    nCount = sPara.match(re).length;
    
    alert(nCount); //comes out to zero all the time.
}
var para = "This is my test paragraph, cat, dog, cat, monkey, cat, hotel, house";
para.findWords("cat", para);
*/

/* DONE
//The Recipe Card (15 points)	

//Create an object to hold information on your favorite recipe. It should have properties for title (a //string), servings (a number), and ingredients (an array of strings). Your object should have a publically //available method that when called, will log out the recipe within the console so that the recipe information /looks like this:

//Guacamole
//Serves: 4
//Ingredients: 
//- 3 Avocados
//- 1 Lime
//- 1 Teaspoon Salt
//- 1/2 Cup Onion
//- 3 Tablespoons Cilantro
//- 2 Diced Tomatoes
//- 1 Teaspoon Garlic
//- 1 Pinch Ground Pepper

var oRecipe = new Object;
oRecipe.sTitle = "Guacamole";
oRecipe.nServings = 4;
oRecipe.aIngredients = [
   "3 Avacados"               ,
   "1 Lime"                   , 
   "1 Teaspoon Salt"          , 
   "1/2 Cup Onion"            , 
   "3 Tablespoons of Cilantro",
   "2 Diced Tomatoes"         , 
   "1 Teaspoon Garlic"        , 
   "1 Pinch Ground Pepper"    
];
oRecipe.showRecipe = function(){
   window.console.log("Title: " + this.sTitle);
   window.console.log("Serves: "+ this.nServings);
   window.console.log("Ingredients:");
   for (var i = 0; i < this.aIngredients.length; i++){
      window.console.log("- " + this.aIngredients[i]);
   }
}
oRecipe.showRecipe();
*/
  
/* DONE
//The Reading List (15 points)

//Keep track of which books you read and which books you want to read! Create an array of objects, where each //object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a //boolean indicating if you read it yet). Iterate through the array of books. For each book, log the book //title and book author like so: "The Hobbit by J.R.R. Tolkien". Then, use a conditional to change the output //depending on whether you read it yet or not. If you read it, log a string like 'You already read "The //Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by //J.R.R. Tolkien.' Make sure your object contains at least 5 books.


var aBooks = new Array();

//var Book = function Book(title, author, read){
//    var title = title;
//    var author = author;
//    var alreadyRead = read;
//}
//aBooks[0] = new Book("1st Title", "1ST Author", true);

var oBook1 = new Object();
oBook1.title  = "1st Title";
oBook1.author = "1st author";
oBook1.alreadyRead = true;
aBooks[0]=oBook1;

var oBook2 = new Object();
oBook2.title  = "2nd Title";
oBook2.author = "2nd author";
oBook2.alreadyRead = true;
aBooks[1]=oBook2;

var oBook3 = new Object();
oBook3.title  = "3rd Title";
oBook3.author  = "3rd Author";
oBook3.alreadyRead = false;
aBooks[2]=oBook3;

var oBook4 = new Object();
oBook4.title  = "4th Title";
oBook4.author = "4th author";
oBook4.alreadyRead = true;
aBooks[3]=oBook4;

var oBook5 = new Object();
oBook5.title  = "5th Title";
oBook5.author = "5th author";
oBook5.alreadyRead = false;
aBooks[4]=oBook5;

for (var i = 0; i < aBooks.length; i++){
    if (aBooks[i].alreadyRead == true){
       document.write("I have read "+aBooks[i].title+" by "+aBooks[i].author+"<br>");
    }else{
       document.write("I need to read "+aBooks[i].title+" by "+aBooks[i].author+"<br>");
    }
}
*/

document.write("<br><br><br><br>End of file, no parse errors.");

//END
