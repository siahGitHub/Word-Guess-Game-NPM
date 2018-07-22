var WORD = require('./word');
var inquirer = require('inquirer');

//Storing guessing topics in 3 separate objects
myTopic1 = { "name": "Island Names", "itemsToGuess": ["barbados", "trinidad", "antigua", "cuba", "st lucia", "st martin"] };
myTopic2 = { "name": "US State Names", "itemsToGuess": ["new york", "virginia", "texas", "colorado"] };
myTopic3 = { "name": "Presidents", "itemsToGuess": ["barrack obama", "george bush", "john f kennedy", "donald trump", "richard nixon", "george washington"]}
//Storing topics objects in arrary
topicsArray = [myTopic1, myTopic2, myTopic3];

var randTopics = Math.floor(Math.random() * Math.floor(topicsArray.length));
var randTopic = Math.floor(Math.random() * Math.floor(topicsArray[randTopics].itemsToGuess.length));
console.log(topicsArray[randTopics].name);
console.log(topicsArray[randTopics].itemsToGuess[randTopic]);
var word = new WORD();
word.createWord(topicsArray[randTopics].itemsToGuess[randTopic]);

word.displayWord();